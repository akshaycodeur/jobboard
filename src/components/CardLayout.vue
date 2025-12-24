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
  <div
    class="w-full max-w-sm rounded-md p-5 {{ backgroundColor }} {{ textColor }}"
  >
    <slot></slot>
  </div>
</template>
