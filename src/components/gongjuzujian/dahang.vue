<template>
  <div id="content">
    <div class="movie_menu">
      <router-link to="/movie/city" tag="div" class="city_name">
        <span> {{$store.state.city.nm}} </span>
        <i class="iconfont icon-lower-triangle"></i>
      </router-link>
      <div class="hot_swtich">
        <router-link to="nowPlaying" tag="div" class="hot_item">正在热映</router-link>
        <router-link to="comingSoon" tag="div" class="hot_item">即将上映</router-link>
      </div>
      <router-link tag="div" to="search" class="search_entry">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
.router-link-active{
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}
</style>