<template>
  <div>
    <span class="name">按省份选择:</span>
    <m-select
      :list="provinceList"
      :title="'省份'"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      className="province"
    />
    <m-select
      :list="cityList"
      :title="'城市'"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled='cityDisabled'
      className="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="serachWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
import api from '@/api/index.js';

export default {
  data() {
    return {
      provinceList: ["山东", "甘肃", "黑龙江", "江苏"],
      province: "省份",
      cityList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"],
      serachWord: '',
      loading: false,
      cityDisabled: true
    };
  },
  created(){
    api.getProvinceList().then(res => {
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    })
  },
  methods: {
    changeProvinceActive(flag) {
     
      this.provinceActive = flag;
      
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },

    changeProvince(value) {
        this.province = value.name;
        this.cityDisabled = false;
        this.cityList = value.cityInfoList;
         var self = this;
      setTimeout(function(){
        self.provinceActive = false;
        
      },20)

        // this.changeProvinceActive(false)
    },
    changeCity(value) {
        this.city = value.name;
        this.$store.dispatch('setPosition', value.name);
        this.$router.push({name: 'index'})
    },    



    remoteMethod (val) {
        //请求后端接口
    },
    
  },
  components: {
    MSelect
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>