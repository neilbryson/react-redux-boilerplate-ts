const PREFIX = '@route';

export function route(routeName: string) {
    return `${PREFIX}/${routeName}`;
}

export function navigateTo(routeName: string, payload: object, meta: object) {
    return { meta, payload, type: route(routeName) };
}
