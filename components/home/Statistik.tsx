import { View } from 'react-native';
import React from 'react';
import { customText, Icon } from 'react-native-paper';
import { homeStyles } from 'screens/HomeScreen/HomeScreen.styles';
import { Colors } from 'constants/colors';
const Text = customText<'bold' | 'italic' | 'boldItalic'>();

type Props = {};

const Statistik = (props: Props) => {
  const { card, statisticSection } = homeStyles;
  return (
    <View
      className={statisticSection}
      style={{
        borderRadius: 8,
        backgroundColor: Colors.white,
        marginBottom: -24,
        paddingVertical: 28,
        zIndex: 1,
        elevation: 24,
      }}>
      <View className={card}>
        <Icon source="gesture-double-tap" color={Colors.text} size={24} />
        <View>
          <Text variant="titleMedium" style={{ color: Colors.text, fontFamily: 'Poppins-Bold' }}>
            378
          </Text>
          <Text variant="labelMedium" style={{ color: Colors.text }}>
            Present
          </Text>
        </View>
      </View>
      <View className={card}>
        <Icon source="alert-circle-outline" color={Colors.text} size={24} />
        <View>
          <Text variant="titleMedium" style={{ color: Colors.text, fontFamily: 'Poppins-Bold' }}>
            378
          </Text>
          <Text variant="labelMedium" style={{ color: Colors.text }}>
            Absent
          </Text>
        </View>
      </View>
      <View className={card}>
        <Icon source="account-multiple-outline" color={Colors.text} size={24} />
        <View>
          <Text variant="titleMedium" style={{ color: Colors.text, fontFamily: 'Poppins-Bold' }}>
            378
          </Text>
          <Text variant="labelMedium" style={{ color: Colors.text }}>
            Total
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Statistik;
