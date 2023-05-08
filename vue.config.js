"use strict";

const path = require('path'); // 根路径
const resolve = (dir) => path.join(__dirname, dir); // 拼接路径

module.exports = {
	productionSourceMap: false,
	configureWebpack: (config) => {
		const alias = config.resolve.alias;
		alias['@pages'] = resolve("./pages");
		alias['@components'] = resolve("./components");
	},
}
