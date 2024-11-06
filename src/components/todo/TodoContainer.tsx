
import { AddTodo } from "./AddTodo";
import FilterTodo from "./FilterTodo";
import TodoCard from "./TodoCard";



const TodoContainer = () => {
 return (
  <div className="p-5">
   <div className="flex justify-between items-center">
    <AddTodo />
    <FilterTodo />
   </div>
   <div className="mt-4 rounded-xl bg-primary-gradient w-full h-full p-[5px] overflow-x-hidden overflow-y-auto space-y-3">
    <TodoCard />
    <TodoCard />
    <TodoCard />
    <TodoCard />
    <TodoCard />
    {/* <div className="bg-white text-xl font-bold p-5 rounded-xl flex justify-center items-center">
     <p> There is no task pending...</p>
    </div> */}
   </div>
  </div>
 );
};

export default TodoContainer;
