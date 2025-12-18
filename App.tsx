import {enableFreeze, enableScreens} from 'react-native-screens';

import {AppRouter} from './router';
import {AppProvider} from './providers';

enableScreens(true);
enableFreeze(true);

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}
