<template>
    <Layout classPrefix="layout">
     <NumberPad/>
     <Types :xxx="333"/>
     <Notes/>
     <Tags/>
    </Layout>
</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '../components/Money/Types.vue';
import Notes from '../components/Money/Notes.vue';
import Tags from '../components/Money/Tags.vue';

export default Vue.extend({
    name: "Money",
    components: { NumberPad, Types, Notes, Tags }
})
</script>

<style lang="scss">
 .layout-content {
   display: flex;
   flex-direction: column-reverse;
 }
</style>


