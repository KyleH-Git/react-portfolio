import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;
    console.log(currentPage);
    return (
        <ul>
            <li>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li>
                <Link to='/About'>
                About
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;