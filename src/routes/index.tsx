import Calendar from "@/pages/Calendar";
import SignIn from "@/pages/auth/SignIn";
import Accordion from "@/pages/component/Accordion";

import { lazy } from "react";

export const routes = {
  pages: [
    {
      path: '/',
      name: 'Main',
      component: lazy(() => import('@/pages/dashboard')),
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
        />
        <path
          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
        />
        <path
          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
        />
      </svg>,
      subs: []
    },
    {
      path: '/nft-marketplace',
      name: 'NFT Marketplace',
      component: lazy(()=> import('@/pages/marketplace')),
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
        />
        <path
          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
        />
        <path
          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
        />
      </svg>,
      subs: []
    },
    {
      path: '/profile',
      name: 'Profile',
      component: lazy(()=> import('@/pages/profile')),
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
        />
        <path
          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
        />
        <path
          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
        />
      </svg>,
      subs: []
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: lazy(()=> import('@/pages/Calendar')),
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path d="M1 3h22v20H1z" />
        <path
          d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
        />
      </svg>,
      subs: []
    },
    {
      path: '#',
      name: 'Authentication',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path className="fill-current text-slate-600" d="M8.07 16H10V8H8.07a8 8 0 110 8z" />
        <path className="fill-current text-slate-400" d="M15 12L8 6v5H0v2h8v5z" />
      </svg>,
      subs: [
        {
          path: '/auth/signin',
          name: 'Sign in',
          component: lazy(()=>import('@/pages/auth/SignIn'))
        },
        {
          path: '/auth/signup',
          name: 'Sign up',
          component: lazy(()=>import('@/pages/auth/SignIn'))
        },
        {
          path: '/auth/reset-password',
          name: 'Reset Password',
          component: lazy(()=>import('@/pages/auth/SignIn'))
        },
      ]
    },

    {
      path: '/component',
      name: 'Component',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <circle
          cx="16"
          cy="8"
          r="8"
        />
        <circle
          cx="8"
          cy="16"
          r="8"
        />
      </svg>,
      subs: [
        {
          path: '/component/accordion',
          name: 'Accordion',
          component: lazy(() => import('@/pages/component/Accordion'))
        },
        {
          path: '/component/alert',
          name: 'AlertBanner',
          component: lazy(() => import('@/pages/component/AlertBanner'))
        },
        {
          path: '/component/avatar',
          name: 'Avatar',
          component: lazy(() => import('@/pages/component/Avatar'))
        },
        {
          path: '/component/badge',
          name: 'Badge',
          component: lazy(() => import('@/pages/component/Badge'))
        },
        {
          path: '/component/breadcrumb',
          name: 'Breadcrumb',
          component: lazy(() => import('@/pages/component/Breadcrumb'))
        },
        {
          path: '/component/button',
          name: 'Button',
          component: lazy(() => import('@/pages/component/Button'))
        },
        {
          path: '/component/banner',
          name: 'Banner',
          component: lazy(() => import('@/pages/component/Banner'))
        },
        {
          path: '/component/category',
          name: 'Category',
          component: lazy(() => import('@/pages/component/Category'))
        },
        {
          path: '/component/center',
          name: 'Center',
          component: lazy(() => import('@/pages/component/Center'))
        },
        {
          path: '/component/dropdown',
          name: 'Dropdown',
          component: lazy(() => import('@/pages/component/Dropdown'))
        },
        {
          path: '/component/description',
          name: 'Description',
          component: lazy(() => import('@/pages/component/description'))
        },
        {
          path: '/component/detail',
          name: 'Detail',
          component: lazy(() => import('@/pages/component/Detail'))
        },
        {
          path: '/component/icons',
          name: 'Icons',
          component: lazy(() => import('@/pages/component/Icons'))
        },
        {
          path: '/component/form',
          name: 'InputForm',
          component: lazy(() => import('@/pages/component/InputForm'))
        }, 
        {
          path: '/component/feature',
          name: 'Feature',
          component: lazy(() => import('@/pages/component/Feature'))
        },
        {
          path: '/component/list',
          name: 'List',
          component: lazy(() => import('@/pages/component/List'))
        },
        {
          path: '/component/modal',
          name: 'Modal',
          component: lazy(() => import('@/pages/component/Modal'))
        },
        {
          path: '/component/navbar',
          name: 'Navbar',
          component: lazy(() => import('@/pages/component/Navbar'))
        },
        {
          path: '/component/notfound',
          name: 'Notfound',
          component: lazy(() => import('@/pages/component/NotFound'))
        },
        {
          path: '/component/navigation',
          name: 'Navigation',
          component: lazy(() => import('@/pages/component/Navigation'))
        },
        {
          path: '/component/pagination',
          name: 'Pagination',
          component: lazy(() => import('@/pages/component/Pagination'))
        },
        {
          path: '/component/pagehead',
          name: 'PageHead',
          component: lazy(() => import('@/pages/component/PageHead'))
        },
        {
          path: '/component/slideovers',
          name: 'SlideOvers',
          component: lazy(() => import('@/pages/component/SlideOvers'))
        },
        {
          path: '/component/select',
          name: 'Select',
          component: lazy(() => import('@/pages/component/Select'))
        },
        {
          path: '/component/section',
          name: 'Section',
          component: lazy(() => import('@/pages/component/Section'))
        },
        {
          path: '/component/state',
          name: 'State',
          component: lazy(() => import('@/pages/component/State'))
        },
        {
          path: '/component/tabs',
          name: 'Tabs',
          component: lazy(() => import('@/pages/component/Tabs'))
        },
        {
          path: '/component/tables',
          name: 'Tables',
          component: lazy(() => import('@/pages/component/Tables'))
        },
        {
          path: '/component/tooltip',
          name: 'Tooltip',
          component: lazy(() => import('@/pages/component/Tooltip'))
        },
        
      ]
    }
  ],
  more: [
    
  ],

}
