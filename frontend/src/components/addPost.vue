<template>
  <div class="mainContent">
    <v-form @submit.prevent>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4"></v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model = "inputText"
              label = "要素を入力"
              filled
              dense
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col>
          <v-btn
            @click="addPost"
            id="addPost"
            elevation = "2"
            dark
          >追加</v-btn>
        </v-col>
      </v-container>
    </v-form>

    <v-overlay
      :absolute="absolute"
      :value="overlay"
    >
      <v-card>
        <v-card-title>送信しました。</v-card-title>
        <v-btn
          color="success"
          @click="overlay = false"
        >
          Close
        </v-btn>
      </v-card>
      
    </v-overlay>

    
    <v-container class="ma-100">
      <router-link to="/mix">
        <v-btn
          @click="testAPI"
          dark
          x-large
        >ミックス！</v-btn>
      </router-link>
    </v-container>


    <v-container>
      <table id="posts">
        <thead>
          <th>ユーザー</th>
          <th>内容</th>
          <th>追加した日時</th>
        </thead>
        <tr v-for="column in postList" :key="column.refId">
          <td>{{ column.user }}</td>
          <td>{{ column.content }}</td>
          <td>{{ column.postedAt }}</td>
        </tr>
      </table>
    </v-container>
  </div>
</template>

<script>
const axios = require('axios').create()

export default {
  name: 'DbTest',
  data () {
    return {
      postList: [],
      inputText: "",
      success: false,
      absolute: true,
      overlay: false,
      groupId: 1,
    }
  },
  mounted () {
    this.getPost()
  },
  methods: {
    addPost: async function () {
      this.overlay = !this.overlay
      const randId = Math.floor(Math.random() * (3 - 1) + 1)
      const response = await axios.post('api/post', {text: this.inputText, userId: randId})
      if(response.status == 204) this.success = true;
      this.inputText = ""
      this.getPost()
    },
    getPost: async function () {
      const response = await axios.get('api/post?id=' + this.groupId)
      this.postList = response.data
    }
  }
}
</script>

<style>
.mainContent{
  margin: 40px;
}

#addPost{
  background-color: green;
  margin-top: -20px;
  margin-left: 250px;
}

table{
  border-collapse: collapse;
  border-spacing: 0;
  width: 80%;
  margin: auto;
  margin-top: 40px;
}

table tr{
  border-bottom: solid 1px #eee;
  cursor: pointer;
}

table tr:hover{
  background-color: #d4f0fd;
}

table th,table td{
  text-align: center;
  width: 25%;
  padding: 15px 0;
}

</style>