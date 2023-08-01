import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}

export default DefaultLayout