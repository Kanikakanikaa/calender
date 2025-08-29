import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useFormContext, useWatch } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
type EventFormValues = {
  title: string;
  start: Date | null;
  end: Date | null;
  type: string;
};

function EventsForm({ addEvent }: any) {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useFormContext<EventFormValues>();

  const title = useWatch({ control, name: 'title' });
  const start = useWatch({ control, name: 'start' });
  const end = useWatch({ control, name: 'end' });
  const type = useWatch({ control, name: 'type' });

  const onSubmit = (values: EventFormValues) => {
    console.log({ values });
    addEvent(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title || ''}
          {...register('title', { required: 'Title is required' })}
          onChange={(e) => {
            setValue('title', e.target.value, { shouldValidate: true });
          }}
        />
        {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="type">Type</Label>
        <Select
          value={type}
          onValueChange={(val) => setValue('type', val, { shouldValidate: true })}
          {...register('type', { required: 'Select Type' })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="task">Task</SelectItem>
            <SelectItem value="event">Event</SelectItem>
          </SelectContent>
        </Select>
        {errors.type && <span className="text-red-500 text-sm">{errors.type.message}</span>}
      </div>

      <div className="grid gap-2">
        <Label>Date & Time</Label>
        <div className="flex gap-4 w-full">
          {/* From Date */}
          <div className="flex flex-col w-1/2 gap-1">
            <span className="text-sm font-medium">From</span>
            <DatePicker
              selected={start || null}
              onChange={(date) => setValue('start', date)}
              showTimeSelect
              timeIntervals={15}
              dateFormat="MM/dd/yyyy h:mm aa"
              placeholderText="Select start date"
              className="w-full border px-2 py-2 rounded"
            />
          </div>

          {/* To Date */}
          <div className="flex flex-col w-1/2 gap-1">
            <span className="text-sm font-medium">To</span>
            <DatePicker
              selected={end || null}
              onChange={(date) => setValue('end', date)}
              showTimeSelect
              timeIntervals={15}
              dateFormat="MM/dd/yyyy h:mm aa"
              placeholderText="Select end date"
              minDate={start || new Date()}
              disabled={!start}
              className="w-full border px-2 py-2 rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button type="submit" className="px-6">
          Save changes
        </Button>
      </div>
    </form>
  );
}

export default EventsForm;
