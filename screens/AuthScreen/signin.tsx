import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AuthStyles from './style';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSignIn } from 'hooks/mutations/useSignIn';
import { Controller, useForm } from 'react-hook-form';
import { signInScheme, SignInSchemeType } from 'schemes/authScheme';
import { zodResolver } from '@hookform/resolvers/zod';
import FieldSignIn from 'constants/fields/fieldSignIn';
import PasswordInput from 'components/PasswordInput';
import { RootStackParamList } from 'types/authStack';

const Signin = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList> }) => {
  const { isPending, mutateAsync: sigInMutate } = useSignIn();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemeType>({
    resolver: zodResolver(signInScheme),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInSchemeType) => {
    // console.log('DATA: ', data);

    await sigInMutate(data);
  };
  return (
    <View className={AuthStyles.container}>
      <StatusBar style="light" />

      {/* Content */}
      <View className="flex h-full w-full justify-center">
        {/* Logo */}
        <View className={AuthStyles.logoContainer}>
          <Image
            className={AuthStyles.logo}
            source={require('assets/images/logo-2.png')}
            resizeMode="contain"
          />
        </View>
        {/* Title */}
        <View className={AuthStyles.titleContainer}>
          <Text className={AuthStyles.title} style={{ fontFamily: 'poppins' }}>
            Login
          </Text>
        </View>

        {/* Form */}
        <View className={AuthStyles.formContainer}>
          {FieldSignIn.map(({ label, name, secureText, icon, autoCapitalize, inputMode }) => (
            <View key={name} className={AuthStyles.inputContainer}>
              <Controller
                control={control}
                name={name}
                rules={{
                  required: true,
                }}
                render={({ field: { onBlur, onChange, value } }) => (
                  <PasswordInput
                    isIcon={icon}
                    show={secureText}
                    inputMode={inputMode}
                    autoCapitalize={autoCapitalize}
                    placeholder={label}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                  />
                )}
              />
              {errors[name] && <Text>{errors[name].message}</Text>}
            </View>
          ))}
          {/* Button Login */}
          <TouchableOpacity
            className={AuthStyles.button}
            onPress={handleSubmit(onSubmit)}
            disabled={isPending}>
            <Text className={AuthStyles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Sign Up Link */}
          <View className={AuthStyles.signUpContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity disabled={isPending}>
              <Text className={AuthStyles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signin;
