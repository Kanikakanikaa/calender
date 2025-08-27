import {  createContext, useState, useRef, type ReactNode } from 'react';
interface CalContextType {
  currentDate?:any,
  currentView?:any,
}
const initialState:CalContextType = {
  currentView: 'month',
  currentDate: new Date(),
};
export const calenderStateContext = createContext<any>(initialState);
const { Provider } = calenderStateContext;

export const CalenderContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(initialState);

  const calRef = useRef(null);
  console.log({ calRef });

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

  const handleSetDate=(val:string)=>{
    console.log({val});
     setState((prev: any) => ({
      ...prev,
      currentDate: val,
    }));
  }
  return (
    <Provider
      value={{
        ...state,
        handleNavigate,
        handleViewChange,
        handleSetDate
      }}
    >
      {children}
    </Provider>
  );
};

