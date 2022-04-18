import { createRouter, createWebHashHistory } from "vue-router"
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FilmList from './pages/FilmList'
import AboutUs from './pages/AboutUs'
import User from './pages/User'
import Detail from './pages/FilmDetail'
import FilmMange from './components/FilmMange'
import Profile from './components/UserProfile'


const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:"Home",
            component:Home,
            props: true
        },
        {
            path:'/login',
            name:"Login",
            meta:{title:'Login'},
            component:Login,
            props: true
        },
        {
            path:'/register',
            name:"Register",
            meta:{title:'Sing Up'},
            component:Register,
            props: true
        },
        {
            path:'/films',
            name:"FilmList",
            meta:{title:'Film List'},
            component:FilmList,
            props: true
        },
        {
            path:'/film/:id',
            name:"FilmDetail",
            meta:{title:'Film Detail'},
            component:Detail,
            props: true
        },
        {
            path:'/about',
            name:"AboutUs",
            meta:{title:'About'},
            component:AboutUs,
            props: true
        },
        {
            path:'/user',
            name:"User",
            meta:{title:'Account'},
            component:User,
            props: true,
            children:[
                {
                    path:'mange',
                    name:"Manage",
                    meta:{title:'Account-Film Manage'},
                    component:FilmMange
                },
                {
                    path:'profile',
                    name:"Profile",
                    meta:{title:'Account-User Profile'},
                    component:Profile
                }
            ]
        },
    ]    
});


router.afterEach((to)=>{
    document.title = to.meta.title || 'FilmBox'
})

export default router;


