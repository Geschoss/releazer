export const auth = async ({
    login,
    password,
}: {
    login: string;
    password: string;
}): Promise<string> => {
    return new Promise((res) => {
        setTimeout(() => {
            res('fake token');
        }, 1000);
    });
};
