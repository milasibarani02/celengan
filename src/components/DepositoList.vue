<template>
  <v-container>
    <!-- Daftar Deposito -->
    <v-card outlined class="deposito-card mt-4 mx-4">
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="(type, index) in depositTypes"
            :key="index"
            @click="selectType(type)"
            class="deposit-item"
          >
              <v-list-item-title>{{ type.name }}</v-list-item-title>
              <v-list-item-subtitle>Interest Rate: {{ type.interestRate }}%</v-list-item-subtitle>
          </v-list-item>
        </v-list>
        <div v-if="depositTypes.length === 0">No deposit types available.</div>
      </v-card-text>
    </v-card>

    <!-- Dialog Detail Deposito -->
    <v-dialog v-model="isDialogOpen" max-width="500">
      <v-card>
        <v-card-title>Detail Deposito</v-card-title>
        <v-card-text>
          <div>ID Deposito: {{ selectedType.id }}</div>
          <div>Nama Deposito: {{ selectedType.name }}</div>
          <div>Min. Amount: {{ selectedType.minAmount }}</div>
          <div>Max. Amount: {{ selectedType.maxAmount }}</div>
          <div>Total Bonus: {{ calculateBonus(selectedType) }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="#6582AE" text @click="isDialogOpen = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      depositTypes: [
        {
          id: 'D001',
          name: 'Deposito Mini',
          interestRate: 5.5,
          minAmount: 1000000,
          maxAmount: 50000000,
        },
        {
          id: 'D002',
          name: 'Deposito Maxima',
          interestRate: 6.5,
          minAmount: 50000000,
          maxAmount: 100000000,
        },
      ],
      isDialogOpen: false,
      selectedType: {},
    };
  },
  methods: {
    selectType(type) {
      this.selectedType = type;
      this.isDialogOpen = true;
    },
    calculateBonus(type) {
      // Menghitung total bonus berdasarkan interest rate dan maxAmount
      return (type.interestRate / 100) * type.maxAmount;
    },
  },
};
</script>

<style scoped>
.deposito-card {
  margin-top: 32px;
}

.deposit-item {
  cursor: pointer;
  transition: background-color 0.3s;
}

.deposit-item:hover {
  background-color: #f0f0f0;
}
</style>
