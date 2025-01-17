import './Header.css'

function Navbar(){
    return(
        <div>
            <nav className="navbar">
                <div className="search-container">
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <div className="nav-buttons">
                    <button className="nav-button">Home</button>
                    <button className="nav-button">Add Photos</button>
                    <button className="nav-button">Account</button>
                </div>
            </nav>
        </div>
    )
}

function Header() {
    return (
        <>
            <div className="header">
                <h1 className="logo">Instagram</h1>
                <Navbar />
            </div>
        </>
    )

}

export default Header



