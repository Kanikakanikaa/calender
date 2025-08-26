import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GripIcon,
  MenuIcon,
  UserIcon,
} from 'lucide-react';
import logo from '../../assets/images/x_rounded.png';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useCalender } from '@/utils/useCal';

export default function Header({ active, setActive }: any) {
  const { handleNavigate, handleViewChange, currentView } = useCalender();

  return (
    <div className="w-full min-h-16 flex justify-between items-center pr-4 text-black/80">
      <div className="flex items-center w-full ">
        <div className="flex gap-3 items-center w-full max-w-60 pl-4">
          <div
            className="min-h-10 min-w-10 max-h-10 max-w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-black/5 "
            onClick={() => setActive(!active)}
          >
            <MenuIcon />
          </div>
          <div className="flex gap-2 items-center text-lg">
            <img src={logo} alt="headerLogo" width={20} />
            Calendar
          </div>
        </div>
        <div className="flex gap-4 items-center pl-4">
          <Button
            variant={'outline'}
            className="rounded-full bg-transparent border hover:bg-black/5 cursor-pointer border-black/40"
            size={'lg'}
            onClick={() => handleNavigate('TODAY')}
          >
            Today
          </Button>
          <div className="flex items-center">
            <div className="min-w-8 max-w-8 max-h-8 min-h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-black/5">
              <ChevronLeftIcon width={20} height={20} onClick={() => handleNavigate('PREV')} />
            </div>
            <div className="min-w-8 max-w-8 max-h-8 min-h-8 flex justify-center items-center rounded-full cursor-pointer hover:bg-black/5">
              <ChevronRightIcon width={20} height={20} onClick={() => handleNavigate('NEXT')} />
            </div>
          </div>
          <div className="text-xl">August 2025</div>
        </div>
      </div>
      <div className="flex justify-end w-full gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={'outline'}
              className="rounded-full bg-transparent border hover:bg-black/5 cursor-pointer border-black/40"
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
            {/* <DropdownMenuItem>Day</DropdownMenuItem>
            <DropdownMenuItem>Week</DropdownMenuItem>
            <DropdownMenuItem>Month</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="min-h-10 min-w-10 max-h-10 max-w-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-black/5 ">
              <GripIcon width={20} height={20} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>CallCenter</DropdownMenuItem>
            <DropdownMenuItem>Phone</DropdownMenuItem>
            <DropdownMenuItem>SMs</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="min-h-10 min-w-10 max-h-10 max-w-10 flex justify-center items-center rounded-full cursor-pointer bg-contrast hover:bg-contrast/80 ">
          <UserIcon width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
