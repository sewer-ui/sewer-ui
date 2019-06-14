import adminLogin from "../views/adminLogin.vue"
import caseList from "../views/caseList.vue"

const contractRouter = [
    {
        path: "/adminLogin",
        name: "adminLogin",
        component: adminLogin
    },
    {
        path: "/caseList",
        name: "caseList",
        component: caseList
    }
]
export default contractRouter