import { View, Text } from 'react-native';
import React from 'react';
import { Avatar, Icon, IconButton, List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { homeStyles } from 'screens/HomeScreen/HomeScreen.styles';
import { Colors } from 'constants/colors';
import Account from './Account';
import Statistik from './Statistik';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabNavigatorStackParamList } from 'types/authStack';

const Header = () => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<TabNavigatorStackParamList>>();
  const { headerContainer } = homeStyles;
  return (
    <View className={headerContainer}>
      <List.Item
        title="Welcome back"
        description={`Hello, ${currentUser?.fullname?.split(' ')[0]}!`}
        titleStyle={{ color: Colors.white, fontSize: 12, fontFamily: 'Roboto-Regular' }}
        descriptionStyle={{ color: Colors.grey, fontSize: 18, fontFamily: 'Poppins-Bold' }}
        rippleColor={Colors.primary}
        onPress={(Pressed) => navigation.navigate('Profil')}
        left={(props) => (
          <Avatar.Image
            {...props}
            source={{
              uri: 'https://img.freepik.com/premium-photo/business-manager-3d-cartoon-avatar-portrait_839035-197911.jpg',
            }}
          />
        )}
        right={(props) => <List.Icon {...props} color={Colors.white} icon="bell-badge" />}
      />
      {/* <Account /> */}
      <Statistik />
    </View>
  );
};

export default Header;
