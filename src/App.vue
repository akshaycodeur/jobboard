<script setup>
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
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
    textColor: "text-red-900",
  },
];
</script>

<template>
  <Navbar />
  <Hero
    title="Welcome to your Job tracking board"
    subheading="Organize your job applications"
  />
  <div class="flex mx-auto w-full justify-center space-x-6 my-6">
    <li v-for="details in cardDetails">
      <Card
        :title="details.title"
        :subtitle="details.subtitle"
        :backgroundColor="details.backgroundColor"
        :textColor="details.textColor"
      />
    </li>
  </div>
</template>
