tyrano.plugin.kag.key_mouse={kag:null,keyconfig:{key:{}},map_key:{},map_mouse:{},map_ges:{},is_swipe:false,timeoutId:0,is_keydown:false,start_point:{x:0,y:0},end_point:{x:0,y:0},init:function(){var that=this;this.keyconfig=__tyrano_key_config;this.map_key=this.keyconfig["key"];this.map_mouse=this.keyconfig["mouse"];this.map_ges=this.keyconfig["gesture"];$(document).keydown(function(e){if(that.is_keydown==true)return false;that.is_keydown=true;var keycode=e.keyCode;if(that.map_key[keycode])if(typeof that.map_key[keycode]==
"function")that.map_key[keycode]();else if(that[that.map_key[keycode]])that[that.map_key[keycode]]()});$(document).keyup(function(e){that.is_keydown=false;var keycode=e.keyCode;if(keycode==91||keycode==17)that.kag.stat.is_skip=false});$(document).on("mousedown",function(e){if(that.kag.stat.is_skip==true&&that.kag.stat.is_strong_stop==false){that.kag.stat.is_skip=false;return false}var target=null;if(e.which==2)target=that.map_mouse["center"];else if(e.which==3)target=that.map_mouse["right"];if(typeof target==
"function")target();else if(that[target])that[target]()});var mousewheelevent="onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"DOMMouseScroll";$(document).on(mousewheelevent,function(e){if(!that.canShowMenu())return;if($(".menu_close").size()>0&&$(".layer_menu").css("display")!="none")return;var delta=e.originalEvent.deltaY?-e.originalEvent.deltaY:e.originalEvent.wheelDelta?e.originalEvent.wheelDelta:-e.originalEvent.detail;var target=null;if(delta<0)target=that.map_mouse["wheel_down"];
else target=that.map_mouse["wheel_up"];if(typeof target=="function")target();else if(that[target])that[target]()});var layer_obj_click=$(".layer_event_click");if($.userenv()!="pc"){layer_obj_click.swipe({swipe:function(event,direction,distance,duration,fingerCount,fingerData){that.is_swipe=true;var swipe_str="swipe_"+direction+"_"+fingerCount;if(that.map_ges[swipe_str])if(that[that.map_ges[swipe_str]["action"]])that[that.map_ges[swipe_str]["action"]]();event.stopPropagation();event.preventDefault();
return false},fingers:"all"});layer_obj_click.on("touchstart",function(){if(that.kag.stat.is_skip==true){that.kag.stat.is_skip=false;return false}that.timeoutId=setTimeout(function(){if(that[that.map_ges["hold"]["action"]]){that.is_swipe=true;that[that.map_ges["hold"]["action"]]()}},2E3)}).on("touchend",function(){clearTimeout(that.timeoutId);that.timeoutId=null});var t=0;$(".tyrano_base").on("touchend",function(e){var now=(new Date).getTime();if(now-t<350)e.preventDefault();t=now})}layer_obj_click.click(function(e){if($.userenv()!=
"pc")if(that.kag.tmp.ready_audio==false){that.kag.readyAudio();that.kag.tmp.ready_audio=true;if(that.kag.stat.is_adding_text==true){that.kag.stat.is_click_text=true;return false}that.kag.ftag.nextOrder();return false}if(that.is_swipe){that.is_swipe=false;return false}if(that.kag.stat.is_hide_message==true){that.kag.layer.showMessageLayers();return false}if(that.kag.stat.is_adding_text==true){that.kag.stat.is_click_text=true;return false}if(that.kag.stat.is_click_text==true)return false;if(that.kag.stat.is_stop==
true)return false;that.kag.ftag.nextOrder()})},next:function(){if(this.kag.key_mouse.canClick())$(".layer_event_click").click()},showmenu:function(){if(this.canShowMenu())if($(".menu_close").size()>0&&$(".layer_menu").css("display")!="none")$(".menu_close").click();else $(".button_menu").click()},hidemessage:function(){if(this.canShowMenu())if($(".menu_close").size()>0&&$(".layer_menu").css("display")!="none")$(".menu_close").click();else if(!this.kag.stat.is_strong_stop)if(this.kag.stat.is_hide_message)this.kag.layer.showMessageLayers();
else this.kag.ftag.startTag("hidemessage")},save:function(){this._role("save")},load:function(){this._role("load")},menu:function(){this._role("menu")},title:function(){this._role("title")},skip:function(){if(this.canClick())this._role("skip")},backlog:function(){this._role("backlog")},fullscreen:function(){this._role("fullscreen")},qsave:function(){this._role("quicksave")},qload:function(){this._role("quickload")},auto:function(){this._role("auto")},_role:function(role){var that=this;if(that.kag.stat.is_skip==
true&&role=="skip"){that.kag.stat.is_skip=false;return false}if(that.kag.layer.layer_event.css("display")=="none"&&that.kag.stat.is_strong_stop!=true)return false;if(that.kag.stat.enable_keyconfig==false)return false;that.kag.stat.is_skip=false;if(role!="auto")that.kag.ftag.startTag("autostop",{next:"false"});if(role=="save"||role=="menu"||role=="quicksave"||role=="sleepgame")if(that.kag.stat.is_adding_text==true||that.kag.stat.is_wait==true)return false;switch(role){case "save":if($(".layer_menu").css("display")==
"none")that.kag.menu.displaySave();break;case "load":if($(".layer_menu").css("display")=="none")that.kag.menu.displayLoad();break;case "window":that.kag.layer.hideMessageLayers();break;case "title":$.confirm($.lang("go_title"),function(){location.reload()},function(){return false});break;case "menu":that.kag.menu.showMenu();break;case "skip":that.kag.ftag.startTag("skipstart",{});break;case "backlog":that.kag.menu.displayLog();break;case "fullscreen":that.kag.menu.screenFull();break;case "quicksave":that.kag.menu.setQuickSave();
break;case "quickload":that.kag.menu.loadQuickSave();break;case "auto":if(that.kag.stat.is_auto==true)that.kag.ftag.startTag("autostop",{next:"false"});else that.kag.ftag.startTag("autostart",{});break;case "sleepgame":if(that.kag.tmp.sleep_game!=null)return false;that.kag.tmp.sleep_game={};that.kag.ftag.startTag("sleepgame",_pm);break}},canClick:function(){if($(".layer_event_click").css("display")!="none"&&$(".layer_menu").css("display")=="none")return true;return false},canShowMenu:function(){if(this.kag.layer.layer_event.css("display")==
"none"&&this.kag.stat.is_strong_stop!=true)return false;if(this.kag.stat.is_wait==true)return false;return true}};
