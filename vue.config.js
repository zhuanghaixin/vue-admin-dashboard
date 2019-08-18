module.exports = {
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `
        @import "@/global-styles/colors.scss";
        @import "@/global-styles/typography.scss";
        `
            }
        }
    }
}
