<script setup>
import { defineProps } from "vue";
defineProps({
  backgroundColor: {
    type: String,
    default: "bg-black",
  },
  textColor: {
    type: String,
    default: "text-white",
  },
});
</script>

<template>
  <div v-bind:class="['text-xl p-5 rounded-md', backgroundColor, textColor]">
    <slot></slot>
  </div>
</template>
