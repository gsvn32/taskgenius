"use client";

import {NewTodoForm} from "./_components/new-todo-form"
import {TodoItem} from "./_components/todo-item"
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export enum PriorityLevel {
  HIGH='High',
  MEDIUM='Meduim',
  LOW='Low',
  NONE='None'
}
type TodoItem = {
  title: string;
  description: string;
  completed:boolean;
  datecreated:Date;
  targetdate?:Date;
  priority?:String;

}
export default function Home() {
  const todos = useQuery(api.functions.listTodos);
  
  return (
   <div className="max-w-screen-md mx-auto p-4">
    <h1 className="text-x1 bg-red-500 font-bold p-5">TASKGENIUS</h1>
    <ul>
      {todos?.map(({_id, title, description, completed, targetdate, priority}, index) => (
        <TodoItem
        id={_id}
        key={index}
        title={title}
        description={description}
        completed={completed}
        datecreated={new Date(Date.now())}
        targetdate={new Date(targetdate)}
        priority={priority}
       
      />
      ))}
    </ul>
   <NewTodoForm  />
   </div>
  );
 
}