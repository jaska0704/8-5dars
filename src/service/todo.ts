"use server";
import { revalidateTag } from "next/cache";

interface Todo {
  name: string;
  category: string;
  id: number;
}
interface typeTodo {
  name: string;
  category: string;
}

export const getData = async (): Promise<Todo[]> => {
  try {
    const res = await fetch("http://localhost:3000/tel", {
      next: {
        tags: ["todos"],
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const deleteTodo = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3000/tel/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    revalidateTag("todos");
    return data;
  } catch (error) {
    throw new Error("Failed to delete data");
  }
};

export const createTodo = async (data: typeTodo) => {
  try {
    const res = await fetch("http://localhost:3000/tel", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    const dataRes = await res.json();
    revalidateTag("todos");
    return dataRes;
  } catch (error) {
    throw new Error("Failed to create data");
  }
};

export const editTodo = async (id: number, data: typeTodo) => {
  try {
    const res = await fetch(`http://localhost:3000/tel/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
    const dataRes = await res.json();
    revalidateTag("todos");
    return dataRes;
  } catch (error) {
    throw new Error("Failed to edit data");
  }
}
