<template>
  <div class="flex flex-col min-h-screen font-ibm-plex-mono bg-weather-primary uppercase">
    <div class="flex justify-center">
      <button
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 my-4 sm:py-2 sm:px-4 border border-gray-400 rounded shadow flex items-center"
        style="width: auto; max-width: 150px;" @click="toggleMute">
        <font-awesome-icon :icon="['fas', isMuted ? 'volume-mute' : 'volume-up']" class="text-xl mr-2" />
        {{ isMuted ? 'Unmute' : 'Mute' }}
      </button>
    </div>
    <SiteNavigation />
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import SiteNavigation from './components/SiteNavigation.vue';

const audioElement = new Audio('/alltracks.mp3');
const isMuted = ref(true);

const startFromRandomPosition = () => {
  const maxTime = audioElement.duration;
  const randomTime = Math.random() * maxTime;
  audioElement.currentTime = randomTime;
};

audioElement.addEventListener('loadedmetadata', startFromRandomPosition);

audioElement.play().then(() => {
  audioElement.pause();
}).catch(error => {

  console.error('Failed to play audio:', error.message);
});

const toggleMute = () => {
  audioElement.muted = !audioElement.muted;
  isMuted.value = audioElement.muted;

  if (!audioElement.muted) {
    audioElement.play().catch(error => {
      console.error('Failed to play audio:', error.message);
    });
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-enter-to {
  opacity: 0;
}
</style>