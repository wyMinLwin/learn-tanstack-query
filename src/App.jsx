import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DefaultLayout from "./layout/DefaultLayout"
import Home from "./modules/home/Home"
import People from "./modules/people/People"
import RQPeople from "./modules/people/RQPeople"
import Person from "./modules/people/Person"
import RQParallel from "./modules/people/RQParallel"
import Pagination from "./modules/pagination/Pagination"
import Infinte from "./modules/infinite/Infinte"
const App = () => {
  const router = createBrowserRouter([
    {
      path:"",
      element: <DefaultLayout />,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/people",
          element: <People />
        },
        {
          path:"/rq-people",
          children: [
            {path:"",element: <RQPeople />},
            {path:":id",element: <Person />}
          ]
        },
        {
          path:"/rq-parallel",
          element: <RQParallel />
        },
        {
          path:"/pagination",
          element: <Pagination />
        },
        {
          path:"/infinite",
          element: <Infinte />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App