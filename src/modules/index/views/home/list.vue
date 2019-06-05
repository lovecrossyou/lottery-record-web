<template>
  <div>
    <!-- 比赛列表 -->
    <div v-for="(lottery,index) in list" :key="index">
      <div
        class="border-line"
        @click="goDetail(lottery)"
      >{{lottery.home_team}} -- {{lottery.guest_team}}</div>
    </div>
  </div>
</template>

<script>
import { listLottery } from "@/api/getData";

import { mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    ...mapMutations(["savelottery"]),
    async initData() {
      const res = await listLottery();
      this.list = res.data;
    },
    goDetail(lottery) {
      this.savelottery(lottery);
      this.$router.push("/list");
    }
  },
  mounted() {
    this.initData();
  }
};
</script>

<style >
.border-line {
  border: dashed 1px #e1e1e1;
  margin-bottom: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>