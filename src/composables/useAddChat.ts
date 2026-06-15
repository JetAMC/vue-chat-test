import { ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useChatStore } from '@/stores/chat'
import type { ElInput } from 'element-plus'

export function useAddChat() {
  const store = useChatStore()
  const router = useRouter()

  const isAdding = ref(false)
  const newChatTitle = ref('')
  const inputRef = ref<InstanceType<typeof ElInput> | null>(null)

  async function startAdding() {
    isAdding.value = true
    newChatTitle.value = ''

    await nextTick()

    inputRef.value?.focus()
  }

  function confirmAdd() {
    const title = newChatTitle.value.trim()

    if (!title) {
      return
    }

    const id = store.addChat(title)

    isAdding.value = false
    newChatTitle.value = ''

    router.push({ name: 'chat', params: { id } })
  }

  function cancelAdd() {
    isAdding.value = false
    newChatTitle.value = ''
  }

  return { isAdding, newChatTitle, inputRef, startAdding, confirmAdd, cancelAdd }
}
