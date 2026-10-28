export type Member = {
  id: number
  name: string
  role: string
  course?: "IB" | "PC" | "DS"
  message: string
  image: string
}