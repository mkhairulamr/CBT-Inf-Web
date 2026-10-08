/**
 * js/app.js
 * Sistem Ujian Online SMP & Bank Soal Multi-Format
 * Core Engine: Storage, Audio Synth, Exam Timer, Anti-Cheating & Admin Logic
 */

(function () {
  'use strict';

  // Storage Keys
  const STORAGE_KEYS = {
    BANK_SOAL: 'SMP_EXAM_BANK_SOAL',
    REKAP_NILAI: 'SMP_EXAM_REKAP_NILAI',
    SESSION: 'SMP_EXAM_CURRENT_SESSION',
    SETTINGS: 'SMP_EXAM_SETTINGS',
    ADMIN_AUTH: 'SMP_EXAM_ADMIN_AUTH',
    CLEAN_FLAG: 'SMP_EXAM_INITIAL_CLEAN_V5'
  };

  // Default App Settings
  // Password admin rahasia: "Mautauaja1899!"
  const DEFAULT_SETTINGS = {
    token: '1899',
    adminPin: 'Mautauaja1899!',
    durationMinutes: 60,
    kkm: 75,
    maxViolations: 3,
    schoolName: 'SMP IT Bunayya Lhokseumawe',
    examTitle: 'Asesmen Komprehensif Berbasis Komputer (CBT)'
  };

  // Sinkronisasi data Bank Soal: Pastikan seluruh 360 butir soal resmi terpasang,
  // memuat Informatika (Kelas 7, 8, 9) dan Web Programming (Kelas 7, 8, 9).
  (function syncOfficialBankSoal() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.BANK_SOAL);
      let bank = data ? JSON.parse(data) : null;

      // Jika bank belum ada di localStorage, inisialisasi dengan OFFICIAL_BANK_SOAL (360 butir soal lengkap)
      if (!bank || !Array.isArray(bank) || bank.length === 0) {
        if (typeof OFFICIAL_BANK_SOAL !== 'undefined' && Array.isArray(OFFICIAL_BANK_SOAL)) {
          bank = JSON.parse(JSON.stringify(OFFICIAL_BANK_SOAL));
        } else {
          bank = [];
        }
      }

      // Pastikan soal resmi untuk Kelas 7, 8, 9 terpasang tanpa duplikasi
      if (typeof OFFICIAL_BANK_SOAL !== 'undefined' && Array.isArray(OFFICIAL_BANK_SOAL)) {
        const hasWeb9 = bank.some(q => String(q.grade) === '9' && q.subject === 'Web Programming');
        const hasWeb7 = bank.some(q => String(q.grade) === '7' && q.subject === 'Web Programming');
        const hasInf7 = bank.some(q => String(q.grade) === '7' && q.subject === 'Informatika');
        if (!hasWeb9 || !hasWeb7 || !hasInf7) {
          const existingIds = new Set(bank.map(q => q.id));
          OFFICIAL_BANK_SOAL.forEach(q => {
            if (!existingIds.has(q.id)) {
              bank.push(q);
              existingIds.add(q.id);
            }
          });
        }
      }

      localStorage.setItem(STORAGE_KEYS.BANK_SOAL, JSON.stringify(bank));
    } catch (e) {}
  })();

  // Web Audio API Synthesizer (Zero External Dependencies)
  const AudioEngine = {
    ctx: null,
    init() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    },
    playTone(freq, duration, type = 'sine') {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === 'suspended') {
          this.ctx.resume();
        }
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Audio policy or unsupported
      }
    },
    click() {
      this.playTone(600, 0.05, 'triangle');
    },
    warning() {
      this.playTone(440, 0.15, 'sawtooth');
      setTimeout(() => this.playTone(330, 0.25, 'sawtooth'), 150);
    },
    success() {
      this.playTone(523.25, 0.12, 'sine');
      setTimeout(() => this.playTone(659.25, 0.12, 'sine'), 120);
      setTimeout(() => this.playTone(783.99, 0.25, 'sine'), 240);
    }
  };

  // Toast Notification System
  const Toast = {
    show(message, type = 'primary', title = '') {
      let container = document.getElementById('toastContainer');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.className = 'toast-container position-fixed top-0 end-0 p-3';
        container.style.zIndex = '99999';
        document.body.appendChild(container);
      }

      const toastId = 'toast_' + Date.now();
      const icons = {
        primary: 'fa-info-circle',
        success: 'fa-check-circle',
        warning: 'fa-exclamation-triangle',
        danger: 'fa-times-circle'
      };
      const icon = icons[type] || 'fa-bell';

      const toastHtml = `
        <div id="${toastId}" class="toast align-items-center text-bg-${type} border-0 shadow-lg" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body d-flex align-items-center gap-2">
              <i class="fas ${icon} fa-lg"></i>
              <div>
                ${title ? `<strong>${title}</strong><br>` : ''}
                ${message}
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
        </div>
      `;

      container.insertAdjacentHTML('beforeend', toastHtml);
      const toastEl = document.getElementById(toastId);
      if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        const bsToast = new bootstrap.Toast(toastEl, { delay: 4000 });
        bsToast.show();
        toastEl.addEventListener('hidden.bs.toast', () => toastEl.remove());
      } else {
        setTimeout(() => toastEl.remove(), 4000);
      }
    }
  };

  // Storage Helpers
  const Storage = {
    getSettings() {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!saved) {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
        return { ...DEFAULT_SETTINGS };
      }
      try {
        const parsed = JSON.parse(saved);
        // Ensure adminPin defaults to secret password if not set or if old default was present
        if (!parsed.adminPin || parsed.adminPin === 'admin123') {
          parsed.adminPin = DEFAULT_SETTINGS.adminPin;
          this.saveSettings(parsed);
        }
        if (!parsed.schoolName || parsed.schoolName.includes('INDONESIA MAJU')) {
          parsed.schoolName = DEFAULT_SETTINGS.schoolName;
          this.saveSettings(parsed);
        }
        return { ...DEFAULT_SETTINGS, ...parsed };
      } catch (e) {
        return { ...DEFAULT_SETTINGS };
      }
    },
    saveSettings(settings) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    },

    /**
     * Bank Soal Resmi Kurikulum Informatika SMP (180 butir) & Web Programming Kelas 8 (60 butir).
     * Secara ketat tidak memuat soal Web Programming untuk Kelas 7 & 9.
     */
    getBankSoal() {
      const data = localStorage.getItem(STORAGE_KEYS.BANK_SOAL);
      let bank = [];
      if (data) {
        try {
          const parsed = JSON.parse(data);
          if (Array.isArray(parsed)) bank = parsed;
        } catch (e) {}
      }

      // Jika kosong dan ada OFFICIAL_BANK_SOAL, inisialisasi dari koleksi resmi (360 butir)
      if (bank.length === 0 && typeof OFFICIAL_BANK_SOAL !== 'undefined' && Array.isArray(OFFICIAL_BANK_SOAL)) {
        bank = JSON.parse(JSON.stringify(OFFICIAL_BANK_SOAL));
        try {
          localStorage.setItem(STORAGE_KEYS.BANK_SOAL, JSON.stringify(bank));
        } catch (e) {}
      }

      return bank;
    },
    resetToOfficialBank() {
      if (typeof OFFICIAL_BANK_SOAL !== 'undefined' && Array.isArray(OFFICIAL_BANK_SOAL)) {
        const official = JSON.parse(JSON.stringify(OFFICIAL_BANK_SOAL));
        this.saveBankSoal(official);
        return official;
      }
      return [];
    },
    saveBankSoal(bank) {
      localStorage.setItem(STORAGE_KEYS.BANK_SOAL, JSON.stringify(bank));
    },
    clearBankSoal() {
      localStorage.removeItem(STORAGE_KEYS.BANK_SOAL);
    },

    getRekapNilai() {
      const data = localStorage.getItem(STORAGE_KEYS.REKAP_NILAI);
      if (!data) return [];
      try {
        const list = JSON.parse(data);
        if (!Array.isArray(list)) return [];
        let modified = false;
        list.forEach((item, index) => {
          if (!item.id) {
            item.id = 'REC_' + (Date.now() - (index * 1000)) + '_' + index;
            modified = true;
          }
        });
        if (modified) {
          localStorage.setItem(STORAGE_KEYS.REKAP_NILAI, JSON.stringify(list));
        }
        return list;
      } catch (e) {
        return [];
      }
    },
    addRekapNilai(record) {
      const rekap = this.getRekapNilai();
      if (!record.id) {
        record.id = 'REC_' + Date.now();
      }
      rekap.unshift(record); // newest first
      localStorage.setItem(STORAGE_KEYS.REKAP_NILAI, JSON.stringify(rekap));
    },
    deleteRekapItem(id) {
      if (id === undefined || id === null) return false;
      let rekap = this.getRekapNilai();
      const initialLength = rekap.length;
      rekap = rekap.filter((r, idx) => {
        if (r.id && String(r.id) === String(id)) return false;
        if (String(idx) === String(id)) return false;
        return true;
      });
      localStorage.setItem(STORAGE_KEYS.REKAP_NILAI, JSON.stringify(rekap));
      return rekap.length < initialLength;
    },
    clearRekapNilai() {
      localStorage.removeItem(STORAGE_KEYS.REKAP_NILAI);
    },

    getSession() {
      const s = localStorage.getItem(STORAGE_KEYS.SESSION);
      if (!s) return null;
      try {
        return JSON.parse(s);
      } catch (e) {
        return null;
      }
    },
    saveSession(session) {
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(session));
    },
    clearSession() {
      localStorage.removeItem(STORAGE_KEYS.SESSION);
    }
  };

  // Seed Data: Master Official Bank Soal
  const SeedData = {
    getDefaultBankSoal() {
      return (typeof OFFICIAL_BANK_SOAL !== 'undefined') ? [...OFFICIAL_BANK_SOAL] : [];
    }
  };

  // Expose global modules
  window.ExamApp = {
    STORAGE_KEYS,
    DEFAULT_SETTINGS,
    AudioEngine,
    Toast,
    Storage,
    SeedData
  };

})();
