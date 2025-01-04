import moment, { MomentInput } from 'moment';
import 'moment/locale/id';

export const formatTanggalIndonesia = (tanggal: MomentInput) => {
  moment.locale('id'); // Atur locale ke bahasa Indonesia
  return moment(tanggal).format('dddd, D MMMM YYYY [pukul] HH:mm');
};
