import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog"
import {
 Drawer,
 DrawerClose,
 DrawerContent,
 DrawerDescription,
 DrawerFooter,
 DrawerHeader,
 DrawerTitle,
 DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { PlusIcon } from "lucide-react"
import { useAppDispatch } from "@/redux/hook"
import { addTodo } from "@/redux/features/todoSlice"

const AddTodo = () => {
 const isDesktop = useMediaQuery("(min-width: 768px)")
 const [open, setOpen] = React.useState(false)

 const handleClose = () => setOpen(false);

 if (isDesktop) {
  return (
   <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
     <Button className="bg-primary-gradient text-white"> <PlusIcon /> Task</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
     <DialogHeader>
      <DialogTitle>Add Task</DialogTitle>
      <DialogDescription>
       Add your task here. Click save when you're done.
      </DialogDescription>
     </DialogHeader>
     <TodoForm onClose={handleClose} />
    </DialogContent>
   </Dialog>
  )
 }

 return (
  <Drawer open={open} onOpenChange={setOpen}>
   <DrawerTrigger asChild>
    <Button className="bg-primary-gradient text-white"> <PlusIcon /></Button>
   </DrawerTrigger>
   <DrawerContent>
    <DrawerHeader className="text-left">
     <DrawerTitle>Edit profile</DrawerTitle>
     <DrawerDescription>
      Make changes to your profile here. Click save when you're done.
     </DrawerDescription>
    </DrawerHeader>
    <TodoForm className="px-4" onClose={handleClose} />
    <DrawerFooter className="pt-2">
     <DrawerClose asChild>
      <Button variant="outline">Cancel</Button>
     </DrawerClose>
    </DrawerFooter>
   </DrawerContent>
  </Drawer>
 )
}

type TodoFormProps = {
 className?: string,
 onClose: () => void
}

const TodoForm = ({ className, onClose }: TodoFormProps) => {
 const dispatch = useAppDispatch();
 const [task, setTask] = React.useState("")
 const [description, setDescription] = React.useState("")
 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log({ task, description })
  if (!task) return alert("Task is required");
  if (!description) return alert("Description is required");
  dispatch(addTodo({ title: task, description }))
  onClose()
 }
 return (
  <form className={cn("grid items-start gap-4", className)} onSubmit={handleSubmit}>
   <div className="grid gap-2">
    <Label htmlFor="task">Task</Label>
    <Input type="text" id="task" onBlur={(e) => setTask(e.target.value)} className="focus-visible:ring-0 bg-gray-100 focus-visible:bg-white" required />
   </div>
   <div className="grid gap-2">
    <Label htmlFor="description">Description</Label>
    <textarea id="description" onBlur={(e) => setDescription(e.target.value)} className="focus-visible:ring-0 bg-gray-100 focus-visible:bg-white resize-none focus:outline-none rounded-lg border p-2 text-sm" rows={7} required />
   </div>
   <Button type="submit">Save changes</Button>
  </form>
 )
}

export default AddTodo
