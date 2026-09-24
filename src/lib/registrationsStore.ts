export type RegistrationCategory =
  | "IPE clearance"
  | "Change Of Name"
  | "Change Of Phone"
  | "Change of Address"
  | "Change Of D.O.B";

export interface ApplicantInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
}

export interface RegistrationRecord {
  id: string;
  date: string;
  type: RegistrationCategory;
  status: "Pending" | "Processing" | "Approved" | "Action Required" | "Rejected";
  reply: string;
  applicant: ApplicantInfo;
  amount: number;
  details: Record<string, string>;
  createdAt: number;
}

export interface TransactionRecord {
  id: string;
  date: string;
  amount: string;
  regId: string;
  status: "Completed" | "Successful" | "Pending" | "Failed";
  type: string;
}

export interface UserSession {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  role: "user" | "admin";
}

const STORAGE_KEYS = {
  REGISTRATIONS: "vrf_registrations_v3_ng",
  TRANSACTIONS: "vrf_transactions_v3_ng",
  SESSION: "vrf_user_session_v3_ng",
};

export const INITIAL_REGISTRATIONS: RegistrationRecord[] = [
  {
    id: "VRF-20481",
    date: "24 Sep 2026",
    type: "IPE clearance",
    status: "Processing",
    reply: "Biometrics verified. Institutional verification in progress.",
    applicant: {
      firstName: "Elisha",
      lastName: "Adamu",
      email: "elishadamu97@gmail.com",
      phone: "+234 803 123 4567",
      whatsapp: "+234 803 123 4567",
    },
    amount: 30000,
    details: {
      clearancePurpose: "Employment & Institutional Clearance",
      nin: "7492 0183 921",
      issuingAuthority: "Federal Clearance Registry",
      state: "Abuja FCT",
    },
    createdAt: 1790246400000,
  },
  {
    id: "VRF-20412",
    date: "21 Sep 2026",
    type: "Change Of Name",
    status: "Approved",
    reply: "Gazetted Deed Poll verified. Legal name amendment completed.",
    applicant: {
      firstName: "Elisha",
      lastName: "Adamu",
      email: "elishadamu97@gmail.com",
      phone: "+234 803 123 4567",
      whatsapp: "+234 803 123 4567",
    },
    amount: 15000,
    details: {
      previousName: "Elisha Bello",
      requestedName: "Elisha Adamu",
      reason: "Official Legal Name Regularization",
      affidavitNumber: "FCT/HC/AFF/2026/842",
    },
    createdAt: 1790073600000,
  },
  {
    id: "VRF-20398",
    date: "17 Sep 2026",
    type: "Change Of Phone",
    status: "Approved",
    reply: "Biometric phone link authenticated via NIMC database.",
    applicant: {
      firstName: "Elisha",
      lastName: "Adamu",
      email: "elishadamu97@gmail.com",
      phone: "+234 803 123 4567",
      whatsapp: "+234 803 123 4567",
    },
    amount: 5000,
    details: {
      oldPhone: "+234 802 987 6543",
      newPhone: "+234 803 123 4567",
      carrier: "MTN Nigeria / NIMC Portal",
      nin: "7492 0183 921",
    },
    createdAt: 1789728000000,
  },
  {
    id: "VRF-20340",
    date: "14 Sep 2026",
    type: "Change of Address",
    status: "Action Required",
    reply: "Please upload current utility receipt (PHCN / Water Board) for new address.",
    applicant: {
      firstName: "Chinedu",
      lastName: "Okonkwo",
      email: "c.okonkwo@gmail.com",
      phone: "+234 805 776 2100",
      whatsapp: "+234 805 776 2100",
    },
    amount: 7500,
    details: {
      previousAddress: "14 Adeola Odeku St, Victoria Island, Lagos",
      newAddress: "Plot 722 Cadastral Zone, CBD, Abuja",
      residencyType: "Residential Residence",
    },
    createdAt: 1789468800000,
  },
  {
    id: "VRF-20288",
    date: "09 Sep 2026",
    type: "Change Of D.O.B",
    status: "Approved",
    reply: "National Population Commission certificate authenticated. Record updated.",
    applicant: {
      firstName: "Amina",
      lastName: "Bello",
      email: "amina.bello@yahoo.com",
      phone: "+234 809 332 1199",
    },
    amount: 20000,
    details: {
      currentDOB: "14 May 1989",
      correctDOB: "14 May 1992",
      birthCertificateNo: "NPC/ABJ/2026/0921",
      justification: "Clerical error on initial registration",
    },
    createdAt: 1789036800000,
  },
];

export const INITIAL_TRANSACTIONS: TransactionRecord[] = [
  {
    id: "TXN-94820",
    date: "24 Sep 2026",
    amount: "₦30,000",
    regId: "VRF-20481",
    status: "Completed",
    type: "IPE Clearance Service",
  },
  {
    id: "TXN-93112",
    date: "21 Sep 2026",
    amount: "₦15,000",
    regId: "VRF-20412",
    status: "Successful",
    type: "Change Of Name Amendment",
  },
  {
    id: "TXN-91845",
    date: "17 Sep 2026",
    amount: "₦5,000",
    regId: "VRF-20398",
    status: "Successful",
    type: "Change Of Phone Re-binding",
  },
  {
    id: "TXN-90214",
    date: "14 Sep 2026",
    amount: "₦7,500",
    regId: "VRF-20340",
    status: "Completed",
    type: "Change of Address Processing",
  },
  {
    id: "TXN-89401",
    date: "09 Sep 2026",
    amount: "₦20,000",
    regId: "VRF-20288",
    status: "Successful",
    type: "Change Of D.O.B Verification",
  },
];

export const DEFAULT_USER: UserSession = {
  firstName: "Elisha",
  lastName: "Adamu",
  email: "elishadamu97@gmail.com",
  phone: "+234 803 123 4567",
  whatsapp: "+234 803 123 4567",
  role: "user",
};

export const AVAILABLE_PRODUCTS: {
  category: RegistrationCategory;
  name: string;
  fee: number;
  eta: string;
  description: string;
  badge: string;
}[] = [
  {
    category: "IPE clearance",
    name: "IPE Clearance",
    fee: 30000,
    eta: "2 - 4 Hours",
    description: "Official institutional police and regulatory clearance with verified digital seal.",
    badge: "Most Requested",
  },
  {
    category: "Change Of Name",
    name: "Change Of Name",
    fee: 15000,
    eta: "24 Hours",
    description: "Legal amendment of surname, given names, or marital name re-registration.",
    badge: "Official Deed Poll",
  },
  {
    category: "Change Of Phone",
    name: "Change Of Phone",
    fee: 5000,
    eta: "Instant - 1 Hour",
    description: "Biometric and 2FA phone number re-linking across identity databases.",
    badge: "Fast Track",
  },
  {
    category: "Change of Address",
    name: "Change of Address",
    fee: 7500,
    eta: "12 - 24 Hours",
    description: "Residential address change verification with digital proof of residency.",
    badge: "National Sync",
  },
  {
    category: "Change Of D.O.B",
    name: "Change Of D.O.B",
    fee: 20000,
    eta: "24 - 48 Hours",
    description: "Date of Birth vital statistics correction and certificate reconciliation.",
    badge: "Vital Records",
  },
];

// Browser-safe local storage retrieval
export function getStoredRegistrations(): RegistrationRecord[] {
  if (typeof window === "undefined") return INITIAL_REGISTRATIONS;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.REGISTRATIONS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(INITIAL_REGISTRATIONS));
      return INITIAL_REGISTRATIONS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to load registrations:", err);
    return INITIAL_REGISTRATIONS;
  }
}

export function saveNewRegistration(
  category: RegistrationCategory,
  applicant: ApplicantInfo,
  details: Record<string, string>,
  amount: number
): RegistrationRecord {
  const all = getStoredRegistrations();
  const nextNumber = 20490 + all.length;
  const newId = `VRF-${nextNumber}`;
  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const newReg: RegistrationRecord = {
    id: newId,
    date: dateStr,
    type: category,
    status: "Pending",
    reply: "Registration received into official processing queue. An officer is validating your submission.",
    applicant,
    amount,
    details,
    createdAt: now.getTime(),
  };

  const updated = [newReg, ...all];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(updated));

    // Also append matching transaction
    const txnList = getStoredTransactions();
    const newTxn: TransactionRecord = {
      id: `TXN-${Math.floor(10000 + Math.random() * 90000)}`,
      date: dateStr,
      amount: `₦${amount.toLocaleString()}`,
      regId: newId,
      status: "Completed",
      type: `${category} Service`,
    };
    localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify([newTxn, ...txnList]));
  }

  return newReg;
}

export function updateRegistrationByAdmin(
  id: string,
  status: RegistrationRecord["status"],
  reply: string
): boolean {
  if (typeof window === "undefined") return false;
  try {
    const all = getStoredRegistrations();
    const index = all.findIndex((r) => r.id === id);
    if (index === -1) return false;

    all[index].status = status;
    all[index].reply = reply;

    localStorage.setItem(STORAGE_KEYS.REGISTRATIONS, JSON.stringify(all));
    return true;
  } catch (err) {
    console.error("Failed to update registration:", err);
    return false;
  }
}

export function getStoredTransactions(): TransactionRecord[] {
  if (typeof window === "undefined") return INITIAL_TRANSACTIONS;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(INITIAL_TRANSACTIONS));
      return INITIAL_TRANSACTIONS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error("Failed to load transactions:", err);
    return INITIAL_TRANSACTIONS;
  }
}

export function getCurrentUserSession(): UserSession {
  if (typeof window === "undefined") return DEFAULT_USER;
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SESSION);
    if (!data) {
      localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(DEFAULT_USER));
      return DEFAULT_USER;
    }
    return JSON.parse(data);
  } catch (err) {
    return DEFAULT_USER;
  }
}

export function setCurrentUserSession(user: UserSession): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.SESSION, JSON.stringify(user));
  }
}

export function logoutUserSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(STORAGE_KEYS.SESSION);
  }
}
