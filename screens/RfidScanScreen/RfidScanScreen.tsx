import { StyleSheet, Text, TextInput as RNTextInput, View, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CustomAppBar from 'components/CustomAppBar';
import { Appbar, DataTable, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'types/authStack';
import { Colors } from 'constants/colors';
import { StudentScreenStyle } from 'screens/StudentsScreen/StudentsScreen.styles';
import { useGetAttendances } from 'hooks/queries/useGetAttendances';
import Loader from 'components/global/Loader';
import Error from 'components/global/Error';
import { useCreateRecord } from 'hooks/mutations/useCreateRecord';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import DataTableRecords from 'components/attendances/DataTableRecords';
import { Toast } from 'toastify-react-native';

type Props = {};

interface Datatypes {
  rfid_card_id?: number | string;
  status?: 'present' | 'absent' | 'late' | 'sick';
  user_id?: number | string;
}

const RfidScanScreen = (props: Props) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { data = [], isLoading, isError } = useGetAttendances();
  const { mutateAsync, isPending } = useCreateRecord();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [value, setValue] = useState(''); // State untuk query pencarian
  const inputRef = useRef<RNTextInput>(null);

  const [page, setPage] = useState(0);
  const [numberOfItemsPerPageList] = useState([10, 25, 50]);
  const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  useEffect(() => {
    // if (value) {
    //   handleCardScan(value);
    // }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [value]);

  // Menjaga agar selalu fokus
  const keepFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Function to run after card ID is updated
  const handleCardScan = async (rfidCardId: string) => {
    if (rfidCardId) {
      let validRfidCardId = '';
      // Ensure rfidCardId does not exceed 10 digits
      if (rfidCardId.length > 10) {
        validRfidCardId = rfidCardId.slice(-10);
        return setValue(validRfidCardId);
      }

      if (validRfidCardId.length === 10) {
        const payload: Datatypes = {
          rfid_card_id: validRfidCardId,
          status: 'present',
          user_id: currentUser?.id,
        };

        await mutateAsync(payload);
      }
    }
  };

  const handleScan = (text: string) => {
    if (text.length > 10) {
      setValue('');
      return Toast.warn('Terlalu banyak request!');
    }

    const payload: Datatypes = {
      rfid_card_id: text,
      status: 'present',
      user_id: currentUser?.id,
    };

    mutateAsync(payload);
  };

  if (isLoading) return <Loader />;

  if (isError) return <Error description={`Terjadi kesalahan: ${isError}`} />;

  return (
    <>
      <CustomAppBar>
        <Appbar.Action
          disabled={isPending}
          icon="chevron-left"
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content title="Scan kartu" />
        <Appbar.Action icon="information-outline" color={Colors.white} onPress={() => {}} />
      </CustomAppBar>
      <View className={StudentScreenStyle.searchBarWrapper}>
        <Searchbar
          placeholder="Tap kartu RFID"
          ref={inputRef}
          autoFocus={true}
          showSoftInputOnFocus={false}
          onBlur={keepFocus}
          onChangeText={handleScan}
          icon="credit-card-scan-outline"
          value={value}
          style={styles.searchbar}
        />
      </View>
      <ScrollView className={StudentScreenStyle.scrollView}>
        <DataTableRecords filteredItems={data} from={from} to={to} />
        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(data.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${data.length}`}
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

export default RfidScanScreen;

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
});
