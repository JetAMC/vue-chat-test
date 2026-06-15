<template>
  <div class="message-item">
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
  justify-content: flex-end;
  margin-bottom: 10px;
}

.message-item__bubble {
  background: #409eff;
  color: #fff;
  padding: 8px 14px;
  border-radius: 18px 18px 4px 18px;
  max-width: 70%;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.5;
}
</style>
