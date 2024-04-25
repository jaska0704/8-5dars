"use client"
import { deleteTodo } from '@/service/todo'
import { error } from 'console'
import React from 'react'
import { Form } from './form'
import { EditForm } from './editForm'

interface Todo {
    name: string
    category: string
    id: number 
}

export const Card:React.FC<Todo> = ({name, id, category}) => {
    const [loading, setLoading] = React.useTransition()
    const [show, setShow] = React.useState(false)

    const hanleDelete = () => {
        setLoading(()=> {
            deleteTodo(id).catch((error)=> console.log(error));
        })
    }
  return (
    <div className='flex items-center justify-between '>
      <div className='flex gap-4'>
        <p>{id}</p>
        <h1 className='text-green-500'> {name}
        </h1>
        <p>{category}</p>
      </div>
      <div>
        <button onClick={hanleDelete} className='bg-red-500 px-5 py-2 rounded-lg'>{loading ? "Deleting..." : "Delete"}</button>
        <button className='bg-blue-500 px-5 py-2 rounded-lg' onClick={() => {
            setShow(true);
            console.log(id);
            
        }}>Edit</button>
        {show ? <div className='absolute top-0 left-0 w-screen h-screen bg-slate-400 flex justify-center items-center'><EditForm id={id} name={name} category={category} show={setShow} /></div> : null}
      </div>
    </div>
  );
}
