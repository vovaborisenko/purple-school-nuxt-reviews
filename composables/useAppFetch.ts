export function useAppFetch<T>(
  request: Parameters<typeof useFetch<T>>[0],
  options: Parameters<typeof useFetch<T>>[1] = {},
) {
  const { baseURL } = useConfig()

  return useFetch<T>(request, { baseURL, ...options })
}
