<script setup>
import JobCard from "./JobCard.vue";
import { ref, defineProps, onMounted } from "vue";
import axios from "axios";

defineProps({
  showCard: {
    type: Number,
  },
});

const jobs = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:3000/jobs");
    jobs.value = response.data;
    console.log(jobs);
  } catch (error) {
    console.error("Error fetching job listings:", error);
  }
});
</script>

<template>
  <div class="container max-w-6xl mx-auto">
    <h1 class="text-2xl font-semibold my-7 text-center uppercase">
      Job Listing
    </h1>
    <hr />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      <div v-for="job in jobs.slice(0, showCard)" :key="job.id">
        <JobCard
          :title="job.title"
          :description="job.description"
          :company="job.company"
          :salary="job.salaryRange"
          :datePosted="job.postedDate"
          :id="job.id"
        />
      </div>
    </div>
  </div>
</template>
