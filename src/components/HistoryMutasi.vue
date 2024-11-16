<template>
  <v-card outlined class="history-card">
    <v-card-title class="headline">Riwayat Transaksi</v-card-title>
    <v-card-text>
      <v-list>
        <!-- Jika tidak ada riwayat transaksi -->
        <v-list-item v-if="combinedHistory.length === 0">
          <v-list-item-title>No Transactions Found</v-list-item-title>
          <v-list-item-subtitle>Anda belum memiliki riwayat transaksi.</v-list-item-subtitle>
        </v-list-item>

        <!-- Tampilkan semua riwayat transaksi -->
        <v-list-item-group v-else>
          <v-list-item v-for="(transaction, index) in combinedHistory" :key="index">
            <v-list-item-title>{{ transaction.date }}</v-list-item-title>
            <v-list-item-subtitle>
              {{ transaction.amount }} - {{ transaction.type }}
            </v-list-item-subtitle>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      combinedHistory: [
        1,2,3
      ],
    };
  },
  // created() {
  //   this.loadHistoryData(); // Memuat data riwayat saat komponen dibuat
  // },
  methods: {
    loadHistoryData() {
      // Ambil data dari localStorage
      const depositoData = JSON.parse(localStorage.getItem('depositoHistory') || '[]');
      const topupData = JSON.parse(localStorage.getItem('topupHistory') || '[]');
      const otherData = JSON.parse(localStorage.getItem('otherHistory') || '[]');

      // Gabungkan semua data riwayat
      this.combinedHistory = [...depositoData, ...topupData, ...otherData];

      // Urutkan riwayat berdasarkan tanggal (opsional)
      this.combinedHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
    },
    saveHistoryData() {
      // Simpan riwayat transaksi ke localStorage
      localStorage.setItem('combinedHistory', JSON.stringify(this.combinedHistory));
    },
    addTransaction(transaction) {
      // Tambahkan transaksi baru ke daftar riwayat
      this.combinedHistory.push(transaction);
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

.v-list-item {
  padding: 8px;
}
</style>
