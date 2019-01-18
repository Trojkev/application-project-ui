import Vue from 'vue'
import Router from 'vue-router'
import RiskTypes from '@/components/RiskTypes'
import AddRiskType from '@/components/AddRiskType'
import ConfigRiskType from '@/components/configureRiskType'
import RiskTypeForm from '@/components/RiskTypeForm'
import Customers from '@/components/Customers'
import RegisterCustomer from '@/components/RegisterCustomer'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'RiskTypes', component: RiskTypes },
    { path: '/add-risk-type', name: 'AddRiskType', component: AddRiskType },
    { path: '/add-fields/:id', name: 'ConfigRiskType', component: ConfigRiskType },
    { path: '/risk-type-form/:id', name: 'RiskTypeForm', component: RiskTypeForm },
    { path: '/customers', name: 'Customers', component: Customers },
    { path: '/add-customer', name: 'Add Customer', component: RegisterCustomer }
  ]
})
