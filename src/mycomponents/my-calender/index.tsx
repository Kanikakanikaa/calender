import { useCalender } from '@/utils/useCal';
import moment from 'moment';
import { Calendar } from 'react-big-calendar';
const events = [
  {
    title: 'Meeting',
    start: moment('2025-08-21T16:12:00').toDate(),
    end: moment('2025-08-21T18:12:00').toDate(),
  },
  {
    title: 'Meeting1',
    start: moment('2025-08-22T16:12:00').toDate(),
    end: moment('2025-08-22T18:12:00').toDate(),
  },
  {
    title: 'Meeting2',
    start: moment('2025-08-26T16:12:00').toDate(),
    end: moment('2025-08-26T18:12:00').toDate(),
  },
];

function MyCalendar({ localizer }: any) {
    const{ calendarRef,currentDate,currentView}=useCalender();
    console.log({currentView});

  return (
    <div className="p-4 w-full h-full bg-white  rounded-3xl customCalendar">
      {/* <h2 className="text-2xl font-semibold mb-4">My Calendar</h  2> */}
      <Calendar
      ref={calendarRef}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        view={currentView}
        date={currentDate}
        //if want only one view default
        // defaultView={currentView}
        //if change view
        // toolbar={false}
        // max={moment('2025-08-26T12:12:00').toDate()}
        // min={moment('2025-08-26T16:16:00').toDate()}
        // formats={{ dayHeaderFormat: (date) => moment(date).format('dddd @ DD') }}
      />
    </div>
  );
}

export default MyCalendar;
