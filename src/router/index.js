import Vue from 'vue'
import Router from 'vue-router'
import Cookies from "js-cookie";


// Containers
const TheContainer = () => import('@/containers/TheContainer')

const configuration = () => import('@/views/mainpages/Configuration')
const listOfMeetings = () => import('@/views/mainpages/ListOfMeetings')
const zoomMeeting = () => import('@/views/mainpages/ZoomMeeting')


// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

// Users
const Users = () => import('@/views/users/Users')
const User = () => import('@/views/users/User')

Vue.use(Router)

function isDateInThePast(string) {
  let now = new Date();
  let date = new Date(parseInt(string));
  console.log(now.getTime())
  return date < now;
}

function isTokenExpired() {
  console.log(Cookies.get("expiring"))
  if (Cookies.get("expiring")) {
    //If the user has expire date
    return (isDateInThePast(Cookies.get("expiring"))) 
      
  }
  return true; //The user has no expire date, need to refresh token

}

const ifAuthenticated = (to, from, next) => {
  console.log("Check if authenticated");
  console.log("is token expired: " + isTokenExpired());
  if (!isTokenExpired()) {
      next()
      return
  } else {
    next("/pages/login");
  }
};

export default new Router({
  mode: 'history', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: configRoutes()
})

function configRoutes() {
  return [
    {
      path: '/',
      redirect: '/list',
      name: 'Home',
      beforeEnter: ifAuthenticated,
      component: TheContainer,
      children: [
        {
          path: 'configuration',
          name: 'Create Meeting',
          beforeEnter: ifAuthenticated,
          component: configuration,
          children: [

          ]
        },
        {
          path: 'list',
          name: 'Meeting List',
          beforeEnter: ifAuthenticated,
          component: listOfMeetings,
          children: [

          ]
        },
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render(c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
}

