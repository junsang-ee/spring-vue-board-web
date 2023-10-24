<template>
  <div>
    <div class="list-wrap">
        <table class="tb-list">
          <colgroup>
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성날짜</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, idx) in posts" :key="idx">
              <td> {{ idx + 1 }} </td>
              <!-- <td ><a href="javascript:;" @click="checkDisclosureType(post.id, post.disclosureType)">{{ post.title }}</a></td> -->
              <td> {{ post.title }} </td>
              <td> {{ post.writer }} </td>
              <td> {{ convertToDateFormat(post.createdAt) }} </td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const posts = ref([]);
const boardId = route.params.boardId;

async function getPosts(boardId) {
  try {
    const {data} = await axios.get("/api/board/" + boardId + "/posts");
    posts.value = data;
  } catch (error) {
    console.log(error);
  }
}

function convertToDateFormat(createdAt) {
  return createdAt.substr(0, 10); 
}

onMounted(getPosts(boardId));
</script>

<style scoped>

</style>