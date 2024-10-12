import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/index',
        name: 'index',
        redirect: '/home',
        component: () => import('../views/index.vue'),
        children: [
            {
                path: '/home',
                name: '/home',
                component: () => import('../views/Home.vue')
            },
            {
                path: '/person/editPwd',
                name: 'editPwd',
                component: () => import('@/views/person/editPwd.vue')
            },

            {
                path: '/person/information',
                name: 'information',
                component: () => import('@/views/person/information.vue')
            },
            {
                path: '/system/roleList',
                name: 'roleList',
                component: () => import('../views/system/roleList.vue')
            },
            {
                path: '/system/menuList',
                name: 'menuList',
                component: () => import('../views/system/menuList.vue')
            },

            {
                path: '/inventory/warehouseList',
                name: 'warehouseList',
                component: () => import('@/views/inventory/warehouseList.vue')
            },

            {
                path: '/inventory/stockInList',
                name: 'stockInList',
                component: () => import('@/views/inventory/stockInList.vue')
            },
            {
                path: '/inventory/stockOutDetail',
                name: 'stockOutDetail',
                component: () => import('@/views/inventory/stockOutDetail.vue')
            },

            {
                path: '/inventory/supplierInfoList',
                name: 'supplierInfoList',
                component: () => import('@/views/inventory/supplierInfoList.vue')
            },
            {
                path: '/inventory/stockInDetail',
                name: 'stockInDetail',
                component: () => import('@/views/inventory/stockInDetail.vue')
            },
            {
                path: '/inventory/stockOutDetail',
                name: 'stockOutDetail',
                component: () => import('@/views/inventory/stockOutDetail.vue')
            },

            {
                path: '/inventory/stockStatisticList',
                name: 'stockStatisticList',
                component: () => import('@/views/inventory/stockStatisticList.vue')
            },
            {
                path: '/goods/categoryList',
                name: 'categoryList',
                component: () => import('../views/goods/categoryList.vue')
            },
            {
                path: '/goods/goodsList',
                name: 'goodsList',
                component: () => import('../views/goods/goodsList.vue')
            },
            {
                path: '/goods/goodsStockList',
                name: 'goodsStockList',
                component: () => import('../views/goods/goodsStockList.vue')
            },

            {
                path: '/goods/saleStatisticList',
                name: 'saleStatisticList',
                component: () => import('../views/goods/saleStatisticList.vue')
            },
            {
                path: '/goods/pointGoodsList',
                name: 'pointGoodsList',
                component: () => import('../views/goods/pointGoodsList.vue')
            },
            {
                path: '/person/deptList',
                name: 'deptListList',
                component: () => import('@/views/person/deptList.vue')
            },
            {
                path: '/person/employeeList',
                name: 'employeeList',
                component: () => import('@/views/person/employeeList.vue')
            },
            {
                path: '/member/memberList',
                name: 'memberList',
                component: () => import('@/views/member/memberList.vue')
            },

            {
                path: '/sale/saleCmdList',
                name: 'saleCmdList',
                component: () => import('@/views/sale/saleCmdList.vue')
            },

            {
                path: '/sale/saleRecordsList',
                name: 'saleRecordsList',
                component: () => import('@/views/sale/saleRecordsList.vue')
            },

            {
                path: '/sale/pointRedemptionHistory',
                name: 'pointRedemptionHistory',
                component: () => import('@/views/sale/pointRedemptionHistory.vue')
            },

        ]
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
