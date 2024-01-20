<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/profile" } })
</script>

<template>
    <h1>Login</h1>
</template>