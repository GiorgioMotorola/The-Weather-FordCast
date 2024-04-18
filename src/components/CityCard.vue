<template>
    <div class="flex py-6 px-3 bg-weather-secondary rounded-md shadow-md cursor-pointer">
        <div class="flex flex-col flex-1 bg-weather-secondary">
            <h2 class="text-3xl">{{ city.city }}</h2>
            <h3>{{ city.state }}</h3>
        </div>

        <div class="flex flex-col gap-2 bg-weather-secondary ">
            <p class="text-3xl self-end bg-weather-secondary ">
                {{ Math.round(city.weather.main.temp) }}&deg;
            </p>
            <div class="flex gap-2 bg-weather-secondary ">
                <span class="text-xs bg-weather-secondary">
                    H:
                    {{ Math.round(city.weather.main.temp_max) }}&deg;
                </span>
                <span class="text-xs bg-weather-secondary">
                    L:
                    {{ Math.round(city.weather.main.temp_min) }}&deg;
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    city: {
        type: Object,
        default: () => { },
    },
});
</script>