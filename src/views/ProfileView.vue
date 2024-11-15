<template>
  <v-container class="pa-4" fluid>
    <NavBar />
    <!-- Profile Header -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-avatar size="150" class="mx-auto" :style="{ backgroundColor: '#E2DAD7' }">
          <!-- Ganti ikon account dengan gambar user.png -->
          <img src="@/assets/user.png" alt="User" width="100" height="100" />
        </v-avatar>
        <v-divider class="my-5" :style="{ borderColor: '#E2DAD7' }"></v-divider>
      </v-col>
    </v-row>

    <!-- Full Name with Edit Icon -->
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <v-card :style="{ backgroundColor: '#F5ECED', borderColor: '#E2DAD7', borderWidth: '1px' }">
          <v-card-text class="text-h5" :style="{ color: '#34495E' }">
            {{ fullName }}
            <v-btn
              icon
              @click="goToProfileForm"
              class="ml-2"
              color="#7FA1C4"
            >
              <!-- Ganti ikon pencil dengan gambar Edit.png -->
              <img src="@/assets/Edit.png" alt="Edit" width="24" height="24" />
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Buttons -->
    <v-row justify="center" class="mt-4">
      <v-col cols="12" sm="6" md="4">
        <v-btn
          class="mb-4"
          color="#6582AE"
          block
          @click="changePassword"
        >
          Change Password
        </v-btn>
        <v-btn
          color="#6582AE"
          block
          @click="logout"
        >
          Logout
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  data() {
    const storedName = localStorage.getItem('fullname');
    console.log('Stored Full Name:', storedName); // Pastikan data ada
    return {
      fullName: storedName || 'No Name Available'
    };
  },
  methods: {
    goToProfileForm() {
      this.$router.push({ name: 'profile-form' }); // Sesuaikan dengan nama rute yang sesuai
    },
    changePassword() {
      this.$router.push({ name: 'change-password' }); // Sesuaikan dengan nama rute yang sesuai
    },
    logout() {
      // Logika logout, seperti menghapus data localStorage atau mengarahkan ke halaman login
      localStorage.clear();
      this.$router.push({ name: 'login' }); // Sesuaikan dengan nama rute yang sesuai
    }
  }

};
</script>

<style scoped>
/* Custom styling can be added here if necessary */
</style>
