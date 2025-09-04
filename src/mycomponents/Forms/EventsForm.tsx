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
import { Switch } from '@/components/ui/switch';
import { UserPlusIcon } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
type EventFormValues = {
  title: string;
  start: Date | null;
  end: Date | null;
  type: string;
};

function EventsForm({ addEvent }: any) {
  const [activeTab, setActiveTab] = useState('events');
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
      <div className="flex flex-col gap-3 w-full border rounded-t-md">
        <div className="flex w-full border-b min-h-10 bg-gray-100">
          <div
            onClick={() => setActiveTab('events')}
            className={`px-3 min-w-20 font-medium flex justify-center items-center text-sm cursor-pointer border-b-2 ${
              activeTab === 'events'
                ? 'border-contrast text-contrast'
                : 'border-transparent text-gray-600 hover:text-contrast'
            }`}
          >
            Events
          </div>

          <div
            onClick={() => setActiveTab('task')}
            className={`px-3 min-w-20 font-medium flex justify-center items-center text-sm cursor-pointer border-b-2 ${
              activeTab === 'task'
                ? 'border-contrast text-contrast'
                : 'border-transparent text-gray-600 hover:text-contrast'
            }`}
          >
            Task
          </div>
        </div>
        <div className="w-full max-h-[calc(100vh-250px)] min-h-[calc(100vh-250px)] overflow-auto">
          {activeTab === 'events' && (
            <div className="flex flex-col gap-4 p-4 ">
              <div className="flex justify-between items-center">
                <Label className="text-sm">Asia/kolkata, india</Label>
                <div className="max-w-24 cursor-pointer w-full px-2 flex justify-center items-center min-h-10 border rounded-md border-contrast hover:bg-contrast hover:text-white text-contrast text-sm">
                  Select
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Meeting topic
                </Label>
                <Input
                  id="title"
                  value={title || ''}
                  {...register('title', { required: 'Title is required' })}
                  onChange={(e) => {
                    setValue('title', e.target.value, { shouldValidate: true });
                  }}
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">{errors.title.message}</span>
                )}
              </div>
              <div className="flex gap-3 w-full">
                <div className="w-full flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="title">
                    Meeting Date
                  </Label>
                  <Input />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="title">
                    Start Time
                  </Label>
                  <Input />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="title">
                    &nbsp;
                  </Label>
                  <Select
                    value={type}
                    onValueChange={(val) => setValue('type', val, { shouldValidate: true })}
                    {...register('type', { required: 'Select Type' })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="task">30</SelectItem>
                      <SelectItem value="event">45</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Estimated Duration
                </Label>
                <div className="flex gap-2 w-full overflow-auto">
                  <div className="min-h-8 px-3 justify-center whitespace-nowrap items-center text-sm flex border border-contrast text-white bg-contrast rounded-sm">
                    15 min
                  </div>
                  <div className="min-h-8 px-3 justify-center whitespace-nowrap items-center text-sm flex border hover:text-white hover:bg-contrast rounded-sm">
                    30 min
                  </div>
                  <div className="min-h-8 px-3 justify-center whitespace-nowrap items-center text-sm flex border hover:text-white hover:bg-contrast rounded-sm">
                    45 min
                  </div>
                  <div className="min-h-8 px-3 justify-center whitespace-nowrap items-center text-sm flex border hover:text-white hover:bg-contrast rounded-sm">
                    1:30 hr
                  </div>
                  <div className="min-h-8 px-3 justify-center whitespace-nowrap items-center text-sm flex border hover:text-white hover:bg-contrast rounded-sm">
                    2 hr
                  </div>
                  <div className="min-h-8 px-3 justify-center whitespace-nowrap items-center text-sm flex border hover:text-white hover:bg-contrast rounded-sm">
                    2:30 hr
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 py-3">
                <div className="flex gap-4 justify-between items-center w-full">
                  <Label className="text-sm" htmlFor="Tasks">
                    Allow join meeting before host
                  </Label>
                  <Switch />
                </div>
                <div className="flex gap-4 justify-between items-center w-full">
                  <Label className="text-sm" htmlFor="Tasks">
                    Need Password to join meeting
                  </Label>
                  <Switch />
                </div>
              </div>
              <div className="flex justify-end w-full pb-3">
                <div className="max-w-44 cursor-pointer w-full px-2 gap-2  flex justify-center items-center min-h-10 border rounded-md border-contrast hover:bg-contrast hover:text-white text-contrast text-sm">
                  <UserPlusIcon width={18} height={18} /> Invite Participants
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center w-full">
                <Label className="text-sm" htmlFor="Tasks">
                  Need Password to join meeting
                </Label>
                <Switch />
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Reminder Mode
                </Label>
                <Select
                  value={type}
                  onValueChange={(val) => setValue('type', val, { shouldValidate: true })}
                  {...register('type', { required: 'Select Type' })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="task">Demo@teck.com</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Decription
                </Label>
                <div className="w-full">
                  <Textarea />
                </div>
              </div>
              <div className="grid gap-2 hidden">
                <Label className="text-sm" htmlFor="type">
                  Type
                </Label>
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

              <div className=" gap-2 hidden">
                <Label className="text-sm">Date & Time</Label>
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
            </div>
          )}
          {activeTab === 'task' && (
            <div className="flex flex-col gap-4 p-4 ">
              <div className="flex justify-between items-center">
                <Label className="text-sm">Asia/kolkata, india</Label>
                <div className="max-w-24 cursor-pointer w-full px-2 flex justify-center items-center min-h-10 border rounded-md border-contrast hover:bg-contrast hover:text-white text-contrast text-sm">
                  Select
                </div>
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Task topic
                </Label>
                <Input
                  id="title"
                  value={title || ''}
                  {...register('title', { required: 'Title is required' })}
                  onChange={(e) => {
                    setValue('title', e.target.value, { shouldValidate: true });
                  }}
                />
                {errors.title && (
                  <span className="text-red-500 text-sm">{errors.title.message}</span>
                )}
              </div>
              <div className="flex gap-3 w-full">
                <div className="w-full flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="title">
                    Task Date
                  </Label>
                  <Input />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="title">
                    Start Time
                  </Label>
                  <Input />
                </div>
                <div className="w-full flex flex-col gap-1">
                  <Label className="text-sm" htmlFor="title">
                    &nbsp;
                  </Label>
                  <Select
                    value={type}
                    onValueChange={(val) => setValue('type', val, { shouldValidate: true })}
                    {...register('type', { required: 'Select Type' })}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="task">30</SelectItem>
                      <SelectItem value="event">45</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end w-full py-3">
                <div className="max-w-44 cursor-pointer w-full px-2 gap-2  flex justify-center items-center min-h-10 border rounded-md border-contrast hover:bg-contrast hover:text-white text-contrast text-sm">
                  <UserPlusIcon width={18} height={18} /> Invite Participants
                </div>
              </div>
              <div className="flex gap-4 justify-between items-center w-full">
                <Label className="text-sm" htmlFor="Tasks">
                  Reminder
                </Label>
                <Switch />
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Reminder Mode
                </Label>
                <Select
                  value={type}
                  onValueChange={(val) => setValue('type', val, { shouldValidate: true })}
                  {...register('type', { required: 'Select Type' })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="task">Demo@teck.com</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full flex flex-col gap-1">
                <Label className="text-sm" htmlFor="title">
                  Decription
                </Label>
                <div className="w-full">
                  <Textarea />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center gap-2">
        <Button
          variant={'outline'}
          type="submit"
          className="px-6 min-w-32 cursor-pointer h-10 bg-gray-100 "
        >
          Cancel
        </Button>
        <Button
          type="submit"
          className="px-6 min-w-32 bg-contrast text-white hover:bg-contrast cursor-pointer h-10"
        >
          Schedule meeting
        </Button>
      </div>
    </form>
  );
}

export default EventsForm;
