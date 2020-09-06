const cookieTTL = 60 * 60 * 24 * 30; // 30 суток

export const readCookie = (name: string) =>
    decodeURIComponent(
        (('; ' + document.cookie).split('; ' + name + '=')[1] || '').split(
            ';'
        )[0]
    );

export const saveCookie = (
    name: string,
    value: string | number | boolean,
    ttl = cookieTTL,
    path?: string,
    domain?: string,
    secure?: boolean
) =>
    (document.cookie =
        name +
        '=' +
        encodeURIComponent(value) +
        (ttl
            ? '; expires=' + new Date(+new Date() + ttl * 1000).toUTCString()
            : '') +
        (path ? '; path=' + path : '') +
        (domain ? '; domains=' + domain : '') +
        (secure ? '; secure' : ''));
