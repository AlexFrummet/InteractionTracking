/* eslint-env Browser */
/* global */

var App = App || {};
App.GenerateHierarchyLogger = (function () {
    "use strict";

    let that = {},
        logs = [],
        testperson_id,
        treeNodes;

    function onHierarchyClicked(event) {
        event.preventDefault();
        console.log(event.target);
        logs.push([testperson_id, event.target.textContent, Date.now()]);
        console.log(logs);
    }


    function onArticleClicked(event) {
        event.preventDefault();
        console.log(event.target);
        logs.push([testperson_id, event.target.textContent, Date.now()]);
        console.log(logs);
    }

    function initListeners() {
        // necessary, because jstree needs an eternity to be loaded. document.ready is not sufficient...
        let interval_id = setInterval(function () {
            if (treeNodes.length !== 0) {

                clearInterval(interval_id);
                //TODO: Refactoring!!
                let articles = document.getElementsByClassName("article");

                console.log(treeNodes.length);
                for (let i = 0; i < treeNodes.length; i++) {
                    treeNodes[i].addEventListener("click", onHierarchyClicked);
                }
                for (let i = 0; i < articles.length; i++) {
                    articles[i].addEventListener("click", onArticleClicked);
                }
            }

        }, 5);

    }

    function init(tp_id, tree_nodes) {
        testperson_id = tp_id;
        treeNodes = tree_nodes;
        initListeners();
    }


    that.init = init;
    return that;

}());