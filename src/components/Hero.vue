<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "You have not added a title",
  },
  subheading: {
    type: String,
    default: "You have not added a subtitle",
  },
});
</script>

<template>
  <div class="bg-sky-500 text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
      <p class="text-lg mb-8">
        {{ subheading }}
      </p>
      <a
        href="#"
        class="bg-white text-sky-600 px-6 py-3 rounded-md font-semibold hover:bg-slate-100"
        >Get Started</a
      >
    </div>
  </div>
</template>
