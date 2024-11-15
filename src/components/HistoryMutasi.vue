<template>
  <v-card outlined class="history-card">
    <v-card-title class="headline">History Mutasi</v-card-title>
    <v-card-text>
      <!-- Tab untuk memilih jenis riwayat -->
      <v-tabs v-model="activeTab" class="history-tabs">
        <v-tab>Deposito</v-tab>
        <v-tab>Topup</v-tab>
        <v-tab>Other</v-tab>
      </v-tabs>

      <v-tabs-items v-model="activeTab">
        <!-- Tab Deposito -->
        <v-tab-item v-if="activeTab === 0">
          <v-list>
            <!-- Jika tidak ada history deposito -->
            <v-list-item v-if="depositoHistory.length === 0">
              <v-list-item-content>
                <v-list-item-title>No Deposito Transactions Found</v-list-item-title>
                <v-list-item-subtitle>Anda belum memiliki riwayat deposito.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item-group v-else>
              <v-list-item v-for="(transaction, index) in depositoHistory" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ transaction.date }}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.amount }} - {{ transaction.type }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-tab-item>

        <!-- Tab Topup -->
        <v-tab-item v-if="activeTab === 1">
          <v-list>
            <!-- Jika tidak ada history topup -->
            <v-list-item v-if="topupHistory.length === 0">
              <v-list-item-content>
                <v-list-item-title>No Topup Transactions Found</v-list-item-title>
                <v-list-item-subtitle>Anda belum melakukan topup.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item-group v-else>
              <v-list-item v-for="(transaction, index) in topupHistory" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ transaction.date }}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.amount }} Topup</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-tab-item>

        <!-- Tab Other -->
        <v-tab-item v-if="activeTab === 2">
          <v-list>
            <!-- Jika tidak ada history lainnya -->
            <v-list-item v-if="otherHistory.length === 0">
              <v-list-item-content>
                <v-list-item-title>No Other Transactions Found</v-list-item-title>
                <v-list-item-subtitle>Belum ada transaksi lainnya.</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item-group v-else>
              <v-list-item v-for="(transaction, index) in otherHistory" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ transaction.date }}</v-list-item-title>
                  <v-list-item-subtitle>{{ transaction.amount }} - {{ transaction.type }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0, // Default to Deposito tab
      depositoHistory: [],
      topupHistory: [],
      otherHistory: [],
    };
  },
  created() {
    this.loadHistoryData(); // Load history data from localStorage when the component is created
  },
  methods: {
    loadHistoryData() {
      // Get data from localStorage
      const depositoData = localStorage.getItem('depositoHistory');
      const topupData = localStorage.getItem('topupHistory');
      const otherData = localStorage.getItem('otherHistory');

      // Parse JSON data if available, otherwise use empty arrays
      this.depositoHistory = depositoData ? JSON.parse(depositoData) : [];
      this.topupHistory = topupData ? JSON.parse(topupData) : [];
      this.otherHistory = otherData ? JSON.parse(otherData) : [];
    },
    saveHistoryData() {
      // Save history data to localStorage
      localStorage.setItem('depositoHistory', JSON.stringify(this.depositoHistory));
      localStorage.setItem('topupHistory', JSON.stringify(this.topupHistory));
      localStorage.setItem('otherHistory', JSON.stringify(this.otherHistory));
    },
    addDepositoTransaction(transaction) {
      // Add a new deposito transaction and save to localStorage
      this.depositoHistory.push(transaction);
      this.saveHistoryData();
    },
    addTopupTransaction(transaction) {
      // Add a new topup transaction and save to localStorage
      this.topupHistory.push(transaction);
      this.saveHistoryData();
    },
    addOtherTransaction(transaction) {
      // Add a new other transaction and save to localStorage
      this.otherHistory.push(transaction);
      this.saveHistoryData();
    },
  },
};
</script>

<style scoped>
/* Styling untuk Card */
.history-card {
  background-color: #7FA1C4; /* Neutral Light for background */
  border: 1px solid #E2DAD7; /* Neutral Medium for border */
  border-radius: 8px;
  margin-top: 20px;
}

/* Styling untuk Tab */
.history-tabs {
  background-color: #F5ECED; /* Neutral Light */
}

.history-tab {
  color: #34495E; /* Neutral Dark for text */
  background-color: #E2DAD7; /* Neutral Medium for background */
}

.history-tab.v-tab--active {
  background-color: #6582AE; /* Primary for active tab */
  color: #FFFFFF; /* White text when active */
}

/* Styling untuk Riwayat */
.v-list-item-title {
  font-weight: bold;
  color: #34495E; /* Neutral Dark */
}

.v-list-item-subtitle {
  color: #7FA1C4; /* Secondary for the subtitle */
}

.v-list-item-content {
  padding: 8px;
}
</style>
