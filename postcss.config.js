module.export = {
    plugins: [
        require ('autoprefixer')({
            grid: true,
            background:true,
            margin: true,
        }),
        require ('postcss-cssnext')({
            
        })
    ]
}