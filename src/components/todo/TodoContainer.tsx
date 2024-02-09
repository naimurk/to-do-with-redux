import { useAppSelector } from "@/Redux/hook";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import FilterModal from "./FilterModal";
import TodoCard from "./TodoCard";
import { useEffect, useState } from "react";


const TodoContainer = () => {
    const todoState = useAppSelector((state)=> state.todo.todo)
 
    return (
        <div className="w-full">
            <div className="mx-auto my-2 flex justify-between w-full max-w-7xl">
                <AddTodoModal></AddTodoModal>
                {/* <Button className=" text-xl font-semibold bg-primary-gradient">Add todo</Button> */}
                {/* <Button className=" text-xl font-semibold bg-primary-gradient">Filter</Button> */}
                <FilterModal></FilterModal>
            </div>
            <div className="bg-primary-gradient rounded-lg p-5 mx-auto w-full max-w-7xl h-full">
               {
                todoState.map((item)=> <TodoCard
                item={item}
                >

                </TodoCard>)
               }
            </div>
        </div>
    );
};

export default TodoContainer;