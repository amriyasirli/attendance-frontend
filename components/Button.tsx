import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import React, { ComponentProps } from 'react';
import { Button, ButtonProps } from 'react-native-paper';
import { Colors } from 'constants/colors';

interface Props extends ButtonProps {
  customStyle?: ViewStyle;
  customLabelStyle?: StyleProp<TextStyle>;
  title?: string;
}

const CustomButton = ({ title, customStyle, customLabelStyle, ...rest }: Props) => {
  return (
    <Button
      icon={'file-document-edit-outline'}
      style={[styles.buttonScan, customStyle]}
      labelStyle={[styles.labelReg, customLabelStyle]}
      contentStyle={styles.contentStyle}
      mode="elevated"
      {...rest}
    />
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonScan: {
    borderRadius: 8,
    backgroundColor: Colors.primary,
  },
  labelScan: { color: Colors.text },
  contentStyle: { paddingVertical: 6 },
  labelReg: { color: Colors.white },
});
