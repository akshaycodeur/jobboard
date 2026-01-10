<script setup></script>

<template>
    <div class="h-[93vh] bg-gray-50 flex items-center justify-center">

        <div class="text-center px-6 py-12 max-w-lg">
            <div class="space-y-6">
                <h1 class="text-8xl md:text-9xl font-black text-gray-800 tracking-tight">
                    404
                </h1>

                <p class="text-3xl md:text-4xl font-bold text-gray-700">
                    Page not found
                </p>

                <p class="text-lg text-gray-500 mt-4">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>

                <div class="mt-10">
                    <router-link to="/" class="inline-block px-8 py-4 text-base font-medium rounded-xl
                  text-white bg-indigo-600 hover:bg-indigo-700 
                  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                  transition duration-200 shadow-lg hover:shadow-xl">
                        ← Back to Home
                    </router-link>
                </div>
            </div>

        </div>

    </div>
</template>