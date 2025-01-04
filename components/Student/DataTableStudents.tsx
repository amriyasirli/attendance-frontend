import React from 'react';
import { Badge, DataTable } from 'react-native-paper';
import { Student } from 'types/students';
import { StudentScreenStyle, styles } from 'screens/StudentsScreen/StudentsScreen.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'types/authStack';

interface Props {
  filteredItems: Student[];
  from: number;
  to: number;
}

const DataTableStudents = ({ filteredItems, from, to }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <DataTable>
      <DataTable.Header className={StudentScreenStyle.tableHead}>
        <DataTable.Title>Nama</DataTable.Title>
        <DataTable.Title numeric>Kelas</DataTable.Title>
        <DataTable.Title numeric>Status</DataTable.Title>
      </DataTable.Header>

      {filteredItems.slice(from, to).map((item: Student) => (
        <DataTable.Row
          key={item.id}
          onPress={() => navigation.navigate('StudentProfil', { nisn: item.nisn })}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.class_name}</DataTable.Cell>
          <DataTable.Cell numeric>
            {item.rfid_card_id ? (
              <Badge style={styles.badgeSuccess}>Registered</Badge>
            ) : (
              <Badge style={styles.badgeDanger}>Not Registered</Badge>
            )}
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default DataTableStudents;
