module.exports = {
    title: 'SDAG文档中心',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            ['/', 'home'],
            ['/docker', 'docker'],
            ['/api', 'api'],
            ['/sdk', 'sdk']
        ]
    },
    markdown: {
        lineNumbers: true
    }
}