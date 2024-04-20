<script setup>
import { useBookManagerStore } from "../store/book-manager";
import { ref, onMounted, computed, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const { setbookDetails, setBookDetail } = useBookManagerStore();
const { getBookDetail } = useBookManagerStore();
const router = useRouter();
const route = useRoute();
const bookDetail = ref(null);
const book = ref({
  name: "",
  author: "",
  category: "",
});
const addBookDetails = () => {
  setbookDetails(book.value);
  router.push({ name: "Home" });
};

const isDisabled = computed(() => {
  return !book.value.name || !book.value.author || !book.value.category;
});

const updateBookDetails = () => {
  setBookDetail(route.params.index, book.value);
  router.push({ name: "Home" });
};

watch(
  () => route.params.action,
  (newValue) => {
    if (newValue == "add") {
      book.value = {
        name: "",
        author: "",
        category: "",
      };
    }
  }
);

onMounted(() => {
  if (route.params.action == "edit") {
    bookDetail.value = getBookDetail(route.params.index);
    book.value = bookDetail.value;
  }
});
</script>
<template>
  <section class="flex justify-center h-screen">
    <section class="w-1/3 justify-center pt-8">
      <section class="flex flex-col mt-6">
        <label for="book-category" class="text-sm font-medium">
          Book Category
        </label>
        <input
          type="text"
          v-model="book.category"
          id="book-category"
          class="flex items-center px-2 outline-none text-sm ring-1 py-2 ring-gray-400 focus-within:ring-gray-300 focus-within:ring-2 [&>label:first-child]:focus-within:text-yellow-500 rounded mb-1"
        />
      </section>
      <section class="flex flex-col mt-2">
        <label for="book-name" class="text-sm font-medium"> Book Name </label>
        <input
          type="text"
          v-model="book.name"
          id="book-name"
          class="flex items-center px-2 outline-none text-sm ring-1 py-2 ring-gray-400 focus-within:ring-gray-300 focus-within:ring-2 [&>label:first-child]:focus-within:text-yellow-500 rounded mb-1"
        />
      </section>
      <section class="flex flex-col mt-2">
        <label for="book-author" class="text-sm font-medium">
          Book Author
        </label>
        <input
          type="text"
          id="book-author"
          v-model="book.author"
          class="flex outline-none px-2 text-sm items-center py-2 ring-1 ring-gray-400 focus-within:ring-gray-300 focus-within:ring-2 [&>label:first-child]:focus-within:text-yellow-500 rounded mb-1"
        />
        <section
          v-if="route.params.action == 'add'"
          class="flex justify-end mt-4"
        >
          <button
            @click="addBookDetails"
            :disabled="isDisabled"
            class="text-sm cursor-pointer rounded bg-gray-300 flex items-center gap-2 border px-4 py-2 font-medium capitalize transition-all hover:scale-105 hover:bg-opacity-70 focus:scale-105 active:scale-95 active:bg-opacity-80 disabled:pointer-events-none disabled:opacity-40"
          >
            Add Book
          </button>
        </section>
        <section v-else class="flex justify-end mt-4">
          <button
            :disabled="isDisabled"
            @click="updateBookDetails"
            class="text-sm cursor-pointer rounded bg-gray-300 flex items-center gap-2 border px-4 py-2 font-medium capitalize transition-all hover:scale-105 hover:bg-opacity-70 focus:scale-105 active:scale-95 active:bg-opacity-80 disabled:pointer-events-none disabled:opacity-40"
          >
            Update
          </button>
        </section>
      </section>
    </section>
  </section>
</template>
