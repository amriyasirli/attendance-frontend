import { useQuery } from '@tanstack/react-query';
import { fetchStudents } from 'services/students';

export const useGetStudents = () => {
  return useQuery({
    queryKey: ['students'],
    queryFn: fetchStudents,
    select(res) {
      // console.log('User Res: ', res);

      return res;
    },
  });
};
