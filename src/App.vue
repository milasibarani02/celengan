<template>
  <v-container>
    <!-- Judul di atas konten -->
    <v-row>
      <v-col cols="12">
        <h1 class="title-green text-center">Dompetku – Expense & Income Money Management</h1>
      </v-col>
    </v-row>

    <v-row>
      <!-- Form Component on the left -->
      <v-col cols="12" md="6">
        <v-card class="pa-10 mb-4 form-card" outlined>
          <input-form @add-entry="addEntry"></input-form>
        </v-card>
      </v-col>

      <!-- Summary Component on the right -->
      <v-col cols="12" md="6">
        <v-card class="pa-10 mb-4 summary-card" outlined>
          <h3>Summary</h3>
          <v-col class="summary-wrapper">
            <!-- Total Transaksi -->
            <v-row class="summary-item">
              <v-icon color="blue" small>mdi-circle</v-icon>
              <span>Total Transaksi: {{ entries.length }}</span>
            </v-row>

            <!-- Total Pemasukan -->
            <v-row class="summary-item">
              <v-icon color="green" small>mdi-circle</v-icon>
              <span>Pemasukan: Rp {{ totalPemasukan.toLocaleString() }}</span>
            </v-row>

            <!-- Total Pengeluaran -->
            <v-row class="summary-item">
              <v-icon color="red" small>mdi-circle</v-icon>
              <span>Pengeluaran: Rp {{ totalPengeluaran.toLocaleString() }}</span>
            </v-row>

            <!-- Total Saldo -->
            <v-row class="summary-item">
              <v-icon color="purple" small>mdi-circle</v-icon>
              <span>Saldo: Rp {{ totalSaldo.toLocaleString() }}</span>
            </v-row>

            <!-- Status Saldo -->
            <v-row class="summary-item">
              <v-icon :color="saldoStatusColor" small>mdi-circle</v-icon>
              <span>{{ saldoStatus }}</span>
            </v-row>
          </v-col>



          <div class="rekap-list">
            <RekapList :entries="entries" @delete-entry="deleteEntry" />
            <!-- Tombol Hapus Semua dengan Konfirmasi -->
            <v-btn class="clear-all" color="red" dark @click="confirmClearAll">
              Hapus Semua Data
            </v-btn>
          </div>


        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InputForm from './components/InputForm.vue';

export default {
  name: 'DompetkuApp',
  components: {
    InputForm,
  },
  data() {
    return {
      entries: JSON.parse(localStorage.getItem('entries')) || [],
    };
  },
  computed: {
    totalPengeluaran() {
      return this.entries.filter(entry => entry.amount < 0).reduce((sum, entry) => sum + entry.amount, 0);
    },
    totalPemasukan() {
      return this.entries.filter(entry => entry.amount > 0).reduce((sum, entry) => sum + entry.amount, 0);
    },
    totalSaldo() {
      return this.totalPemasukan + this.totalPengeluaran;
    },
    saldoStatus() {
      return this.totalSaldo >= 0 ? 'Surplus' : 'Defisit';
    },
    saldoStatusColor() {
      return this.totalSaldo >= 0 ? 'green' : 'red';
    },
  },
  methods: {
    addEntry(entry) {
      // Menambahkan entry baru ke dalam entries
      this.entries.push(entry);

      // Simpan ke localStorage
      localStorage.setItem('entries', JSON.stringify(this.entries));
    },
    deleteEntry(index) {
    // Menghapus satu data berdasarkan indeks
    this.entries.splice(index, 1);
    localStorage.setItem('entries', JSON.stringify(this.entries));
    },
    confirmClearAll() {
      if (confirm('Apakah Anda yakin ingin menghapus semua data?')) {
        this.clearAll();
      }
    },
    clearAll() {
      this.entries = [];
      localStorage.removeItem('entries');
    },
    updateLocalStorage() {
      localStorage.setItem('entries', JSON.stringify(this.entries))
    },
  },
};
</script>

<style scoped>
.v-application, .dompetku {
  min-height: 100vh;
  margin: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f9f9f9;
}

.v-container {
  width: 100%;
}

.title-green {
  color: #4caf50;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}

.content-wrapper {
  gap: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap; /* Ensure responsiveness */
  justify-content: space-between;
}

.summary-card {
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 128, 0, 0.2); /* Warna hijau lembut */
  border-radius: 8px; /* Tambahan: rounding sudut */
}

.form-card {
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 128, 0, 0.2); /* Warna hijau lembut */
  border-radius: 8px; /* Tambahan: rounding sudut */
}

.rekap-list {
  margin-top: 20px;
}

.clear-all {
  margin-top: 20px;
}

.clear-all:hover {
  background-color: #d32f2f; /* warna merah lebih gelap */
}

.summary-wrapper {
  padding: 16px;
}

.summary-item {
  margin-bottom: 8px; /* Menambah jarak antar badge */
}

.v-badge {
  font-size: 1rem;
}

</style>
