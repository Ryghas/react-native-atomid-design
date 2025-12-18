import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackNavigatorParams} from './router.type';
import {LoginScreen} from '../features/auth-login/screen';

const Stack = createNativeStackNavigator<RootStackNavigatorParams>();

export const AppRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
        gestureEnabled: false,
      }}>
      <Stack.Screen name="auth-login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
