"use client"

import { useState } from "react"
interface FormState<T>{
    [key:string]:T
}

export const useForm = <T extends FormState<string>>(initialForm: T) =>{
    const [form, setForm] = useState(initialForm);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)  => {
        const { name, value } = e.target;

        setForm(prevState => ({
            ...prevState,
            [name]:value
        }));
    }

    const submitForm = async(e:React.FormEvent) =>{
        e.preventDefault();

        try {
            const resp = await fetch('http://localhost:3000/api/users',{
                method:'POST',
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({
                    name:form.nombre,
                    email:form.email
                })
            });
        } catch (error) {
            console.log(error);
            
        }
    }

    return {
        handleChange,
        form,
        submitForm
    }
}