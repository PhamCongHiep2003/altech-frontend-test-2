import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Wrapper from './Wrapper';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header>
            <Wrapper/>
        </header>
    );
}

export default Header;
