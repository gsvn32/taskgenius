import { useState } from "react";
import { PriorityLevel } from "../page";
import { useMutation } from "convex/react";
import moment from 'moment';
import { api } from "@/convex/_generated/api";
import Moment from 'react-moment';

type TodoFormProps = {
    onCreate: (title: string, description: string, completed:boolean,
        datecreated:Date,
        targetdate?:Date,
        priority?:string)=>void;
}
export function NewTodoForm(){
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [targetdate,setTargetdate] = useState();
    const [priority,setPriority] = useState<string>(PriorityLevel.NONE);
    
    const createTodo = useMutation(api.functions.createTodo);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      console.log("in handle");
      var completed=false;
      var datecreatedT = moment(new Date(Date.now()));
      var datecreated=datecreatedT.format("MM-DD-YYYY")
      var targetdate = "Not Given";
      e.preventDefault();
      await createTodo({title,description,completed,datecreated,targetdate,priority })
      setTitle("");
      setDescription("");
      
    }

    return(
        <form onSubmit={handleSubmit} className="border border-green-500 border-8">
          <span className="flex justify-center flex-col p-3">
            <label htmlFor="title" >Title</label>
            <input type="text" title="title" name="title" value={title} onChange={e=>setTitle(e.target.value)} className="border border-green rounded border-3 p-3"/>
            <label htmlFor="description">Description</label>
            <input type="text" title="description" name="description" id="description" value={description} onChange={e=>setDescription(e.target.value)} className="border border-green rounded border-3 p-3"/>
            <span className="flex justify-center flex-row p-3 gap-3">
              <label htmlFor="targetdate">targetdate</label>
                <input type="date" title="targetdate" name="targetdate" onChange={e=>setTargetdate(moment(new Date(e.target.value)))} className="border border-green rounded border-3 p-3"/>
              <label htmlFor="priority">priority</label>
              <select title="priority" name="priority" onChange={e=>setPriority(e.target.value)} className="border border-green rounded border-3 p-3" >
                <option value={PriorityLevel.NONE}>{PriorityLevel.NONE}</option>
                <option value={PriorityLevel.LOW}>{PriorityLevel.LOW}</option>
                <option value={PriorityLevel.MEDIUM}>{PriorityLevel.MEDIUM}</option>
                <option value={PriorityLevel.HIGH}>{PriorityLevel.HIGH}</option>
                </select>
                </span>
          <span className="flex justify-center flex-row gap-2 p-3">
          <button type="submit" className=" bg-blue-500 p-4 border rounded" >Generate</button>
          <button type="submit" className=" bg-blue-500 p-4 border rounded" >Create</button>
          </span>
          </span>
   </form>
    )
}
