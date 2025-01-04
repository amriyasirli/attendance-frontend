import { View, ScrollView } from 'react-native';
import React from 'react';
import {
  Avatar,
  Button,
  customText,
  DataTable,
  Icon,
  IconButton,
  MD3Colors,
  TextInput,
} from 'react-native-paper';
import { Colors } from 'constants/colors';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import * as SecureStore from 'expo-secure-store';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { items } from './dummy';
import Header from 'components/home/Header';
import DataTableHome from 'components/home/DataTable';
import CustomButton from 'components/Button';
import { homeStyles } from 'screens/HomeScreen/HomeScreen.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { Toast } from 'toastify-react-native';
import { RootStackParamList, TabNavigatorStackParamList } from 'types/authStack';
const Text = customText<'bold' | 'italic' | 'boldItalic'>();

interface Props {
  navigation: StackNavigationProp<TabNavigatorStackParamList & RootStackParamList>;
}

const HomeScreen = ({ navigation }: Props) => {
  const { container, scrollView, recentText } = homeStyles;
  const menuItems = [
    {
      id: 1,
      icon: 'gesture-double-tap',
      label: 'Absen',
      onPress: () => {},
      color: Colors.primary,
    },
    {
      id: 2,
      icon: 'account-supervisor-outline',
      label: 'Data siswa',
      onPress: () => navigation.navigate('Siswa'),
      color: Colors.secondary,
    },
    {
      id: 3,
      icon: 'barcode-scan',
      label: 'Registrasi RFID',
      onPress: () => navigation.navigate('ScanNisn'),
      color: Colors.tertiary,
    },
    {
      id: 4,
      icon: 'view-grid-plus-outline',
      label: 'Lainnya',
      onPress: () => Toast.info('Coming soon... 😊', 'top'),
      color: Colors.border,
    },
  ];
  return (
    <SafeAreaView className={container}>
      <StatusBar style="light" backgroundColor={Colors.primary} />

      {/* Header Component */}
      <Header />
      <ScrollView className={scrollView}>
        <Text variant="bold" style={{ marginTop: 48 }} className={recentText}>
          Menu
        </Text>
        <View
          style={{ flexWrap: 'wrap', gap: 24 }}
          className="flex flex-row flex-wrap justify-items-start gap-10 p-4">
          {menuItems.map((item) => (
            <View
              key={item.id}
              className="mb-4 w-1/4 items-center" // Adjust width and spacing
            >
              <IconButton
                icon={item.icon}
                mode="contained"
                size={32}
                iconColor={item.color}
                style={{
                  backgroundColor: item.color + '20',
                }}
                onPress={item.onPress}
              />
              <Text variant="labelMedium" className="text-center text-sm">
                {item.label}
              </Text>
              {/* <Text className="text-center text-sm">{item.label}</Text> */}
            </View>
          ))}
        </View>
        <Text variant="bold" style={{ marginTop: 48 }} className={recentText}>
          Recent activity
        </Text>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Nama</DataTable.Title>
            <DataTable.Title numeric>Check-in</DataTable.Title>
            <DataTable.Title numeric>Status</DataTable.Title>
          </DataTable.Header>
          {/* Datatable Check-in */}
          <DataTableHome />
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
