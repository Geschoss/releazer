import React, { memo } from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

export const Menu = memo(() => {
    return (
        <motion.aside initial={{ left: -120 }} animate={{ left: 0 }}  className={styles.root}>
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
        </motion.aside>
    );
});
