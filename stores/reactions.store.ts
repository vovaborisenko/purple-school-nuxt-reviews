import type { Post } from '~/interfaces/post.interface'

export const enum Action {
  Liked = 'liked',
  Disliked = 'disliked',
}

interface Reaction {
  id: number
  action: Action
}

export const useReactionsStore = defineStore('reactions', () => {
  const { baseURL } = useConfig()
  const reactions = ref<Reaction[]>([])

  function getPostReaction(postId: number): Action | undefined {
    return reactions.value.find(({ id }) => id === postId)?.action
  }

  function addReaction(reaction: Reaction) {
    reactions.value = reactions.value
      .filter(({ id }) => id !== reaction.id)
      .concat(reaction)
  }

  function setReaction(id: number, action: Action) {
    const requestPostfix = {
      [Action.Liked]: `like`,
      [Action.Disliked]: `dislike`,
    }[action]

    return $fetch<Post>(`/posts/${id}/${requestPostfix}`, {
      baseURL,
      method: 'post',
    }).then((post) => {
      addReaction({ id, action })

      return post
    })
  }

  return { reactions, getPostReaction, setReaction }
}, {
  persist: true,
})
