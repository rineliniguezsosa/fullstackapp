"use client"

import  Head  from '../components/Head'
import Form from '../components/Form'

export default function Home() {
  return (
    <div className="flex flex-col h-screen border-2 border-red-500 items-center justify-center font-sans dark:bg-black">
        <Head/>

        <Form/>
    </div>
  );
}
