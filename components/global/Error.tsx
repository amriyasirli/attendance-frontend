import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

type Props = {
  description: string;
};

const Error = (props: Props) => {
  const navigation = useNavigation();
  return (
    <View className="h-full w-full flex-1 items-center justify-center bg-white">
      <Text className="mb-10">{props.description}</Text>
      <Button mode="contained" icon="chevron-left" onPress={() => navigation.goBack()}>
        Kembali
      </Button>
    </View>
  );
};

export default Error;
