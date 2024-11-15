<template>
  <v-container class="pa-4">
    <v-card outlined class="bordered-card">
      <v-card-title class="headline">Buat Deposito Baru</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <!-- Dropdown Pilih Jenis Deposito -->
          <v-select
            v-model="depositData.type"
            :items="depositTypes"
            label="Pilih Jenis Deposito"
            item-text="name"
            item-value="id"
            outlined
            required
          />

          <!-- Input Jumlah Deposito -->
          <v-text-field
            v-model.number="depositData.amount"
            label="Jumlah Deposito"
            type="number"
            prefix="Rp"
            outlined
            required
          />

          <!-- Pesan Error Saldo Tidak Cukup -->
          <v-alert
            v-if="errorMessage"
            type="error"
            border="start"
            elevation="2"
            class="my-3"
          >
            {{ errorMessage }}
          </v-alert>

          <!-- Pesan Sukses -->
          <v-alert
            v-if="successMessage"
            type="success"
            border="start"
            elevation="2"
            class="my-3"
          >
            {{ successMessage }}
          </v-alert>
        </v-form>
      </v-card-text>

      <!-- Tombol Buat Deposito -->
      <v-card-actions>
        <v-btn color="primary" :disabled="!valid" @click="submitDeposit">
          Buat Deposito
        </v-btn>
        <v-btn variant="text" @click="cancel">Batal</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';  // Import useRouter

export default defineComponent({
  name: 'CreateDepositoForm',
  setup() {
    const router = useRouter();  // Declare router here

    const depositTypes = ref([
      { id: 'maxi', name: 'Maxi Deposito', interest: 5 },
      { id: 'flexi', name: 'Flexi Deposito', interest: 3 },
      { id: 'premium', name: 'Premium Deposito', interest: 7 },
    ]);

    const userBalance = ref(Number(localStorage.getItem('userBalance') || 10000000));
    const depositData = ref({
      type: null,
      amount: 0,
    });

    const valid = ref(false);
    const successMessage = ref('');
    const errorMessage = ref('');

    const resetForm = () => {
      depositData.value = { type: null, amount: 0 };
      successMessage.value = '';
      errorMessage.value = '';
    };

    const submitDeposit = () => {
      if (depositData.value.amount <= 0) {
        errorMessage.value = 'Jumlah deposito harus lebih dari 0.';
        successMessage.value = '';
        return;
      }

      if (depositData.value.amount > userBalance.value) {
        errorMessage.value = 'Saldo tidak mencukupi untuk membuat deposito.';
        successMessage.value = '';
        return;
      }

      const myDeposits = JSON.parse(localStorage.getItem('myDeposits') || '[]');
      myDeposits.push({
        id: myDeposits.length + 1,
        type: depositData.value.type,
        amount: depositData.value.amount,
      });
      localStorage.setItem('myDeposits', JSON.stringify(myDeposits));

      userBalance.value -= depositData.value.amount;
      localStorage.setItem('userBalance', String(userBalance.value));

      successMessage.value = 'Deposito berhasil dibuat.';
      errorMessage.value = '';
      resetForm();
    };

    const cancel = () => {
      // Menggunakan router.push untuk navigasi
      router.push({ name: 'Deposito' });  // Pastikan nama route ini sesuai
    };

    return {
      depositTypes,
      depositData,
      valid,
      userBalance,
      successMessage,
      errorMessage,
      submitDeposit,
      resetForm,
      cancel, // Pastikan cancel ditambahkan ke return statement
    };
  },
});
</script>

<style scoped>
.bordered-card {
  border: 1px solid #E2DAD7;
  border-radius: 8px;
}

.v-select,
.v-text-field {
  margin-bottom: 20px;
}

.v-card-title {
  font-weight: bold;
  color: #34495E;
}

.v-btn {
  margin-right: 10px;
}

.v-alert {
  border-radius: 8px;
}
</style>
