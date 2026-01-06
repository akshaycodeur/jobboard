<script setup>
import { ref } from 'vue';
import { defineProps } from "vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import JobListings from "./components/JobListings.vue";

const cardDetails = [
  {
    title: "Frontend Developer Roles",
    subtitle: "Browse and manage your frontend developer job applications",
    backgroundColor: "bg-slate-700",
    textColor: "text-white",
  },
  {
    title: "Backend Developer Roles",
    subtitle: "Browse and manage your backend developer job applications",
    backgroundColor: "bg-sky-700",
    textColor: "text-slate-100",
  },
];

const showCard = ref(3);

const loadMore = () => {
  showCard.value += 3;
};

</script>

<template>
  <Navbar />
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
    <button class="px-3 py-2 text-lg bg-orange-300 hover:bg-orange-400 focus:outline-none" @click="loadMore">
      Load more
    </button>
  </div>
</template>
