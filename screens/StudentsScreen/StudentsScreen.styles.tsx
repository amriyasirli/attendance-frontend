import { Colors } from 'constants/colors';
import { StyleSheet } from 'react-native';
import { MD3Colors } from 'react-native-paper';

export const StudentScreenStyle = {
  scrollView: 'h-full w-full bg-white',
  tableHead: 'bg-slate-100',
  searchBarWrapper: 'bg-white px-6 py-4',
};

export const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  badgeSuccess: {
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  badgeDanger: {
    alignSelf: 'center',
    backgroundColor: MD3Colors.error50,
    borderRadius: 4,
  },
});
