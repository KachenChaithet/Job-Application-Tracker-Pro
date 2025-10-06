export const BASE_URL = import.meta.env.VITE_API_URL


export const API_PATHS = {
    JOB: {
        CREATE: '/create',
        UPDATE: (id) => `/update/${id}`,
        GETALL: '/getall',
        GETBYID: (id) => `/getById/${id}`,
        DELETE: (id) => `/delete/${id}`,

    },
}