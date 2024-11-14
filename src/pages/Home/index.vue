<template>
    <div class="home">
        <TextCard class="text one"></TextCard>
        <TextCard class="text two"></TextCard>
        <TextCard class="text three"></TextCard>
        <TextCard class="text four"></TextCard>
        <InfoCard class="info"></InfoCard>
        <LineChart class="line"</LineChart>
        <PieChart class="pie"></PieChart>
        <SpeedChart class="speed"></SpeedChart>
        <TextCard class="text one"></TextCard>
        <TextCard class="text two"></TextCard>
    </div>~
</template>
<script setup lang="ts">
import { LineChart} from '@/components';
import { PieChart } from '@/components';
import { SpeedChart } from '@/components';
import { TextCard } from '@/components';
import { InfoCard } from '@/components';
</script>
<style lang="less" scoped>
.home{
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    margin-top: 10px;
    height: calc(100vh - 60px);
    border-radius: 20px;
    background-color: #ececec;
    .line{
        margin-top: 10px;
        margin-left: 10px;
        border-radius: 10px;
        width: 600px;
        height: 400px;
        background-color: white;
    }
    .pie{
         margin-top: 10px;
        margin-left: 10px;
        border-radius: 10px;
        background-color: white;
    }
    .speed{
        margin-top: 10px;
        margin-left: 10px;
        border-radius: 10px;
        background-color: white;
    }
}
</style>