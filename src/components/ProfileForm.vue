<template>
  <v-container class="pa-4" fluid>
    <!-- Form Profile -->
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="rounded-lg" :style="{ backgroundColor: '#F5ECED' }">
          <!-- Form Title -->
          <v-card-title class="text-h5" :style="{ color: '#34495E' }">
            Edit Profile
          </v-card-title>

          <v-form @submit.prevent="saveProfile">
            <!-- Alamat -->
            <v-text-field
              v-model="profile.address"
              label="Alamat"
              outlined
              required
              class="mb-4"
              :style="{ backgroundColor: '#ffffff' }"
            />

            <!-- No KTP -->
            <v-text-field
              v-model="profile.ktpNumber"
              label="No KTP"
              outlined
              required
              class="mb-4"
              :style="{ backgroundColor: '#ffffff' }"
            />

            <!-- Nama Ibu Kandung -->
            <v-text-field
              v-model="profile.motherName"
              label="Nama Ibu Kandung"
              outlined
              required
              class="mb-4"
              :style="{ backgroundColor: '#ffffff' }"
            />

            <!-- Jenis Kelamin -->
            <v-select
              v-model="profile.gender"
              :items="genderOptions"
              label="Jenis Kelamin"
              outlined
              required
              class="mb-4"
              :style="{ backgroundColor: '#ffffff' }"
            />

            <!-- Tanggal Lahir -->
            <v-text-field
              v-model="profile.dob"
              label="Tanggal Lahir"
              outlined
              required
              type="date"
              class="mb-4"
              :style="{ backgroundColor: '#ffffff' }"
            />

            <!-- Save Button -->
            <v-btn type="submit" color="#6582AE" block class="my-4 rounded-lg">
              Save Profile
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    // Load existing data from localStorage or set default empty values
    const storedProfile = JSON.parse(localStorage.getItem('profileData'));
    return {
      profile: storedProfile || {
        address: '',
        ktpNumber: '',
        motherName: '',
        gender: '',
        dob: ''
      },
      genderOptions: ['Male', 'Female']
    };
  },
  methods: {
    saveProfile() {
      // Save the updated profile data to localStorage
      localStorage.setItem('profileData', JSON.stringify(this.profile));

      // Notify the user that the profile is saved
      this.$router.push({ name: 'profile-view' }); // Redirect to profile page after saving
    }
  }
};
</script>


<style scoped>
/* Custom styling for the form and buttons */
.v-card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.v-btn {
  background-color: #6582AE; /* Primary button color */
  color: white;
  font-weight: bold;
}

.v-btn:focus,
.v-btn:hover {
  background-color: #7FA1C4; /* Secondary button color */
}

.v-text-field {
  background-color: #ffffff;
  border-radius: 8px;
}

.v-select {
  background-color: #ffffff;
  border-radius: 8px;
}

.v-card-title {
  color: #34495E; /* Neutral Dark for title */
  font-weight: bold;
}

.v-form {
  padding-top: 20px;
}
</style>
