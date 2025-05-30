'use client';

import React, {useEffect, useState} from "react";
import api, {BASE_URL} from "@/lib/api";
import {Button} from "@/components/ui/button";
import {BookedCar} from "@/types/car";
import {User} from "@/types/user";

type UserBookedCar = {
    user: User;
    bookedCar: BookedCar;
}

export default function Home() {
    const [bookedCars, setBookedCars] = useState<UserBookedCar[]>([]);
    useEffect(() => {
        api.get('/users').then(response => {
            if (response.status === 200) {
                const newUserBookedCars: UserBookedCar[] = bookedCars;

                response.data.forEach((user: User) => {
                    user.bookedCars.forEach((car: BookedCar) => {
                        if (!newUserBookedCars.some(userBookedCar => userBookedCar.user.id === user.id && userBookedCar.bookedCar.id === car.id)) {
                            newUserBookedCars.push({ user, bookedCar: car });
                        }
                    });
                });
                setBookedCars([...newUserBookedCars]);
            }
        }).catch(reason => {
            console.log(reason)
        });
    }, []);

    const deleteBookedCar = (id: number) => {
        api.delete(`/cars/${id}`).then(() => {
            setBookedCars(bookedCars.filter(car => car.bookedCar.id !== id));
        });
    }

    return (
        <div>
            <main>
                <section className="bg-white py-12 px-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Забронированные автомобили</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {bookedCars.map(({user, bookedCar}) => (
                                <div key={bookedCar.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={BASE_URL + '/files/' + bookedCar.car.image}
                                        alt={bookedCar.car.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                        style={{aspectRatio: "300/200", objectFit: "cover"}}
                                        suppressHydrationWarning
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2">{bookedCar.car.name}</h2>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-bold">{user.firstName}</p>
                                                <p className="text-green-500">{bookedCar.car.price} ₽/сутки</p>
                                            </div>
                                            <Button onClick={() => deleteBookedCar(bookedCar.id)}>Удалить</Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}