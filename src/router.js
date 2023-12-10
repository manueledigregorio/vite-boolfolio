import { createRouter, createWebHistory } from "vue-router";
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';
import Project from './pages/Project.vue';
import Error404 from './pages/Error404.vue';
import ShowProject from './pages/ShowProject.vue';

const router =  createRouter({
  history: createWebHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/project',
      name: 'Project',
      component: Project,
    },
    {
      path: '/project/:slug',
      name: 'ShowProject',
      component: ShowProject,
    },



    //tutte le rotte che non son valide 
    {
      path: '/:pathMatch(.*)*',
      component: Error404,
    }
  ]
});
  
export { router }