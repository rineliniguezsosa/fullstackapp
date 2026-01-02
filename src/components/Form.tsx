import { useForm } from "@/hooks/useForm"


export default function Form() {
    const { form,handleChange,submitForm} = useForm({
        nombre:''
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
    </form>
  )
}
