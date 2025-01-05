import { useQuery } from '@tanstack/react-query';
import { fetchDataAttendance } from 'services/students';

export const useGetAttendances = () => {
  return useQuery({
    queryKey: ['attendances'],
    queryFn: fetchDataAttendance,
    select(res) {
      // console.log('User Res: ', res);

      return res;
    },
  });
};
