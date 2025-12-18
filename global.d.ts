import theme from './theme';
import {RootStackNavigatorParams} from './router/router.type';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackNavigatorParams {}
  }
}

declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    colors: typeof theme;
  };
  export function useTheme(): ExtendedTheme;
}

declare module 'react' {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
