<template>
  <div>
    <v-app-bar color="#BBDEFB" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <router-link to="/">Stock Trader</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">Dropdown</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>-->
    </v-app-bar>

    <v-card class="mx-auto" height="400" width="256">
      <v-navigation-drawer class="deep-purple accent-4" dark permanent>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                <router-link to="./portfolio">Portfolio</router-link>
              </v-list-item-title>
              <v-list-item-title>
                <router-link to="./stocks">Stocks</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

  <script>
export default {
  data: () => ({
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" }
    ]
  })
};
</script>



<style scoped>
.router-link {
  color: white;
}
</style>