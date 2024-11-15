<template>
  <v-container>
    <NavBar />
    <HistoryMutasi />
  </v-container>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import HistoryMutasi from '../components/HistoryMutasi.vue';

export default {
  components: {
    NavBar,
    HistoryMutasi,
  },
};
</script>
