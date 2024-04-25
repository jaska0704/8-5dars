"use client"
import { deleteTodo } from '@/service/todo'
import { error } from 'console'
import React from 'react'

interface Todo {
    name: string
    category: string
    id: number 
}

export const Card:React.FC<Todo> = ({name, id, category}) => {
    const [loading, setLoading] = React.useTransition()

    const hanleDelete = () => {
        setLoading(()=> {
            deleteTodo(id).catch((error)=> console.log(error));
        })
    }
  return (
    <div className='flex items-center justify-between '>
      <div>
        <h1>
          {id} {name}
        </h1>
        <p>{category}</p>
      </div>
      <div>
        <button onClick={hanleDelete} className='bg-red-500 px-5 py-2 rounded-lg'>{loading ? "Deleting..." : "Delete"}</button>
      </div>
    </div>
  );
}
