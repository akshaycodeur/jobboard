<script setup></script>

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
              <div
                class="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center flex-shrink-0 overflow-hidden border border-indigo-200 dark:border-indigo-800/50"
              >
                <span
                  class="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400"
                  >S</span
                >
              </div>
              <div>
                <h3
                  class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Senior Frontend Developer
                </h3>
                <p class="text-indigo-600 dark:text-indigo-400 font-medium">
                  StellarTech Solutions
                </p>
              </div>
            </div>

            <div class="flex items-center gap-3">
              <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300"
              >
                <span class="w-2 h-2 rounded-full bg-green-500 mr-1.5"></span>
                Actively Hiring
              </span>
              <span
                class="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
              >
                Featured
              </span>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5 mb-6">
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >Remote</span
            >
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >Full-time</span
            >
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >$120k–$155k CAD</span
            >
            <span
              class="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium"
              >Senior level</span
            >
          </div>

          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            We're looking for an experienced frontend engineer who is passionate
            about building beautiful, performant user interfaces with modern
            React + TypeScript + TailwindCSS stack.
          </p>

          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h4
                class="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100"
              >
                You will
              </h4>
              <ul class="space-y-2.5 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 dark:text-indigo-400 mt-1.5"
                    >•</span
                  >
                  <span>Lead frontend architecture decisions</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 dark:text-indigo-400 mt-1.5"
                    >•</span
                  >
                  <span>Build and maintain design system</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 dark:text-indigo-400 mt-1.5"
                    >•</span
                  >
                  <span>Optimize for performance & accessibility</span>
                </li>
              </ul>
            </div>

            <div>
              <h4
                class="font-semibold text-lg mb-3 text-gray-900 dark:text-gray-100"
              >
                You bring
              </h4>
              <ul class="space-y-2.5 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 dark:text-indigo-400 mt-1.5"
                    >•</span
                  >
                  <span>5+ years of frontend experience</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 dark:text-indigo-400 mt-1.5"
                    >•</span
                  >
                  <span>Strong React + TypeScript skills</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-500 dark:text-indigo-400 mt-1.5"
                    >•</span
                  >
                  <span>Experience with TailwindCSS & modern tooling</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-800"
          >
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Posted 3 days ago • Kanata, ON / Remote
            </div>

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
