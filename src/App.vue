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

/* Override Element Plus el-main defaults */
.app-main {
  padding: 0 !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
