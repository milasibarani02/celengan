<template>
  <div>
    <!-- Navbar at the top -->
    <NavBar />

    <v-card outlined class="deposito-card mt-6 mx-4">
      <v-card-title class="headline">Deposito</v-card-title>
      <v-card-text>
        <v-tabs v-model="activeTab" class="deposito-tabs">
          <!-- Tab Header -->
          <v-tab class="deposito-tab">List Jenis Deposito</v-tab>
          <v-tab class="deposito-tab">My Deposito</v-tab>
        </v-tabs>

        <!-- Isi Tab -->
        <v-tabs-items v-model="activeTab">
          <!-- Tab Jenis Deposito -->
          <v-tab-item v-if="activeTab === 0">
            <v-card outlined class="mb-4 deposito-card-item">
              <v-card-title class="headline">Jenis Deposito</v-card-title>
              <v-card-text>
                <DepositoList :depositTypes="depositTypes" />
              </v-card-text>
            </v-card>
          </v-tab-item>

          <!-- Tab My Deposito -->
          <v-tab-item v-if="activeTab === 1">
            <v-card outlined class="mb-4 deposito-card-item">
              <v-card-title class="headline">My Deposito</v-card-title>
              <v-card-text>
                <MyDepositoList :myDeposits="myDeposits" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import DepositoList from '../components/DepositoList.vue';
import MyDepositoList from '../components/MyDeposito.vue';
import NavBar from '../components/NavBar.vue';

interface DepositType {
  name: string;
  interestRate: number;
}

interface Deposit {
  name: string;
  amount: number;
}

export default defineComponent({
  name: 'DepositoView',
  components: {
    DepositoList,
    MyDepositoList,
    NavBar, // Registering NavBar component
  },
  setup() {
    const activeTab = ref(0); // Default to first tab (List Jenis Deposito)
    const depositTypes = ref<DepositType[]>([
      { name: 'Mini Deposit', interestRate: 3.5 },
      { name: 'Maxima Deposit', interestRate: 5.0 },
    ]);
    const myDeposits = ref<Deposit[]>([
      { name: 'Mini Deposit', amount: 5000000 },
      { name: 'Maxima Deposit', amount: 10000000 },
    ]);

    return {
      activeTab,
      depositTypes,
      myDeposits,
    };
  },
});
</script>

<style scoped>
/* Styling untuk Card dan Tab */
.deposito-card {
  background-color: #7FA1C4; /* Neutral Light for Background */
  border: 1px solid #E2DAD7; /* Neutral Medium for Border */
  border-radius: 8px;
}

.deposito-card-item {
  background-color: #F5ECED;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Styling Tab */
.deposito-tabs {
  background-color: #F5ECED; /* Neutral Light */
}

.deposito-tab {
  color: #34495E; /* Neutral Dark for text */
  background-color: #E2DAD7; /* Neutral Medium for background */
}

.deposito-tab.v-tab--active {
  background-color: #6582AE; /* Primary for active tab */
  color: #FFFFFF; /* White text when active */
}

/* Styling untuk Header */
.headline {
  font-weight: bold;
  color: #34495E; /* Neutral Dark for text */
}

/* Styling tombol */
.v-btn {
  border-radius: 4px;
  font-weight: bold;
}

.v-btn.primary {
  background-color: #6582AE; /* Primary for main button */
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-btn.secondary {
  background-color: #7FA1C4; /* Secondary for alternative button */
  color: white;
  border: 1px solid #E2DAD7; /* Neutral Medium for border */
}

.v-btn:hover {
  opacity: 0.9;
}

/* Styling untuk error/warning/delete notifications */
.error-notification {
  background-color: #E74C3C; /* Accent for error/warning */
  color: white;
  padding: 10px;
  border-radius: 4px;
  margin-top: 16px;
}

/* Styling untuk teks */
.v-list-item-title, .v-list-item-subtitle {
  color: #34495E; /* Neutral Dark */
}

.v-list-item {
  padding: 8px;
}
</style>
