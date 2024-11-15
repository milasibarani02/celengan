<template>
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh; background-color: #F5ECED; padding: 0; width: 100%">
    <v-card class="pa-6" max-width="400px" outlined>
      <v-card-title class="text-h5 text-center" style="color: #6582AE; font-weight: bold;">Sign Up</v-card-title>
      <v-form @submit.prevent="handleSubmit">
        <v-text-field
          v-model="formData.fullName"
          label="Nama Lengkap"
          outlined
          required
          :style="{ backgroundColor: '#fff', borderColor: '#E2DAD7' }"
        />
        <v-text-field
          v-model="formData.username"
          label="Username"
          outlined
          required
          :style="{ backgroundColor: '#fff', borderColor: '#E2DAD7' }"
        />
        <v-text-field
          v-model="formData.password"
          label="Password"
          type="password"
          outlined
          required
          :style="{ backgroundColor: '#fff', borderColor: '#E2DAD7' }"
        />
        <v-btn
          type="submit"
          color="#6582AE"
          block
          class="mt-4"
          style="font-weight: bold; background-color: #6582AE; color: white;"
        >
          Sign Up
        </v-btn>
      </v-form>
      <v-divider class="my-4" style="border-color: #E2DAD7;"></v-divider>
      <v-btn
        text
        @click="goToLogin"
        class="text-center"
        style="color: #7FA1C4;"
      >
        Already have an account? Log In
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'SignUpForm',
  setup() {
    const formData = reactive({
      fullName: '',
      username: '',
      password: ''
    });

    const router = useRouter();

    const handleSubmit = () => {
      // Simpan data ke localStorage
      localStorage.setItem('userData', JSON.stringify(formData));

      // Reset form setelah disubmit
      formData.fullName = '';
      formData.username = '';
      formData.password = '';

      // Redirect ke halaman login setelah berhasil sign up
      router.push({ name: 'login' });
    };

    const goToLogin = () => {
      router.push({ name: 'login' });
    };

    return {
      formData,
      handleSubmit,
      goToLogin
    };
  }
};
</script>

<style scoped>
.v-container {
  padding: 0;
}

.v-card {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;
}

.v-btn {
  font-size: 16px;
}

.v-divider {
  margin-top: 20px;
  margin-bottom: 20px;
}

.v-text-field {
  background-color: #fff;
  border-color: #E2DAD7;
}

.v-btn:hover {
  background-color: #506f93;
}
</style>
