import './global.css';

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import RootStack from './navigation';
import { store } from 'redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
}
