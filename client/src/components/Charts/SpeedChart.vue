<template>
    <e-charts class="chart" :option="option" />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const option = computed(() => {
    return {
        tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
            name: 'Pressure',
            type: 'gauge',
            progress: {
                show: true
            },
            detail: {
                valueAnimation: true,
                formatter: '{value}'
            },
            data: [
                {
                value: 50,
                name: 'SCORE'
                }
            ]
            }
        ]
    }
});

</script>

<style lang="css" scoped>
.chart{
    width: 380px;
    height: 400px;
}
</style>