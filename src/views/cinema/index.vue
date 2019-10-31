<template>
  <div class="wrapper">
    <Header title="喵喵影院"></Header>
    <div class="cinema_menu">
      <div class="city_switch">
        全城
        <i class="iconfont icon-lower-triangle"></i>
      </div>
      <div class="brand_swtich">
        品牌
        <i class="iconfont icon-lower-triangle"></i>
      </div>
      <div class="feature_switch">
        特色
        <i class="iconfont icon-lower-triangle"></i>
      </div>
    </div>
    <Cilist></Cilist>
    <tabber></tabber>
  </div>
</template>

<script>
import Header from "@/components/Header";
import tabber from "@/components/tabber";
import Cilist from "@/components/Cilist";
export default {
  name: "cinema",
  components: {
    Header,
    tabber,
    Cilist
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="css" scoped>
.wrapper {
}
 .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>