/*
 * @Description:
 * @Author: Rabbiter
 * @Date: 2023-09-07 20:58:35
 */
const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    devServer: {
        open: true,
        historyApiFallback: true,
        host: "localhost",
        https: false,
        port: 9292
    },

}

