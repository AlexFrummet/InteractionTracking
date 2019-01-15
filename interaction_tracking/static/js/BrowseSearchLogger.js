/* eslint-env Browser */
/* global */

var App = App || {};
App.BrowseSearchLogger = (function () {
    "use strict";

    let that = {},
        logs = [],
        testperson_id,
        pretask_id,
        leafNodes,
        getArticleDataUrl;

    function onSearchFieldClicked() {
        event.preventDefault();
        logs.push([testperson_id, pretask_id, "search_field", Date.now()]);

        console.log(logs);
    }

    function onLeafNodeClicked(event) {
        event.preventDefault();
        console.log(event.target);
        // passiert nur, wenn man auf kindnoten drückt --> elemente überlagern sich
        logs.push([testperson_id, pretask_id, event.target.textContent, Date.now()]);
        //console.log(event.target.parentNode.parentNode);
        console.log(logs);
    }

    function clearTextFromModals() {
        $(".modal-title").empty();
        $(".modal-body").empty();
    }

    function initListeners() {
        // necessary, because jstree needs an eternity to be loaded. document.ready is not sufficient...
        let interval_id = setInterval(function () {
            if (leafNodes.length !== 0) {

                clearInterval(interval_id);

                // TODO: move to separate Controller script!!
                $(".jstree-leaf").on('click', function (event) {
                    event.preventDefault();
                    $.ajax({
                        url: getArticleDataUrl,
                        type: "GET",
                        data: {'title_id': event.target.parentNode.id},
                        dataType: 'json',
                        success: function (data) {
                            console.log("SUCCESS");
                            clearTextFromModals();
                            $(".modal-title").append(document.createTextNode(data.results[0].title));
                            $(".modal-body").append(document.createTextNode(data.results[0].content));
                            $("#myModal").modal('show');
                        },
                        error: function (xhr, errmsg, err) {
                            console.log("ERROR");
                        }
                    });
                });
                let search_field = document.getElementById("id_content");
                console.log(leafNodes.length);
                for (let i = 0; i < leafNodes.length; i++) {
                    leafNodes[i].addEventListener("click", onLeafNodeClicked);
                }
                search_field.addEventListener("click", onSearchFieldClicked);
            }

        }, 5);

    }

    function init(tp_id, pt_id, leaf_nodes, get_article_data_url) {
        testperson_id = tp_id;
        pretask_id = pt_id;
        leafNodes = leaf_nodes;
        getArticleDataUrl = get_article_data_url;
        initListeners();
    }


    that.init = init;
    return that;

}());