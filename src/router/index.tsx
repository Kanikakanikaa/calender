import Cal from "@/pages/calender";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
       path: '/',
    element: ( <Cal />),
    // errorElement: <ErrorPage text="❌ Error Occurred" />,
//     children: [
//       {
//         index: true,
//         element: <Cal />,
//         id: 'cal',
       
//     }
// ]
}
])