import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JobForm from './Components/JobForm'
import Layout from './Components/Layout'
import Navbar from './Components/Navbar'
import './index.css'
import Home from './pages/Home'
import JobTable from './Components/JobTable'
import { Toaster } from 'react-hot-toast'
import JobAnalytics from './pages/JobAnalytics'


function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='/applications' element={<JobTable />} />
            <Route path='/analytics' element={<JobAnalytics />} />
          </Route>
        </Routes>
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>

      {/* <Layout /> */}

      {/* <JobForm /> */}

    </>
  )
}

export default App
