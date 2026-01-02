"use client"

import  Head  from '../components/Head'
import Form from '../components/Form'
import { useEffect, useState } from 'react'
import { User } from '@/types/user'


export default function Home() {

   const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch("/api/users")
      const data = await res.json()
      setUsers(data)
    }

    getUsers()
  }, [])

  return (
    <div className="flex flex-col h-screen items-center justify-center font-sans dark:bg-black">
        <Head/>

        <Form/>

          <ul>
            {users.map((u) => (
              <li key={u.id}>
                {u.name} - {u.email}
              </li>
            ))}
          </ul>
    </div>
  );
}
