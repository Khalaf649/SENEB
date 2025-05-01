export const Roles = {
    ADMIN: "admin",
    SUB_ADMIN: "sub_admin",
    HOSPITAL_STAFF: "hospital_staff",
    DONOR: "donor",
  } as const;
  
  export type Role = (typeof Roles)[keyof typeof Roles]; 
  // This becomes: "admin" | "sub_admin" | "hospital_staff" | "donor"
  