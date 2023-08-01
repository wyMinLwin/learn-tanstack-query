import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink style={{margin:'1em'}} to={'/'} >Home</NavLink>
        <NavLink style={{margin:'1em'}} to={'/people'} >People</NavLink>
        <NavLink style={{margin:'1em'}} to={'/rq-people'} >RQ People</NavLink>
        <NavLink style={{margin:'1em'}} to={'/rq-parallel'} >RQ Parallel</NavLink>
        <NavLink style={{margin:'1em'}} to={'/pagination'} >Pagination</NavLink>
        <NavLink style={{margin:'1em'}} to={'/infinite'} >Infinite</NavLink>

    </nav>
  )
}

export default Navbar