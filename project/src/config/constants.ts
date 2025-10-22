/**
 * アプリケーション定数ファイル
 * アプリケーション全体で使用する定数を管理
 */

// アプリケーション情報
export const APP_INFO = {
  TITLE: '大南会',
  VERSION: '1.0.0',
  DESCRIPTION: '大南会公式ウェブサイト',
} as const;

// ルーティング定数
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  ALUMNI: '/alumni',
  ACTIVITIES: '/activities',
  GALLERY: '/gallery',
  CONTACT: '/contact',
  DONATIONS: '/donations',
  REGISTRATION: '/registration',
} as const;

// API設定
export const API_CONFIG = {
  TIMEOUT: 10000, // 10秒
  RETRY_ATTEMPTS: 3,
} as const;

// ローカルストレージキー
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'ounankai_user_preferences',
  THEME: 'ounankai_theme',
  LANGUAGE: 'ounankai_language',
} as const;

// フォーム設定
export const FORM_CONFIG = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_FILE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  MAX_TEXT_LENGTH: 1000,
} as const;

// レスポンシブブレークポイント
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1200,
} as const;

// アニメーション設定
export const ANIMATION = {
  DURATION: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500,
  },
  EASING: {
    EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
    EASE_IN: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;
