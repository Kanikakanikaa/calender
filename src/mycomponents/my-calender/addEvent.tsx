import { Button } from '@/components/ui/button';
import {
  Dialog,
  
  DialogContent,
  //   DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import EventsForm from '../Forms/EventsForm';

export default function AddEvent({
  open,
 handleClose,
  addEvent,
}: {
  open?: boolean;
  handleClose: (v: boolean) => void;
  addEvent?: any;
}) 

{
 
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Event</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
           {/* <DialogClose asChild>
        <button
          type="button"
          className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100"
          onClick={() =>reset()}
        >
          ✕
        </button>
      </DialogClose> */}
          {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
        </DialogHeader>
        <EventsForm addEvent={addEvent} />
      </DialogContent>
    </Dialog>
  );
}
