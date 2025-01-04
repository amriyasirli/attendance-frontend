import { StyleSheet, Text, View } from 'react-native';
import React, { ComponentProps } from 'react';
import { Appbar, AppbarActionProps, AppbarProps } from 'react-native-paper';
import { Colors } from 'constants/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { RootStackParamList } from 'types/authStack';

interface Props extends AppbarProps {
  left?: boolean;
}

const CustomAppBar = ({ left, children, ...rest }: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <Appbar.Header
      mode="center-aligned"
      theme={{
        colors: {
          surface: Colors.primary,
          onSurface: Colors.white,
        },
      }}
      {...rest}>
      {left && (
        <Appbar.Action
          color={Colors.white}
          icon="chevron-left"
          onPress={() => navigation.goBack()}
        />
      )}

      {children}
    </Appbar.Header>
  );
};

export default CustomAppBar;
