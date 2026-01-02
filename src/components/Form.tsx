"use client"

import { useForm } from "@/hooks/useForm"


export default function Form() {
    const { form,handleChange,submitForm} = useForm({
        nombre:'',
        email:''
    })
  return (
    <form onSubmit={submitForm} className="w-1/2 h-screen m-2 flex flex-col items-center justify-center border-2 border-blue-400">
        <input 
            type="text" 
            name="name"
            id="name"
            value={form.nombre}
            onChange={handleChange}
        />
        <input 
            type="email" 
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
        />

        <button type="submit">Crear usuario</button>
    </form>
  )
}
