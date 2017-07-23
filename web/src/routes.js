let routes = [
    {
        path: "/",
        component: resolve => require(["@/components/Layout.vue"], resolve),
        children: [
            {
                path: "",
                component: resolve => require(["@/components/Dashboard.vue"], resolve)
            }
        ]
    }
];

export default routes;
