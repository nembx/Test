<template>
    <div>
      <navBar/>
    </div>
  </template>
  
<script>
import axios from 'axios'
import navBar from '@/components/navBar.vue'
  
export default {
    data () {
        return {
        }
    },
    components: {
        navBar
    },
    async created () {
        const res = await axios.get()
    }
}
</script>
<style>
</style>
  