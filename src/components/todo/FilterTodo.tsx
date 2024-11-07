import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuRadioGroup,
 DropdownMenuRadioItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { useState } from "react";
import { ListFilter } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

const FilterTodo = () => {
 const isDesktop = useMediaQuery("(min-width: 768px)")
 const [position, setPosition] = useState("bottom");
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button variant="outline" className="bg-primary-gradient focus-visible:ring-0 text-white hover:text-white"><ListFilter />{isDesktop && "Priority"}</Button>
   </DropdownMenuTrigger>
   <DropdownMenuContent className={cn(isDesktop ? "w-56" : "min-w-fit")}>
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
     <DropdownMenuRadioItem value="high">Hight</DropdownMenuRadioItem>
     <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
     <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
   </DropdownMenuContent>
  </DropdownMenu>
 );
};

export default FilterTodo;
