'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require('mongoose');
const MainParentsSchema = new mongoose_1.Schema({
  firstName: { type: String },
  lastName: { type: String },
});
const SocialMediaSchema = new mongoose_1.Schema({
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
});
const LocalParentsSchema = new mongoose_1.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});
const StudentSchema = new mongoose_1.Schema({
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
exports.StudentModel = (0, mongoose_1.model)('Student', StudentSchema);
