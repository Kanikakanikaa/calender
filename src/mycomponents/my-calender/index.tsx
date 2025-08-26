import { useCalender } from '@/utils/useCal'
import moment from 'moment'
import { Calendar } from 'react-big-calendar'
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
  const{ handleNavigate,handleViewChange,calendarRef,currentDate,currentView}=useCalender();
  console.log({currentView},currentDate);
  return (
     <div>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => handleNavigate('TODAY')}>Today</button>
        <button onClick={() => handleNavigate('PREV')}>Prev</button>
        <button onClick={() => handleNavigate('NEXT')}>Next</button>
        <button onClick={() => handleViewChange('month')}>Month</button>
        <button onClick={() => handleViewChange('week')}>Week</button>
        <button onClick={() => handleViewChange('day')}>Day</button>
      </div>

      <div style={{ height: '80vh' }}>
        <Calendar
                  // title={'esfef'}

          ref={calendarRef}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          view={currentView}
          date={currentDate}
          onView={handleViewChange}
          onNavigate={handleNavigate}
          style={{ height: '100%' }}
        />
      </div>
    </div>
    // <div className="p-6">
    //   {/* <h2 className="text-2xl font-semibold mb-4">My Calendar</h  2> */}
    //   <Calendar
    //     localizer={localizer}
    //     events={events}
    //     startAccessor="start"
    //     endAccessor="end"
    //     style={{ height: 600 }}
    //     //if want only one view default
    //     defaultView={'month'}
    //     //if change view
    //     views={['month','week','day']}
    //     //specific date
    //     // date={moment('2025-10-22').toDate()}
    //     // toolbar={false}
    //     max={ moment('2025-08-26T12:12:00').toDate()}
    //     min={moment('2025-08-26T16:16:00').toDate()}
    //     formats={{dayHeaderFormat:(date)=>moment(date).format('dddd @ DD')}}
    //   />
    // </div>
  )
} 

export default MyCalendar
