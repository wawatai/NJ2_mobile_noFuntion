//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})

    $('.multiple-items').slick({
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3,
        slidesToShow: 1
    })
})

//home
$(function(){
    $(".homeCenter .topBox li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".homeCenter .downBox:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".homeCenter .smallLove_ic").on("click",function(){
        $(this).closest(".loveBox")
        .toggleClass("active");
    })
})

//news
$(function(){
    $(".jumpWindow.news li.smallTitle,.jumpWindow.rules li.smallTitle").on("click",function(){
        $(this).closest(".infoBox")
        .toggleClass("active");
    })
})

//註冊頁判斷打字按鈕
$(function(){
    $($(".registerWindow .code").prev("input")).on("input",function(){
        if($(".registerWindow .code").prev("input").val() == "")
        {
            $(".registerWindow .code")
            .attr("disabled",true);
        }
        else
        {
            $(".registerWindow .code")
            .attr("disabled",false);
        }
    })
})

//record
$(function(){
    $(".searchContent .date button").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".bettingWrap .list .noData")
        .addClass("display")
        .siblings().removeClass("display");

        $(".searchContent .check").on("click",function(){
            $(".dealBox,.recordBox,.partnerBox")
            .addClass("display");

            $(".noData")
            .removeClass("display");
        })
    })
})

//memberInfo
$(function(){
    $(".memberInfo .checkBtn").on("click",function(){
        $(this)
        .remove();

        $(".memberInfo form .edit_ic")
        .addClass("display");

        $($(".memberInfo form .inputBox").has(".edit_ic"))
        .find("input").attr("disabled",true);

        $(".memberInfo form .edit_ic:not(.changePhone)").on("click",function(){
            $(this)
            .removeClass("display")
            .siblings("i").addClass("display");

            $(this).siblings("input")
            .attr("disabled",false);
        })

        $(".memberInfo form .check_ic").on("click",function(){
            $(this).closest(".inputBox")
            .find("i").removeClass("display");

            $(this)
            .siblings("input").attr("disabled",true);

            $(this)
            .siblings(".edit_ic").addClass("display");
        })

        $(".memberInfo form .nocheck_ic").on("click",function(){
            $(this)
            .siblings("input").val("");
        })
    })
})

//wallet
$(function(){
    $(".walletList .openBtn").on("click",function(){
        $(this)
        .removeClass("display");

        $(".forPlatform")
        .addClass("active");
    })

    $(".walletList .closeBtn").on("click",function(){
        $(".forPlatform")
        .removeClass("active");

        $(".openBtn")
        .addClass("display");
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
})

//slotPage
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $(".slotWrap .smallLove_ic").on("click",function(){
        $(this).closest(".loveBox")
        .toggleClass("active");
    })
})

//event
$(function(){
    $(".eventWrap .eventType li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");
    })
})

//mail
$(function(){
    $("header .editBtn").on("click",function(){
        $(this)
        .removeClass("display")

        $(".detailBtn")
        .addClass("display");

        $(".editBox")
        .addClass("display");

        $(".mailBox")
        .addClass("editing");
    })

    $("header .detailBtn").on("click",function(){
        $(this)
        .removeClass("display");
        
        $(".editBtn")
        .addClass("display");

        $(".editBox")
        .removeClass("display");

        $(".mailBox")
        .removeClass("editing");
    })

    $(".mailWrap.normal .subClass li").on("click",function(){
        $(".mailWrap.normal .mailBox")
        .toggleClass("display");

        $(".mailBox")
        .removeClass("editing");

        $(".editBox,.detailBtn")
        .removeClass("display");

        $(".editBtn")
        .addClass("display");

        $(this)
        .removeClass("display")
        .siblings().addClass("display");

        $(".mailWrap.normal .lineTitle")
        .toggleClass("display");
    })

    $(".mailWrap.post .subClass li").on("click",function(){
        if($(this).hasClass("deposit"))
        {
            $(".mailWrap .mailBox.dep")
            .addClass("display")
            .siblings().removeClass("display");

            $(".mailWrap .lineTitle.dep")
            .addClass("display");
        }else if($(this).hasClass("normal"))
        {
            $(".mailWrap .mailBox.nor")
            .addClass("display")
            .siblings().removeClass("display");

            $(".mailWrap .lineTitle.nor")
            .addClass("display");
        }
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").on("click",function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active")

        var n = $(this).index();

        $("main>div:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//help
$(function(){
    $(".helpBody li").on("click",function(){
        var n = $(this).index();

        $("header .helpPage:eq("+ (n + 1) +")")
        .addClass("display")
        .siblings().removeClass("display");

        $(".helpWrap")
        .removeClass("display")
        .siblings().addClass("display");

        $(".helpInner li:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })

    $(".helpInner .box .titleBox").on("click",function(){
        $(this).closest(".box")
        .toggleClass("active");
    })
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $(".unLogin").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.loginWindow')
        .addClass('display');
    })

    $('.loginWindow .forget p').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.forgetWindow')
        .addClass('display');
    })

    $(".signupBtn,.register span,.jumpWindow.rules .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.registerWindow')
        .addClass('display');
    })

    $('.registerWindow .isCheck .ruleBtn').click(function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.rules')
        .addClass('display');
    })

    $(".openLive").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.liveGame')
        .addClass('display');
    })

    $(".openSlot").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.slotGame')
        .addClass('display');
    })

    $(".openBoard").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.boardGame')
        .addClass('display');
    })

    $(".openFish").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.fishGame')
        .addClass('display');
    })

    $(".openSport").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betWindow.sportGame')
        .addClass('display');
    })

    $(".helpInner .sendBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".edit_ic.changePhone").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.phoneWindow')
        .addClass('display');
    })

    $(".pwdBox .edit_ic").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.passwordWindow')
        .addClass('display');
    })

    $(".langBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.langWindow')
        .addClass('display');
    })

    $(".linkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.downloadBox')
        .addClass('display');
    })

    $(".linkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.downloadBox')
        .addClass('display');
    })

    $(".cardContent .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".plsGo .openBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo2')
        .addClass('display');
    })

    $(".waterBox .openBuy").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterWindow_1')
        .addClass('display');
    })

    $(".waterBox .openRecord").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.waterWindow_2')
        .addClass('display');
    })

    $(".bettingWrap .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betRecord')
        .addClass('display');
    })

    $(".bettingWrap .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.betRecord')
        .addClass('display');
    })

    $(".bettingWrap .pointBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.pointWindow')
        .addClass('display');
    })

    $(".bettingWrap .partnerBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.partnerBox')
        .addClass('display');
    })

    $(".applyList .sendBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.plsGo')
        .addClass('display');
    })

    $(".applyList .checkBtn").on("click",function(){
        $('.jumpWindow')
        .removeClass('display');
        $('.filter,.eventWindow')
        .addClass('display');
    })
})