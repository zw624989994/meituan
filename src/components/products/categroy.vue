<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <m-select :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import MSelect from "./select.vue";
import api from "@/api/index.js";

export default {
  data() {
    return {
      classicList: [],
      areaList: [],
    };
  },
  created() {
    api.classify().then((res) => {
        // console.log(res.data.data);
      this.classicList = res.data.data;
    });
    api.areaList().then((res) => {
      this.areaList = res.data.subList;
    console.log(res.data);
    console.log(res.data.data);
    })
  },
  components: {
    MSelect,
  },
};
</script>

<style></style>
