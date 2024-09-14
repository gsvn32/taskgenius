import { PriorityLevel } from "../page";

type Item = {
    title: string;
    description: string;
    completed: boolean;
    datecreated:Date,
    targetdate?:Date,
    priority?:String;
    onCompleteChanged: (newValue: boolean) => void
  }
export function TodoItem({
    title,description,completed,datecreated,targetdate,priority,onCompleteChanged
  }:Item) {
    return (
      <li className="flex gap-2 border border-blue-500 rounded p-3">
        <input 
          type="checkbox"
          title="completed"
          checked={completed}
          onChange={e=> onCompleteChanged(e.target.checked)}
          className="mx-4"
            />
        
        <div>
              <p className="font-semi-bold p-2">{title}</p>
              <p className="mx-auto p-2">Description: {description}</p>
              <span className="flex flex-row">
              <p className="p-2">Date Created: {datecreated.toLocaleDateString()}</p>
              <p className="p-2">Target Date: {targetdate?new Date(targetdate).toLocaleDateString():"Not Selected"}</p>
              <p className="p-2">Priority: {priority?priority:"Not Selected"}</p>
              </span>
            </div> 
            
      </li>
    )
  }