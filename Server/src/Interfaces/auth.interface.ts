import { Role } from "../constants/roles";
export interface LoginRequest {
    email: string;
    password: string;
    role: Role;
  }
  export interface RegisterDonorRequest {
    full_name: string;
    email: string;
    password: string;
    phone_number: string;
    national_id: string;
    birth_date: string; // or Date type
    gender: 'male' | 'female';
    address: string;
    blood_type: string;
    last_donation_date?: string;
    medications?: string;
    medical_conditions?: string;
    weight: number;
    donor_image: string;
  }