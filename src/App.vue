<script setup>
import BaseHeader from "./components/common/BaseHeader.vue";
import BaseFooter from "./components/common/BaseFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <BaseHeader />
    <router-view></router-view>
    <BaseFooter class="mt-auto" />
  </div>
</template>
