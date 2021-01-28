export default[
    {
        name:"login",
        path:"/login",
        component:() => import("../components/login"),
        meta:{
            whiteList:false,
            tittleNavHide:true,
            pvPath:'/developer/game/login'
        }
    },
    {
        name:"register",
        path:'/register',
        component:() => import("../components/register")
    }
]
