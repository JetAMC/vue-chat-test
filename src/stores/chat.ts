import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Chat, Message } from '@/types'

const SEED_CHATS: Chat[] = [
  { id: '1', title: 'General' },
  { id: '2', title: 'Work' },
  { id: '3', title: 'Family' },
  { id: '4', title: 'Friends' },
  { id: '5', title: 'Ideas' },
]

const SEED_MESSAGES: Message[] = [
  {
    id: crypto.randomUUID(),
    chatId: '1',
    text: 'Hey, how is it going?',
    timestamp: Date.now() - 120000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '1',
    text: 'All good here, just checking in.',
    timestamp: Date.now() - 60000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '2',
    text: "Don't forget the standup at 10.",
    timestamp: Date.now() - 300000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '2',
    text: 'On it, thanks for the reminder!',
    timestamp: Date.now() - 240000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '3',
    text: 'Dinner this Sunday?',
    timestamp: Date.now() - 600000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '3',
    text: "Sounds great, I'll be there!",
    timestamp: Date.now() - 540000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '4',
    text: 'Are you coming to the party?',
    timestamp: Date.now() - 900000,
  },
  {
    id: crypto.randomUUID(),
    chatId: '4',
    text: "Wouldn't miss it!",
    timestamp: Date.now() - 840000,
  },
]

export const useChatStore = defineStore('chat', () => {
  const chats = ref<Chat[]>([...SEED_CHATS])
  const messages = ref<Message[]>([...SEED_MESSAGES])
  const sendingChatIds = ref<Set<string>>(new Set())

  const getChatById = computed(() => (id: string) => chats.value.find((c) => c.id === id))

  const getMessagesByChatId = computed(
    () => (id: string) =>
      messages.value.filter((m) => m.chatId === id).sort((a, b) => a.timestamp - b.timestamp),
  )

  const isChatSending = computed(() => (id: string) => sendingChatIds.value.has(id))

  async function sendMessage(chatId: string, text: string): Promise<void> {
    messages.value.push({
      id: crypto.randomUUID(),
      chatId,
      text: text.trim(),
      timestamp: Date.now(),
    })

    sendingChatIds.value = new Set([...sendingChatIds.value, chatId])

    await new Promise<void>((resolve) => setTimeout(resolve, 1000))

    const next = new Set(sendingChatIds.value)
    next.delete(chatId)
    sendingChatIds.value = next
  }

  return {
    chats,
    messages,
    getChatById,
    getMessagesByChatId,
    isChatSending,
    sendMessage,
  }
})
