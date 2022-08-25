<template>
  <div>
    Labels.vue
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

</style>