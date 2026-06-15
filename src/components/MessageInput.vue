<template>
  <form class="message-input" @submit.prevent="submit">
    <el-input
      v-model="text"
      class="message-input__textarea"
      type="textarea"
      :rows="3"
      :disabled="isSending"
      placeholder="Type a message..."
      resize="none"
      @keydown.enter.prevent="submit"
    />
    <el-button type="primary" native-type="submit" :disabled="!canSubmit" :loading="isSending">
      <el-icon v-if="!isSending"><Promotion /></el-icon>
    </el-button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useChatStore } from '@/stores/chat'

const props = defineProps<{
  chatId: string
}>()

const store = useChatStore()
const text = ref('')

const isSending = computed(() => store.isChatSending(props.chatId))
const canSubmit = computed(() => text.value.trim().length > 0 && !isSending.value)

async function submit() {
  if (!canSubmit.value) {
    return
  }

  const snapshot = text.value.trim()
  text.value = ''

  await store.sendMessage(props.chatId, snapshot)
}
</script>

<style scoped>
.message-input {
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding: 12px 16px;
  border-top: 1px solid #e4e7ed;
  flex-shrink: 0;
}

.message-input__textarea {
  flex: 1;
}
</style>
