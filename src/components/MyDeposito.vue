<template>
  <v-card :style="{ backgroundColor: '#F5ECED' }" class="pa-4 my-deposito-card">
    <!-- Judul -->
    <!-- <v-card-title class="headline" :style="{ color: '#34495E' }">My Deposito</v-card-title> -->

    <!-- Daftar Deposito -->
    <v-card-text>
      <v-list v-if="myDeposits.length > 0">
        <v-list-item
          v-for="(deposit, index) in myDeposits"
          :key="index"
          class="deposit-item"
        >
            <v-list-item-title :style="{ color: '#34495E' }">{{ deposit.name }}</v-list-item-title>
            <v-list-item-subtitle :style="{ color: '#7FA1C4' }">
              Amount: {{ formatCurrency(deposit.amount) }}
            </v-list-item-subtitle>
        </v-list-item>
      </v-list>

      <!-- Pesan jika tidak ada deposito -->
      <div v-if="myDeposits.length === 0" class="no-deposits text-center" :style="{ color: '#34495E' }">
        Anda belum memiliki tabungan deposito.
      </div>
    </v-card-text>

    <!-- Tombol Add Deposito -->
    <v-card-actions class="justify-center">
      <v-btn
        color="#F5ECED"
        dark
        class="add-deposito-btn"
        @click="goToCreateForm"
      >
        Add Deposito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

interface Deposit {
  name: string;
  amount: number;
}

export default defineComponent({
  name: 'MyDepositoList',
  props: {
    myDeposits: {
      type: Array as PropType<Deposit[]>,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    // Fungsi untuk mengarahkan ke form CreateDeposito
    const goToCreateForm = () => {
      router.push({ name: 'CreateDepositoForm' });
    };

    // Fungsi untuk format mata uang
    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value);
    };

    return {
      goToCreateForm,
      formatCurrency,
    };
  },
});
</script>

<style scoped>
/* Styling untuk Card */
.my-deposito-card {
  background-color: #F5ECED; /* Neutral Light for background */
  border: 1px solid #E2DAD7; /* Neutral Medium for border */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.headline {
  font-weight: bold;
  color: #34495E; /* Neutral Dark for text */
}

/* Styling untuk List Deposito */
.v-list-item-title {
  color: #34495E; /* Neutral Dark for text */
  font-size: 16px;
  font-weight: bold;
}

.v-list-item-subtitle {
  color: #34495E; /* Neutral Dark for text */
  font-size: 14px;
  font-weight: normal;
}

/* Styling jika tidak ada deposito */
.no-deposits {
  color: #E74C3C; /* Accent color for error */
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}

/* Tombol Add Deposito */
.add-deposito-btn {
  background-color: #6582AE; /* Primary color for the button */
  color: white;
  border-radius: 4px;
  font-weight: bold;
}

.add-deposito-btn:hover {
  background-color: #51729C; /* Slightly darker Primary color for hover effect */
}

/* Styling untuk tombol dan aksi */
.v-btn {
  border-radius: 4px;
  font-weight: bold;
}

.v-btn.primary {
  background-color: #6582AE; /* Primary color for the button */
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.v-btn.secondary {
  background-color: #7FA1C4; /* Secondary color for the button */
  color: white;
  border: 1px solid #E2DAD7; /* Neutral Medium border */
}

.v-btn:hover {
  opacity: 0.9;
}
</style>
