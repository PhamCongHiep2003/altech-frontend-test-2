import classNames from 'classnames/bind';
import styles from './NetworkBar.module.scss';

const cx = classNames.bind(styles);

function NetworkBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('network-bar')}>
                <ul className={cx('network-list-content')}>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                    <li className={cx('alpha')}>
                        <a className={cx('network-tab')}>UViU</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NetworkBar;
