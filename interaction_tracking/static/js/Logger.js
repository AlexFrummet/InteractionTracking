/* eslint-env Browser */
/* global */

var App = App || {};
App.Logger = (function () {
    "use strict";

    let that = {},
        logs = [],
        testperson_id,
        pretask_id,
        leafNodes;

    function onSearchFieldClicked() {
        event.preventDefault();
        logs.push([testperson_id, pretask_id, "search_field", Date.now()]);

        console.log(logs);
    }

    function onLeafNodeClicked(event) {
        event.preventDefault();
        // passiert nur, wenn man auf kindnoten drückt --> elemente überlagern sich
        logs.push([testperson_id, pretask_id, "leaf_node", Date.now()]);
        console.log(event.target.parentNode.parentNode);
        console.log(logs);
    }

    function initListeners() {
        // necessary, because jstree needs an eternity to be loaded. document.ready is not sufficient...
        let interval_id = setInterval(function () {
            if (leafNodes.length !== 0) {

                clearInterval(interval_id);

                let search_field = document.getElementById("id_content");
                console.log(leafNodes.length)
                for (let i = 0; i < leafNodes.length; i++) {
                    leafNodes[i].addEventListener("click", onLeafNodeClicked);
                }
                search_field.addEventListener("click", onSearchFieldClicked);
            }

        }, 5);

    }

    function init(tp_id, pt_id, leaf_nodes) {
        /* TODO:
        * logging....
        * vorschau, wenn datei im browse-fenster
        * */
        testperson_id = tp_id;
        pretask_id = pt_id;
        leafNodes = leaf_nodes;
        initListeners();
    }


    that.init = init;
    return that;

}());