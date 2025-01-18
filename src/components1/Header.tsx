import './Header.css'

interface HeaderProps{
    isLoggedIn: boolean;
}

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

function Header({isLoggedIn} : HeaderProps) {
    return (
        <>
            <div className="header">
                <h1 className="logo">Instagram</h1>
                {isLoggedIn && <Navbar />}
            </div>
        </>
    )

}

export default Header



