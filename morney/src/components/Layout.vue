<template>
    <div class="nav-wrapper">
    <div class="content">
     <slot/>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name:'Layout'
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