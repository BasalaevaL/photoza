function openBlock(o){for(var n=o.parentNode.childNodes,i=0;i<n.length;i++){var t=n[i];t&&"information"==t.className&&("block"!=t.style.display?t.style.display="block":t.style.display="none")}}$(document).ready(function(){$("a.photo").fancybox({transitionIn:"fade",transitionOut:"fade",speedIn:500,speedOut:500,hideOnOverlayClick:!1,titlePosition:"outside"})}),$(function(){$(".form__button__registr").click(function(){$(".registration").show(),$(".form-reg").show()}),$(".form-reg__close").click(function(){$(".login").hide(),$(".form").hide()})}),$(function(){$(".registr").click(function(){$(".modal").show()})}),$(function(){$(".form__link__forget").click(function(){$(".password").show(),$(".form-pasw").show()}),$(".form-pasw__close").click(function(){$(".login").hide(),$(".form").hide()})}),$(function(){$(".eml-otpr").click(function(){$(".form-password__code").show()})}),$(document).ready(function(){$("a.photo").fancybox({transitionIn:"fade",transitionOut:"fade",speedIn:500,speedOut:500,hideOnOverlayClick:!1,titlePosition:"outside"})});