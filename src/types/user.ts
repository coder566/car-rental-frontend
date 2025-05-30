import {BookedCar} from "@/types/car";

export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

export type User = {
    id: number,
    firstName: string,
    email: string,
    bookedCars: BookedCar[]
    role: Role
}