<template>
  <div id="app">
    <div>
      <v-app-bar
        style="background-color: green;"
        dark
      >
        <v-btn icon>
          <router-link to="/">
            <v-icon>mdi-home</v-icon>
          </router-link>
        </v-btn>
        <v-toolbar-title>Idea Mixer</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon>
          <router-link to="/group">
            <v-icon>mdi-account-group </v-icon>
          </router-link>
        </v-btn>
      </v-app-bar>
    </div>
    <!--
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/DBtest">DB</router-link> |
      <router-link to="/test">Test</router-link>
    </nav>
    -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    routeAbout: async function () {
      this.$route.push('/about')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a{
  text-decoration: none;
  color: white;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
