<template>
  <div style="height: 100%">
    <div class="main">
      <h1>MainDashBoard</h1>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'

defineProps({
  message: String,
})
async function getBoardList() {
  const {data} = await axios.get("/api/board/" + boardId + "/posts")
  if (date.resultCode === 200) {
    console.log("success");
  }
}
</script>

<style scoped>

.board-list-wrap {
  width: 100%;
}

.board-topic{
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 10px 0;
}

.tb-list{border-top:1px solid #eee; width: 100%}
.tb-list th, .tb-list td{border-bottom:1px solid #eee; padding:5px 0;}
.tb-list td{padding:10px 10px; box-sizing:border-box;}
.tb-list td input{width:100%; min-height:30px; box-sizing:border-box; padding:0 10px;}
.btn-wrap{text-align:center; margin:20px 0 0 0;}
.btn-register {background:#43b984}

.btn-wrap{text-align: right;}

table {
  width: 100%;
  margin: 0 auto;
  /*border: 1px solid black;*/
  border-collapase: collapse;
  text-align: center;
}

button {
  background-color: black;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>