import Header from '@/mycomponents/Header';
import MyCalendar from '@/mycomponents/my-calender';
// import { Sidebar } from "lucide-react"
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
// import { AppSidebar } from '@/mycomponents/sidebar';
import './layout.scss';
import { useState } from 'react';

const Layout = () => {
  const [active, setActive] = useState(true);

  const localizer = momentLocalizer(moment);
  return (
    <div className="w-full flex flex-col bg-black/3 h-full pb-4">
      <Header setActive={setActive} active={active} />
      <div className="flex h-full ">
        {/* <AppSidebar active={active} /> */}
        <div className="w-full px-4 transition duration-700">
          <MyCalendar localizer={localizer} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
