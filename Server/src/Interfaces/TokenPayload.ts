import { Role } from "../constants/roles";
export default interface tokenPayload {
    id:number;
    role: Role;
    centerId ?: number; // Optional, only for sub-admins
}