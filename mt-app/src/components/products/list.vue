<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
        <item v-for="(item, index) in productList" :key="index" :meta="item"/>
    </el-row>
  </div>
</template>
<script>
import item from './item.vue'
import api from '@/api/index'
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格最低",
          active: false
        },
        {
          key: "s-score",
          name: "人气最高",
          active: false
        },
        {
          key: "s-comment",
          name: "评价最高",
          active: false
        }
      ],
      productList: [
        {
          image: "https://p1.meituan.net/mogu/cfe125c1cc96acc1aa11f0855197ceb9105621.jpg@380w_214h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  created(){
      api.getProductsList().then(res => {
          this.productList = res.data.data;
      })
  },
  components: {
      item
  }
};
</script>