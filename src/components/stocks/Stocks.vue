<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row class="grey lighten-5" style="height: 300px;">
          <app-stock
            v-for="stock in stocks"
            v-bind:key="stock.id"
            class="ma-3 pa-12"
            :stock="stock"
          ></app-stock>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock,
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    },
  },
};
</script>
