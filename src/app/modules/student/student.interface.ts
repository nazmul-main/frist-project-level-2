import { Schema, model, connect } from 'mongoose';
/* ========= TypeScript Types ========= */
export type Gardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type UserName = {
    fristname: string;
    middleName: string;
    lastName: string;
};

export type LocalGardian = {
    name: string;
    occupation: string;
    contact: string;
    address: string;
};

export type Student = {
    id: number;
    name: UserName;
    gender: 'male' | 'female';
    dateOfBrith: string;
    email: string;
    avatatar?: string;
    contactNo: string;
    emergencyContactNo: string;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAdress: string;
    gardian: Gardian;
    localGardian: LocalGardian;
    profileImage?: string;
    isActive: 'active' | 'blocked';
};