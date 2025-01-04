import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { homeStyles } from 'screens/HomeScreen/HomeScreen.styles';
import { Avatar, IconButton } from 'react-native-paper';
import { Colors } from 'constants/colors';

type Props = {};

const Account = (props: Props) => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const { fullname, userSection, username, usernameWrapper } = homeStyles;
  return (
    <View className={userSection}>
      <Avatar.Image
        source={{
          uri: 'https://i.pinimg.com/736x/38/1d/6e/381d6edab2cb8693e04e9e5923c20ec6.jpg',
        }}
      />
      <View className={usernameWrapper}>
        <Text className={fullname} style={{ fontFamily: 'poppins' }}>
          {currentUser?.fullname}
        </Text>
        <Text className={username} style={{ fontFamily: 'poppins' }}>
          @{currentUser?.username}
        </Text>
      </View>
      <IconButton
        icon="chevron-right"
        iconColor={Colors.white}
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default Account;
