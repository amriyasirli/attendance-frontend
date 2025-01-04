import api from 'config/api';
import { SignInSchemeType, SignUpSchemeType } from 'schemes/authScheme';
import { RfidCard, Student } from 'types/students';

// AUTHENTICATION
export const apiSignIn = async (payload: SignInSchemeType) => {
  // console.log('Payload: ', payload);
  // console.log('Payload: ', payload);
  return await api.post('/api/login', payload);
};

export const apiSignUp = async (payload: SignUpSchemeType) => {
  return await api.post('/api/register', payload);
};
export const apiSignOut = async () => {
  return await api.get('/api/logout');
};

// Fungsi untuk mendapatkan data siswa
export const fetchStudents = async (): Promise<Student[]> => {
  const response = await api.get<Student[]>('/students');
  return response.data;
};

export const getStudentByNisn = async (nisn: string): Promise<Student> => {
  const response = await api.get<Student>(`/students/${nisn}`);
  return response.data;
};

// Fungsi untuk memperbarui RFID siswa
export const updateStudentRFID = async (payload: RfidCard) => {
  const response = await api.patch(`/api/students/update-rfid/${payload.id}`, payload);
  return response;
};

// Fungsi untuk memperbarui data siswa
export const updateStudentData = async (id: number, data: Partial<Student>): Promise<Student> => {
  const response = await api.put<Student>(`/students/${id}`, data);
  return response.data;
};

// Fungsi untuk menghapus data siswa
export const deleteStudent = async (id: number): Promise<void> => {
  await api.delete(`/students/${id}`);
};

// Fungsi untuk menampilkan profil siswa berdasarkan ID
export const fetchStudentProfile = async (id: number): Promise<Student> => {
  const response = await api.get<Student>(`/students/${id}`);
  return response.data;
};
