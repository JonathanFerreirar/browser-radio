export const apiFetch = async (path: string, options: RequestInit) => {
  const apiURL = process.env.NEXT_PUBLIC_API?.replace(/\/$/, '')

  if (!apiURL) {
    return Promise.reject(new Error('API URL is not defined'))
  }

  const response = await fetch(`${apiURL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const errorDetails = await response.text()
    const error = new Error(response.statusText)
    error.message = errorDetails

    if (response.status === 404) {
      return response
    }

    return Promise.reject(error)
  }

  return response
}
