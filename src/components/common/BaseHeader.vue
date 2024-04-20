<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="py-4 px-4 border bg-gray-300">
    <section class="flex items-center justify-between">
      <RouterLink :to="{ name: 'Home' }">
        <div class="px-4 py-3 flex items-center gap-3">
          <img src="/book-store.svg" class="w-10" alt="BookStore" />
        </div>
      </RouterLink>

      <span
        @click="router.push({ name: 'BookManager', params: { action: 'add' } })"
        class="text-sm cursor-pointer rounded p-2 bg-gray-400 flex items-center gap-2 border px-4 py-2 font-medium capitalize transition-all hover:scale-105 hover:bg-opacity-70 focus:scale-105 active:scale-95 active:bg-opacity-80 disabled:pointer-events-none disabled:opacity-40"
        >Add Book</span
      >
    </section>
  </div>
</template>
