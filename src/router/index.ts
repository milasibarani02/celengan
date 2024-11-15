import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ProfileForm from '@/components/ProfileForm.vue';
import ChangePassword from '@/views/ChangePassword.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import DepositoView from '@/views/DepositoView.vue';
import CreateDepositoForm from '@/components/CreateDepositoForm.vue';
import SignupView from '@/views/SignupView.vue';
import MutasiView from '../views/MutasiView.vue';
import axios from 'axios';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login/user', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup', component: SignupView },
  { path: '/profile', name: 'profile-view', component: ProfileView },
  { path: '/profile-form', name: 'profile-form', component: ProfileForm },
  { path: '/change-password', name: 'change-password', component: ChangePassword },
  { path: '/mutasi', name: 'mutasi', component: MutasiView, },
  { path: '/deposito', name: 'Deposito', component: DepositoView },
  { path: '/create-deposito', name: 'CreateDepositoForm', component: CreateDepositoForm, },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/logout', name: 'logout',
    beforeEnter: (to: any, from: any, next: any) => {
      localStorage.removeItem('user');
      next({ name: 'login' });
    }
  },
];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

const instance = axios.create({
  baseURL: 'http://localhost:5674', // Ganti dengan URL backend Anda
  timeout: 10000,  // Waktu timeout dalam milidetik
  headers: { 'Content-Type': 'application/json' }
});

export default instance;

// export default router;
