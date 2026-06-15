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
import { ref, provide } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { useAddChat } from '@/composables/useAddChat'
import ChatTabBar from './ChatTabBar.vue'
import AllChatsList from './AllChatsList.vue'
import FavoritesChatsList from './FavoritesChatsList.vue'
import { Tab } from '@/types'

const activeTab = ref<Tab>('all')

provide('activeTab', activeTab)
provide('setActiveTab', (tab: Tab) => {
  activeTab.value = tab
})

const { isAdding, newChatTitle, inputRef, startAdding, confirmAdd, cancelAdd } = useAddChat()
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
