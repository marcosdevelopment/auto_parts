import NavDesktop from "../navDesktop/NavDesktop"
import NavMobile from "../navMobile/NavMobile"

const Navbar = () => {
  let screenSize = window.innerWidth
  return(
    <div>
      {screenSize > 600 ? (
        <NavDesktop/>
      ):(
        <NavMobile/>
      )}
    </div>
  )
}

export default Navbar