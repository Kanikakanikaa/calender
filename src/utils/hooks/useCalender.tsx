import { useContext } from 'react';
import { calenderStateContext } from '../context/calender';

export const useCalender = () => useContext(calenderStateContext);
