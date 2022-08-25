<template>
  <div class="nav-wrapper">
    <div class="content">Labels.vue</div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Labels from '@/views/Labels.vue';
import Nav from '@/components/Nav.vue';

export default Vue.extend({
    name: "Labels",
    components: { Nav }
})
</script>

<style lang="scss" scoped>
   .nav-wrapper{
    border:1px solid green;
    display:flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .content{
    flex-grow: 1;
  }
</style>