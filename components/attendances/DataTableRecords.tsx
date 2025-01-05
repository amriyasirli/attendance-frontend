import React from 'react';
import { Badge, DataTable } from 'react-native-paper';
import { Student } from 'types/students';
import { StudentScreenStyle, styles } from 'screens/StudentsScreen/StudentsScreen.styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from 'types/authStack';
import StatusBadges from 'components/StatusBadges';

interface Props {
  filteredItems: Student[];
  from: number;
  to: number;
}

interface RecordsType {
  id?: string | number;
  name?: string;
  check_in_time?: string;
  status?: 'present' | 'absent' | 'late' | 'sick';
}

const DataTableRecords = ({ filteredItems, from, to }: Props) => {
  return (
    <DataTable>
      <DataTable.Header className={StudentScreenStyle.tableHead}>
        <DataTable.Title>Nama</DataTable.Title>
        <DataTable.Title numeric>Check-in</DataTable.Title>
        <DataTable.Title numeric>Status</DataTable.Title>
      </DataTable.Header>

      {filteredItems.slice(from, to).map((item: RecordsType) => (
        <DataTable.Row key={item.id}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.check_in_time}</DataTable.Cell>
          <DataTable.Cell numeric>
            <StatusBadges status={item.status} />
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
};

export default DataTableRecords;
