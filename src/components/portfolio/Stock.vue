<template>
  <v-card max-width="344" shaped>
    <v-card-title>{{ stock.name }}</v-card-title>
    <v-card-subtitle>{{ stock.price }} | Quantity: {{ stock.quantity }}</v-card-subtitle>
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
        @click="sellStock"
        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
      >{{insufficientQuantity ? "Not enough stocks" : "Sell"}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
