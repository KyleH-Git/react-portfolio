import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;
    return (
        <ul class='nav-bar'>
            {currentPage != '/' &&
                <li>
                    <Link to='/'>
                    Home
                    </Link>
                </li>
            }
            {currentPage != '/About' &&
                <li>
                    <Link to='/About'>
                    About
                    </Link>
                </li>
            }
            {currentPage != '/Contact' &&
                <li>
                    <Link to='/Contact'>
                    Contact
                    </Link>
                </li>
            }
        </ul>
    );
}

export default NavTabs;