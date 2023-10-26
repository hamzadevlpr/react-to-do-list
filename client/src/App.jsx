import { Route, Routes } from "react-router-dom"
import MainPage from "./MainPage"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"

function App() {
  document.body.style.background = 'linear-gradient(to right, #8B5CF6, #D946EF)';

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreateUser title="Create new User" />} />
        <Route path="/update/:id" element={<UpdateUser title="Update User" />} />
      </Routes>


    </>
  )
}

export default App
