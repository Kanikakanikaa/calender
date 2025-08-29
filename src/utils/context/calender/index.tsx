import moment from 'moment';
import { createContext, useState, useRef, type ReactNode, useEffect } from 'react';

const event = [
  {
    title: 'Meeting',
    start: moment('2025-08-21T16:12:00').toDate(),
    end: moment('2025-08-21T18:12:00').toDate(),
  },
  {
    title: 'Meeting1',
    start: moment('2025-08-22T16:12:00').toDate(),
    end: moment('2025-08-22T18:12:00').toDate(),
    type:'task'

  },
  {
    title: 'Meeting2',
    start: moment('2025-08-26T16:12:00').toDate(),
    end: moment('2025-08-26T18:12:00').toDate(),
  },
  {
    title: 'Meeting3',
    start: moment('2025-08-26T16:12:00').toDate(),
    end: moment('2025-08-26T18:12:00').toDate(),
    type:'task'
  },
];
interface CalContextType {
  currentDate?: any;
  currentView?: any;
  events?:Array<Object>|[];
  filterEvents?:any
  task:Boolean;
  event:Boolean;
}
const initialState: CalContextType = {
  currentView: 'month',
  currentDate: new Date(),
  events:event  ,
  filterEvents:[],
  task:true,
  event:true,
  

};

export const calenderStateContext = createContext<any>(initialState);
const { Provider } = calenderStateContext;

export const CalenderContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);  

  useEffect(() => {
    const updated:any=state.events
   if(state.task){
  updated.filter((e: any) => e.type === "task")
   }
  //  if(state.events){
  //  updated.filter((e: any) => e.type === "event")

  //  }
   console.log({updated});
    setState((prev: any) => ({
      ...prev,
      filterEvents:updated
    }));
  }, [state.task,state.event,state.events])
  
  const handleViewChange = (view: string) => {
    setState((prev: any) => ({
      ...prev,
      currentView: view,
    }));
  };

  const handleNavigate = (action: any) => {
    let newDate: any = new Date(state.currentDate);
    switch (action) {
      case 'TODAY':
        newDate = new Date();
        break;
      case 'NEXT':
        if (state.currentView === 'month') newDate.setMonth(newDate.getMonth() + 1);
        if (state.currentView === 'week') newDate.setDate(newDate.getDate() + 7);
        if (state.currentView === 'day') newDate.setDate(newDate.getDate() + 1);
        break;
      case 'PREV':
        if (state.currentView === 'month') newDate.setMonth(newDate.getMonth() - 1);
        if (state.currentView === 'week') newDate.setDate(newDate.getDate() - 7);
        if (state.currentView === 'day') newDate.setDate(newDate.getDate() - 1);
        break;
      default:
        break;
    }
    setState((prev: any) => ({
      ...prev,
      currentDate: newDate,
    }));
  };

  const handleSetDate = (val: string) => {
    console.log({ val });
    setState((prev: any) => ({
      ...prev,
      currentDate: val,
    }));
  };
  const handleAcions = (activeStartDate: any) => {
    const newDate = state.currentDate;
    switch (activeStartDate?.action) {
      case 'prev':
        state.currentDate.setMonth(state.currentDate.getMonth() - 1);
        break;
        
      case 'next':
        state.currentDate.setMonth(state.currentDate.getMonth() + 1);
        break;
         case 'prev2':
      newDate.setFullYear(newDate.getFullYear() - 1);
      break;

    case 'next2':
      newDate.setFullYear(newDate.getFullYear() + 1);
      break;
       default:
      break;
    }
    setState((prev: any) => ({

      ...prev,
      currentDate: newDate,
    }));
  };
  const handleSelectType=(show:boolean,type:string)=>{
    console.log(show,{type});
    if(type==='task'){
       setState((prev:any)=>({
    ...prev,
    task:show
   }))
  }
  else{
    setState((prev:any)=>({
    ...prev,
    event:show
   }))
  }

  }
  
  return (
    <Provider
      value={{
        ...state,
        handleNavigate,
        handleViewChange,
        handleSetDate,
        handleAcions,
        handleSelectType
      }}
    >
      {children}
    </Provider>
  );
};
