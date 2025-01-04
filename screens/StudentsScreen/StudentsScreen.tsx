import { View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Appbar, DataTable, Searchbar } from 'react-native-paper';
import { useGetStudents } from 'hooks/queries/useGetStudents';
import { Student } from 'types/students';
import { StackNavigationProp } from '@react-navigation/stack';
import Loader from 'components/global/Loader';
import Error from 'components/global/Error';
import DynamicAppbar from 'components/Student/DynamicAppbar';
import { StudentScreenStyle, styles } from './StudentsScreen.styles';
import DataTableStudents from 'components/Student/DataTableStudents';
import CustomAppBar from 'components/CustomAppBar';
import { Colors } from 'constants/colors';
import { RootStackParamList } from 'types/authStack';

type Props = {
  navigation: StackNavigationProp<RootStackParamList>;
};

const StudentsScreen = ({ navigation }: Props) => {
  const { data: students = [], isLoading, isError } = useGetStudents();

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([10, 25, 50]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const [searchQuery, setSearchQuery] = useState(''); // State untuk query pencarian
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, students.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage, students]);

  const filteredItems = students.filter((item: Student) =>
    (['name', 'nisn', 'class_name'] as (keyof Student)[]).some((key) => {
      const value = item[key];
      return (
        value && // Pastikan nilainya tidak undefined atau null
        value.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
  );

  if (isLoading) return <Loader />;

  if (isError) return <Error description={`Terjadi kesalahan: ${isError}`} />;

  return (
    <>
      <CustomAppBar>
        <Appbar.Content title="Peserta Didik" />
        <Appbar.Action
          icon="credit-card-scan-outline"
          color={Colors.white}
          onPress={() => navigation.navigate('ScanNisn')}
        />
      </CustomAppBar>
      <View className={StudentScreenStyle.searchBarWrapper}>
        <Searchbar
          placeholder="Search..."
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbar}
        />
      </View>

      <ScrollView className={StudentScreenStyle.scrollView}>
        <DataTableStudents filteredItems={filteredItems} from={from} to={to} />
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(students.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${students.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Item per halaman'}
        />
      </ScrollView>
    </>
  );
};

export default StudentsScreen;
