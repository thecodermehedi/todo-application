import { FilePenLine, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";


const TodoCard = () => {
 return (
  <div className="bg-white p-3 rounded-xl flex justify-between items-center">
   <Checkbox className="rounded-full data-[state=checked]:bg-green-500 border-green-500 size-5" />
   <p className="text-sm font-medium text-gray-500">Title</p>
   <p>Time</p>
   <p>Description</p>
   <div className="flex gap-2">
    <Button variant="outline" size="icon"><FilePenLine/></Button>
    <Button variant="outline" size="icon"><Trash2 /></Button>
   </div>
  </div>
 );
};

export default TodoCard;
