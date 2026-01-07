<script setup>
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import JobListings from "../components/JobListings.vue";
</script>

<template>
    <Hero
    title="Welcome to your Job tracking board"
    subheading="Organize your job applications"
  />
  <div class="flex mx-auto w-full justify-center space-x-6 my-6">
    <div v-for="details in cardDetails">
      <Card
        :title="details.title"
        :subtitle="details.subtitle"
        :backgroundColor="details.backgroundColor"
        :textColor="details.textColor"
      />
    </div>
  </div>
  <JobListings :showCard="showCard" />
  <div class="max-w-sm mx-auto text-center">
    <button class="px-3 py-2 text-lg bg-orange-300 hover:bg-orange-400 focus:outline-none" @click="delimit">
      Load more
    </button>
  </div>
</template>