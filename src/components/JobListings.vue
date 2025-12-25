<script setup>
import jobListingsData from "@/jobs.json";
</script>

<template>
  <div class="container max-w-6xl mx-auto">
    <h1 class="text-xl font-semibold">This is a simple job listing</h1>
    <hr />
    <div v-for="job in jobListingsData">
      <h2 class="text-lg font-bold">{{ job.position }}</h2>
      <p class="mb-4">{{ job.company }} - {{ job.location }}</p>
    </div>
  </div>
</template>
