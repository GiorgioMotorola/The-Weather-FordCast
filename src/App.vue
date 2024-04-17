<template>
  <div class="flex flex-col min-h-screen font-ibm-plex-mono bg-weather-primary uppercase">
    <!-- Your existing content -->
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
    <div class="stock-ticker">
      <ul>
        <li class="ticker">
          <span class="first">The Weather-Ford Cast: Your Number One destination for looking up the weather while
            listening to smooth jazz.........</span>
          <span class="second">come down to larry hotdogs auto services for 10% brake pads. sale ends on 11/10/1995.
            tel: 555-555-0085........ </span>
          <span class="third">this weekend, blockbuster nationwide is having a 5 movies for $5 sale. parents, get
            yourself movies for a weekend in and rent a nintendo 64 for the kids only $19.99 for the
            weekend............</span>
        </li>
        <li class="ticker">
          <span class="first">music credits: </span>
          <span class="second">artist: faespencer </span>
          <span class="third">song: "absolutely darling" </span>
        </li>
        <li class="ticker">
          <!-- <span class="first">music credits: </span> -->
          <span class="second">artist: flybirdaudio </span>
          <span class="third">song: "night jazz beats" </span>
        </li>
        <li class="ticker">
          <!-- <span class="first">music credits: </span> -->
          <span class="second">artist: ginodada </span>
          <span class="third">song: "smooth jazz" </span>
        </li>
        <li class="ticker">
          <!-- <span class="first">music credits: </span> -->
          <span class="second">artist: good b music </span>
          <span class="third">song: "refined style" </span>
        </li>
        <li class="ticker">
          <!-- <span class="first">music credits: </span> -->
          <span class="second">artist: moodmode </span>
          <span class="third">song: "smooth turning" </span>
        </li>
        <li class="ticker">
          <!-- <span class="first">music credits: </span> -->
          <span class="second">artist: undruground </span>
          <span class="third">song: "soulfully" </span>
        </li>
        <li class="ticker">
          <!-- <span class="first">music credits: </span> -->
          <span class="second">artist: visiting jasmine </span>
          <span class="third">song: "light funk background music" </span>
        </li>
      </ul>
    </div>
  </div>


</template>

<script setup>
import { ref, computed } from 'vue';
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

<style scoped>
h1 {
  text-align: center;
  margin-block-end: 2.5rem;
}

.stock-ticker {
  font-size: 25px;
  padding-block: 30px;
  border-top: 1px white solid;
  overflow: hidden;
  user-select: none;
  background-color: #405598;
  --gap: 20px;
  display: flex;
  gap: var(--gap);
  color: white;
  font-weight: 200;
}

.stock-ticker ul {
  list-style: none;
  flex-shrink: 0;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--gap);
  animation: scroll 100s linear infinite;
}

.first,
.second,
.third,
li,
ul {
  background-color: #405598;

}

.stock-ticker:hover ul {
  animation-play-state: paused;

}

@keyframes scroll {
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
}
</style>