<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "Job Title",
  },
  company: {
    type: String,
    default: "Company Hiring",
  },
  description: {
    type: String,
    default: "Job Description",
  },
  salary: {
    type: String,
    default: "0",
  },
  datePosted: {
    type: String,
    default: "Job Title",
  },
  id: {
    type: Number,
  },
});
</script>

<template>
  <div
    class="max-w-sm mx-auto bg-sky-50 border-r-4 hover:bg-sky-100 border-sky-500 p-4 rounded-md space-y-4 relative"
  >
    <h4 class="text-2xl font-bold">{{ title }}</h4>
    <h5 class="text-xl">{{ company }}</h5>
    <p class="text-slate-700">{{ description }}</p>
    <div class="flex justify-between">
      <span class="">{{ salary }}</span>
      <span class="">{{ datePosted }}</span>
    </div>
    <router-link
      :to="`/jobs/${id}`"
      class="absolute w-full h-full -top-4 left-0 text-white rounded-md z-20 cursor-pointer"
    ></router-link>
  </div>
</template>
