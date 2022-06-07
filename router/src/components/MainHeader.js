import { NavLink } from 'react-router-dom';
import clasess from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={clasess.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={clasess.active} to='/welcome'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={clasess.active} to='/products'>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;