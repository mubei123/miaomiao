<template>
  <div class="wrapper">
    <Header title="我的喵喵"></Header>
    <LoginList></LoginList>
    <tabber></tabber>
  </div>
</template>

<script>
import Header from "@/components/Header"
import tabber from "@/components/tabber"
import LoginList from "@/components/LoginList"
export default {
  name: "mine",
  components: {
    Header,
    tabber,
    LoginList,
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
</style>