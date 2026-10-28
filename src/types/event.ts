export type EventStatus = 'COMPLETED' | 'UPCOMING'

export type ProjectEvent = {
  id: number
  date: string
  title: string
  description: string
  image: string
  status: EventStatus
  href?: string
}
