<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span='3' class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span='15' class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <!-- 假定只有火锅有数据 -->
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="index">
                            <router-link :to="{name: 'goods', params:{name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link tag="a" :to="{name: 'goods', params:{name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                   <router-link tag="a" :to="{name: 'goods', params:{name: item}}" v-for="(item, index) in suggestList" :key="index">{{item}}</router-link>

                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js'
export default {
    data () {
        return {
            searchWord: '',
            isFocus: false,
            hotPlaceList:[],
            searchList: [],
            // searchList: ['火锅', '火锅自助餐', '火锅 重庆'],
            suggestList: []
        }
    },
    computed: {
        isHotPlace: function () {
            return this.isFocus && !this.searchWord;
        },
        isSearchList: function () {
            return this.isFocus && this.searchWord;
        }
    },
    methods: {
        focus() {
            this.isFocus = true;
        },
        blur(){
            var self = this;
            setTimeout(function () {
                self.isFocus = false;
            },120)
        },
        input() {
            let val = this.searchWord;
            api.getSearchList().then(res => {
                this.searchList = res.data.data.list.filter((item, index)=>{
                    return item.indexOf(val) > -1;
                });
            })
        }
    },
    created(){
        api.searchHotWords().then(res => {
            this.hotPlaceList = res.data.data.slice(0,5);
            this.suggestList = res.data.data;
        })
    }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/header/index.scss';
    @import '@/assets/css/public/header/search.scss' ;   

</style>