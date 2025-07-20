export const RoutesUrl = {
    BASE_URL: '/',
    USER_LIST: '/user-list',
    USER_DETAILS: '/user-details',
} as const

export type RouterUrl = (typeof RoutesUrl)[keyof typeof RoutesUrl];