import { View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { customText, DataTable, IconButton, List } from 'react-native-paper';
import { Colors } from 'constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from 'components/home/Header';
import { homeStyles } from 'screens/HomeScreen/HomeScreen.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, TabNavigatorStackParamList } from 'types/authStack';
import usePublicRoutes from 'hooks/usePublicRoutes';
import { useGetAttendances } from 'hooks/queries/useGetAttendances';
import Loader from 'components/global/Loader';
import Error from 'components/global/Error';
import DataTableRecords from 'components/attendances/DataTableRecords';
const Text = customText<'bold' | 'italic' | 'boldItalic'>();

interface Props {
  navigation: StackNavigationProp<TabNavigatorStackParamList & RootStackParamList>;
}

const HomeScreen = ({ navigation }: Props) => {
  const { container, scrollView } = homeStyles;
  const { data = [], isLoading, isError } = useGetAttendances();
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([10, 25, 50]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);
  const { menuItems } = usePublicRoutes();

  if (isLoading) return <Loader />;

  if (isError) return <Error description={`Terjadi kesalahan: ${isError}`} />;

  return (
    <SafeAreaView className={container}>
      <StatusBar style="light" backgroundColor={Colors.primary} />

      {/* Header Component */}
      <Header />
      <ScrollView className={scrollView}>
        <List.Item
          title="Menu"
          style={{ marginTop: 48 }}
          titleStyle={{ fontFamily: 'Poppins-Bold' }}
        />

        <View
          style={{ flexWrap: 'wrap' }}
          className="justify-items-star flex flex-row flex-wrap px-4">
          {menuItems.map((item) => (
            <View
              key={item.id}
              className="mb-8 w-1/4  items-center" // Adjust width and spacing
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
        <List.Item
          title="Recent activity"
          style={{ marginTop: 12 }}
          titleStyle={{ fontFamily: 'Poppins-Bold' }}
          right={(props) => (
            <Text {...props} variant="labelLarge">
              View more {'>'}
            </Text>
          )}
        />
        <DataTable>
          {/* Datatable Check-in */}
          <DataTableRecords filteredItems={data} from={from} to={to} />
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
