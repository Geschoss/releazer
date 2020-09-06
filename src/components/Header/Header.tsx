import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = memo(() => {
    return (
        <header className={styles.root}>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <Link className={styles.menuLink} to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link className={styles.menuLink} to="/albums">
                            Albums
                        </Link>
                    </li>
                    <li className={styles.menuItem}>
                        <Link className={styles.menuLink} to="/tracks">
                            Tracks
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
});
