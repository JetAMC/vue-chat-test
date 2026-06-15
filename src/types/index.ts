export type InstanceId = {
    id: string
}

export type Chat = {
  title: string
} & InstanceId

export type Message = {
  chatId: string
  text: string
  timestamp: number
} & InstanceId
