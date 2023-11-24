export type LocalParents = {
  firstName?: string;
  lastName?: string;
};
export type MainParents = {
  firstName: string;
  lastName: string;
};

export type SocialMedia = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
};

export type Student = {
  id: string;
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  gender: 'male' | 'female';
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNumber: string;
  addressPresent: string;
  localParents: LocalParents;
  mainParents: MainParents;
  socialMedia?: SocialMedia;
  occupation?: string; // Additional field
  nationality?: string; // Additional field
  hobbies?: string[]; // Additional field, an array of hobbies
};
