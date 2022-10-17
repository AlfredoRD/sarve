
<template>
<div class="text-justify">
  <myTabla v-for="note in notes" :key="note.id" :note="note"/>
  <router-link 
  to="/Add" > addd</router-link>
</div>

</template>

<script>
import myTabla from '../components/tabla'

export default {
  name: 'App',
  components: {
    myTabla,
  },
  computed:  {
    notes() {
      return this.$store.getters.getNotes
    }
  }
}
</script>
