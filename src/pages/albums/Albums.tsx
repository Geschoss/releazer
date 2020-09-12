import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

import styles from './Albums.module.css';

import { fetchReleaseAction } from 'domain/release/actions';
import { useSelectRelease } from 'domain/store';
import { isReleaseLoading, isReleaseLoaded } from 'domain/release/utils';
import { map } from 'ramda';

const variants = {
    visible: (delay = 0) => ({
        opacity: 1,
        x: 0,
        transition: { delay: delay * 0.2 },
    }),
    hidden: () => ({
        opacity: 0,
        x: -100,
    }),
};

export const Albums = () => {
    const dispatch = useDispatch();
    const releaseStore = useSelectRelease();

    useEffect(() => {
        fetchReleaseAction(dispatch);
    }, []);

    if (isReleaseLoading(releaseStore)) {
        return <div>Loading....</div>;
    }

    if (isReleaseLoaded(releaseStore)) {
        return (
            <div className={styles.root}>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                >
                    {releaseStore.releases.map((release, index) => (
                        <motion.li
                            custom={index + 1}
                            animate="visible"
                            variants={variants}
                            className={styles.release}
                        >
                            {release.title}
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        );
    }

    return <div>errro</div>;
};
