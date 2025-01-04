import React, { useState } from 'react';
import { View } from 'react-native';
import { useGetStudentByNisn } from 'hooks/queries/useGetStudentByNisn';
import Loader from 'components/global/Loader';
import { Appbar, Divider, List, MD3Colors } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import Error from 'components/global/Error';
import { Colors } from 'constants/colors';
import { formatTanggalIndonesia } from 'helpers/convertDate';
import { RouteProp } from '@react-navigation/native';
import { ScanRfidBottomSheet } from 'components/CustomBottomSheet';
import { useRfidRegister } from 'hooks/mutations/useRfidRegister';
import { RfidCard } from 'types/students';
import { StudentProfileStyles, styles } from './StudentProfileScreen.styles';
import AvatarProfile from 'components/Student/AvatarProfile';
import CustomButton from 'components/Button';
import CustomAppBar from 'components/CustomAppBar';
import { RootStackParamList } from 'types/authStack';

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'StudentProfil'>;
}

const StudentProfileScreen = ({ route, navigation }: Props) => {
  const { nisn } = route.params;
  const { isPending, mutateAsync: updateRfidMutate } = useRfidRegister(nisn);
  const [visibleSheet, setVisibleSheet] = useState(-1);

  const { data, isLoading, isError } = useGetStudentByNisn(nisn);

  const handleChange = async (payload: RfidCard) => {
    await updateRfidMutate(payload);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error description="Failed to load profile. Please try again!" />;
  }

  return (
    <View className={StudentProfileStyles.container}>
      <CustomAppBar left>
        <Appbar.Content title="Profil" />
      </CustomAppBar>
      <View className={StudentProfileStyles.headerProfile}>
        <AvatarProfile name={data?.name} gender={data?.gender} nameofClass={data?.class_name} />
      </View>
      <View className={StudentProfileStyles.personalProfile}>
        <List.Item
          title="NIS"
          titleStyle={styles.title}
          description={data?.nis}
          descriptionStyle={styles.desc}
          left={(props) => <List.Icon {...props} icon="id-card" />}
        />
        <Divider horizontalInset style={styles.divider} />
        <List.Item
          title="NISN"
          titleStyle={styles.title}
          descriptionStyle={styles.desc}
          description={data?.nisn}
          left={(props) => <List.Icon {...props} icon="card-account-details-star-outline" />}
        />
        <Divider horizontalInset style={styles.divider} />
        <List.Item
          title="Gender"
          titleStyle={styles.title}
          description={data?.gender === 'L' ? 'Laki-Laki' : 'Perempuan'}
          descriptionStyle={styles.desc}
          left={(props) => (
            <List.Icon {...props} icon={data?.gender === 'L' ? 'gender-male' : 'gender-female'} />
          )}
        />
        <Divider horizontalInset style={styles.divider} />
        <List.Item
          title="Nomor RFID Card"
          titleStyle={styles.title}
          description={data?.rfid_card_id ?? 'Belum terdaftar'}
          descriptionStyle={styles.desc}
          left={(props) => <List.Icon {...props} icon="barcode-scan" />}
          right={(props) => (
            <List.Icon
              {...props}
              icon={data?.rfid_card_id ? 'check-decagram' : 'close-circle'}
              color={data?.rfid_card_id ? Colors.primary : MD3Colors.error50}
            />
          )}
        />
        <Divider horizontalInset style={styles.divider} />
        <List.Item
          title="Akun Terdaftar"
          titleStyle={styles.title}
          description={formatTanggalIndonesia(data?.created_at)}
          descriptionStyle={styles.desc}
          left={(props) => <List.Icon {...props} icon="calendar-check-outline" />}
        />
        <Divider horizontalInset style={styles.divider} />
      </View>
      <View className={StudentProfileStyles.buttonContainer}>
        <CustomButton
          icon="credit-card-scan-outline"
          disabled={isPending}
          customLabelStyle={{ color: Colors.text }}
          customStyle={{ backgroundColor: Colors.grey }}
          onPress={() => navigation.navigate('ScanNisn')}>
          Scan Ulang
        </CustomButton>
        <CustomButton
          icon="file-document-edit-outline"
          disabled={isPending}
          customStyle={{ backgroundColor: data?.rfid_card_id ? Colors.secondary : Colors.primary }}
          onPress={() => setVisibleSheet(0)}>
          {data?.rfid_card_id ? 'Ubah RFID Card' : 'Daftar RFID Card'}
        </CustomButton>
      </View>

      {/* Bottom Sheet */}
      <ScanRfidBottomSheet
        studentId={data?.id}
        label="Scan RFID Card"
        visible={visibleSheet}
        setVisible={setVisibleSheet}
        handleChange={handleChange}
      />
    </View>
  );
};

export default StudentProfileScreen;
