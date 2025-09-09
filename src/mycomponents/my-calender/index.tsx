import { useCalender } from '@/utils/hooks/useCalender';
import { useCallback, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import AddEvent from './addEvent';
import { FormProvider, useForm } from 'react-hook-form';
import ViewEvent from './viewEvent';

function MyCalendar({ localizer }: any) {
  const { calendarRef, currentDate, currentView, handleViewChange, events,filterEvents } = useCalender();
  const methods = useForm<any>({ defaultValues: { title: '', start: '', end: '' } });

  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState({ title: '', date: '' });
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [anchorPos, setAnchorPos] = useState<{ x: number; y: number } | null>(null);

  const handleSelectSlot = ({ start }: any) => {
    const isoDate = start.toISOString().slice(0, 10);
    setDraft({ ...draft, date: isoDate });
    setOpen(true);
  };

  const handleSelectEvent = useCallback(
    (event: any, e: any) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setAnchorPos({
        x: rect.left + rect.width / 2, 
        y: rect.top, 
      });
      setSelectedEvent(event);
    },

    []
  );

  const addEvent = (e: any) => {
    // e.preventDefault();
    if (!e.title || !draft.date || !e?.type) return;
    const newEvent = {
      title: e.title,
      start: new Date(draft.date),
      end: new Date(draft.date),
      type: e?.type,
      // allDay: true,
    };
    events.push(newEvent);
    setOpen(false);
    setDraft({ title: '', date: '' });
  };

  const handleClose = () => {
    setOpen(false);
    methods?.reset();
  };
  const closePopover = () => {
    setSelectedEvent(null);
    setAnchorPos(null);
  };
  console.log({ events });
  return (
    <div className="p-4 w-full h-full bg-white  rounded-3xl customCalendar ">
      <Calendar
        ref={calendarRef}
        localizer={localizer}
        events={filterEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        view={currentView}
        date={currentDate}
        selectable
        onSelectSlot={handleSelectSlot}
        onView={handleViewChange}
        onSelectEvent={handleSelectEvent}
        className="relative"
        //if want only one view default
        // defaultView={'week'}
        //if change view
        // toolbar={true}
        // max={moment('2025-08-26T12:12:00').toDate()}
        // min={moment('2025-08-26T16:16:00').toDate()}
        // formats={{ dayHeaderFormat: (date) => moment(date).format('dddd @ DD') }}
      />
      {open && (
        <FormProvider {...methods}>
          {' '}
          <AddEvent open={open} handleClose={handleClose} addEvent={addEvent} />
        </FormProvider>
      )}

      {selectedEvent && (
        <ViewEvent
          selectedEvent={selectedEvent}
          anchorPos={anchorPos}
          closePopover={closePopover}
        />
      )}
    </div>
  );
}

export default MyCalendar;
