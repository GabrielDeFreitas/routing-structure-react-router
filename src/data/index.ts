import { faker } from '@faker-js/faker'

const ARRAY_LENGHT = 4
const LOWER_BOUND_ID = 10000
const UPPER_BOUND_ID = 20000

export const users = Array.from({ length: ARRAY_LENGHT }).map(() => {
    return {
        id: faker.number.int({ min: LOWER_BOUND_ID, max: UPPER_BOUND_ID }),
        email: faker.internet.email().toLocaleLowerCase(),
    }
})