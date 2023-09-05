<template>
  <div style="height: 100%">
    <div class="main">
      <div class="menu-wrapper">
<!--        <div><button type="button" @click="openModal">게시판 등록</button></div>-->
        <ul>
          <li><router-link to="/"> Home </router-link></li>
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

<script setup>
// import { ref } from 'vue'

defineProps({
  message: String,
})

function openModal() {
  alert("openModal");
}

</script>

<style scoped>

.main {
  display: flex;
  width: 100%;
  min-height: 100%;
  height: 100%;
}

</style>