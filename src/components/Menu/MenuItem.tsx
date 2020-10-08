import * as React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import styles from './Menu.module.css';

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ i, to, text }: any) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className={styles.icon} style={style} />
            <div className={styles.text} style={style}>
                <Link to={to}>{text}</Link>
            </div>
        </motion.li>
    );
};
