<template>
  <div class="admin-dashboard">
    <h1>Dashboard Admin</h1>
    <div class="overview-cards">
      <div class="card">
        <h3>Total Tabungan Deposito</h3>
        <p>{{ totalDeposits }}</p>
      </div>
      <div class="card">
        <h3>Tabungan Deposito Aktif</h3>
        <p>{{ activeDeposits }}</p>
      </div>
      <div class="card">
        <h3>Tabungan Deposito Jatuh Tempo</h3>
        <p>{{ maturedDeposits }}</p>
      </div>
    </div>

    <div class="data-section">
      <h2>Data Tabungan Deposito</h2>
      <table>
        <thead>
          <tr>
            <th>Nama Tabungan</th>
            <th>Nomor Akun</th>
            <th>Setoran Awal</th>
            <th>Tanggal Mulai</th>
            <th>Tanggal Jatuh Tempo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(deposit, index) in deposits" :key="index">
            <td>{{ deposit.accountName }}</td>
            <td>{{ deposit.accountNumber }}</td>
            <td>{{ deposit.initialDeposit }}</td>
            <td>{{ deposit.startDate }}</td>
            <td>{{ deposit.maturityDate }}</td>
            <td>{{ deposit.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      deposits: [
        // Dummy data, you can replace with data fetched from an API or database
        {
          accountName: 'Deposito A',
          accountNumber: '123456',
          initialDeposit: 1000000,
          startDate: '2023-01-01',
          maturityDate: '2024-01-01',
          status: 'Aktif'
        },
        {
          accountName: 'Deposito B',
          accountNumber: '654321',
          initialDeposit: 5000000,
          startDate: '2023-06-01',
          maturityDate: '2024-06-01',
          status: 'Jatuh Tempo'
        },
        // More data...
      ]
    };
  },
  computed: {
    totalDeposits() {
      return this.deposits.length;
    },
    activeDeposits() {
      return this.deposits.filter(deposit => deposit.status === 'Aktif').length;
    },
    maturedDeposits() {
      return this.deposits.filter(deposit => deposit.status === 'Jatuh Tempo').length;
    }
  },
  filters: {
    currency(value) {
      return value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      });
    }
  }
};
</script>

<style scoped>
.admin-dashboard {
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.overview-cards {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
}

.card {
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 25%;
}

.card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.card p {
  font-size: 1.5rem;
  font-weight: bold;
}

.data-section {
  margin-top: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f9f9f9;
}
</style>
