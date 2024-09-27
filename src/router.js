import { createRouter, createWebHistory } from "vue-router";
import AreaTrapezio from "./components/AreaTrapezio.vue";
import AreaCirculo from "./components/AreaCirculo.vue";
import AreaTriangulo from "./components/AreaTriangulo.vue";
import AaaaaAaaaa from "./components/AaaaaAaaaa.vue";

const routes = [
    {
        path:'/trapezio',
        name:'Trapezio',
        component: AreaTrapezio
    },
    {
        path:'/circulo',
        name:'Circulo',
        component: AreaCirculo
    },
    {
        path:'/triangulo',
        name:'Triangulo',
        component: AreaTriangulo
    },
    {
        path:'/aaaa',
        name:'Aaaa',
        component: AaaaaAaaaa
    }
];

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router;