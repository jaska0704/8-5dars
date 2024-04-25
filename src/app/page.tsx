"use server"
import { getData } from "@/service/todo";
import { Card } from "@/components/card";


export default async function Home() {
  const data = await getData()
  return (
    <main className="flex max-w-[1200px] min-h-screen flex-col justify-between p-24">
      {data.map((todo, i) => (
       <Card key={i} {...todo}/>
      ))}
    </main>
  );
}
