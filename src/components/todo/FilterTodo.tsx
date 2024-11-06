import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuLabel,
 DropdownMenuRadioGroup,
 DropdownMenuRadioItem,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useState } from "react";

const FilterTodo = () => {
 const [position, setPosition] = useState("bottom");
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="outline">Filter</Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
     <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
     <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
     <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
   </DropdownMenuContent>
  </DropdownMenu>
 );
};

export default FilterTodo;
