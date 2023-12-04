import classNames from 'classnames/bind';
import styles from './Wrapper.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faCamera, faVideo, faUser } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Wrapper() {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon icon={faBars} className={cx('desktop-navigation')} />
            <a className={cx('logo')}>
                <img src={images.logo} alt="Pornhub's logo" />
            </a>
            <div className={cx('search-bar')}>
                <FontAwesomeIcon icon={faSearch} />
                <input className={cx('search-input')} />
            </div>
            <div className={cx('upload-btn-content')}>
                <a className={cx('js-header-upload-btn')}>
                    <FontAwesomeIcon icon={faCamera} />
                </a>
                <a className={cx('js-header-upload-btn')}>
                    <FontAwesomeIcon icon={faVideo} />
                </a>
            </div>
            <div className={cx('top-right-profile-menu')}>
                <ul className={cx('notification-icons')}></ul>
                <div className={cx('profile-menu')}>
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
        </div>
    );
}

export default Wrapper;
