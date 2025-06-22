export const Roles = {
    admin: "admin",
    subAdmin: "sub_admin",
    healthFacility: "hospital_staff",
    donor: "donor",
  } as const;
  
  export type Role = (typeof Roles)[keyof typeof Roles]; 

  