/* eslint-disable */
exports.destroyVM = function (vm) { }

/**
* Create a Vue instance object
* @param {Object|String} Compo-component configuration, you can directly pass template
* @param {Boolean=false} mounted-whether to add to the DOM
* @return {Object} vm
*/
exports.createVue = function (Compo, mounted = false) { }

/**
* Create a test component instance
* @param {Object} Compo-component object
* @param {Object} propsData-props data
* @param {Boolean=false} mounted-whether to add to the DOM
* @return {Object} vm
*/
exports.createTest = function (Compo, propsData = {}, mounted = false) { }
