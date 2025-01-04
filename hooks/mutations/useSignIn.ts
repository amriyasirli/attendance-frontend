import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { RootStackParamList } from 'navigation';
import { useDispatch } from 'react-redux';
import { setUserState } from 'redux/slices/userSlice';
import { SignInSchemeType } from 'schemes/authScheme';
import { apiSignIn } from 'services/students';

export const useSignIn = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const dispatch = useDispatch();
  return useMutation({
    mutationKey: ['signin'],
    mutationFn: apiSignIn,
    onSuccess: (res) => {
      if (res.data.token) {
        dispatch(
          setUserState({
            currentUser: res.data.user,
            token: res.data.token,
          })
        );
      }
    },
    onError: (error: AxiosError<any>) => {
      console.log('Error Sign In', error.response?.data?.messages?.error);
      // console.log('Ini Error', error.response.errors);
    },
  });
};
