<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-form @submit.prevent="changePassword">
          <v-text-field
            v-model="newPassword"
            label="New Password"
            type="password"
            required
          />
          <v-btn type="submit" color="primary">Change Password</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      newPassword: ''
    };
  },
  methods: {
    changePassword() {
      // Save the new password (e.g., to localStorage or API)
      localStorage.setItem('userPassword', this.newPassword);
      this.$router.push({ name: 'profile-view' }); // Navigate back to the ProfileView page
    }
  }
};
</script>

<style scoped>
/* Add styles here */
</style>
