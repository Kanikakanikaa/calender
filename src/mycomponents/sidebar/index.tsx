import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function AppSidebar({ active }: any) {
  // const { handleViewChange, currentView } = useCalender();

  return (
    <div
      className={`w-full max-w-60 p-4 pr-0 max-h-[calc(100vh-70px)] overflow-auto transition duration-700  ${active ? '' : 'hidden'} `}
    >
      <div className="flex flex-col gap-4 w-full py-4">
        <div className="flex items-center justify-between w-full ">
          <Label htmlFor="airplane-mode">Tasks</Label>
          <Switch id="airplane-mode" className="cursor-pointer" />
        </div>
        <div className="flex items-center justify-between w-full ">
          <Label htmlFor="airplane-mode">Ev</Label>
          <Switch id="airplane-mode" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
