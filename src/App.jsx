import logo from './logo.svg';
import './App.css';
import {RouterProvider, createBrowserRouter, createHashRouter} from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Noutfound from './Notfound/Noutfound';
function App() {

  let routes=createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Noutfound/>}
    ]}
  ])
  return <>

  <RouterProvider router={routes}/>


  
  </>
}

export default App;
