"use client"

import { useForm } from "@/hooks/useForm"


export default function Form() {
    const { form,handleChange,submitForm} = useForm({
        nombre:'',
        email:''
    })
  return (
    <form onSubmit={submitForm} className="w-1/4 m-2 h-screen flex flex-col gap-2 items-center justify-center">
        <input 
            type="text" 
            name="nombre"
            id="nombre"
            placeholder="nombre"
            value={form.nombre}
            className="
                 w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm
                 text-gray-900 placeholder-gray-400
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none
                 transition
                 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
            onChange={handleChange}
        />
        <input 
            type="email" 
            name="email"
            id="email"
            placeholder="email"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm
            text-gray-900 placeholder-gray-400
            focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none
            transition dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500"
            value={form.email}
            onChange={handleChange}
        />

        <button className="bg-blue-300 text-gray-900 px-4 py-2 rounded-md hover:bg-blue-400 transition" type="submit">Crear usuario</button>
    </form>
  )
}
