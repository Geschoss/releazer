import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

export const Navigation = () => (
    <motion.ul variants={variants}>
        {itemIds.map(({ to, text }, i) => (
            <MenuItem i={i} to={to} text={text} key={i} />
        ))}
    </motion.ul>
);

const itemIds = [
    { to: '/releazer', text: 'Home' },
    { to: '/releazer/albums', text: 'Albums' },
    { to: '/releazer/tracks', text: 'Tracks' },
];
