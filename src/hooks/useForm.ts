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
    }

    return {
        handleChange,
        form,
        submitForm
    }
}