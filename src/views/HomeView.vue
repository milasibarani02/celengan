<template>
  <v-container>
    <!-- NavBar -->
    <NavBar />

    <!-- Balance Card -->
    <v-card outlined class="balance-card">
      <v-card-title class="headline">Your balance</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="balance-value-card" outlined>
              <v-card-title>8881567765</v-card-title>
              <v-card-text>
                <span class="balance-amount">Rp {{ balance.toLocaleString() }}</span>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Informasi Deposito -->
    <v-card outlined class="info-deposito-card mt-4">
      <v-card-title class="headline">Informasi Deposito</v-card-title>
      <v-card-text>
        <p>
          <strong>Deposito</strong> merupakan jenis tabungan berjangka di mana nasabah menyimpan uang di bank dengan periode tertentu (biasanya 1, 3, 6, 12, atau 24 bulan). Dana dalam deposito tidak bisa ditarik sebelum jatuh tempo tanpa adanya penalti.
        </p>

        <v-divider class="my-4"></v-divider>

        <p><strong>Jenis-Jenis Deposito:</strong></p>
        <ul class="deposit-types-list">
          <li><strong>Deposito Berjangka:</strong> Deposito dengan periode tertentu dan tidak bisa dicairkan sebelum jatuh tempo.</li>
          <li><strong>Deposito On-Call:</strong> Deposito dengan jangka waktu fleksibel, biasanya 7-30 hari. Cocok untuk dana yang sewaktu-waktu mungkin dibutuhkan.</li>
          <li><strong>Sertifikat Deposito:</strong> Bukti simpanan yang bisa dipindahtangankan atau dijual ke pihak lain.</li>
          <li><strong>Deposito Valas:</strong> Simpanan dalam mata uang asing (USD, EUR, SGD, dll).</li>
        </ul>

        <v-divider class="my-4"></v-divider>

        <p><strong>Keuntungan Deposito:</strong></p>
        <ul class="deposit-benefits-list">
          <li><strong>Bunga Lebih Tinggi:</strong> Bunga deposito lebih tinggi dibandingkan tabungan reguler.</li>
          <li><strong>Aman:</strong> Dijamin oleh LPS (Lembaga Penjamin Simpanan) hingga jumlah tertentu (maksimum Rp 2 miliar).</li>
          <li><strong>Fleksibilitas Jangka Waktu:</strong> Memiliki pilihan tenor yang bervariasi sesuai kebutuhan nasabah.</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      // Assume the balance is fetched dynamically or passed from the backend
      balance: 1000000000, // Replace with dynamic balance data from your API or store
    };
  },
};
</script>

<style scoped>
/* Styling untuk Balance Card */
.balance-card {
  background-color: #7FA1C4;
  border: 1px solid #E2DAD7;
  border-radius: 8px;
  margin-top: 20px;
}

.balance-value-card {
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.balance-amount {
  font-size: 24px;
  font-weight: bold;
  color: #34495E;
}

/* Styling untuk Informasi Deposito */
.info-deposito-card {
  background-color: #F5ECED;
  border: 1px solid #E2DAD7;
  border-radius: 8px;
  padding: 16px;
}

.deposit-types-list,
.deposit-benefits-list {
  padding-left: 16px;
}

.deposit-types-list li,
.deposit-benefits-list li {
  margin-bottom: 8px;
}

.v-card-title {
  font-weight: bold;
  color: #34495E;
}
</style>
