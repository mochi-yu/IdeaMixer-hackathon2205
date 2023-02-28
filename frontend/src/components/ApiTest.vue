<template>
  <div>
    <p>API Test</p>
    <p>API response from backend: {{ res }}</p>
    <button @click="testAPI">New random number</button>
  </div>
</template>

<script>
import axios from 'axios'

// let baseUrl = "http://localhost:5000/"

export default {
  data () {
    return {
      res: null
    }
  },
  methods: {
    testAPI () {
      const path = 'api/random'
      axios.get(path)
        .then( response => (this.res = response) )
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.testAPI()
  }
}
</script>