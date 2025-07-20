export const RoutesUrl = {
    BASE_URL: '/',
    USER_DETAILS: '/details/'
} as const

export type RouterUrl = (typeof RoutesUrl)[keyof typeof RoutesUrl];