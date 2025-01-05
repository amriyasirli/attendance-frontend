import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Colors } from 'constants/colors';
import { useMemo } from 'react';
import { Toast } from 'toastify-react-native';
import { RootStackParamList, TabNavigatorStackParamList } from 'types/authStack';

interface FieldMenuItemsTypes {
  id: number;
  icon: string;
  label: string;
  onPress?: () => void;
  color: string;
}

const usePublicRoutes = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList & TabNavigatorStackParamList>>();

  const menuItems = useMemo<FieldMenuItemsTypes[]>(() => {
    return [
      {
        id: 1,
        icon: 'gesture-double-tap',
        label: 'Absen',
        onPress: () => navigation.navigate('RfidScan'),
        color: Colors.primary,
      },
      {
        id: 2,
        icon: 'account-supervisor-outline',
        label: 'Siswa',
        onPress: () => navigation.navigate('Siswa'),
        color: Colors.secondary,
      },
      {
        id: 3,
        icon: 'barcode-scan',
        label: 'Registrasi',
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
  }, []);

  return { menuItems };
};

export default usePublicRoutes;
