import { revalidateTag } from "next/cache";

interface Todo {
  name: string;
  category: string;
  id: number;
}

export const getData = async (): Promise<Todo[]> => {
  try {
    const res = await fetch("http://localhost:3000/tel", {
        next: {
            tags: ["todos"],
        }
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
