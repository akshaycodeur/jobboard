<script setup>
import { defineProps } from "vue";
import CardLayout from "./CardLayout.vue";
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
  <CardLayout class="{{ backgroundColor }} {{ textColor }}">
    <h2 class="text-xl font-semibold mb-3 underline">{{ title }}</h2>
    <p class="mb-3">{{ subtitle }}</p>
    <a href="" class="bg-sky-400 text-white p-2 rounded-md"
      >Browse Applications</a
    >
  </CardLayout>
</template>
