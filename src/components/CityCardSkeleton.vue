<template>
    <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md">
        <div class="flex flex-col flex-1 gap-2  bg-weather-secondary">
            <AnimatedPlaceholder class="max-w-[50%]  bg-weather-secondary" />

            <AnimatedPlaceholder class="max-w-[40%]  bg-weather-secondary" />
        </div>

        <div class="flex flex-col items-end flex-1 gap-2  bg-weather-secondary">
            <AnimatedPlaceholder class="max-w-[50px] w-full  bg-weather-secondary" />

            <AnimatedPlaceholder class="max-w-[75px] w-full  bg-weather-secondary" />
        </div>
    </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue';


</script>
