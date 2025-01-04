import { View } from 'react-native';
import React from 'react';
import { Colors } from 'constants/colors';
import { ActivityIndicator } from 'react-native-paper';

const Loader = () => {
  return (
    <View className="h-full w-full flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="small" color={Colors.primary} />
    </View>
  );
};

export default Loader;
