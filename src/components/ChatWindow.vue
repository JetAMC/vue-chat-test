<template>
  <div class="chat-window">
    <div class="chat-window__header">
      {{ chat?.title }}
    </div>

    <el-scrollbar class="chat-window__messages">
      <div class="chat-window__message-list">
        <template v-if="messages.length > 0">
          <MessageItem v-for="message in messages" :key="message.id" :message="message" />
        </template>
        <p v-else class="chat-window__empty">No messages yet. Say something!</p>
      </div>
    </el-scrollbar>

    <MessageInput :chat-id="chatId" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useChatStore } from '@/stores/chat'
import MessageItem from './MessageItem.vue'
import MessageInput from './MessageInput.vue'

const props = defineProps<{
  chatId: string
}>()

const store = useChatStore()

const chat = computed(() => store.getChatById(props.chatId))
const messages = computed(() => store.getMessagesByChatId(props.chatId))
</script>

<style scoped>
.chat-window {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.chat-window__header {
  padding: 16px;
  border-bottom: 1px solid #e4e7ed;
  font-weight: 600;
  font-size: 16px;
  flex-shrink: 0;
}

.chat-window__messages {
  flex: 1;
  overflow: hidden;
}

.chat-window__message-list {
  padding: 16px;
}

.chat-window__empty {
  color: #909399;
  text-align: center;
  margin-top: 40px;
  font-size: 14px;
}
</style>
