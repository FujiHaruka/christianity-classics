export interface EnJa {
  en: string,
  ja: string
}
export interface Book {
  id: number
  title: EnJa
  directory: string
  author: EnJa,
  writtenYear?: string,
  description?: string,
  originalUrl?: string
}

export interface Chapter {
  id: number
  title: EnJa,
  directory: string
}

export interface Sentence {
  id: number,
  en: string,
  ja: string
}
