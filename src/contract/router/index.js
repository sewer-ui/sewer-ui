import adminLogin from "../views/adminLogin.vue"
import foot from "../views/foot.vue"

const contractRouter = [{
    path: "/adminLogin",
    name: "adminLogin",
    component: adminLogin
}, {
    path: "/foot",
    name: "foot",
    component: foot
}, ]
export default contractRouter