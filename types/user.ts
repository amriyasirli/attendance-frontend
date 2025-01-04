export type Timestamp = {
  date: string; // Format: "YYYY-MM-DD HH:mm:ss.sssss"
  timezone: string; // Contoh: "Asia/Jakarta"
  timezone_type: number; // Contoh: 3
};

export type User = {
  active: boolean; // Status aktif
  created_at: Timestamp; // Data waktu pembuatan
  deleted_at: Timestamp | null; // Data waktu penghapusan (null jika belum dihapus)
  fullname: string | null; // Nama lengkap pengguna (null jika tidak ada)
  id: number; // ID pengguna
  last_active: Timestamp; // Data waktu terakhir aktif
  status: string | null; // Status pengguna (null jika tidak ada)
  status_message: string | null; // Pesan status pengguna (null jika tidak ada)
  updated_at: Timestamp; // Data waktu terakhir diperbarui
  username: string; // Nama pengguna
};
