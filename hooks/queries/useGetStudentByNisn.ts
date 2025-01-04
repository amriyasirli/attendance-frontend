import { useQuery } from '@tanstack/react-query';
import { getStudentByNisn } from 'services/students';

export const useGetStudentByNisn = (nisn: string) => {
  return useQuery({
    queryKey: ['studentByNisn', nisn],
    queryFn: () => getStudentByNisn(nisn),
    select(res) {
      // console.log('User Res: ', res);

      return res;
    },
  });
};
