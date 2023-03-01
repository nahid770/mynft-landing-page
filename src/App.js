import { BsCollection } from 'react-icons/bs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  const router = createBrowserRouter([
    {path: "/", element:<Home></Home>,},
    {path: "/about", element:<Home></Home>,},
    {path: "/marketplace", element:<Home></Home>,},
    {path: "/collection", element:<BsCollection></BsCollection>},
  ]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
