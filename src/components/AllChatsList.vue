<template>
  <ChatListItem
    v-for="chat in store.chats"
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
