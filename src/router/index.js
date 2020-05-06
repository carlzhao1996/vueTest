import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AIOManufactury from '@/components/AIOManufactury'
import DFA from '@/components/DFA'
import MFGAssembly from '@/components/MFGAssembly'

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/AIOManufactury',
      name: 'Menufactury',
      component: AIOManufactury
    },
    {
      path:'/DFA',
      name: 'DFA',
      component:DFA
    },
    {
      path: "/MFGAssembly",
      name: "MFGAssembly",
      component: MFGAssembly
    }
  ]
})
