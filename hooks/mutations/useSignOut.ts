import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { RootStackParamList } from 'navigation';
import { useDispatch } from 'react-redux';
import { deleteUserState } from 'redux/slices/userSlice';
import { apiSignOut } from 'services/students';

export const useSignOut = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const dispatch = useDispatch();
  return useMutation({
    mutationKey: ['signout'],
    mutationFn: apiSignOut,
    onSuccess: (res) => {
      if (res.data?.status) {
        dispatch(deleteUserState());
      }
    },
    onError: (error: AxiosError<any>) => {
      console.log('Error Sign Out', error.response);
      // console.log('Ini Error', error.response.errors);
    },
  });
};
