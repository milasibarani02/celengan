<template>
  <v-card class="pa-10 mb-4" outlined>
    <!-- Pilih Kategori -->
    <v-select
      v-model="kategori"
      :items="kategoriItems"
      label="Kategori"
      outlined
      @change="updateSubCategories"
    ></v-select>

    <!-- Pilih Sub Kategori -->
    <v-select
      v-model="subKategori"
      :items="subKategoriItems"
      label="Keterangan"
      outlined
      @change="checkForCustomInput"
    ></v-select>

    <!-- Input Keterangan Kustom ketika memilih 'Lainnya' -->
    <v-text-field
      v-if="isCustomKeterangan"
      v-model="customKeterangan"
      label="Masukkan Keterangan"
      outlined
    ></v-text-field>

    <!-- Input Jumlah Uang -->
    <v-text-field
      v-model.number="jumlah"
      label="Jumlah Uang"
      outlined
      type="number"
      :rules="jumlahRules"
    ></v-text-field>

    <!-- Tombol Tambah -->
    <v-btn color="primary" @click="submitEntry" block>Tambah</v-btn>
  </v-card>
</template>

<script>
export default {
  name: 'InputForm',
  data() {
    return {
      kategori: '', // Default ke Pemasukan
      subKategori: '', // Akan diisi berdasarkan kategori yang dipilih
      kategoriItems: ['Pemasukan', 'Pengeluaran'],
      pemasukanSubCategories: ['Gaji', 'Bonus', 'Hibah', 'Investasi', 'Lainnya'],
      pengeluaranSubCategories: ['Makan', 'Transport', 'Belanja', 'Tagihan', 'Lainnya'],
      subKategoriItems: [], // Daftar subkategori yang diperbarui secara dinamis
      customKeterangan: '', // Input untuk keterangan kustom
      isCustomKeterangan: false, // Menentukan apakah input kustom ditampilkan
      jumlah: null,
      jumlahRules: [(v) => (v && v > 0) || 'Jumlah harus lebih besar dari 0'],
    };
  },
  watch: {
    kategori(newKategori) {
      this.updateSubCategories();
    },
    subKategori(newSubKategori) {
      this.checkForCustomInput();
    },
  },
  methods: {
    updateSubCategories() {
      if (this.kategori === 'Pemasukan') {
        this.subKategoriItems = this.pemasukanSubCategories;
      } else if (this.kategori === 'Pengeluaran') {
        this.subKategoriItems = this.pengeluaranSubCategories;
      }
      this.subKategori = ''; // Reset subkategori ketika kategori berubah
      this.isCustomKeterangan = false; // Reset input kustom
      this.customKeterangan = '';
    },
    checkForCustomInput() {
      console.log('SubKategori:', this.subKategori);
      // Tampilkan input kustom jika 'Lainnya' dipilih
      this.isCustomKeterangan = this.subKategori === 'Lainnya';
      if (!this.isCustomKeterangan) {
        this.customKeterangan = '';
      }
    },
    submitEntry() {
      if (this.jumlah > 0 && (this.subKategori || this.customKeterangan)) {
        const keterangan = this.isCustomKeterangan ? this.customKeterangan : this.subKategori;

        const entry = {
          kategori: this.kategori,
          subKategori: keterangan,
          amount: this.kategori === 'Pemasukan' ? this.jumlah : -this.jumlah,
        };

        // Emit entry ke parent (App.vue)
        this.$emit('add-entry', entry);

        // Reset form
        this.kategori = 'Pemasukan';
        this.subKategori = '';
        this.customKeterangan = '';
        this.isCustomKeterangan = false;
        this.jumlah = null;
      } else {
        alert('Form tidak lengkap. Pastikan semua field terisi dengan benar.');
      }
    },
  },
};
</script>
