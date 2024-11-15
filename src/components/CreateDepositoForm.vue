<template>
  <v-container>
    <v-form>
      <!-- Dropdown untuk memilih tipe deposito -->
      <v-select
        v-model="selectedDepositId"
        :items="depositTypes"
        item-text="name"
        item-value="id"
        label="Pilih Tipe Deposito"
        dense
        outlined
      ></v-select>

      <!-- Input untuk nama tabungan -->
      <v-text-field
        v-model="tabunganName"
        label="Nama Tabungan"
        outlined
        dense
      ></v-text-field>

      <!-- Input untuk jumlah deposito -->
      <v-text-field
        v-model="amount"
        label="Jumlah Deposit"
        type="number"
        outlined
        dense
      ></v-text-field>

      <!-- Input untuk periode deposito (bulan) -->
      <v-text-field
        v-model="period"
        label="Periode (bulan)"
        type="number"
        outlined
        dense
      ></v-text-field>

      <!-- Tombol Tambah Deposito -->
      <v-btn color="primary" @click="addDeposit">Tambah Deposito</v-btn>

      <!-- Menampilkan daftar deposito yang telah ditambahkan -->
      <v-list>
        <v-list-item
          v-for="(deposit, index) in depositoList"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ deposit.name }} - {{ deposit.tabunganName }}: Rp{{ deposit.amount }} ({{ deposit.period }} bulan)
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    // Mengambil profileData dan balance dari localStorage
    const storedProfile = JSON.parse(localStorage.getItem('profileData')) || {};
    const storedBalance = parseInt(localStorage.getItem('balance')) || 0;

    return {
      selectedDepositId: null,
      tabunganName: '',
      amount: null,
      period: null,
      balance: storedBalance,
      depositTypes: [
        { id: 'maxi', name: 'Maxi Deposito', interest: 5 },
        { id: 'flexi', name: 'Flexi Deposito', interest: 3 },
        { id: 'premium', name: 'Premium Deposito', interest: 7 },
      ],
      depositoList: [],
    };
  },
  methods: {
    addDeposit() {
      // Validasi input
      if (!this.selectedDepositId || !this.tabunganName || !this.amount || !this.period) {
        alert('Semua field harus diisi!');
        return;
      }

      // Validasi apakah jumlah deposito melebihi saldo
      const depositAmount = parseInt(this.amount);
      if (depositAmount > this.balance) {
        alert('Saldo Anda tidak mencukupi untuk melakukan deposito ini.');
        return;
      }

      // Dapatkan data deposit berdasarkan selectedDepositId
      const selectedDeposit = this.depositTypes.find(
        (deposit) => deposit.id === this.selectedDepositId
      );

      // Buat objek deposito baru
      const newDeposit = {
        id: selectedDeposit.id,
        name: selectedDeposit.name,
        tabunganName: this.tabunganName,
        amount: depositAmount,
        period: this.period,
      };

      // Tambahkan ke daftar deposito
      this.depositoList.push(newDeposit);

      // Kurangi saldo pengguna
      this.balance -= depositAmount;

      // Simpan ke localStorage
      localStorage.setItem('depositoList', JSON.stringify(this.depositoList));
      localStorage.setItem('balance', this.balance);

      // Reset form
      this.selectedDepositId = null;
      this.tabunganName = '';
      this.amount = null;
      this.period = null;

      alert('Deposito berhasil ditambahkan!');
    },
  },
  mounted() {
    // Ambil data dari localStorage jika ada
    const storedDepositoList = JSON.parse(localStorage.getItem('depositoList'));
    if (storedDepositoList) {
      this.depositoList = storedDepositoList;
    }
  },
};
</script>
