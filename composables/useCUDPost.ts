import type { Post } from '~/interfaces/post.interface'

interface PostBody {
  title: string
  content: string
}

export function useCUDPost() {
  const { baseURL } = useConfig()
  const authStore = useAuthStore()

  const headers = computed(() => ({
    Authorization: `Bearer ${authStore.token}`,
  }))

  function create(body: PostBody) {
    return $fetch<Post>('/posts/create', {
      baseURL,
      headers: headers.value,
      method: 'post',
      body,
    })
  }

  function update(id: number | string, body: Partial<PostBody>) {
    return $fetch<Post>(`/posts/${id}`, {
      baseURL,
      headers: headers.value,
      method: 'put',
      body,
    })
  }

  function remove(id: number | string) {
    return $fetch(`/posts/${id}`, {
      baseURL,
      headers: headers.value,
      method: 'delete',
    })
  }

  return { create, update, remove }
}
