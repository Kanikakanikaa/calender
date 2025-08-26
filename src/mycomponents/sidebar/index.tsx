import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useCalender } from '@/utils/useCal';
import { ChevronDownIcon } from 'lucide-react';

export function AppSidebar({active}:any) {
          const{ handleViewChange,currentView}=useCalender();
  
  return (
    <div className={`w-full max-w-60 p-4 pr-0  ${active?"":'hidden'} `}>
 <div className="flex items-center space-x-2">
      <Label htmlFor="airplane-mode">Tasks</Label>
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Ev</Label>
      <Switch id="airplane-mode" />
    </div>
    
    <DropdownMenu>
        <DropdownMenuTrigger className="w-full">
          <Button
            variant={'outline'}
            className=" bg-transparent border-0 shadow-none hover:bg-black/5 justify-between px-0 cursor-pointer w-full"
            size={'lg'}
          >
            {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
              {['Day', 'Week', 'Month'].map((view) => (
              <DropdownMenuItem key={view} onClick={() => handleViewChange(view?.toLowerCase() as any)}>
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  );
}
