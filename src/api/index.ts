export const apiFetch = async (path: string, options: RequestInit) => {
  const apiURL = process.env.NEXT_PUBLIC_API?.replace(/\/$/, '')

  const response = await fetch(`${apiURL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      'appname/appversion': 'Challenge App/1.0',
    },
  })

  if (!response.ok) {
    if (response.status === 404) {
      return response
    }

    return Promise.reject(new Error(response.statusText))
  }

  return response
}
