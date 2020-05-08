import Router from 'vue-router'

import StateList from '@/components/StateList'
import StateDetail from '@/components/StateDetail'
import About from '@/components/About'

export default new Router({
    routes: [
        {
            //this will set the home page for the app
            path: '/',
            component: StateList
        },
        {
            //this will set the about page for the app
            path: '/about',
            component: About
        },
        {
            //creates a new route for individual states
            path: '/detail/:state',
            name: 'detail',
            component: StateDetail
        }
    ]
})