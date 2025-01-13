import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <ul>
                <li>
                    <NavLink to='/'>Homepage</NavLink>
                </li>
                <li>
                    <NavLink to='/postpage'>Lista dei post</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Chi siamo</NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavBar;

