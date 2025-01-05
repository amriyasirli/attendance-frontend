import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tab-navigator';
import SignIn from 'screens/AuthScreen/signin';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import ScanNisnScreen from 'screens/ScanNisnScreen/ScanNisnScreen';
import StudentProfileScreen from 'screens/StudentProfileScreen/StudentProfileScreen';
import { RootStackParamList } from 'types/authStack';
import RfidScanScreen from 'screens/RfidScanScreen/RfidScanScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootStack() {
  const { currentUser, token } = useSelector((state: RootState) => state.user);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {currentUser && token ? (
          <>
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
            <Stack.Screen name="ScanNisn" component={ScanNisnScreen} />
            <Stack.Screen name="StudentProfil" component={StudentProfileScreen} />
            <Stack.Screen name="RfidScan" component={RfidScanScreen} />
          </>
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
