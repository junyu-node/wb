
function resetTabs(obj) {
	$(obj).parent().parent().next("div").find("div").hide();
	$(obj).parent().parent().find("a").removeClass("current");
};
function AloadTab() {
	$(".content > div").hide();
	$(".tabs").each(function () {
		$(this).find("li:first a").addClass("current");
		$(this).find("li:first a .jiao").css('display','block');
	});
	$(".content").each(function () {
		$(this).find("div:first").fadeIn();
	});
	/*票房*/
	$(".tabs a").on("click", function (e) {
		e.preventDefault();
		$(".tabs a .jiao").css('display','none')
		if ($(this).attr("class") == "current") {
			return;
		} else {
			resetTabs(this);
			$(this).addClass("current");
			$($(this).attr("name")).fadeIn();
			$(this).find(".jiao").css('display','block');
		}
	});
};

function loadTab(){
	$(".tabs").each(function(){
		$(this).find("li:first a").addClass("current");
		$(this).find("li:first a .jiao").css('display','block');
		$(".bott_b li").on("click", function (e) {
			$(".tab").css('display','none');
			//alert($(this).index())
			$(".tabs li a .jiao").css("display","none");
			$(".tab").eq($(this).index()).css('display','block');
			$(".tabs li a .jiao").eq($(this).index()).css("display","block")
		})
	});
	$(".tabs_sd a").click(function(){
		$(".tabs_sd a").removeClass("current");
		$(this).addClass("current")
	});
	var pear=null;
	function moreT(){
		clearTimeout(pear)
		$(".rela .more").css("display","block");
		$(".rela .img_down").css({"color":"#f18f2d","background":"url(images/down2.png) no-repeat right center"});
	};
	function moreL(){
		pear=setTimeout(function(){
			$(".rela .more").css("display","none");
			$(".rela .img_down").css({"color":"#fff","background":"url(images/down.png) no-repeat right center"});
		},500)
	};
	$(".rela .img_down").mouseleave(moreL);
	$(".rela .img_down").mouseenter(moreT);
	$(".rela .more").mouseleave(moreL);
	$(".rela .more").mouseenter(moreT);
	$(".caozuo .zhibiao").on("click",function(){
		//$(".abdetailed").css("display","block");
		$(".abdetailed").css("display","block")
	});
	$(".abdetailed .ano").click(function(){
		$(".abdetailed").css("display","none")
	});
	$(".abdetailed .basic .infor").each(function(oo){
		var This=$(this);
		This.attr("ind",oo);
		var n=This.attr("ind")
		var numb=This.find(".option a").length;
		This.find(".total").html(numb);
		num(n);
		This.mouseenter(function(){
			This.find(".option").css("border-color","#f18f2d")
		})
		This.mouseleave(function(){
			This.find(".option").css("border-color","transparent")
		})
		$(this).find(".subt a").click(function(){
			//This.find("option").remove($(this))
			This.find(".option a").addClass("current");
			num(n);
		})
		$(this).find(".option a").click(function(){
			$(this).addClass("current");
			//$(".abdetailed .basic .infor .option a").removeClass("current");
			num(n);
		});
		$(".abdetailed .seled .indica").click(function(){
			$(".basic .option a").removeClass("current");
			$(".abdetailed .seled .chosen").html(" ");
			num(n)
		});
		$(document).click(function(){
			$(".floatwindow").removeClass("floatwindow1");
			$(".j_chanxun .choice ul").css("display","none")
		});
	    $(".floatwindow").click(bubble);
	    $(".choice").click(bubble)
	    function bubble(event){
	      event.stopPropagation();
	      return false;
	    }
		function num(n){
			var index=$(".basic .option").eq(n).attr("ind");
			var p=$(".basic .option").eq(n).find(".current").length;
			$(".basic .subt .num").eq(n).html(p);
			$(".abdetailed .seled .chosen").html(" ");
			$(".basic .option .current").each(function(nu){
				var index=$(this).parent().parent().parent().attr("ind")
				var html=$(".abdetailed .basic .infor .current").eq(nu).html();
				var nObj=$('<li class="y'+index+'">'+html+'<a href="javascript:;"></a></li>');
				$(".abdetailed .seled .chosen").append (nObj);
				nObj.find("a").click(function(){
					nObj.remove();
					$(".abdetailed .basic .infor .current").eq(nu).removeClass("current");
					var Y_ind=$(this).attr("y-index");
					var ss=$(".abdetailed .seled .chosen ").find('.y'+index).length;
					console.log(ss)
					$(".basic .subt .num").eq(index).html(ss);
					num(n)
				})
			})
		};
	});
	$(".j_chanxun .b3 a").click(function(){
		$(this).parent("li").remove();
	});
	$(".j_chanxun .choice button").click(function(){
		$(this).parent().find("ul").css("display","block");
		
	});
	$(".j_chanxun .choice a").click(function(){
			if($(this).find(".check").attr("data-check")=="true"){
				$(this).find(".check").attr("data-check","false");
				$(this).find(".check").removeClass("click");
				$(this).find(".check").html(" ");
			}else{
				$(this).find(".check").attr("data-check","true");
				$(this).find(".check").html("√");
				$(this).find(".check").addClass("click");
			};
			var str="";
			$(".j_chanxun .choice .click").each(function(){
				str+=$(this).parent().find(".text").html()+",";
			})
			$(".j_chanxun .choice button").attr("title",str.substring(0,str.length-1));
			$(".j_chanxun .choice button").html(str.substring(0,5))
			if(!str){
				$(".j_chanxun .choice button").html("全部")
			}
		});
	$(".chart_ex").eq(1).css("display","none");
	$(".transft a").click(function(){
		$(".transft a").removeClass("current");
		$(this).addClass("current");
		$(".chart_ex").css("display","none");
		$(".chart_ex").eq($(this).index()).css("display","block");
	});
}