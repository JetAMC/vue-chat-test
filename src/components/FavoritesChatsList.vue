<template>
  <div v-if="store.favoriteChats.length === 0" class="empty-state">
    No favorites yet
  </div>
  <ChatListItem
    v-for="chat in store.favoriteChats"
    :key="chat.id"
    :chat="chat"
    :active="route.params.id === chat.id"
    @click="navigate(chat.id)"
  />
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { useChatStore } from '@/stores/chat'
import ChatListItem from './ChatListItem.vue'

const store = useChatStore()
const route = useRoute()
const router = useRouter()

function navigate(id: string) {
  router.push({ name: 'chat', params: { id } })
}
</script>

<style scoped>
.empty-state {
  padding: 24px 16px;
  text-align: center;
  color: #909399;
  font-size: 13px;
}
</style>
