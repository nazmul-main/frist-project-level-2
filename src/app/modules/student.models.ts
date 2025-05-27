
import { Schema, model } from 'mongoose';
/* ========= Mongoose Schemas ========= */

// UserName Schema
const userNameSchema = new Schema(
    {
        fristname: { type: String, required: true },
        middleName: { type: String, required: true },
        lastName: { type: String, required: true },
    },
    //   { _id: false }
);

// Gardian Schema
const gardianSchema = new Schema(
    {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContactNo: { type: String, required: true },
    },
    { _id: false }
);

// Local Gardian Schema
const localGardianSchema = new Schema(
    {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contact: { type: String, required: true },
        address: { type: String, required: true },
    },
    { _id: false }
);

// Student Schema
const studentSchema = new Schema(
    {
        id: { type: String },
        name: { type: userNameSchema, required: true },
        gender: ['male', 'Fmale'],
        dateOfBrith: { type: String, required: true },
        email: { type: String, required: true },
        avatatar: { type: String },
        contactNo: { type: String, required: true },
        emergencyContactNo: { type: String, required: true },
        bloodGroup:
            ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        presentAddress: { type: String, required: true },
        permanentAdress: { type: String, required: true },
        gardian: { type: gardianSchema, required: true },
        localGardian: { type: localGardianSchema, required: true },
        profileImage: { type: String },
        isActive: ['active', 'blocked'],
    },
    {
        timestamps: true,
    }
);

/* ========= Mongoose Model ========= */
export const StudentModel = model('Student', studentSchema);
