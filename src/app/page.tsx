
import { getData } from "@/service/todo";
import { Card } from "@/components/card";
import { Form } from "@/components/form";


export default async function Home() {
  const data = await getData()
  return (
    <main className="flex max-w-[1200px] min-h-screen flex-col justify-between p-24">
      <Form/>
      {data.map((todo, i) => (
       <Card key={i} {...todo}/>
      ))}
    </main>
  );
}
