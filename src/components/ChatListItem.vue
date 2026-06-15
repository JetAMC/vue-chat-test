<template>
  <div class="chat-list-item" :class="{ 'is-active': active }" @click="$emit('click')">
    {{ chat.title }}
  </div>
</template>

<script setup lang="ts">
import type { Chat } from '@/types'

defineProps<{
  chat: Chat
  active: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<style scoped>
.chat-list-item {
  padding: 14px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}

.chat-list-item:hover {
  background: #f5f7fa;
}

.chat-list-item.is-active {
  background: #ecf5ff;
  border-left: 3px solid #409eff;
  padding-left: 13px;
}
</style>
