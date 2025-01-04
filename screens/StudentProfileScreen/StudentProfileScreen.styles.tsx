import { Colors } from 'constants/colors';
import { StyleSheet } from 'react-native';

export const StudentProfileStyles = {
  container: 'h-full w-full bg-white',
  headerProfile: 'flex-2 items-center justify-center rounded-e-3xl bg-primary py-8',
  personalProfile: 'flex-auto',
  buttonContainer: 'flex-1 flex-row items-center justify-center gap-8',
};

export const styles = StyleSheet.create({
  name: { color: Colors.white },
  className: { color: Colors.grey },
  divider: { marginBottom: 8 },
  desc: {
    fontFamily: 'Poppins-BoldItalic',
  },
  title: { fontFamily: 'Poppins-Regular', fontSize: 14 },
  buttonScan: {
    borderRadius: 8,
    backgroundColor: Colors.grey,
  },
  labelScan: { color: Colors.text },
  contentStyle: { paddingVertical: 6 },
  labelReg: { color: Colors.white },
});
