var Cart={ToggleShippingEstimation:function(){$(".EstimatedShippingMethods").hide(),$(".EstimateShipping").slideToggle(300),$(".EstimateShippingLink").toggle(),$(".EstimateShipping select:eq(0)").focus(),$("#shippingZoneState").uniform(),$("#shippingZoneState").is(":hidden")&&$("#uniform-shippingZoneState").hide()},EstimateShipping:function(){return 0==$("#shippingZoneCountry").val()?(alert(lang.SelectCountry),void $("#shippingZoneCountry").focus()):$("#shippingZoneState").is(":visible")&&0==$("#shippingZoneState").val()?(alert(lang.SelectState),void $("#shippingZoneState").focus()):""==$.trim($("#shippingZoneZip").val())?(alert(lang.EnterZip),void $("#shippingZoneZip").focus()):($(".EstimatedShippingMethods").hide(),$(".EstimateShipping .EstimateShippingButtons span").hide(),$(".EstimateShipping .EstimateShippingButtons input").data("oldVal",$(".EstimateShipping .EstimateShippingButtons input").val()).val(lang.Calculating).attr("disabled",!0),void $.ajax({url:"remote.php",type:"post",data:{w:"getShippingQuotes",countryId:$("#shippingZoneCountry").val(),stateId:$("#shippingZoneState").val(),stateName:escape($("#shippingZoneStateName").val()),zipCode:$("#shippingZoneZip").val()},success:function(i){$(".EstimatedShippingMethods .ShippingMethodList").html(i),$(".EstimatedShippingMethods").show(),$(".EstimateShipping .EstimateShippingButtons span").show(),$(".EstimateShipping .EstimateShippingButtons input").val($("..EstimateShipping .EstimateShippingButtons input").data("oldVal")).attr("disabled",!1)}}))},ToggleShippingEstimateCountry:function(){var i=$("#shippingZoneCountry").val();$.ajax({url:"remote.php",type:"post",data:"w=countryStates&c="+i,success:function(i){$("#shippingZoneState option:gt(0)").remove();for(var t=i.split("~"),e=0,n=0;n<t.length;++n)vals=t[n].split("|"),vals[0]&&($("#shippingZoneState").append('<option value="'+vals[1]+'">'+vals[0]+"</option>"),++e);0==e?($("#shippingZoneState").hide(),$("#shippingZoneStateName").show(),$("#shippingZoneStateRequired").hide(),$("#uniform-shippingZoneState").hide()):($("#shippingZoneState").show(),$("#shippingZoneStateName").hide(),$("#shippingZoneStateRequired").show(),$.uniform.update(),$("#uniform-shippingZoneState").show()),$("#shippingZoneState").val("0")}})},UpdateShippingCost:function(){{var i=!0;$(".EstimatedShippingMethods table").each(function(){var t=$("input[type=radio]:checked",this).val();return"undefined"==typeof t||""==t?(alert(lang.ChooseShippingMethod),$("input[type=radio]:eq(0)",this).focus(),i=!1):void 0})}return 0==i?i:void $("#cartForm").submit()},RemoveItem:function(i){confirm(lang.CartRemoveConfirm)&&(document.location.href="cart.php?action=remove&item="+i)},UpdateQuantity:function(i){if(0==i){if(!confirm(lang.CartRemoveConfirm))return!1;$("#cartForm").submit()}else $("#cartForm").submit()},ValidateQuantityForm:function(i){var t=!0,e=$(i).find("input.qtyInput");return e.each(function(){return isNaN($(this).val())||$(this).val()<0?(alert(lang.InvalidQuantity),this.focus(),this.select(),t=!1,!1):void 0}),0==t?!1:!0},CheckCouponCode:function(){return""==$("#couponcode").val()?(alert(lang.EnterCouponCode),$("#couponcode").focus(),!1):void 0},CheckGiftCertificateCode:function(){return""==$("#giftcertificatecode").val()?(alert(lang.EnterGiftCertificateCode),$("#giftcertificatecode").focus(),!1):void 0},ManageGiftWrapping:function(i){$.iModal({type:"ajax",url:"remote.php?w=selectGiftWrapping&itemId="+i})},ToggleGiftWrappingType:function(i){$(i).hasClass("HasPreview")?($(".GiftWrappingPreviewLinks").hide(),$("#GiftWrappingPreviewLink"+$(i).val()).show()):$(".GiftWrappingPreviewLinks").hide(),$(i).hasClass("AllowComments")?$(i).parents(".WrappingOption").find(".WrapComments").show():$(i).parents(".WrappingOption").find(".WrapComments").hide()},ToggleMultiWrapping:function(i){"same"==i?($(".WrappingOptionsSingle").show(),$(".WrappingOptionsMultiple").hide()):($(".WrappingOptionsSingle").hide(),$(".WrappingOptionsMultiple").show())},RemoveGiftWrapping:function(){return confirm(lang.ConfirmRemoveGiftWrapping)?!0:!1},ShowEditOptionsInCartForm:function(i){var t={type:"ajax",url:"remote.php?w=editconfigurablefieldsincart&itemid="+i};"object"==typeof config&&config.isMobile&&(t.width=300),$.iModal(t)},saveItemCustomizations:function(){if(!CheckProductConfigurableFields($("#CartEditProductFieldsForm")))return!1;var i=$("#CartEditProductFieldsForm").validate().form();return i?!0:!1},DeleteUploadedFile:function(i,t){confirm(lang.DeleteProductFieldFileConfirmation)&&$.ajax({url:"remote.php",type:"post",data:"w=deleteuploadedfileincart&field="+i+"&item="+t,success:function(){document.getElementById("CurrentProductFile_"+i).value="",$("#CartFileName_"+i).hide()}})},ReloadCart:function(){window.location="cart.php"}};