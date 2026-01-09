<script setup>
import { ref } from "vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import JobListings from "./components/JobListings.vue";
import { RouterView } from "vue-router";

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

const delimit = () => {
  showCard.value += 3;
};
</script>

<template>
  <Navbar />
  <RouterView />
</template>
