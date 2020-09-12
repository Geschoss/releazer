import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

import { Input } from 'components/Form';

import styles from './Login.module.css';

type State = {
    login: string;
    password: string;
};

type LoginProps = {
    error?: Error;
    loading?: boolean;
    submit: (state: State) => void;
};

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const Login: React.FC<LoginProps> = ({ submit, loading = false }) => {
    const [state] = useState({ login: '', password: '' });

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            submit(state);
        },
        [state]
    );

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6 }}
            className={styles.root}
        >
            <div className={cn(styles.header, styles.headerText)}>Relezer</div>
            <div
                className={cn(styles.loading, {
                    [styles.loadingStart]: loading,
                })}
            />
            <div className={styles.body}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <Input />
                        <Input />
                    </div>
                    <div className={styles.buttons}>
                        <button disabled={loading} type="submit">
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};
