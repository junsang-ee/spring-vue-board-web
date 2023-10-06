<template>
  <div>
    <button v-on:click="getList()">testButton</button>
    <div class="list-wrap">
        <table class="tb-list">
          <colgroup>
            <col width="*" />
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>공개여부</th>
              <th>작성자</th>
              <th>작성날짜</th>
              <th>댓글 개수</th>
            </tr>
          </thead>
          <tbody>
            <!-- <tr v-for="(post, idx) in posts" :key="idx">
              <td> {{ idx + 1 }} </td>
              <td ><a href="javascript:;" @click="checkDisclosureType(post.id, post.disclosureType)">{{ post.title }}</a></td>
              <td> {{ convertDisclosureType(post.disclosureType) }} </td>
              <td> {{ post.nickName }} </td>
              <td> {{ convertToDateFormat(post.createdAt) }} </td>
              <td> {{ post.replyCount }} </td>
            </tr> -->
          </tbody>
        </table>
      </div>
  </div>
</template>

<script setup>
import axios from "axios";

async function getList() {
  try {
    const {data} = await axios.get("/api/post/" + "7ccdc8ce-7401-45fb-a624-c051be09f37a");
    console.log("data : " + data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<style scoped>

</style>