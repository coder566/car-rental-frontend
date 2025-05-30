'use client';

import React, {useEffect, useState} from "react";
import {Role, User} from "@/types/user";
import api from "@/lib/api";
import {Button} from "@/components/ui/button";
import {useAuth} from "@/context/AuthContext";
import {CurrentSession} from "@/lib/get-current-session";

export default function Home() {
    const {session} = useAuth();
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        api.get('/users').then(response => {
            if (response.status === 200) {
                setUsers(response.data);
            }
        })
    }, []);

    const deleteUser = (id: number) => {
        api.delete(`/users/${id}`).then(() => {
            setUsers(users.filter(user => user.id !== id));
        });
    }
    return (
        <div>
            <main>
                <section className="bg-muted py-12 px-6">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold mb-6">Все пользователи</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {users.map(user => {
                                return <UserInfo key={user.id}
                                                 user={user}
                                                 session={session}
                                                 deleteUser={deleteUser}
                                                 setUsers={setUsers}/>
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

type UserInfoProps = {
    user: User;
    session: CurrentSession | null;
    deleteUser: (id: number) => void;
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

function UserInfo({user, session, deleteUser, setUsers}: UserInfoProps) {
    return (
        <>
            <div
                className={'border-[1px] border-primary rounded-[9px] flex items-center justify-between p-3'}>
                {/* Левая часть */}
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl">{user.firstName}</h1>
                    <h1 className="text-2xl">{user.role == Role.ADMIN ? 'Администратор' : 'Пользователь'}</h1>
                </div>

                {/* Правая часть */}
                <div className="flex items-center gap-3">
                    <Button onClick={() => deleteUser(user.id)}>Удалить</Button>
                </div>
            </div>
        </>
    );
}