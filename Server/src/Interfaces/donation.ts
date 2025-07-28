export type DonationStatus = 'successful' | 'failed';

export interface donation {
  userId: number;
  unitsDonated: number;
  status: DonationStatus;
}
