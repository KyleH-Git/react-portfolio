import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;
    return (
        <ul>
            <li>about me</li>
        </ul>
    );
}

export default NavTabs;