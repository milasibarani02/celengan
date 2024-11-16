<template>
  <div class="admin-user-detail">
    <h2>Detail Tabungan Deposito</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="accountName">Nama Tabungan Deposito</label>
        <input type="text" id="accountName" v-model="form.accountName" required />
      </div>

      <div class="form-group">
        <label for="accountNumber">Nomor Akun Tabungan</label>
        <input type="text" id="accountNumber" v-model="form.accountNumber" required />
      </div>

      <div class="form-group">
        <label for="depositAmount">Nominal Deposito</label>
        <input type="number" id="depositAmount" v-model="form.depositAmount" required />
      </div>

      <div class="form-group">
        <label for="initialDeposit">Nominal Setoran Awal</label>
        <input type="number" id="initialDeposit" v-model="form.initialDeposit" required />
      </div>

      <div class="form-group">
        <label for="startDate">Tanggal Mulai</label>
        <input type="date" id="startDate" v-model="form.startDate" required />
      </div>

      <div class="form-group">
        <label for="maturityDate">Tanggal Jatuh Tempo</label>
        <input type="date" id="maturityDate" v-model="form.maturityDate" required />
      </div>

      <div class="form-group">
        <label for="tenor">Tenor (bulan)</label>
        <input type="number" id="tenor" v-model="form.tenor" required />
      </div>

      <div class="form-group">
        <label for="interestRate">Suku Bunga (%)</label>
        <input type="number" id="interestRate" v-model="form.interestRate" required />
      </div>

      <div class="form-group">
        <label for="sourceAccount">Rekening Sumber</label>
        <input type="text" id="sourceAccount" v-model="form.sourceAccount" required />
      </div>

      <button type="submit">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminUserDetail',
  data() {
    return {
      form: {
        accountName: '',
        accountNumber: '',
        depositAmount: '',
        initialDeposit: '',
        startDate: '',
        maturityDate: '',
        tenor: '',
        interestRate: '',
        sourceAccount: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Logika untuk menyimpan data ke server atau database
      console.log('Form submitted', this.form);

      // Misalnya, kirim data ini ke API atau lakukan validasi dan simpan ke database
      // fetch('/api/endpoint', {
      //   method: 'POST',
      //   body: JSON.stringify(this.form),
      //   headers: { 'Content-Type': 'application/json' }
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error:', error));
    }
  }
};
</script>

<style scoped>
.admin-user-detail {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="date"] {
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
