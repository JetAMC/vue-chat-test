<template>
  <div class="chat-list-item" :class="{ 'is-active': active }" @click="$emit('click')">
    <span>{{ chat.title }}</span>
    <el-button
      :icon="favorited ? StarFilled : Star"
      link
      size="small"
      class="fav-btn"
      :class="{ 'is-favorited': favorited }"
      @click.stop="store.toggleFavorite(chat.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Star, StarFilled } from '@element-plus/icons-vue'
import { useChatStore } from '@/stores/chat'
import type { Chat } from '@/types'

const props = defineProps<{
  chat: Chat
  active: boolean
}>()

defineEmits<{
  click: []
}>()

const store = useChatStore()

const favorited = computed(() => store.favoriteIds.has(props.chat.id))
</script>

<style scoped>
.chat-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.fav-btn {
  opacity: 0;
  transition: opacity 0.15s;
  color: #f0a020;
}

.chat-list-item:hover .fav-btn,
.fav-btn.is-favorited {
  opacity: 1;
}
</style>
