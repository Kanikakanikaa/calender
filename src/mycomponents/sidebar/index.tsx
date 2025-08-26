import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';

export function AppSidebar() {
  return (
    <div className="w-full max-w-60 p-4 pr-0">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <Button
            variant={'outline'}
            className=" bg-transparent border-0 shadow-none hover:bg-black/5 justify-between px-0 cursor-pointer w-full"
            size={'lg'}
          >
            Week
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-60 bg-transparent shadow-none border-0 px-4">
          <DropdownMenuItem className="hover:bg-black/8">Day</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-black/8">Week</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-black/8">Month</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
