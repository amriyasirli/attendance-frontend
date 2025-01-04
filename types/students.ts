// Definisikan tipe data
export interface Student {
  id?: number;
  nis?: string;
  nisn: string;
  name?: string;
  gender?: string;
  class_id?: number;
  class_name?: string;
  rfid_card_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface RfidCard {
  id?: number;
  rfid_card_id?: string;
}
