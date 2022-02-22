import { createRouter, createWebHashHistory } from "vue-router";
import { staticRoutes } from '/@/router/staticRoutes';

const router = createRouter({
    history: createWebHashHistory(),
    routes: staticRoutes,
});

// 导出路由
export default router;
