# miaomiao

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



http://www.h5yjy.com
http://39.97.33.178

正在热映

http://39.97.33.178/api/movieOnInfoList?cityId=10

即将上映

http://39.97.33.178/api/movieComingList?cityId=10

搜索

http://39.97.33.178/api/searchList?cityId=10&kw=a

城市

http://39.97.33.178/api/cityList

电影详情

http://39.97.33.178/api/detailmovie?movieId=345808

影院

http://39.97.33.178/api/cinemaList?cityId=10

城市定位

http://39.97.33.178/api/getLocation


<template>
  <div id="detailContrainer" class="slide-enter-active">
    <!-- <header id="header">
      <i class="iconfont icon-right"></i>
      <h1>影片详情</h1>
    </header> -->
    <Header title= "影片详情"><i class="iconfont icon-right" @touchstart="handleToBack"></i></Header>


    <div id="content" class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="datailMovie.img | setWH(128.208)" alt />
          </div>

          <div class="detail_list_info">
            <h2> {{datailMovie.nm}} </h2>
            <p> {{datailMovie.enm}} </p>
            <p> {{datailMovie.sc}} </p>
            <p> {{datailMovie.cat}} </p>
            <p>{{datailMovie.src}} / {{datailMovie.dur}} 分钟 </p>
            <p> {{datailMovie.pubDesc}} </p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p></p>
      </div>
      <div class="detail_player swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <div>
              <img src="../../../public/images/movie_1.jpg" alt />
            </div>
            <p>陈建斌</p>
            <p>马先勇</p>
          </li>
  
     
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header"
export default {
  name: "detail",
  components: {},
  props: {},
  data() {
    return {
        datailMovie: {},
    };
  },
  components:{
      Header,
  },
  props: ["movieId"],
  mounted(){
      this.$axios.get("detailmovie?movieId=" + this.movieId).then(res =>{
          if(res.data.status === 0){
              this.detailMovie = res.data.data.detailMovie
              console.log(this.detailMovie)
          }
      })
  },
  methods: {
      handleToBack(){
          this.$router.back();
      }
  },
 
};
</script>
<style lang="css" scoped>
#detailContrainer .slide-enter-active{
    animation: 30s slideMove;
}
@keyframes sildeMove{
    0%{transform: translateX(100%)}
    100%{transform: translateX(0)}
}
#detailContrainer{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    min-height: 100%;
    background: #fff;
}
#content.contentDetail {
  display: block;
  margin-bottom: 0;
}
#content .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: url(../../../public/images/movie_1.jpg) 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}
.detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
.detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: solid 1px #f0f2f3;
  margin: 20px;
}
.detail_list .detail_list_img img {
  width: 100%;
  height: 100%;
}
.detail_list .detail_list_info {
  margin-top: 20px;
}
.detail_list .detail_list_info h2 {
  font-size: 20px;
  color: white;
  font-weight: normal;
  line-height: 40px;
}
.detail_list .detail_list_info p {
  color: white;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}
</style>