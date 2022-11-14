import earth from "./images/earth.svg"


function Nav () {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                <img src={earth} className="logo"/>
                </li>
                <li className="text"> my travel journal. </li>
            </ul>
           
        </nav>
    )
}

export default Nav