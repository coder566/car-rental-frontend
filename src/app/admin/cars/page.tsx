'use client';

import React, {useEffect, useState} from "react";
import api from "@/lib/api";
import {Button} from "@/components/ui/button";
import {Car} from "@/types/car";

export default function Home() {
    const [cars, setCars] = useState<Car[]>([]);
    useEffect(() => {
        api.get('/cars').then(response => {
            if (response.status === 200) {
                setCars(response.data)
            }
        }).catch(reason => {
            console.log(reason)
        });
    }, []);

    const deleteCar = (id: number) => {
        api.delete(`/cars/${id}`).then(() => {
            setCars(cars.filter(car => car.id !== id));
        });
    }
    return (
        <div>
            <main>
                <section className="bg-white py-12 px-6">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Все автомобили</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {cars.map((car) => (
                                <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <img
                                        src={car.image}
                                        alt={car.name}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                        style={{aspectRatio: "300/200", objectFit: "cover"}}
                                    />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                                        <p className="text-muted-foreground mb-4">{car.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-bold">{car.price} ₽/сутки</p>
                                                {car.available ? (
                                                    <p className="text-green-500">В наличии</p>
                                                ) : (
                                                    <p className="text-red-500">Нет в наличии</p>
                                                )}
                                            </div>
                                            <Button onClick={() => deleteCar(car.id)}>Удалить</Button>
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