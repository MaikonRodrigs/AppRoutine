import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles'
import Pages from './pages/Routine'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

{/* <BrowserRouter>
    <Route path="/" component={Login} />
  </BrowserRouter> */}