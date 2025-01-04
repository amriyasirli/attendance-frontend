import { Dimensions } from 'react-native';
import React from 'react';
import { Avatar, customText } from 'react-native-paper';
import { styles } from 'screens/StudentProfileScreen/StudentProfileScreen.styles';
const Text = customText<'bold' | 'italic' | 'boldItalic'>();

interface Props {
  name?: string;
  gender?: string;
  nameofClass?: string;
}

const { height } = Dimensions.get('window');
const BOY_IMAGE = 'assets/images/avatar/boy.png';
const GIRL_IMAGE = 'assets/images/avatar/girl.jpeg';

const AvatarProfile = ({ name, gender, nameofClass }: Props) => {
  return (
    <>
      <Avatar.Image
        size={height / 8}
        source={gender == 'L' ? require(BOY_IMAGE) : require(GIRL_IMAGE)}
      />
      <Text variant="titleMedium" style={styles.name} className="mt-4">
        {name}
      </Text>
      <Text variant="italic" style={styles.className}>
        Kelas {nameofClass}
      </Text>
    </>
  );
};

export default AvatarProfile;
