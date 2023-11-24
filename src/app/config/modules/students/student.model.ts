import { Schema, model } from 'mongoose';
import {
  LocalParents,
  MainParents,
  SocialMedia,
  Student,
} from './student.interface';

const MainParentsSchema = new Schema<MainParents>({
  firstName: { type: String },
  lastName: { type: String },
});

const SocialMediaSchema = new Schema<SocialMedia>({
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
});

const LocalParentsSchema = new Schema<LocalParents>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const StudentSchema = new Schema<Student>({
  name: { type: String, required: true },
  id: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  gender: ['male', 'female'],
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  addressPresent: { type: String, required: true },
  occupation: { type: String, required: true },
  nationality: { type: String, required: true },
  hobbies: { type: [String], default: [] },
  socialMedia: SocialMediaSchema,
  mainParents: MainParentsSchema,
  localParents: LocalParentsSchema,
});

export const StudentModel = model<Student>('Student', StudentSchema);
