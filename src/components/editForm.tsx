"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { editTodo } from "@/service/todo";

interface dataType {
  name: string;
  category: string;
  id?: number;
}

interface Props {
  id: number;
  name: string;
  category: string;
  show:React.Dispatch<React.SetStateAction<boolean>>
}



export const EditForm: React.FC<Props> = ({id, name, category, show}) => {


  const { register, handleSubmit, reset } = useForm<dataType>();
  const [loading, setLoading] = React.useTransition();
  const submit = (data: dataType) => {
    setLoading(() => {
      editTodo(id, data).then(() => {
        show(false);
      });
    });
  };

  
  return (
    <form
      className="mb-4 max-w-[100%] flex flex-col justify-end gap-5"
      onSubmit={handleSubmit(submit)}
    >
      <div>
        <input
          {...register("name", { required: true })}
          className="border-none w-[100%] py-2 rounded-lg"
          name="name"
          type="text"
          defaultValue={name}
        />
      </div>
      <div>
        <input
          {...register("category", { required: true })}
          className="border-none  w-[100%] py-2 rounded-lg"
          name="category"
          type="text"
          defaultValue={category}
        />
      </div>
      <button className="bg-blue-500 px-5 py-2 rounded-lg" type="submit">
        {loading ? "Saving..." : "Save"}
      </button>
    </form>
  );
};
