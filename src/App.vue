<template>
  <el-container class="app-container">
    <el-aside width="260px" class="app-aside">
      <SidebarMenu />
    </el-aside>
    <el-main class="app-main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import SidebarMenu from '@/components/SidebarMenu.vue'
</script>

<style scoped>
.app-container {
  height: 100vh;
  overflow: hidden;
}

.app-aside {
  overflow: hidden;
  border-right: 1px solid #e4e7ed;
}

.app-main {
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@media (max-width: 768px) {
  .app-container {
    flex-direction: column;
  }

  .app-aside {
    width: 100%;
    height: 220px;
    border-right: none;
    border-bottom: 1px solid #e4e7ed;
    flex-shrink: 0;
  }

  .app-main {
    flex: 1;
    min-height: 0;
  }
}
</style>
