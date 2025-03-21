import { useRoutes } from "react-router-dom"
import Home from "./components/Home/home"
import Users from "./components/User/User"

function App() {

  return (
      useRoutes([
        {
            path:"/",
            element: <Home/>
        },
        {
            path:"/users",
            element: <Users/>
        },
    ])
  )
}

export default App
