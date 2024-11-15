<template>
  <v-container>
    <v-row>
      <!-- Profile Information Section -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title>
            <v-avatar>
              <v-img :src="profilePicture" alt="Profile Icon" />
            </v-avatar>
            <v-spacer></v-spacer>
            <v-btn icon @click="goToEditProfile">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-subtitle>
            <v-text-field v-model="profile.username" label="Username" readonly outlined dense />
          </v-card-subtitle>

          <v-card-actions>
            <v-btn color="primary" @click="goToChangePassword">Change Password</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      profilePicture: "https://randomuser.me/api/portraits/men/1.jpg", // Example profile picture
      profile: {
        username: "john_doe" // Example username, replace with actual data
      }
    };
  },
  methods: {
    goToEditProfile() {
      this.$router.push({ name: 'profile-form' }); // Navigate to ProfileForm to edit profile
    },
    goToChangePassword() {
      this.$router.push({ name: 'change-password' }); // Navigate to Change Password page
    }
  }
};
</script>

<style scoped>
/* Add styles here */
</style>
