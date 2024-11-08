<template>
  <v-card class="pa-4" outlined>
    <v-row>
      <!-- Menampilkan daftar transaksi jika ada data -->
      <v-col v-if="entries.length > 0" cols="12">
        <v-list dense>
          <v-list-item
            v-for="(entry, index) in entries"
            :key="index"
            class="transaction-item"
          >
          <div class="transaction-content">
              <span class="transaction-number">{{ index + 1 }}.</span>
              <span class="transaction-info">
                {{ entry.kategori }} - {{ entry.subKategori || 'Lainnya' }}
              </span>
              <span :class="entry.amount > 0 ? 'income' : 'expense'">
                Rp {{ Math.abs(entry.amount).toLocaleString() }}
              </span>
            </div>
            <v-btn icon @click="$emit('delete-entry', index)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-list>
      </v-col>

      <!-- Tampilkan pesan jika tidak ada data -->
      <v-col v-if="entries.length === 0" cols="12">
        <v-alert type="info" :value="true">
          Tidak ada data transaksi yang tersedia.
        </v-alert>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: 'RekapList',
  props: {
    entries: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.transaction-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.transaction-number {
  font-weight: bold;
  margin-right: 10px;
}

.transaction-info {
  flex: 1;
  margin-right: 10px;
}

.income {
  color: #4caf50; /* Warna hijau untuk pemasukan */
}

.expense {
  color: #f44336; /* Warna merah untuk pengeluaran */
}
</style>
