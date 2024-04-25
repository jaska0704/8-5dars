'use client'
import { useForm } from 'react-hook-form'
import React from 'react'
import { createTodo } from '@/service/todo'

interface dataType {
    name: string;
    category: string;
}

export const Form = () => {
    const { register, handleSubmit, reset } = useForm<dataType>();
    const [loading, setLoading] = React.useTransition();
    const submit = (data: dataType) => {
       setLoading(()=> {
            createTodo(data).then(() => {
              reset();
            });
       })
    }

  return (
    <form className="mb-4 max-w-[100%] flex flex-col justify-end gap-5" onSubmit={handleSubmit(submit)}>
      <div>
        <input
          {...register("name", { required: true })}
          className="border-none w-[100%] py-2 rounded-lg"
          name="name"
          type="text"
        />
      </div>
      <div>
        <input
          {...register("category", { required: true })}
          className="border-none  w-[100%] py-2 rounded-lg"
          name="category"
          type="text"
        />
      </div>
      <button className="bg-blue-500 px-5 py-2 rounded-lg" type="submit">
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}
