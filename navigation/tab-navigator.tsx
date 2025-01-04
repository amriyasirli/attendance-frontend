import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Three from '../screens/three';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import StudentsScreen from 'screens/StudentsScreen/StudentsScreen';
import { Feather as Icon } from '@expo/vector-icons';
import { Colors } from 'constants/colors';
import MyCustomTab from './MyCustomTab';
import { BottomNavigation } from 'react-native-paper';
import { CommonActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          inactiveColor={Colors.border}
          theme={{
            colors: {
              elevation: {
                level2: Colors.white, // background
              },
              secondaryContainer: Colors.container, // background Icon
            },
          }}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (event.defaultPrevented) {
              preventDefault();
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              });
            }
          }}
          renderIcon={({ route, focused, color }) =>
            descriptors[route.key].options.tabBarIcon?.({
              focused,
              color,
              size: 24,
            }) || null
          }
          getLabelText={({ route }) => descriptors[route.key].route.name}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return <Icon name="home" size={size} color={focused ? color : Colors.disabled} />;
          },
        }}
      />
      <Tab.Screen
        name="Siswa"
        component={StudentsScreen}
        options={{
          tabBarLabel: 'Peserta Didik',
          tabBarIcon: ({ color, size, focused }) => {
            return <Icon name="list" size={size} color={focused ? color : Colors.disabled} />;
          },
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Three}
        options={{
          tabBarLabel: 'Pengaturan',
          tabBarIcon: ({ color, size, focused }) => {
            return <Icon name="user" size={size} color={focused ? color : Colors.disabled} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
