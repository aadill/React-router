import { useLocation, Link } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation()
    console.log(location.pathname)

    let currentLocation=''
    const crumbs = location.pathname.split('/')
                    .filter(crumb => crumb!=='')
                    .map(crumb => {
                        currentLocation+=`/${crumb}` 

                        return(
                            <div className="crumb" key={crumb}>
                                <Link to={currentLocation}>{crumb}</Link>
                            </div>
                        )
                    })


  return (
    <div className='breadcrumbs'>{crumbs}</div>
  )
}

export default Breadcrumbs