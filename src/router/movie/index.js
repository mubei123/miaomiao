export default {
    path: '/movie/',
    component: () =>
        import('@/views/movies'),
    children: [

        {
            path: 'city',
            component: () =>
                import('@/components/city')
        },
        {
            path: 'nowPlaying',
            component: () =>
                import('@/components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component: () =>
                import('@/components/ComingSoon')
        },
        {
            path: 'search',
            component: () =>
                import('@/components/Search')
        },
        {
            path: 'detail/:movieId',
            components: {
                default: () =>
                    import('@/components/NowPlaying'),
                detail: () => import('@/views/movies/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}