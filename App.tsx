import './global.css';

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import RootStack from './navigation';
import { store } from 'redux/store';
import QueryProvider from 'contexts/QueryProvider';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';
import Toast from 'components/global/Toast';
import { fonts, theme } from 'config/paperTheme';
import { configFonts } from 'config/customFonts';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts(configFonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) await SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Provider store={store}>
        <PaperProvider theme={{ ...theme, fonts }}>
          <QueryProvider>
            <RootStack />
            <Toast />
          </QueryProvider>
        </PaperProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}
