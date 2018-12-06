/* eslint-env Browser */
/* global */

var App = App || {};
App.Main = (function () {
    "use strict";

    let that = {},
        controller,
        view;

    function initController() {
        controller = new App.Controller(view);
        controller.init();

    }

    function initView() {
        view = new App.View();
        view.init();
    }

    function init() {
        initView();
        initController();
    }


    that.init = init;
    return that;

}());