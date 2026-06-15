export type InstanceId = {
    id: string
}

export type Tab = 'all' | 'favorites'

export type Chat = {
  title: string
} & InstanceId

export type Message = {
  chatId: string
  text: string
  timestamp: number
  sender: 'user' | 'bot'
} & InstanceId
