import Dashboard from "./components/Dashboard"
import {BrowserRouter} from "react-router-dom"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Dashboard/>
      </BrowserRouter>
    </div> 
  )
}

export default App
