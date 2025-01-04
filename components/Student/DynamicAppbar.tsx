import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'constants/colors';

interface DynamicAppbarProps {
  title: string;
  icon?: string; // Ikon opsional
  onPressIcon?: () => void; // Fungsi opsional untuk ikon
}

const DynamicAppbar: React.FC<DynamicAppbarProps> = ({ title, icon, onPressIcon }) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header mode="center-aligned">
      <Appbar.Content color="#fff" title={title} />
      {icon && (
        <Appbar.Action
          color={Colors.white}
          icon={icon}
          onPress={onPressIcon || (() => navigation.goBack())}
        />
      )}
    </Appbar.Header>
  );
};

export default DynamicAppbar;
