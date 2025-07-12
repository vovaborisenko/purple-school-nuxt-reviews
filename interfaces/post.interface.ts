import type { FetchListResponse } from './common.interfaces'

export interface Post {
  id: number
  title: string
  content: string
  author_id: number
  likes: number
  dislikes: number
  rating: number
  published_at: string
  updated_at: string
}

export interface FetchPostsResponse extends FetchListResponse {
  posts: Post[]
}
