<template>
  <ChatWindow :chat-id="id" />
</template>

<script setup lang="ts">
import ChatWindow from '@/components/ChatWindow.vue'

defineProps<{ id: string }>()
</script>
