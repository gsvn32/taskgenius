import { PriorityLevel } from "../page";
import {Id} from "../../convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

type Item = {
    id:Id<"todos">;
    title: string;
    description: string;
    completed: boolean;
    datecreated:Date,
    targetdate?:Date,
    priority?:String;
  }
export function TodoItem({
    id,title,description,completed,datecreated,targetdate,priority
  }:Item) {
    const updateTodo = useMutation(api.functions.updateTodo);
    const deleteTodo = useMutation(api.functions.deleteTodo);
    return (
      <li className="flex gap-2 border border-blue-500 rounded p-3">
        <input 

          type="checkbox"
          title="completed"
          checked={completed}
          onChange={e=> updateTodo({id, completed: e.target.checked})}
          className="mx-4"
            />
        
        <div>
              <p className="font-semi-bold p-2">{title}</p>
              <p className="text-sm text-grey-500 mx-auto p-2">Description: {description}</p>
              <span className="flex flex-row">
              <p className="p-2">Date Created: {datecreated.toLocaleDateString()}</p>
              <p className="p-2">Target Date: {targetdate?new Date(targetdate).toLocaleDateString():"Not Selected"}</p>
              <p className="p-2">Priority: {priority?priority:"Not Selected"}</p>
              </span>
              <button type="button" className="button text-red-500" onClick={()=> deleteTodo({id})}>Remove</button>
            </div> 
            
      </li>
    )
  }