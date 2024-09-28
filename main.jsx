import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Men from './men.jsx';
import Bag from './bag.jsx';
import Women from './women.jsx';
import Beauty from "./beauty.jsx";
import Electronics from "./electronics.jsx";
import Sports from "./sports.jsx";
import Household from "./household.jsx";
import Luggage from "./luggage.jsx";
import Special from "./special.jsx";
import Content from './content.jsx';
import Login from './login.jsx';
import Wishlist from './wishlist.jsx';
import {RouterProvider,createBrowserRouter}from "react-router-dom";
import {Provider} from "react-redux";
import sypreenstore from "./index.js";
const router=createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",element:<Content/>
    },
    { path:"/men",element:<Men/>
   },
   { path:"/women",element:<Women/>
    },
    { path:"/Beauty",element:<Beauty/>
    },
    { path:"/electronics",element:<Electronics/>
    },
    { path:"/sports",element:<Sports/>
    },
    { path:"/household",element:<Household/>
    },
    { path:"/luggage",element:<Luggage/>
    },
    { path:"/special",element:<Special/>
    },
    { path:"/bag",element:<Bag/>
    },
    { path:"/login",element:<Login/>
    },
    { path:"/wishlist",element:<Wishlist/>
    },
  ]
}]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={sypreenstore}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
