<script setup>
import jobListingsData from "../jobs.json";
import JobCard from "./JobCard.vue";

const jobs = jobListingsData.jobs;

defineProps({
  showCard : {
    type: Number,
  }
})
</script>

<template>
  <div class="container max-w-6xl mx-auto">
    <h1 class="text-2xl font-semibold my-7 text-center uppercase">Job Listing</h1>
    <hr />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
      <div v-for="job in jobs.slice(0, showCard)">
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
