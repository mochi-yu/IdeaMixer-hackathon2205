<template>
  <div class="mainContent">
    <h3>生成結果</h3>
    <div id="ideaA">{{ text1 }}</div>
    <div id="X">×</div>
    <div id="ideaB">{{ text2 }}</div>

    <v-container id="onceMore">
      <router-link to="/mix">
        <v-btn
          @click="getMix"
          dark
          x-large
        >もう1度ミックス！</v-btn>
      </router-link>
    </v-container>

  </div>
</template>

<script>
const axios = require('axios').create()

export default {
  name: 'DbTest',
  data () {
    return {
      text1: "1",
      text2: "2",

      success: false,
    }
  },
  mounted () {
    this.getMix()
  },
  methods: {
    getMix: async function () {
      const response = await axios.get('api/mix')
      this.text1 = response.data[1].text
      this.text2 = response.data[0].text
    }
  }
}

</script>

<style>
.mainContent{
  margin: 30px;
  margin-left: 20%;
  margin-right: 20%;
}

h3 {
  margin-bottom: 20px;
}

#ideaA {
  float: left;
  width: 40%;
  margin: auto;
  font-size: 50px;
}
#X {
  float: left;
  width: 20%;
  font-size: 50px;
}
#ideaB {
  margin-right: auto;
  font-size: 50px;
}

#onceMore {
  margin-top: 30px;
}
</style>