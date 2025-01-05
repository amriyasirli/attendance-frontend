import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createRecord } from 'services/students';
import { Toast } from 'toastify-react-native';

export const useCreateRecord = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['createRecord'],
    mutationFn: createRecord,
    onSuccess: (res) => {
      console.log(res.data);
      queryClient.invalidateQueries({ queryKey: ['attendances'] });
      // queryClient.invalidateQueries({ queryKey: ['students'] });
      Toast.success(res.data, 'top');
    },
    onError: (error: AxiosError<any>) => {
      // console.log(error.response?.data.messages);

      if (error.response?.data.messages.error) {
        Toast.error(error.response?.data.messages.error, 'top');
      } else {
        Toast.error(error.response?.data?.messages.rfid_card_id, 'top');
      }
    },
  });
};
