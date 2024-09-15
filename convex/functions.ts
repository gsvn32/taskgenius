import { mutation, query } from "./_generated/server";
import {v} from "convex/values";

export const listTodos = query({
    handler: async (ctx) => {
        return await ctx.db.query("todos").collect();
    }
});

export const createTodo = mutation({
    args:{
        title: v.string(),
        description: v.string(),
        completed: v.boolean(),
        datecreated:v.string(),
        targetdate:v.string(),
        priority:v.string(),

    },
    handler: async (ctx,args) => {
        await ctx.db.insert("todos",{
            title:args.title,
            description:args.description,
            completed:args.completed,
            datecreated:args.datecreated,
            targetdate:args.targetdate,
            priority:args.priority

        })
    },
});

export const updateTodo = mutation({
    args: {
        id:v.id("todos"),
        completed: v.boolean(),
    },
    handler: async (ctx,args) => {
        await ctx.db.patch(args.id,{
            completed: args.completed
        })
    }
});

export const deleteTodo = mutation({
    args: {
        id: v.id("todos")
    },
    handler: async (ctx,args) => {
        await ctx.db.delete(args.id);
    }
});

