/* eslint-env Browser */
/* global */

var App = App || {};
App.Controller = function (view) {
    "use strict";

    let that = {},
        createdFolders = 0,
        renamedFolders = 0,
        deletedFolders = 0,
        movedFiles = 0;

    function initJSTree() {
        $('#generate_jstree').jstree({
            "core": {
                "animation": 0,
                "check_callback": true,
            },
            "plugins": [
                "contextmenu", "dnd", "types", "search", "state", "wholerow"
            ],
            "types": {
                "#": {
                    "valid_children": ["root"]
                },
                "default": {
                    "valid_children": ["default", "file"]
                },
                "file": {
                    "icon": "fa fa-file-word-o",
                    "valid_children": [],
                }
            },
            'contextmenu': {
                'items': function ($node) {
                    return {
                        'Create': {
                            label: "Ordner erstellen",
                            action: function (data) {
                                var inst = $.jstree.reference(data.reference),
                                    obj = inst.get_node(data.reference),
                                    level = parseInt($('#' + obj.id).attr('aria-level')) + 1;
                                inst.create_node(obj, {
                                    li_attr: {
                                        'aria-level': level,
                                        "class": "droppable",
                                        "state": "opened"
                                    }
                                }, "last", function (new_node) {
                                    new_node.data = {
                                        file: false,
                                        data: 0
                                    };
                                    setTimeout(function () {
                                        inst.edit(new_node);
                                    }, 0);
                                });
                            }
                        },

                        'Rename': {
                            label: "Umbenennen",
                            action: function (data) {
                                var inst = $.jstree.reference(data.reference),
                                    obj = inst.get_node(data.reference);
                                inst.edit(obj);
                            }

                        },

                        "Remove": {
                            label: "Löschen",
                            action: function (data) {
                                var inst = $.jstree.reference(data.reference),
                                    obj = inst.get_node(data.reference);
                                if (obj.children.length > 0 || obj.id.includes("file-node")) {
                                    alert("Diesen Ordner kannst du nicht löschen, da er Ordner oder Dateien beinhaltet!")
                                } else {
                                    inst.delete_node(obj);
                                }
                            }
                        }
                    };
                }
            }
        }).on('create_node.jstree', function (e, data) {
            console.log("AFTER NEW NODE ADDED");
            e.target.classList.add("droppable");
            initDragAndDrop();
            console.log(e.target);
            if (!(data.node.id.includes("file-node"))) {

                createdFolders += 1;
            }
        }).on('rename_node.jstree', function (e, data) {
            if (!(data.text === "New node")) {
                renamedFolders += 1;
            }
        }).on('delete_node.jstree', function (e, data) {
            deletedFolders += 1;
        }).on('move_node.jstree', function (e, data) {
            movedFiles += 1;
        }).on('changed.jstree', function (e, data) {
            console.log(data.selected);
        });
    }

    function initDragAndDrop() {
        $('.draggable').draggable({revert: "invalid"});
        $('.droppable').droppable({
            drop: function (event, ui) {
                console.log("DROP FIRED!");
                view.addChildElement(event, ui);
                return true; // es hilft, wenn man auf den Ordner klickt, auf den man was hinzufuegen will
            }
        });
    }

    function init() {
        initJSTree();
        initDragAndDrop();

    }


    that.init = init;
    return that;

};