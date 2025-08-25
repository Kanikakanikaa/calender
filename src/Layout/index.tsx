import Header from "@/mycomponents/Header"
import MyCalendar from "@/mycomponents/my-calender"
// import { Sidebar } from "lucide-react"
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { AppSidebar } from "@/mycomponents/sidebar";
import './layout.scss'

const Layout = () => {
     const localizer = momentLocalizer(moment);
  return (
    <div className="outer">

        <Header/>
        <AppSidebar/>
        <MyCalendar localizer={localizer}/>
    </div>
  )
}

export default Layout