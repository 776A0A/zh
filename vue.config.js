/**
 * @type import('@vue/cli-service').ProjectOptions
 */
const vueConfig = {
    chainWebpack: config => {
        config.resolve.extensions.add('.vue')
    },
}

module.exports = vueConfig
