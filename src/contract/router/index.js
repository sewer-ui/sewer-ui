import adminLogin from "../views/adminLogin.vue"
import caseList from "../views/caseList.vue"
import myabout from "../views/myabout.vue"
// import elastic from "../components/elastic.vue"

const contractRouter = [{
        path: "/elastic",
        name: "elastic",
        component: elastic
    },
    {
        path: "/adminLogin",
        name: "adminLogin",
        component: adminLogin
    },
    {
        path: "/caseList",
        name: "caseList",
        component: caseList
    },
    {
        path: "/myabout",
        name: "myabout",
        component: myabout
    }
]



export default contractRouter