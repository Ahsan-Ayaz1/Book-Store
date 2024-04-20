<script setup>
import { useBookManagerStore } from "../store/book-manager";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const { getBookDetails } = storeToRefs(useBookManagerStore());
const { deleteBookDetail } = useBookManagerStore();
const editBookDetails = (index) => {
  router.push({
    name: "BookManager",
    params: { action: "edit", index: index },
  });
};
const deleteBookDetails = (index) => {
  deleteBookDetail(index);
};
</script>

<template>
  <section class="flex flex-col py-10 gap-2 justify-center items-center">
    <section v-if="!getBookDetails.length">
      No Books Available. Please Add Books. To View The Book Details
    </section>
    <section
      v-else
      v-for="(item, index) in getBookDetails"
      :key="index"
      class="w-1/3 flex p-4 rounded items-center justify-between bg-gray-300"
    >
      <section class="flex gap-1 flex-col">
        <p class="text-sm font-medium">
          {{ item.name }}
        </p>
        <p class="text-sm">
          {{ item.author }}
        </p>
        <p class="text-sm">
          <span class="font-medium">Category: </span>{{ item.category }}
        </p>
      </section>
      <section class="flex gap-2">
        <img
          @click="editBookDetails(index)"
          src="/edit.svg"
          alt="EditBook"
          class="transition-all duration-500 hover:scale-125 cursor-pointer"
        />
        <img
          @click="deleteBookDetails(index)"
          src="/delete.svg"
          alt="DeleteBook"
          class="transition-all duration-500 hover:scale-125 cursor-pointer"
        />
      </section>
    </section>
  </section>
</template>
