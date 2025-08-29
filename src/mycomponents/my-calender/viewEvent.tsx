import moment from 'moment';

const ViewEvent = ({ selectedEvent, anchorPos, closePopover }: any) => {
  console.log('view event', selectedEvent);
  return (
    <div
      className="absolute z-50 bg-white shadow-lg rounded-lg p-3 w-64"
      style={{
        top: anchorPos.y - 10, // slightly above the event
        left: anchorPos.x,
        transform: 'translate(-50%, -100%)', // center horizontally
      }}
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium">{selectedEvent.title}</h4>
        <button onClick={closePopover} className="text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>
      <p className="text-sm text-gray-500">
        {moment(selectedEvent.start).format('MMM DD, HH:mm')} –{' '}
        {moment(selectedEvent.end).format('HH:mm')}
      </p>
    </div>
  );
};

export default ViewEvent;
