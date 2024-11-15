<template>
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh; background-color: #F5ECED; padding: 0; width: 100%">
    <!-- Row untuk Logo dan Form -->
    <v-row class="d-flex justify-center" style="width: 100%;">
      <!-- Logo -->
      <v-col cols="12" class="d-flex justify-center mb-6">
        <v-img
          src="@/assets/logo.png"
          alt="Logo"
          max-width="200"
        />
      </v-col>

      <!-- Form Card -->
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card class="pa-6" elevation="12" style="border-radius: 20px; background-color: #ffffff;">
          <v-card-title class="text-h5" style="color: #34495E; font-weight: bold; text-align: center;">Login</v-card-title>

          <!-- Error Message Display -->
          <v-alert v-if="errorMessage" type="error" dense color="red" class="mb-4">
            {{ errorMessage }}
          </v-alert>

          <v-form @submit.prevent="handleLogin">
            <!-- Username Field -->
            <v-text-field
              v-model="loginData.username"
              label="Username"
              outlined
              required
              :error-messages="usernameError"
              style="background-color: #ffffff;"
              class="mb-4"
            />

            <!-- Password Field -->
            <v-text-field
              v-model="loginData.password"
              label="Password"
              type="password"
              outlined
              required
              :error-messages="passwordError"
              style="background-color: #ffffff;"
              class="mb-4"
            />

            <!-- Login Button -->
            <v-btn type="submit" color="#6582AE" block class="my-4">Log In</v-btn>
          </v-form>

          <!-- Divider -->
          <v-divider></v-divider>

          <!-- SignUp Button -->
          <v-btn text @click="goToSignUp" style="color: #ffffff; font-weight: bold;">Don't have an account? Sign Up</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  name: 'LoginForm',
  setup() {
    const loginData = reactive({
      username: '',
      password: ''
    });

    const errorMessage = ref('');
    const usernameError = ref('');
    const passwordError = ref('');
    const router = useRouter();

    // Function to handle login logic
    const handleLogin = async () => {
      // Reset error messages before checking
      errorMessage.value = '';
      usernameError.value = '';
      passwordError.value = '';

      // Validate form data
      if (!loginData.username) {
        usernameError.value = 'Username is required';
      }
      if (!loginData.password) {
        passwordError.value = 'Password is required';
      }

      // If validation failed, do not proceed
      if (usernameError.value || passwordError.value) {
        return;
      }

      try {
        // Send login request to the backend
        const response = await axios.post('http://localhost:3000/login', loginData);

        // Save JWT token in localStorage
        localStorage.setItem('authToken', response.data.token);

        // Redirect to home page on successful login
        router.push({ name: 'home' });
      } catch (error) {
        errorMessage.value = 'Username or password is incorrect';
      }
    };

    // Function to navigate to Sign Up page
    const goToSignUp = () => {
      router.push({ name: 'signup' });
    };

    return {
      loginData,
      errorMessage,
      usernameError,
      passwordError,
      handleLogin,
      goToSignUp
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
}

.v-btn {
  background-color: #6582AE; /* Primary button color */
  color: white;
  border-radius: 10px;
}

.v-btn:focus,
.v-btn:hover {
  background-color: #7FA1C4; /* Secondary button color */
}

.v-img {
  margin-bottom: 20px; /* Margin to give space between logo and form */
}

.v-card-title {
  color: #34495E;
  font-weight: bold;
}

.v-divider {
  margin: 20px 0;
}

.v-alert {
  margin-bottom: 20px;
}
</style>
