<template>
  <div class="mainContent">
    <img src="../assets/アイコン.png" alt="アイコン" width="200@x">
    <h1>Idea Mixer</h1>

    <blockquote>
        <p class="main">アイデアとは既存の要素の新しい<br>組み合わせである。</p>
        <p class="autherName">ジェームス・W・ヤング『アイデアの作り方』</p>
    </blockquote>

    <v-container style="margin-top: 100px;">
      <v-row>
        <v-spacer></v-spacer>
        <v-col>
          <router-link to="/add">
            <v-btn
              dark
              x-large
              style="background-color: green;"
            >要素を追加する</v-btn>
          </router-link>
        </v-col>
        <v-col>
          <router-link to="/mix">
            <v-btn
              dark
              x-large
              style="background-color: green;"
            >アイデアを生成する</v-btn>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>

  </div>
</template>

<style>
.mainContent{
  margin: 20px;
}

h1{
  font-size: 50px;
  margin-top: -30px;
  size: 50px;
}

blockquote {
    position: relative;
    margin: auto;
    margin-top: 20px;
    padding: 35px 15px 10px 15px;
    box-sizing: border-box;
    font-style: italic;
    background: #f5f5f5;
    color: #777777;
    border-left: 4px solid #9dd4ff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14);
    width: 40%;
}

blockquote:before{
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 3px;
    content: "“";
    font-family: sans-serif;
    color: #9dd4ff;
    font-size: 90px;
    line-height: 1;
}

blockquote p {
    padding: 0;
    margin: 7px 0;
    line-height: 1.7;
}

blockquote cite {
    display: block;
    text-align: right;
    color: #888888;
    font-size: 0.9em;
}

blockquote p.main{
  font-size: 25px;
}
blockquote p.autherName{
  text-align: right;
}
</style>