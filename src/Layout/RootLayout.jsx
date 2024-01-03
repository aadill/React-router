import {NavLink, Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function RootLayout() {
  return (
    <div className="root-layout">
            <Header/>
          <main>
            <Outlet/>
          </main>
          <Footer/>
    </div>
      )
}

export default RootLayout