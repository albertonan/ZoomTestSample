import i18n from '../lang/index'

export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['Modules']
      },
      {
        _name: 'CSidebarNavItem',
        name: i18n.t('menu.create'),
        to: '/configuration',
        icon: 'cil-settings'
      },
      {
        _name: 'CSidebarNavItem',
        name: i18n.t('menu.list'),
        to: '/list',
        icon: 'cil-settings'
      },
      /*
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Buttons',
        route: '/buttons',
        icon: 'cil-cursor',
        items: [
          {
            name: 'Buttons',
            to: '/buttons/standard-buttons'
          },
          {
            name: 'Button Dropdowns',
            to: '/buttons/dropdowns'
          },
          {
            name: 'Button Groups',
            to: '/buttons/button-groups'
          },
          {
            name: 'Brand Buttons',
            to: '/buttons/brand-buttons'
          }
        ]
      },*/
    ]
  }
]