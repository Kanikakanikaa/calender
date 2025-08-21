
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'
import 'react-big-calendar/lib/css/react-big-calendar.css'
function App() {

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
