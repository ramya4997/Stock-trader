<template>
  <v-card max-width="344" shaped>
    <v-card-title>{{stock.name}}</v-card-title>
    <v-card-subtitle>{{stock.price}}</v-card-subtitle>

    <v-card-actions>
      <v-text-field type="number" placeholder="Quantity" v-model.number="quantity"></v-text-field>
      <v-btn rounded @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Buy</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
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
