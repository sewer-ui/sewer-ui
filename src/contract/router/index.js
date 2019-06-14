import adminLogin from "../views/adminLogin.vue"
import myabout from "../views/myabout.vue"


const contractRouter = [{
    path: "/adminLogin",
    name: "adminLogin",
    component: adminLogin
}, {
    path: "/myabout",
    name: "myabout",
    component: myabout
}]
export default contractRouter