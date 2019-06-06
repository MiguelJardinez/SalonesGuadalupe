module.exports = {
    plugins: [
        // require ('autoprefixer')({
        //     grid: true,
        //     background:true,
        //     margin: true,
        // }),
        require ('postcss-cssnext')({
            features: {
                autoprefixer: {
                    grid: true,
                    background: true,
                    margin: true, 
                }
            }
        })
    ]
}