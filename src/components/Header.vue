<!--
<template>
  
  <v-toolbar dense>
    <v-toolbar-title>
      <router-link to="/">Stock Trader</router-link>
    </v-toolbar-title>

    <router-link to="./portfolio">Portfolio</router-link>

    <router-link to="./stocks">Stocks</router-link>

    <v-spacer></v-spacer>

    <a href="#">End Day</a>

    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"
            >Save and Load</v-btn
          >
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      items: [{ title: 'Save Data' }, { title: 'Load Data' }],
    };
  },
};
</script>
-->

<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>
        <v-btn rounded color="primary" dark to="/">Stock Trader</v-btn>
        <v-btn text color="primary" dark to="/portfolio">Portfolio</v-btn>
        <v-btn text color="primary" dark to="/stocks">Stocks</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="#" @click="endDay">End Day</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">Save and Load Data</v-btn>
        </template>
        <v-list>
          <!-- <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>-->
          <v-list-item @click="saveData">Save Data</v-list-item>
          <v-list-item @click="loadData">Load Data</v-list-item>
        </v-list>
      </v-menu>
      <strong style="padding: 10px">Funds: {{funds | currency}}</strong>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData"
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>
