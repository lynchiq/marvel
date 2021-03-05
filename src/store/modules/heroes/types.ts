type ThumbnailType = {
  path: string,
  extension: string
}

export type Hero = {
  id: number,
  name: string,
  description: string,
  thumbnail: ThumbnailType
}

export type HeroesState = {
  loading: boolean
}