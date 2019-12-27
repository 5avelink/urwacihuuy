//<![CDATA[
$(document).ready(function(){$(".content").addClass("single-posts")});
function load(){$(".social .facebook, .social .twitter, .social .googleplus").click(function(o){o.preventDefault(),window.open($(this).attr("href"),"popupWindow","width=600,height=600,scrollbars=yes")}),$(".btotop").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}$(document).ready(load);
// Youtube Responsive
setTimeout(function(){$(".video-youtube").each(function(){$(this).replaceWith('<iframe class="video-youtube loader" src="'+$(this).data("src")+'" allowfullscreen="allowfullscreen" height="281" width="500"></iframe>')})},5e3);
$(document).ready(function(){$(".comments").not(":has(.comment-form)").addClass("not_have_comment_form"),$(".comments:has(.comment-form)").addClass("has-comment-form")});
// Image Transition
var scroll="yes",Fscroll=scroll.replace(/(\r\n|\n|\r)/gm," ");"yes"===Fscroll&&($(document).ready(function(){$("body").addClass("imgani")}),$(window).bind("load resize scroll",function(){var o=$(this).height();$(".post-body img,.related-post-style-2 .related-post-item-thumbnail").each(function(){var s=.1*$(this).height()-o+$(this).offset().top;$(document).scrollTop()>s&&$(this).addClass("anime")})}));
// Light Gallery
$('#animated-thumbnail').lightGallery({thumbnail:true,getCaptionFromTitleOrAlt:true,selector:"a[style]"});
//]]>
