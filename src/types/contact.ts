export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

export type InterestOption = 
  | 'Weight Loss'
  | 'Nutritional Protocol Details'
  | 'Menopause Support'
  | 'General Questions'
  | 'Basic Wellness Pack'
  | 'Premium Reset Pack';