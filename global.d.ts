import theme from './theme';

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    colors: typeof theme;
  };
  export function useTheme(): ExtendedTheme;
}
