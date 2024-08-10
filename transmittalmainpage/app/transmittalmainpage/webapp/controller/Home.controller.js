sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    function (Controller, JSONModel) {
        "use strict";

        let that, oModel, oGModel;
        return Controller.extend("com.trans.transmittalmainpage.controller.Home", {
            onInit: function () {
                that = this;
                oModel = that.getOwnerComponent().getModel(),
                    oGModel = that.getOwnerComponent().getModel("oGModel");
                that.registerDialog = that.loadFragment({
                    name: "com.trans.transmittalmainpage.view.register",
                });
                that.bindProject();
            },
            bindProject: async function () {
                oModel.read("/PROJECT", {
                    success: function (oRes) {
                        that.allProject = oRes.results;
                        that.byId("idMainTiles").setModel(new JSONModel({
                            items: oRes.results.filter(o => o.REGISTER)
                        }))
                    },
                    error: function (oError) {
                        console.error(oError)
                    }

                })
            },
            onRegister: async function () {
                that.registerDialog = await that.registerDialog;
                that.registerDialog.open();
                that.byId("idProjectList").setModel(new JSONModel({
                    items: that.allProject.filter(o => !o.REGISTER)
                }))
                that.selectProject = [];
            },
            onCloseOption: function () {
                that.registerDialog.close();

            },
            onSelectProject: function (oEvent) {
                const obj = oEvent.mParameters.listItem.getBindingContext().getObject();
                that.selectProject.push(obj);
                that.allProject = that.allProject.filter(o => o.PROJ_NO !== obj.PROJ_NO)
            },
            onAddProject: function () {
                const selectedItems = that.byId("idProjectList").getModel().getData().items;
                oModel.callFunction("/Project_Fun", {
                    urlParameters: { items: JSON.stringify({ item: selectedItems, FLAG: "UPDATE" }) },
                    success: function (oRes) {
                        let bindData = that.byId("idMainTiles").getItems().map(o=>o.getBindingContext().getObject());
                        that.byId("idMainTiles").getItems().map(i=>i.destroy())
                        that.byId("idMainTiles").setModel(new JSONModel({
                            items: [...bindData, ...selectedItems].filter(o => o.REGISTER)
                        }));
                        // that.byId("idMainTiles").getModel().refresh(true);
                        that.registerDialog.close();
                    },
                    error: function (oError) {
                        console.error(oError)
                    }

                })
            },
            onPressTitle: function (oEvent) {
                if (oEvent.mParameters.scope === "ActionRemove") {
                    const item = oEvent.oSource;
                    const obj = oEvent.oSource.getBindingContext().getObject();
                    // oEvent.oSource.destroyTileContent()

                    oEvent.oSource.getParent().removeItem(oEvent.oSource);
                    item.destroy()
                    obj.REGISTER = false;
                    that.removeTile.push(obj);
                }
            },
            onEdit: function (oEvent) {
                if (oEvent.oSource.getText() === "Edit") {
                    oEvent.oSource.setText("Done");
                    oGModel.setProperty("/removeTile", true);
                    that.removeTile = [];
                } else {
                    oEvent.oSource.setText("Edit");
                    oGModel.setProperty("/removeTile", false);
                    oModel.callFunction("/Project_Fun", {
                        urlParameters: { items: JSON.stringify({ item: that.removeTile, FLAG: "UPDATE" }) },
                        success: function (oRes) {
                            // that.byId("idMainTiles").setModel(new JSONModel({
                            //     items: selectedItems.filter(o => o.REGISTER)
                            // }))
                            // that.registerDialog.close();
                        },
                        error: function (oError) {
                            console.error(oError)
                        }

                    })
                }
            }
        });
    });
