export const routes = {
  pages: [
    {
      path: '/',
      name: 'Main',
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
      path: '/inbox',
      name: 'Inbox',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z"
        />
        <path
          d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z"
        />
      </svg>,
      subs: []
    },
    {
      path: '/calendar',
      name: 'Calendar',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path d="M1 3h22v20H1z" />
        <path
          d="M21 3h2v4H1V3h2V1h4v2h10V1h4v2Z"
        />
      </svg>,
      subs: []
    },
    {
      path: '/campaigns',
      name: 'Campaigns',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z"
        />
        <path
          d="M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
        />
      </svg>,
      subs: []
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <path
          d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
        />
        <path
          d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
        />
        <path
          d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
        />
        <path
          d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
        />
      </svg>,
      subs: [
        {
          path: '/settings/account',
          name: 'My Account'
        },
        {
          path: '/settings/notifications',
          name: 'My Notifications'
        },
        {
          path: '/settings/apps',
          name: 'Connected Apps'
        },
        {
          path: '/settings/plans',
          name: 'Plans'
        },
        {
          path: '/settings/billing',
          name: 'Billing & Invoices'
        },
        {
          path: '/settings/feedback',
          name: 'Give Feedback'
        },
      ]
    },
    {
      path: '/utility',
      name: 'Utility',
      icon: <svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
        <circle
          cx="18.5"
          cy="5.5"
          r="4.5"
        />
        <circle
          cx="5.5"
          cy="5.5"
          r="4.5"
        />
        <circle
          cx="18.5"
          cy="18.5"
          r="4.5"
        />
        <circle
          cx="5.5"
          cy="18.5"
          r="4.5"
        />
      </svg>,
      subs: [
        {
          path: '/utility/changelog',
          name: 'Changelog'
        },
        {
          path: '/utility/roadmap',
          name: 'Roadmap'
        },
        {
          path: '/utility/faqs',
          name: 'FAQs'
        },
        {
          path: '/utility/empty-state',
          name: 'Empty State'
        },
        {
          path: '/utility/404',
          name: '404n'
        },
        {
          path: '/utility/knowledge-base',
          name: 'Knowledge Base'
        },
      ]
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
          path: '/signin',
          name: 'Sign in'
        },
        {
          path: '/signup',
          name: 'Sign up'
        },
        {
          path: '/reset-password',
          name: 'Reset Password'
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
          name: 'Accordion'
        },
        {
          path: '/component/alert',
          name: 'AlertBanner'
        },
        {
          path: '/component/avatar',
          name: 'Avatar'
        },
        {
          path: '/component/badge',
          name: 'Badge'
        },
        {
          path: '/component/breadcrumb',
          name: 'Breadcrumb'
        },
        {
          path: '/component/button',
          name: 'Button'
        },
        {
          path: '/component/dropdown',
          name: 'Dropdown'
        },
        {
          path: '/component/icons',
          name: 'Icons'
        },
        {
          path: '/component/form',
          name: 'InputForm'
        },
        {
          path: '/component/modal',
          name: 'Modal'
        },
        {
          path: '/component/pagination',
          name: 'Pagination'
        },
        {
          path: '/component/tabs',
          name: 'Tabs'
        },
        {
          path: '/component/tables',
          name: 'Tables'
        },
        {
          path: '/component/tooltip',
          name: 'Tooltip'
        }
      ]
    }
  ],
  more: [
    
  ],

}
