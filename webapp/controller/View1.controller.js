sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Fragment"
], function (Controller, Fragment) {
	"use strict";

	return Controller.extend("edt.fragment.controller.View1", {
		onInit: function () {

		},
		openFragment: function () {
			// 			// load asynchronous XML fragment
			// if (!this.byId("viewSettingsDialog")) {
			// 	Fragment.load({
			// 		id: this.getView().getId(),
			// 		name: "opensap.orders.view.ViewSettingsDialog",
			// 		controller: this
			// 	}).then(function(oDialog){
			// 		// connect dialog to the root view of this component (models, lifecycle)
			// 		this.getView().addDependent(oDialog);
			// 		oDialog.addStyleClass(this.getOwnerComponent().getContentDensityClass());
			// 		oDialog.open(sDialogTab);
			// 	}.bind(this));
			// } else {
			// 	this.byId("viewSettingsDialog").open(sDialogTab);
			// }

			if (this.oDialog === undefined) {
				Fragment.load({
					id: this.getView().getId(),
					name: "edt.fragment.view.View1",
					controller: this
				}).then(function(oDialog) {
					this.oDialog = oDialog;
					this.getView().addDependent(oDialog);
					oDialog.open();
				}.bind(this));
			} else {
				this.oDialog.open();
			}
		},
		onLiveChange: function(oEvt) {
			var sValue = oEvt.getParameter("value");
			if (sValue !== undefined) {
				var oFilter = new sap.ui.model.Filter("Name", sap.ui.model.FilterOperator.Contains, sValue);
				var oBinding = oEvt.getSource().getBinding("items");
				oBinding.filter([oFilter]);
			}
		}
	});
});