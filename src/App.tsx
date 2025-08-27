// import { RouterProvider } from 'react-router-dom'
import './App.css';
// import { router } from './router'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-calendar/dist/Calendar.css';
import Layout from './Layout';
import { CalenderContextProvider } from './utils/context/calender';

function App() {
  return (
    <>
      <CalenderContextProvider>
        <Layout />
      </CalenderContextProvider>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;
