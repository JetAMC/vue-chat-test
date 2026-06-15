<template>
  <div class="tab-bar">
    <button
      class="tab-btn"
      :class="{ 'is-active': activeTab === 'all' }"
      @click="setActiveTab('all')"
    >
      All
    </button>
    <button
      class="tab-btn"
      :class="{ 'is-active': activeTab === 'favorites' }"
      @click="setActiveTab('favorites')"
    >
      Favorites
    </button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'
import { Tab } from '@/types'

const activeTab = inject<Ref<Tab>>('activeTab')!
const setActiveTab = inject<(tab: Tab) => void>('setActiveTab')!
</script>

<style scoped>
.tab-bar {
  display: flex;
  border-bottom: 1px solid #e4e7ed;
  flex-shrink: 0;
}

.tab-btn {
  flex: 1;
  padding: 10px 0;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 13px;
  color: #606266;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}

.tab-btn:hover {
  color: #409eff;
}

.tab-btn.is-active {
  color: #409eff;
  border-bottom-color: #409eff;
  font-weight: 600;
}
</style>
