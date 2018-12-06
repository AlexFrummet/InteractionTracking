/* eslint-env Browser */
/* global */

var App = App || {};
App.View = function () {
    "use strict";

    let that = {};


    function init() {

    }

    function addChildElement(event, ui) {
        console.log(event);
        console.log(ui);
        $('.droppable').append('<ul><li>' + $("#test-drag") + '</li></ul>');
    }

    that.init = init;
    that.addChildElement = addChildElement;
    return that;

};