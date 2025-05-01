export default interface tokenPayload {
    id:number;
    role: "donor" | "admin"| "hospital_staff"|"sub_admin";
}