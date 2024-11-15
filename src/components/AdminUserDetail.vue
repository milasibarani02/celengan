<template>
    <v-container>
      <v-card>
        <v-card-title>Detail Pengguna</v-card-title>
        <v-card-subtitle>{{ user.username }}</v-card-subtitle>
        <v-divider></v-divider>

        <v-form>
          <v-text-field
            v-model="user.username"
            label="Username"
            :readonly="!isEditMode"
            outlined
          />
          <v-text-field
            v-model="user.email"
            label="Email"
            type="email"
            :readonly="!isEditMode"
            outlined
          />
          <v-text-field
            v-model="user.fullName"
            label="Nama Lengkap"
            :readonly="!isEditMode"
            outlined
          />
          <v-text-field
            v-model="user.role"
            label="Role"
            :readonly="!isEditMode"
            outlined
          />
          <v-text-field
            v-model="user.phone"
            label="Telepon"
            :readonly="!isEditMode"
            outlined
          />

          <v-btn
            v-if="isEditMode"
            color="success"
            @click="saveUserDetails"
          >
            Simpan
          </v-btn>

          <v-btn
            color="primary"
            @click="toggleEditMode"
          >
            {{ isEditMode ? 'Batal Edit' : 'Edit' }}
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </template>

  <script>
  export default {
    name: 'AdminUserDetail',
    data() {
      return {
        isEditMode: false, // Menandakan apakah dalam mode edit
        user: {
          username: 'admin123',
          email: 'admin@example.com',
          fullName: 'Admin User',
          role: 'Administrator',
          phone: '081234567890'
        }
      };
    },
    methods: {
      toggleEditMode() {
        this.isEditMode = !this.isEditMode;
      },
      saveUserDetails() {
        // Simulasikan penyimpanan perubahan, bisa diubah dengan API call
        console.log('Simpan detail pengguna:', this.user);
        this.isEditMode = false; // Keluar dari mode edit setelah menyimpan
      }
    }
  };
  </script>

  <style scoped>
  /* Styling untuk AdminUserDetail */
  </style>
