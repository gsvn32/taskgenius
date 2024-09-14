"use client";
import { useState } from "react";
import {NewTodoForm} from "./_components/new-todo-form"
import {TodoItem} from "./_components/todo-item"

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
  const [todos,setTodos] = useState<TodoItem[]>([
    {
      title:"Exampl1", description:"first task", completed:false, datecreated: new Date('9/13/2024')
    }
  ]);
  return (
   <div className="max-w-screen-md mx-auto p-4">
    <h1 className="text-x1 bg-red-500 font-bold p-5">TASKGENIUS</h1>
    <ul>
      {todos.map(({title, description, completed, targetdate, priority}, index) => (
        <TodoItem
        title={title}
        description={description}
        completed={completed}
        datecreated={new Date(Date.now())}
        targetdate={targetdate}
        priority={priority}
        onCompleteChanged = {(newValue)=>
          setTodos(prev => {
          const newTodos = [...prev];
          newTodos[index].completed=newValue;
          return newTodos;
      })}
      />
      ))}
    </ul>
   <NewTodoForm onCreate={(title,description,completed, datecreated,targetdate,priority )=>{
           setTodos(prev => {
            const newTodos = [...prev];
            newTodos.push({title,description,completed, datecreated,targetdate,priority })
            return newTodos;
          });
   }} />
   </div>
  );
 
}