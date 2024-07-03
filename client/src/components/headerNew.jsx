import NavTabs from './navTabsNew'
import NavTabOffset from './navTabOffset';

function Header () {
    return (
        <header>
            <NavTabOffset/>
            Kyle Hayden's Portfolio
            <NavTabs/>
        </header>
    );
}

export default Header;