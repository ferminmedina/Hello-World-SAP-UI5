sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("project1.controller.View1", {
            onInit: function () {

                let description = 'Esta es una descripcion cargada localmente desde el controller hacia el view :)';

                this.getView().setModel(new JSONModel({Description: description}), 'Datos');

            }
        });
    });
