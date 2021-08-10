import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar(){
    return (
        <nav>
            <ul className="m-4 navbar">
            <li>GoFidget</li>
            <li><Link to="/">Add a New Lead</Link></li>
            <Link to="/leadStatus">Lead Status</Link>
            </ul>
        </nav>
    )
}

export default NavBar