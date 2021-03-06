export type ThumbnailType = {
  path: string,
  extension: string
}

type ComicCreator = {
  name: string,
  role: string
}

type ComicCharacter = {
  name:string
}

export type ComicType = {
  id: number,
  title: string,
  description: string,
  thumbnail: ThumbnailType
  creators: {
    items: ComicCreator[]
  },
  characters: {
    items: ComicCharacter[]
  }
}

export type HeroType = {
  id: number,
  name: string,
  description: string,
  thumbnail: ThumbnailType
}

export type HeroesPaginationType = {
  total: number,
  offset: number,
  limit: number,
  currentPage: number
}

export type HeroesState = {
  loading: boolean,
  favorites: HeroType[]
}