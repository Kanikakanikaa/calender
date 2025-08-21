import moment from 'moment'
import { Calendar } from 'react-big-calendar'
// import format from 'date-fns/format'
// import parse from 'date-fns/parse'
// import startOfWeek from 'date-fns/startOfWeek'
// import getDay from 'date-fns/getDay'
// import enUS from 'date-fns/locale/en-US'

// const locales = {
//   'en-US': enUS,
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// })
//array of objects
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
]

function MyCalendar({localizer}:any) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        //if want only one view default
        defaultView={'week'}
        //if change view
        views={['month','week','day']}
        //specific date
        // date={moment('2025-10-22').toDate()}
        // toolbar={false}
        // max={ moment('2025-08-26T12:12:00').toDate()}
        // min={moment('2025-08-26T16:16:00').toDate()}
      />
    </div>
  )
}

export default MyCalendar
