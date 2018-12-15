/* eslint-env Browser */
/* global */

var App = App || {};
App.View = function () {
    "use strict";

    let that = {};


    function init() {

    }

    function addChildElement(event, ui) {
        console.log(event.target.id);
        /*console.log(ui);
        console.log(ui.draggable[0].id);*/
        $('#generate_jstree').jstree().create_node(event.target.id, {
            "position": "first",
            "id": "" + ui.draggable[0].innerText.trim() + " file-node",
            "text": "" + ui.draggable[0].innerText.trim(),
            "type": "file",
        });
        $("#" + ui.draggable[0].id).remove();
        // $('.droppable').append($("#test-drag"));
        // $('#test-drag').wrap("<ul class='jstree-children' role='group'><li class='jstree-node jstree-leaf' role='treeitem' aria-selected='true' aria-level='2' aria-labelledby='test-drag'></li></ul>");
    }

    that.init = init;
    that.addChildElement = addChildElement;
    return that;

};