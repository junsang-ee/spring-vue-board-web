<script setup>
import { onMounted, ref } from "vue";
import {useRouter} from "vue-router";
import axios from "axios";

const router = useRouter();
const boards = ref([]);

async function getBoards() {
  try {
    const {data} = await axios.get("/api/board");
    boards.value = data;
  } catch (error) {
    console.log(error);
  }
}

function goBoard(boardId) {
  router.push({ name: "PostList", params:{boardId:boardId}})
}

function goEmptyBoard() {
  router.push({ name: "PostEmpty" })
}

onMounted(getBoards());
</script>

<template>
  <div style="height: 100%">
    <div class="main">
      <div class="menu-wrapper">
        <!--        <div><button type="button" @click="openModal">게시판 등록</button></div>-->
        <ul>
          <li><router-link to="/main"> Main </router-link></li>
          <li><router-link to="/login"> Login </router-link></li>
          <li v-for="board in boards" :key="board.id">
            <span v-if="board.postCount === 0">
              <button @click="goEmptyBoard">{{ board.name }}</button>
            </span>
            <span v-else>
              <button @click="goBoard(board.boardId)">{{ board.name }}</button>
            </span>
          </li>
        </ul>
      </div>
          <div class="router">
            <router-view :key="$route.path"/>
          </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  min-height: 100%;
}

.delete-button button{
  padding-left: 10px;
  color: red;
}

.main {
  display: flex;
  width: 100%;
  min-height: 100%;
  height: 100%;
}


.router {
  width: 100%;
}

.menu-wrapper {
  height: 100vh;
  padding: 10px;
  list-style-type: none;
  width: 300px;
  height: 100%;
  padding: 30px 10px 0;
  list-style-type: none;
  width: 300px;
  border-right: 1px solid #000;
}

.menu-wrapper li {
  box-sizing: border-box;
  padding: 5px 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

a {
  text-decoration: none;
}
</style>
