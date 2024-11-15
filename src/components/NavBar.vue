<template>
  <v-app-bar app color="#6582AE" dark elevate>
    <!-- Logo di Kiri Atas -->
    <v-img
      src="@/assets/celengan2.png"
      alt="Logo Bank Celengan"
      max-width="100"
      max-height="50"
      class="mr-0"
      style="padding-right: -8px;"
    />

    <!-- Teks "Bank Celengan" -->
    <v-toolbar-title class="text-h6" style="color: white; margin-left: -5px;">
      Bank Celengan
    </v-toolbar-title>

    <!-- Menu Navbar -->
    <v-spacer></v-spacer>
    <v-btn variant="text" @click="navigateToHome" class="nav-btn">Home</v-btn>
    <v-btn variant="text" @click="navigateToTransactions" class="nav-btn">Mutasi</v-btn>
    <v-btn variant="text" @click="navigateToDeposito" class="nav-btn">Deposito</v-btn>
    <v-btn variant="text" @click="navigateToProfile" class="nav-btn">Profile</v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const navigateToHome = () => router.push('/');
    const navigateToTransactions = () => router.push('/mutasi');
    const navigateToDeposito = () => router.push('/deposito');
    const navigateToProfile = () => router.push('/profile');

    return {
      navigateToHome,
      navigateToTransactions,
      navigateToDeposito,
      navigateToProfile,
    };
  },
});
</script>

<style scoped>
.v-app-bar {
  background-color: #6582AE; /* Primary color for navbar */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.v-img {
  margin-right: 16px;
}

.v-toolbar-title {
  color: white; /* Ensure the text is white */
  font-weight: bold;
}

.nav-btn {
  color: #fff;
  font-weight: 500;
  margin: 0 15px;
}

.nav-btn:hover {
  background-color: #506f93; /* Slightly darker shade on hover */
  border-radius: 4px;
}

@media (max-width: 600px) {
  .v-app-bar {
    padding-left: 10px;
    padding-right: 10px;
  }

  .nav-btn {
    font-size: 14px;
  }
}
</style>
