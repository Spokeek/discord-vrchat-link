<script setup lang="ts">
import { useAuth } from '#imports';

const { signIn, signOut, status } = useAuth()
</script>

<template>
    <header>
        <span>{{ status }}</span>
        <button v-if="status == 'authenticated'" v-on:click="signOut()">Sign Out</button>
        <button v-else v-on:click="signIn('discord')">Sign In</button>
    </header>
    <NuxtPage />
</template>