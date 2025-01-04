import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Chip, ChipProps } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { FONTS } from 'constants/Fonts';
import { Colors } from 'constants/colors';

type Props = {
  iconName?: React.ComponentProps<typeof Feather>['name'];
};

const CustomChip = ({ iconName, ...rest }: ChipProps & Props) => {
  return (
    <Chip
      icon={(props) => <Feather {...props} name={iconName} />}
      theme={{
        colors: {
          primary: Colors.text,
          outline: Colors.lightText,
          //   onSecondaryContainer: 'red',
        },
      }}
      style={{
        backgroundColor: Colors.background,
        elevation: 12,
      }}
      textStyle={{
        fontFamily: FONTS.Medium,
      }}
      {...rest}
    />
  );
};

export default CustomChip;

const styles = StyleSheet.create({});
