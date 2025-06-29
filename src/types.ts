export interface Lead {
  id: string;
  name: string;
  phone: string;
  location: string;
  status?: string;
  remark?: string;
  appointment?: string;
  salesperson?: string;
  source?: string;
  cohort?: string;
}

export interface OnboardedLeader {
  id: string;
  name: string;
  phone: string;
  location: string;
  upgradeDate: string;
  ordered?: boolean;
  salesperson?: string;
  source?: string;
  cohort?: string;
  remark?: string;
}

export interface Salesperson {
  id: string;
  name: string;
  phone: string;
  region?: string;
  joinedDate?: string;
}
