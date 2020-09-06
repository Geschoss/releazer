export const statusIs = <O extends { status: O['status'] }, R extends O>(
    t: R['status']
) => (o: O): o is R => o.status === t;
