export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_APP_ENV: 'staging' | 'production';
      EXPO_PUBLIC_APP_SCHEME: string;
      EXPO_PUBLIC_AMPLITUDE_API_KEY: string;
      EXPO_PUBLIC_DYNAMIC_LINK_BASE_URL: string;
      EXPO_PUBLIC_LINKING_URL: string;
      EXPO_PUBLIC_KYC_USE_REMOTE_CONFIG: string;
      EXPO_PUBLIC_CC_ENABLED: string;
      EXPO_PUBLIC_AXIOS_REQUEST_DEFAULT_TIMEOUT: string;
      EXPO_PUBLIC_NAME: string;
      EXPO_PUBLIC_ICON: string;
      EXPO_PUBLIC_ADAPTIVE_ICON_FOREGROUND: string;
      EXPO_PUBLIC_ADAPTIVE_ICON_BACKGROUND: string;
      EXPO_PUBLIC_SPLASH_IMAGE: string;
      EXPO_PUBLIC_IOS_GMS_FILE: string;
    }
  }
  interface Window {
    hcaptcha?: string;
  }
}
