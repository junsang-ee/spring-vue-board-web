<script setup>
import {useRoute} from "vue-router";
const route = useRoute();

function test() {
  console.log("test");
}

</script>

<template>
  <div style="height: 100%">
    <div class="main">
      <div class="menu-wrapper">
        <!--        <div><button type="button" @click="openModal">게시판 등록</button></div>-->
        <ul>
          <li @click="test()"><router-link to="/main"> Main </router-link></li>
          <li><router-link to="/test"> Test </router-link></li>
          <!--          <li v-for="(board, idx) in boards" :key="idx" @click="getBoards">-->
          <!--            <span v-if="board.postCount > 0">-->
          <!--               <router-link :to="{name:'PostList', params:{id:board.id}, query:{boardName:board.name, disclosureType: board.disclosureType}}"> {{ board.name }} </router-link>-->
          <!--            </span>-->
          <!--            <span v-else>-->
          <!--              <router-link :to="{name:'EmptyPost', query:{boardId:board.id}}"> {{ board.name }} </router-link>-->
          <!--            </span>-->
          <!--            <span class="delete-button"><button type="button" @click="deleteBoard(board.id, board.name)">삭제</button></span>-->
          <!--          </li>-->
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
