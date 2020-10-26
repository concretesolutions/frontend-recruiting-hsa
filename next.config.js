module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/search',
                permanent: true
            },
            {
                source: '/search/user',
                destination: '/search',
                permanent: true
            }
        ];
    }
};
