/*
 * @Author: bmqy
 * @Date: 2020-05-22 09:59:07
 * @LastEditTime: 2020-05-22 10:51:09
 * @LastEditors: bmqy
 * @Description: 
 */ 
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      /guide/
    ]
  }
}