<template>
  <v-container>
    <v-btn @click="viewUserDetails(user)" v-for="user in users" :key="user.id">
      {{ user.name }}
    </v-btn>
    <AdminUserDetail v-if="selectedUser" :user="selectedUser" />
  </v-container>
</template>

<script>
import AdminUserDetail from '../components/AdminUserDetail.vue';

export default {
  components: { AdminUserDetail },
  data() {
    return {
      users: [], // This should be fetched from an API
      selectedUser: null,
    };
  },
  methods: {
    viewUserDetails(user) {
      this.selectedUser = user;
    },
  },
  mounted() {
    // Fetch users (example)
    this.users = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];
  },
};
</script>
