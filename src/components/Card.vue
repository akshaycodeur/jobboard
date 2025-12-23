<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Not mentioned",
  },
  subtitle: {
    type: String,
    default: "Description not available",
  },
});
</script>

<template>
  <div class="w-full max-w-sm bg-slate-700 rounded-md p-5 text-white">
    <h2 class="text-xl font-semibold mb-3 underline">{{ title }}</h2>
    <p class="mb-3">{{ subtitle }}</p>
    <a href="" class="bg-sky-400 text-white p-2 rounded-md"
      >Browse Applications</a
    >
  </div>
</template>
