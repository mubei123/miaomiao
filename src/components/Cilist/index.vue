<template>
  <div class="cinema_body">
    <scroller>
    <ul>  
      <li v-for="item in cList" :key="item.id">
        <div>
          <span> {{item.nm}} </span>
          <span class="q">
            <span class="price"> {{item.sellPrice}} </span> 元起
          </span>
        </div>
        <div class="address">
          <span> {{item.addr  }} </span>
          <span> {{item.distance}} </span>
        </div>
        <div class="card">
          <div v-for="(num,key) in item.tag"  v-if="num === 1" :key="key"> {{key | formatCard(key)}} </div>
        </div>
      </li>
    </ul>
    </scroller>
  </div>
</template>


<script>
name: "CiList";
export default {
  data(){
    return{
      cList: [],
      prevCityId: -1
    }
  },
  activated(){
     var cityId = this.$store.state.city.id
    if(this.prevCityId === cityId){return}
    this.$axios.get("/cinemaList?cityId=" + cityId).then(res =>{
      if(res.data.status === 0){
        this.cList = res.data.data.cinemas
        this.prevCityId = cityId
      }
    })
  },
  filters: {
    formatCard(key){
      var card = [
        {key: 'allowRefund', value: "改签"},
        {key: 'endorse', value: "退签"},
        {key: 'sell', value: "折扣"},
        {key: 'snack', value: "小吃"},
      ]

      for(var i=0;i<card.length;i++){
        if(card[i].key === key){
          return card[i].value
        }
      }
      return ""
    }
  }
};
</script>



<style lang="css" scoped>
 .cinema_body {
  flex: 1;
  height: 600px;
  overflow: auto;
}
.cinema_body ul {
  padding: 20px;
}
.cinema_body li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
.cinema_body div {
  margin-bottom: 10px;
}
.cinema_body .q {
  font-size: 11px;
  color: #f03d37;
}
.cinema_body .price {
  font-size: 18px;
}
.cinema_body .address {
  font-size: 13px;
  color: #666;
}
.cinema_body .address span:nth-of-type(2) {
  float: right;
}
.cinema_body .card {
  display: flex;
}
.cinema_body .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
.cinema_body .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
.cinema_body .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
</style>