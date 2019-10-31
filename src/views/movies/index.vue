<template>
  <div class="wrapper">
    <Header title="喵喵电影"></Header>
    <dahang></dahang>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabber></tabber>
    <router-view name="detail"></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header";
import tabber from "@/components/tabber";
import dahang from "@/components/gongjuzujian/dahang.vue";
import { messageBox } from "@/components/js";

export default {
  name: "movie",
  components: {
    Header,
    tabber,
    dahang
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    setTimeout(() => {
      this.$axios.get("/getLocation").then(res => {
        if ((res.data.status = 200)) {
          var nm = res.data.data.nm;
          var id = res.data.data.id;
          if(this.$store.state.city.id == id) {return}
          messageBox({
            title: "定位",
            content: nm,
            cancel: "取消",
            ok: "切换城市",
            handleOk() {
              window.localStorage.setItem("nowNM", nm);
              window.localStorage.setItem("nowID", id);
               window.location.reload();
            }
          });
        }
      });
    }, 3000);
  }
};
</script>
<style lang="css" scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>