import axios from "axios";

export const fetchAPI = async (method, url, body, token) => {

  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  try {
    const response = await instance[method](url, body, token)
    return response.data
  } catch (error) {
    return null
  }
}

export const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)
