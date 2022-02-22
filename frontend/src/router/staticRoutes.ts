import {RouteRecordRaw} from "vue-router";

export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/helloWorld',
        name: 'helloWorld',
        component() {
            return import('/@/pages/HelloWorld.vue');
        },
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: () => {
            return import('/@/pages/Welcome.vue');
        },
    },
];
