export const API_URL = process.env.NEXT_PUBLIC_API_URL

const API = {
  LOGIN: `${API_URL}/login`,
  USER: {
    GET_LIST: `${API_URL}/users`,
    CREATE: `${API_URL}/users/create`,
    ACTIONS: `${API_URL}/users/:id`
  },
  PRODUCTS: {
    GET_LIST:  `${API_URL}/products`,
  }
}

export default API