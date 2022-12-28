import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">LiburanYuk!</span>
            <div className="navItems">
                <button className="navButton">Daftar</button>
                <button className="navButton">Masuk</button>

            </div>
        </div>
    </div>
  )
}

export default Navbar