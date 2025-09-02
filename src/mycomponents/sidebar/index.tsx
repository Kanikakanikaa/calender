import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useCalender } from '@/utils/hooks/useCalender';
import { ChevronDownIcon } from 'lucide-react';
import Calendar from 'react-calendar';

export function AppSidebar({ active }: any) {
  const {
    handleSetDate,
    handleViewChange,
    currentView,
    currentDate,
    handleAcions,
    handleSelectType,
    task,
    event,
  } = useCalender();

  return (
    <div className={`w-full flex-col flex gap-4 max-w-60 p-4 pr-0  ${active ? '' : 'hidden'} `}>
      <div className="customReactCalendar">
        <Calendar
          onChange={handleSetDate}
          value={currentDate}
          onActiveStartDateChange={handleAcions}
        />
      </div>
      <div className="flex flex-col gap-4 text-black/80 mt-3">
        <div className="flex gap-4 justify-between w-full">
          <Label htmlFor="Tasks">Tasks</Label>
          <Switch
            id="Tasks "
            checked={task}
            onCheckedChange={(e: any) => handleSelectType(e, 'task')}
          />
        </div>
        <div className="flex gap-4 justify-between w-full">
          <Label htmlFor="Events">Events</Label>
          <Switch
            id="Events"
            checked={event}
            onCheckedChange={(e: any) => handleSelectType(e, 'event')}
          />
        </div>
      </div>
      <div className="hidden">
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
              <DropdownMenuItem
                key={view}
                onClick={() => handleViewChange(view?.toLowerCase() as any)}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
