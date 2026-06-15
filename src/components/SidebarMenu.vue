<template>
  <div class="sidebar">
    <div class="sidebar-title">
      <span>Chats</span>
      <el-button
        v-if="!isAdding"
        :icon="Plus"
        circle
        size="small"
        @click="startAdding"
      />
    </div>

    <div v-if="isAdding" class="new-chat-form">
      <el-input
        ref="inputRef"
        v-model="newChatTitle"
        placeholder="Chat name"
        size="small"
        maxlength="50"
        @keydown.enter="confirmAdd"
        @keydown.esc="cancelAdd"
      />
      <div class="new-chat-actions">
        <el-button type="primary" size="small" :disabled="!newChatTitle.trim()" @click="confirmAdd">
          Add
        </el-button>
        <el-button size="small" @click="cancelAdd">Cancel</el-button>
      </div>
    </div>

    <ChatTabBar />

    <el-scrollbar>
      <component :is="activeTab === 'all' ? AllChatsList : FavoritesChatsList" />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons-vue'
import { useChatStore } from '@/stores/chat'
import ChatTabBar from './ChatTabBar.vue'
import AllChatsList from './AllChatsList.vue'
import FavoritesChatsList from './FavoritesChatsList.vue'

type Tab = 'all' | 'favorites'

const store = useChatStore()
const router = useRouter()

const activeTab = ref<Tab>('all')

provide('activeTab', activeTab)
provide('setActiveTab', (tab: Tab) => {
  activeTab.value = tab
})

const isAdding = ref(false)
const newChatTitle = ref('')
const inputRef = ref<InstanceType<typeof import('element-plus')['ElInput']> | null>(null)

function navigate(id: string) {
  router.push({ name: 'chat', params: { id } })
}

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

  navigate(id)
}

function cancelAdd() {
  isAdding.value = false
  newChatTitle.value = ''
}
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.sidebar-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
}

.new-chat-form {
  padding: 8px 12px;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.new-chat-actions {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
}
</style>
