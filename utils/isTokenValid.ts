export default function isTokenValid(token: string = ''): boolean {
  try {
    const [,payload] = token.split('.')
    const { exp } = JSON.parse(atob(payload))
    return exp > Date.now() / 1e3
  }
  catch {
    return false
  }
}
