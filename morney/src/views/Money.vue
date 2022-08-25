<template>
  <div>
    Money.vue
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Money from '@/views/Money.vue';
import Nav from '@/components/Nav.vue';

export default Vue.extend({
    name: "Money",
    components: { Nav }
})
</script>

<style lang="scss" scoped>

</style>