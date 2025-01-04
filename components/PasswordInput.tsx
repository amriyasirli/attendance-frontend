import React, { useState } from 'react';
import { TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Gunakan library ikon

interface props extends TextInputProps {
  isIcon?: boolean;
  show?: boolean;
}

const PasswordInput = (props: props) => {
  const [isPasswordVisible, setPasswordVisible] = useState(!props.show);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="border-disabled mx-4 my-2 flex flex-row items-center rounded-2xl border bg-white px-4 py-2">
      {/* Input Password */}
      <TextInput
        className="text-bold flex-1 text-xl text-gray-700"
        secureTextEntry={!isPasswordVisible}
        {...props} // Gunakan props yang diberikan
      />

      {props.isIcon && (
        <>
          {/* Garis Vertikal */}
          <View className="mx-3 h-5 w-[1px] bg-gray-300" />

          {/* Icon Mata */}
          <TouchableOpacity onPress={togglePasswordVisibility} className="pl-1">
            <FontAwesome name={isPasswordVisible ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default PasswordInput;
