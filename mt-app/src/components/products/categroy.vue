<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="item in menuList" :key="item.type">
                <m-select :name="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>全部</dt>
            <dd v-for="item in menuList" :key="item.type">
                <m-select :name="item.title" :list="item.sub_list"/>
            </dd>
        </dl>
    </div>
</template>
<script>
import MSelect from './select.vue'
export default {
    data(){
        return {
            menuList: [{
                title: '美食',
                type: 'food',
                sub_list: [{
                    name: '日本菜',
                    id: 'Japan'
                },
                {
                    name: '饮品店',
                    id: 'drink'
                }, 
                {
                    name: '面包甜点',
                    id: 'cate'
                }]
            },{
                title: '酒店住宿',
                type: 'hotel',
                sub_list: [{
                    name: '温泉酒店',
                    id: 'hot_spring'
                },{
                    name: '经济型酒店',
                    id: 'economy'
                }]
            }]
        }
    },
    components: {
        MSelect
    }
}
</script>