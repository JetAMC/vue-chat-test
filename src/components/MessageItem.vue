<template>
  <div class="message-item" :class="`message-item--${message.sender}`">
    <div class="message-item__bubble">{{ message.text }}</div>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '@/types'

defineProps<{
  message: Message
}>()
</script>

<style scoped>
.message-item {
  display: flex;
  margin-bottom: 10px;
}

.message-item--user {
  justify-content: flex-end;
}

.message-item--bot {
  justify-content: flex-start;
}

.message-item__bubble {
  padding: 8px 14px;
  border-radius: 18px;
  max-width: 70%;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.5;
}

.message-item--user .message-item__bubble {
  background: #409eff;
  color: #fff;
  border-radius: 18px 18px 4px 18px;
}

.message-item--bot .message-item__bubble {
  background: #f0f0f0;
  color: #303133;
  border-radius: 18px 18px 18px 4px;
}
</style>
