export function useConfig() {
  const config = useRuntimeConfig()

  return { ...config.public }
}
