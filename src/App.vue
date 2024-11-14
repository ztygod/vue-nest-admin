<template>
  <div class="container">
    <Sidebar class="sidebar"></Sidebar>
    <div class="main-container">
      <header>
        <Nav></Nav>
      </header>
      <article>
        <RouterView></RouterView>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Sidebar } from './components';
import { Nav } from './components';
import { RouterView } from 'vue-router';
</script>

<style lang="less" scoped>
.container{
  .sidebar{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: auto;
  }
  .main-container{
    margin-left: 266px;
    width: calc(100% - 266px);
    height: 100vh;
    header {
    }
    article {
    }
  }
}
</style>