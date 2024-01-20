<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({ middleware: "guest-only", auth: { authenticatedRedirectTo: "/profile" } })
</script>

<template>
  <div>
    Discord To VRChat Linker
    <div>
      <a href="/api/auth/signin" class="buttonPrimary">Native Link Sign in</a>
    </div>
  </div>
</template>