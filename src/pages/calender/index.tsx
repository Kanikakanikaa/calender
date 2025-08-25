import MyCalendar from '@/mycomponents/my-calender';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { AppSidebar } from '@/mycomponents/sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Cal() {
  const localizer = momentLocalizer(moment);

  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <div className="flex-1">
          <SidebarTrigger />
          <div className="container mx-auto">
            <MyCalendar localizer={localizer} />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
