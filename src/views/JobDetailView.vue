<script setup>
    import {ref, onMounted, defineProps} from "vue";
    import {useRoute} from "vue-router";
    import axios from "axios";

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

const route = useRoute();
const jobId = route.params.id;
console.log(jobId);
const jobDetails = ref([]);
onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:3000/jobs/${jobId}`);
    jobDetails.value = response.data;
    
  } catch (error) {
    console.error("Error fetching job listings:", error);
  }
});

console.log(jobDetails);
</script>

<template>
  <div
    class="bg-gray-50 dark:bg-gray-950 min-h-screen text-gray-900 dark:text-gray-100 font-sans"
  >
    <div class="max-w-4xl mx-auto px-4 py-12">
      <div
        class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl"
      >
        <div
          class="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        ></div>

        <div class="p-6 md:p-8">
          <div class="flex items-start justify-between flex-wrap gap-4 mb-5">
            <div class="flex items-center gap-4">
              <div>
                <h3
                  class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
                >
                {{ jobDetails.title }}
                </h3>
                <p class="text-indigo-600 dark:text-indigo-400 font-medium">
{{ jobDetails.company }}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
              >
                <span class="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                {{jobDetails.postedDate}}
              </span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5 mb-6">
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >{{jobDetails.location}}</span
            >
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >{{jobDetails.experienceLevel}}</span
            >
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >{{jobDetails.salaryRange}}</span
            >
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >{{ jobDetails.employmentType }}</span
            >
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {{ jobDetails.description }}
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4
                class="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100"
              >
                Skills
              </h4>
              <ul class="space-y-2.5 text-gray-700 dark:text-gray-300 list list-disc list-inside">
                <li v-for="skill in jobDetails.skills" :key="skill">
                  {{ skill }}
                </li>
              </ul>
            </div>

          </div>

          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800"
          >

            <div class="flex gap-3">
              <button
                class="px-6 py-3 rounded-lg font-medium bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              >
                Save
              </button>
              <button
                class="px-8 py-3 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
