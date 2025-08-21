import { Card } from "@/components/ui/card";
import MyCalendar from "@/mycomponents/my-calender";
import { momentLocalizer } from "react-big-calendar";
import moment from 'moment'

export default function Cal() {
const localizer=momentLocalizer(moment);

  return (
   <div className="container mx-auto">
    <Card className="p-4 mt-6">

      <MyCalendar localizer={localizer} />
      </Card>

    </div>
  )
}
