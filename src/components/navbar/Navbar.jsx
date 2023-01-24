import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar">
            <div className="logo">
                <h1>Paypay.</h1>
            </div>
            <ul className="navlinks">
              <li className="navlink">Dashboard</li>
              <li className="navlink">Invoices</li>
              <li className="navlink">Wallet</li>
              <li className="navlink">Activity</li>
              <li className="navlink">Help</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar