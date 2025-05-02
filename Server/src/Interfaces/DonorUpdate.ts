export interface DonorUpdateRequest {
    full_name: string;
    contact_phone: string;
    weight: number;
    address: string;
    last_donation_date?: Date | null;
    blood_type: string;
    medical_conditions?: string | null;
    medications?: string | null;
  }