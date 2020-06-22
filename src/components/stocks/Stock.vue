<template>
  <v-main>
    <v-card max-width="344" shaped>
      <v-card-title>{{ stock.name }}</v-card-title>
      <v-card-subtitle>{{ stock.price }}</v-card-subtitle>
      <v-list-item-content>
        <v-text-field
          type="number"
          placeholder="Quantity"
          v-model.number="quantity"
          label="Solo"
          single-line
          solo
        ></v-text-field>
        <!-- <v-text-field type="number" placeholder="Quantity" v-model.number="quantity"></v-text-field> -->
      </v-list-item-content>

      <v-card-actions>
        <v-btn
          rounded
          @click="buyStock"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
        >{{insufficientFunds ? 'Insuffiecient Funds' : "Buy"}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-main>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      // console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>

