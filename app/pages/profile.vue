<script setup lang="ts">
import { definePageMeta, useAuth } from '#imports';

definePageMeta({ middleware: "auth", auth: { guestRedirectTo: "/login" } })

const { user } = useAuth()
</script>

<template>
  <h1>PRIVATE</h1>
  <div>
    <pre>{{ user }}</pre>
  </div>
</template>