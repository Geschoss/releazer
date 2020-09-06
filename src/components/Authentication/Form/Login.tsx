import React, { useCallback, useState } from 'react';
import cn from 'classnames';

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

export const Login: React.FC<LoginProps> = ({
    submit,
    loading = false,
}) => {
    const [state] = useState({ login: '', password: '' });

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            submit(state);
        },
        [state]
    );

    return (
        <div className={styles.root}>
            <div className={cn(styles.header, styles.headerText)}>Relezer</div>
            <div
                className={cn(styles.loading, {
                    [styles.loadingStart]: loading,
                })}
            />
            <div className={styles.body}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.buttons}>
                        <button disabled={loading} type="submit">
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
