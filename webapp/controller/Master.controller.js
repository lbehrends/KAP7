sap.ui.define([
	"KAP7/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/Sorter"
	], function(BaseController, Filter, FilterOperator, Sorter){
	"use strict";
	return BaseController.extend(
		"KAP7.controller.Master", {
			onInit:function(){
				this._sorter = new Sorter("ProductName", false);
			},
			onSortProductName: function(){
				this._sorter.bDescending = !this._sorter.bDescending;
				this.getView().byId("productList").getBinding("items").sort(this._sorter);
			
				var aSorter=[];
				var oListBinding = this.getView().byId("productList").getBinding("items");
				var aListSorter = oListBinding.aSorter;
				var oSorter;
				if (aListSorter.length> 0){
					oSorter = aListSorter[0];
					oSorter.bDescending = !oSorter.bDescending;
					oListBinding.sort(oSorter);
				}
			},
			
			
			
			onFilterProducts: function(oEvent){
				var aFilter = [];
				var sQuery = oEvent.getParamater("query");
				if(sQuery){
					aFilter.push(new Filter( "ProductName", FilterOperator.Contains, sQuery));
				}
				var oList = this.getView().byId("productList");
				var oBinding = oList.getBinding("items");
				oBinding.filter(aFilter);
				
			}	
		});
	});