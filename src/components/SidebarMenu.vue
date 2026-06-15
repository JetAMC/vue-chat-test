<template>
  <div class="sidebar">
    <div class="sidebar-title">Chats</div>
    <el-scrollbar>
      <ChatListItem
        v-for="chat in store.chats"
        :key="chat.id"
        :chat="chat"
        :active="route.params.id === chat.id"
        @click="navigate(chat.id)"
      />
    </el-scrollbar>
  </div>
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
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-title {
  padding: 16px;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
}
</style>
