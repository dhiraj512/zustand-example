'use client'

import { KeyboardEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import useTodoStore from "@/store/useTodoStore";

export default function TodoList() {
    const { toast } = useToast();

    // const addTodo = useTodoStore((state) => state.addTodo); // This is also valid

    const { todos, addTodo, removeTodo, todoStatus } = useTodoStore()

    const [todoTitle, setTodoTitle] = useState("")

    const handleSubmit = () => {
        if (!todoTitle) return toast({
            variant: "destructive",
            title: "Please! Enter a title",
        })
        addTodo({
            id: Math.ceil(Math.random() * 1000000),
            title: todoTitle,
            completed: false,
        });
        setTodoTitle("");
    }

    const handleInputSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
        // Check if the Enter key (key code 13) was pressed
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="flex flex-col gap-2 my-4 ">
            <div className="flex gap-4 items-center">
                <Input value={todoTitle}
                    placeholder="Enter a task"
                    className="border-primary/60"
                    onChange={(e) => setTodoTitle(e.target.value)}
                    onKeyDown={(e) => handleInputSubmit(e)}
                />
                <Button variant="outline" onClick={() => handleSubmit()}>Add</Button>
            </div>
            <Card className="p-2 rounded-md text-lg font-medium inline-flex gap-4 justify-center items-center">
                <Label className="text-orange-500">
                    Total: {todos.length}
                </Label>
                <Label className="text-green-500">
                    Completed: {todos.filter((todo) => todo.completed).length}
                </Label>
                <Label className="text-red-500">
                    Pending: {todos.filter((todo) => !todo.completed).length}
                </Label>
            </Card>
            {todos.map((todo) => (
                <Card key={todo.id} className="flex justify-between items-center gap-x-6 p-2 rounded-md">
                    <Checkbox checked={todo.completed} onCheckedChange={() => todoStatus(todo.id)} />
                    <Label style={{ textDecorationColor: "red", textDecorationThickness: 2 }}
                        className={cn(todo.completed ? "line-through text-foreground/80" : "", "text-lg font-semibold")}>{todo.title}</Label>
                    <span className="flex-grow" />
                    <Button className="w-8 h-8 p-0" variant="outline" onClick={() => removeTodo(todo.id)}><Trash2 className="w-4 h-4" /></Button>
                </Card>
            ))}
        </div>
    )
}
