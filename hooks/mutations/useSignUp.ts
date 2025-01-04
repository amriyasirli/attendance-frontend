// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { useMutation } from '@tanstack/react-query';
// import { AuthStackParamList } from 'navigation/auth';
// import { useDispatch } from 'react-redux';
// import { setUserState } from 'redux/slices/userSlice';
// import { SignInSchemeType } from 'schemes/authScheme';
// import { apiSignIn, apiSignUp } from 'services/apiServices';
// import { Toast } from 'toastify-react-native';

// export const useSignUp = () => {
//   const navigation: StackNavigationProp<AuthStackParamList> = useNavigation();
//   return useMutation({
//     mutationKey: ['signup'],
//     mutationFn: apiSignUp,
//     onSuccess: (res) => {
//       Toast.success(res.data.message, 'bottom');
//       setTimeout(() => {
//         navigation.goBack();
//       }, 2500);
//     },
//     onError: (error: any) => {
//       console.log(error);
//       Toast.error(error.response.data.message, 'bottom');
//     },
//   });
// };
