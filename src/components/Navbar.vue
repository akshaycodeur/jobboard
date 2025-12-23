<script setup></script>

<template>
  <nav class="bg-sky-600 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo / Brand -->
        <div class="flex items-center">
          <a href="#" class="text-2xl font-bold text-slate-100">Job Board</a>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-white hover:text-slate-600 font-medium"
            >Home</a
          >
          <a href="#" class="text-white hover:text-slate-600 font-medium"
            >Listings</a
          >
          <a
            href="#"
            class="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-slate-700"
            >Add Job</a
          >
        </div>

        <div class="md:hidden flex items-center">
          <button
            id="mobile-menu-button"
            class="text-white hover:text-slate-600 focus:outline-none"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                id="hamburger-icon"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                id="close-icon"
                class="hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div
      id="mobile-menu"
      class="hidden md:hidden bg-white border-t border-gray-200"
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          class="block px-3 py-2 text-white hover:text-slate-600 hover:bg-gray-50 rounded-md font-medium"
          >Home</a
        >
        <a
          href="#"
          class="block px-3 py-2 text-white hover:text-slate-600 hover:bg-gray-50 rounded-md font-medium"
          >Listings</a
        >
        <a
          href="#"
          class="block px-3 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 font-medium text-center"
          >Add Job</a
        >
      </div>
    </div>
  </nav>
</template>
