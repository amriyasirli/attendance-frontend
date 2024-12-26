import api from 'config/api';
import { Student } from 'types/students';

// Fungsi untuk mendapatkan data siswa
export const fetchStudents = async (): Promise<Student[]> => {
  const response = await api.get<Student[]>('/students');
  return response.data;
};

// Fungsi untuk memperbarui RFID siswa
export const updateStudentRFID = async (id: number, rfidCardId: string): Promise<Student> => {
  const response = await api.put<Student>(`/students/${id}`, { rfid_card_id: rfidCardId });
  return response.data;
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
