import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackNavigatorParams = {
  'auth-login': undefined;
};

// Type for navigation prop in Root stack.
export type NavigationPropType<T extends keyof RootStackNavigatorParams> =
  NativeStackNavigationProp<RootStackNavigatorParams, T>;

// Type for the route prop in Root stack.
export type RoutePropType<T extends keyof RootStackNavigatorParams> = RouteProp<
  RootStackNavigatorParams,
  T
>;
