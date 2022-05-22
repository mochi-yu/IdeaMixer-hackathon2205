<template>
  <div>
    <p>API Test</p>
    <p>API response from backend: {{ res }}</p>
    <button @click="testAPI">New random number</button>
  </div>
</template>

<script>
import axios from 'axios'

let baseUrl = "https://idea-mixer-hackathon2205.herokuapp.com/"

export default {
  data () {
    return {
      res: null
    }
  },
  methods: {
    testAPI () {
      const path = baseUrl + 'api/random'
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