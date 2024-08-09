sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    let that;
    return Controller.extend("demo.controller.View1", {
        onInit: function () {
            that = this;
            const oModel = that.getOwnerComponent().getModel();
            debugger
            oModel.read("/books",{
                success:function(oRes){
                    debugger
                },
                error:function(oError){
                    debugger
                }
            })
        }
    });
});
