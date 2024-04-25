'use client'
import { useForm } from 'react-hook-form'
import React from 'react'

interface dataType {
    name: string;
    category: string;
}

export const Form = () => {
    const { register, handleSubmit } = useForm();
    const submit = (data: any) => {
        
    }

  return (
    <form className="mb-4" onSubmit={handleSubmit(submit)}>
      <div>
        <input
          {...register("title", { required: true })}
          className="border border-blue-400"
          name="title"
          type="text"
        />
      </div>
      <div>
        <input
          {...register("description", { required: true })}
          className="border border-blue-400"
          name="description"
          type="text"
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
