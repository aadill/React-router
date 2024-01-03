import {NavLink,Outlet} from 'react-router-dom'

function CareerLayout() {
  return (
    <div className="career-layout">
        <h1>Careers</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, vitae.</p>
        <Outlet />
    </div>
  )
}

export default CareerLayout