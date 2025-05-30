export type Car = {
    id: number;
    name: string;
    brand: string;
    image: string;
    description: string;
    features: string[];
    type: string;
    price: number;
    available: boolean;
}

export type BookedCar = {
    id: number;
    startDate: string;
    endDate: string;
    car: Car;
}