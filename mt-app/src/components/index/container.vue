<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
                <!-- <span class="current-price numfont">{{item.price_info.current_price}}</span> -->
              </span>
              <!-- <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span> -->
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        {
          image:
            "//p0.meituan.net/bbia/c63505335fd950e3a56d352fe4be41eb138325.jpg@368w_208h_1e_1c",
          title: "米兰西饼生日蛋糕（老闵行店）",
          sub_title: "蛋糕20选1,约8英寸",
          price_info: {
            current_price: 89,
            old_price: 168
          },
          address: "颛桥/北桥"
        },
        {
          image:
            "//p0.meituan.net/bbia/c63505335fd950e3a56d352fe4be41eb138325.jpg@368w_208h_1e_1c",
          title: "米兰西饼生日蛋糕（老闵行店）",
          sub_title: "蛋糕20选1,约8英寸",
          price_info: {
            current_price: 89,
            old_price: 168
          },
          address: "颛桥/北桥"
        },
        {
          image:
            "//p0.meituan.net/bbia/c63505335fd950e3a56d352fe4be41eb138325.jpg@368w_208h_1e_1c",
          title: "米兰西饼生日蛋糕（老闵行店）",
          sub_title: "蛋糕20选1,约8英寸",
          price_info: {
            current_price: 89,
            old_price: 168
          },
          address: "颛桥/北桥"
        },
        {
          image:
            "//p0.meituan.net/bbia/c63505335fd950e3a56d352fe4be41eb138325.jpg@368w_208h_1e_1c",
          title: "米兰西饼生日蛋糕（老闵行店）",
          sub_title: "蛋糕20选1,约8英寸",
          price_info: {
            current_price: 89,
            old_price: 168
          },
          address: "颛桥/北桥"
        },
        {
          image:
            "//p0.meituan.net/bbia/c63505335fd950e3a56d352fe4be41eb138325.jpg@368w_208h_1e_1c",
          title: "米兰西饼生日蛋糕（老闵行店）",
          sub_title: "蛋糕20选1,约8英寸",
          price_info: {
            current_price: 89,
            old_price: 168
          },
          address: "颛桥/北桥"
        }
      ]
    };
  },
  created(){
      api.resultsByKeywords().then(res => {
          this.resultsData = res.data.data;
      })
  },
  props: ["nav"],
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      //动态获取数据  ajax请求
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>