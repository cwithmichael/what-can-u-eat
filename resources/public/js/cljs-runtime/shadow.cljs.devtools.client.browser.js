goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___22669 = arguments.length;
var i__5727__auto___22670 = (0);
while(true){
if((i__5727__auto___22670 < len__5726__auto___22669)){
args__5732__auto__.push((arguments[i__5727__auto___22670]));

var G__22671 = (i__5727__auto___22670 + (1));
i__5727__auto___22670 = G__22671;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22244){
var G__22245 = cljs.core.first(seq22244);
var seq22244__$1 = cljs.core.next(seq22244);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22245,seq22244__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22249 = cljs.core.seq(sources);
var chunk__22250 = null;
var count__22251 = (0);
var i__22252 = (0);
while(true){
if((i__22252 < count__22251)){
var map__22264 = chunk__22250.cljs$core$IIndexed$_nth$arity$2(null, i__22252);
var map__22264__$1 = cljs.core.__destructure_map(map__22264);
var src = map__22264__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22264__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22265){var e_22672 = e22265;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22672);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22672.message)].join('')));
}

var G__22674 = seq__22249;
var G__22675 = chunk__22250;
var G__22676 = count__22251;
var G__22677 = (i__22252 + (1));
seq__22249 = G__22674;
chunk__22250 = G__22675;
count__22251 = G__22676;
i__22252 = G__22677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22249);
if(temp__5804__auto__){
var seq__22249__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22249__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22249__$1);
var G__22678 = cljs.core.chunk_rest(seq__22249__$1);
var G__22679 = c__5525__auto__;
var G__22680 = cljs.core.count(c__5525__auto__);
var G__22681 = (0);
seq__22249 = G__22678;
chunk__22250 = G__22679;
count__22251 = G__22680;
i__22252 = G__22681;
continue;
} else {
var map__22266 = cljs.core.first(seq__22249__$1);
var map__22266__$1 = cljs.core.__destructure_map(map__22266);
var src = map__22266__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22266__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22266__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22266__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22266__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22267){var e_22682 = e22267;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22682);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22682.message)].join('')));
}

var G__22683 = cljs.core.next(seq__22249__$1);
var G__22684 = null;
var G__22685 = (0);
var G__22686 = (0);
seq__22249 = G__22683;
chunk__22250 = G__22684;
count__22251 = G__22685;
i__22252 = G__22686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22275 = cljs.core.seq(js_requires);
var chunk__22276 = null;
var count__22277 = (0);
var i__22278 = (0);
while(true){
if((i__22278 < count__22277)){
var js_ns = chunk__22276.cljs$core$IIndexed$_nth$arity$2(null, i__22278);
var require_str_22689 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22689);


var G__22690 = seq__22275;
var G__22691 = chunk__22276;
var G__22692 = count__22277;
var G__22693 = (i__22278 + (1));
seq__22275 = G__22690;
chunk__22276 = G__22691;
count__22277 = G__22692;
i__22278 = G__22693;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22275);
if(temp__5804__auto__){
var seq__22275__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22275__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22275__$1);
var G__22694 = cljs.core.chunk_rest(seq__22275__$1);
var G__22695 = c__5525__auto__;
var G__22696 = cljs.core.count(c__5525__auto__);
var G__22697 = (0);
seq__22275 = G__22694;
chunk__22276 = G__22695;
count__22277 = G__22696;
i__22278 = G__22697;
continue;
} else {
var js_ns = cljs.core.first(seq__22275__$1);
var require_str_22698 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22698);


var G__22699 = cljs.core.next(seq__22275__$1);
var G__22700 = null;
var G__22701 = (0);
var G__22702 = (0);
seq__22275 = G__22699;
chunk__22276 = G__22700;
count__22277 = G__22701;
i__22278 = G__22702;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22316){
var map__22318 = p__22316;
var map__22318__$1 = cljs.core.__destructure_map(map__22318);
var msg = map__22318__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22318__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22319(s__22320){
return (new cljs.core.LazySeq(null,(function (){
var s__22320__$1 = s__22320;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22320__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22325 = cljs.core.first(xs__6360__auto__);
var map__22325__$1 = cljs.core.__destructure_map(map__22325);
var src = map__22325__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22325__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22325__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__22320__$1,map__22325,map__22325__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22318,map__22318__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22319_$_iter__22321(s__22322){
return (new cljs.core.LazySeq(null,((function (s__22320__$1,map__22325,map__22325__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22318,map__22318__$1,msg,info,reload_info){
return (function (){
var s__22322__$1 = s__22322;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22322__$1);
if(temp__5804__auto____$1){
var s__22322__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22322__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22322__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22324 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22323 = (0);
while(true){
if((i__22323 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__22323);
cljs.core.chunk_append(b__22324,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__22703 = (i__22323 + (1));
i__22323 = G__22703;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22324),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22319_$_iter__22321(cljs.core.chunk_rest(s__22322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22324),null);
}
} else {
var warning = cljs.core.first(s__22322__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22319_$_iter__22321(cljs.core.rest(s__22322__$2)));
}
} else {
return null;
}
break;
}
});})(s__22320__$1,map__22325,map__22325__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22318,map__22318__$1,msg,info,reload_info))
,null,null));
});})(s__22320__$1,map__22325,map__22325__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22318,map__22318__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22319(cljs.core.rest(s__22320__$1)));
} else {
var G__22708 = cljs.core.rest(s__22320__$1);
s__22320__$1 = G__22708;
continue;
}
} else {
var G__22709 = cljs.core.rest(s__22320__$1);
s__22320__$1 = G__22709;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22332_22710 = cljs.core.seq(warnings);
var chunk__22333_22711 = null;
var count__22334_22712 = (0);
var i__22335_22713 = (0);
while(true){
if((i__22335_22713 < count__22334_22712)){
var map__22342_22714 = chunk__22333_22711.cljs$core$IIndexed$_nth$arity$2(null, i__22335_22713);
var map__22342_22715__$1 = cljs.core.__destructure_map(map__22342_22714);
var w_22716 = map__22342_22715__$1;
var msg_22717__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342_22715__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22718 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342_22715__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342_22715__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22342_22715__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22720)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22718),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22719),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22717__$1)].join(''));


var G__22721 = seq__22332_22710;
var G__22722 = chunk__22333_22711;
var G__22723 = count__22334_22712;
var G__22724 = (i__22335_22713 + (1));
seq__22332_22710 = G__22721;
chunk__22333_22711 = G__22722;
count__22334_22712 = G__22723;
i__22335_22713 = G__22724;
continue;
} else {
var temp__5804__auto___22725 = cljs.core.seq(seq__22332_22710);
if(temp__5804__auto___22725){
var seq__22332_22726__$1 = temp__5804__auto___22725;
if(cljs.core.chunked_seq_QMARK_(seq__22332_22726__$1)){
var c__5525__auto___22727 = cljs.core.chunk_first(seq__22332_22726__$1);
var G__22728 = cljs.core.chunk_rest(seq__22332_22726__$1);
var G__22729 = c__5525__auto___22727;
var G__22730 = cljs.core.count(c__5525__auto___22727);
var G__22731 = (0);
seq__22332_22710 = G__22728;
chunk__22333_22711 = G__22729;
count__22334_22712 = G__22730;
i__22335_22713 = G__22731;
continue;
} else {
var map__22343_22732 = cljs.core.first(seq__22332_22726__$1);
var map__22343_22733__$1 = cljs.core.__destructure_map(map__22343_22732);
var w_22734 = map__22343_22733__$1;
var msg_22735__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343_22733__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343_22733__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343_22733__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22343_22733__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22738)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22736),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22737),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22735__$1)].join(''));


var G__22739 = cljs.core.next(seq__22332_22726__$1);
var G__22740 = null;
var G__22741 = (0);
var G__22742 = (0);
seq__22332_22710 = G__22739;
chunk__22333_22711 = G__22740;
count__22334_22712 = G__22741;
i__22335_22713 = G__22742;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22314_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22314_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22354){
var map__22355 = p__22354;
var map__22355__$1 = cljs.core.__destructure_map(map__22355);
var msg = map__22355__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22355__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22355__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22356 = cljs.core.seq(updates);
var chunk__22358 = null;
var count__22359 = (0);
var i__22360 = (0);
while(true){
if((i__22360 < count__22359)){
var path = chunk__22358.cljs$core$IIndexed$_nth$arity$2(null, i__22360);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22500_22744 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22504_22745 = null;
var count__22505_22746 = (0);
var i__22506_22747 = (0);
while(true){
if((i__22506_22747 < count__22505_22746)){
var node_22748 = chunk__22504_22745.cljs$core$IIndexed$_nth$arity$2(null, i__22506_22747);
if(cljs.core.not(node_22748.shadow$old)){
var path_match_22749 = shadow.cljs.devtools.client.browser.match_paths(node_22748.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22749)){
var new_link_22750 = (function (){var G__22538 = node_22748.cloneNode(true);
G__22538.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22749),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22538;
})();
(node_22748.shadow$old = true);

(new_link_22750.onload = ((function (seq__22500_22744,chunk__22504_22745,count__22505_22746,i__22506_22747,seq__22356,chunk__22358,count__22359,i__22360,new_link_22750,path_match_22749,node_22748,path,map__22355,map__22355__$1,msg,updates,reload_info){
return (function (e){
var seq__22539_22751 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22541_22752 = null;
var count__22542_22753 = (0);
var i__22543_22754 = (0);
while(true){
if((i__22543_22754 < count__22542_22753)){
var map__22547_22755 = chunk__22541_22752.cljs$core$IIndexed$_nth$arity$2(null, i__22543_22754);
var map__22547_22756__$1 = cljs.core.__destructure_map(map__22547_22755);
var task_22757 = map__22547_22756__$1;
var fn_str_22758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22547_22756__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22547_22756__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22760 = goog.getObjectByName(fn_str_22758,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22759)].join(''));

(fn_obj_22760.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22760.cljs$core$IFn$_invoke$arity$2(path,new_link_22750) : fn_obj_22760.call(null, path,new_link_22750));


var G__22761 = seq__22539_22751;
var G__22762 = chunk__22541_22752;
var G__22763 = count__22542_22753;
var G__22764 = (i__22543_22754 + (1));
seq__22539_22751 = G__22761;
chunk__22541_22752 = G__22762;
count__22542_22753 = G__22763;
i__22543_22754 = G__22764;
continue;
} else {
var temp__5804__auto___22766 = cljs.core.seq(seq__22539_22751);
if(temp__5804__auto___22766){
var seq__22539_22767__$1 = temp__5804__auto___22766;
if(cljs.core.chunked_seq_QMARK_(seq__22539_22767__$1)){
var c__5525__auto___22768 = cljs.core.chunk_first(seq__22539_22767__$1);
var G__22769 = cljs.core.chunk_rest(seq__22539_22767__$1);
var G__22770 = c__5525__auto___22768;
var G__22771 = cljs.core.count(c__5525__auto___22768);
var G__22772 = (0);
seq__22539_22751 = G__22769;
chunk__22541_22752 = G__22770;
count__22542_22753 = G__22771;
i__22543_22754 = G__22772;
continue;
} else {
var map__22551_22773 = cljs.core.first(seq__22539_22767__$1);
var map__22551_22774__$1 = cljs.core.__destructure_map(map__22551_22773);
var task_22775 = map__22551_22774__$1;
var fn_str_22776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551_22774__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22551_22774__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22780 = goog.getObjectByName(fn_str_22776,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22777)].join(''));

(fn_obj_22780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22780.cljs$core$IFn$_invoke$arity$2(path,new_link_22750) : fn_obj_22780.call(null, path,new_link_22750));


var G__22781 = cljs.core.next(seq__22539_22767__$1);
var G__22782 = null;
var G__22783 = (0);
var G__22784 = (0);
seq__22539_22751 = G__22781;
chunk__22541_22752 = G__22782;
count__22542_22753 = G__22783;
i__22543_22754 = G__22784;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22748);
});})(seq__22500_22744,chunk__22504_22745,count__22505_22746,i__22506_22747,seq__22356,chunk__22358,count__22359,i__22360,new_link_22750,path_match_22749,node_22748,path,map__22355,map__22355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22749], 0));

goog.dom.insertSiblingAfter(new_link_22750,node_22748);


var G__22785 = seq__22500_22744;
var G__22786 = chunk__22504_22745;
var G__22787 = count__22505_22746;
var G__22788 = (i__22506_22747 + (1));
seq__22500_22744 = G__22785;
chunk__22504_22745 = G__22786;
count__22505_22746 = G__22787;
i__22506_22747 = G__22788;
continue;
} else {
var G__22789 = seq__22500_22744;
var G__22790 = chunk__22504_22745;
var G__22791 = count__22505_22746;
var G__22792 = (i__22506_22747 + (1));
seq__22500_22744 = G__22789;
chunk__22504_22745 = G__22790;
count__22505_22746 = G__22791;
i__22506_22747 = G__22792;
continue;
}
} else {
var G__22796 = seq__22500_22744;
var G__22797 = chunk__22504_22745;
var G__22798 = count__22505_22746;
var G__22799 = (i__22506_22747 + (1));
seq__22500_22744 = G__22796;
chunk__22504_22745 = G__22797;
count__22505_22746 = G__22798;
i__22506_22747 = G__22799;
continue;
}
} else {
var temp__5804__auto___22800 = cljs.core.seq(seq__22500_22744);
if(temp__5804__auto___22800){
var seq__22500_22801__$1 = temp__5804__auto___22800;
if(cljs.core.chunked_seq_QMARK_(seq__22500_22801__$1)){
var c__5525__auto___22802 = cljs.core.chunk_first(seq__22500_22801__$1);
var G__22803 = cljs.core.chunk_rest(seq__22500_22801__$1);
var G__22804 = c__5525__auto___22802;
var G__22805 = cljs.core.count(c__5525__auto___22802);
var G__22806 = (0);
seq__22500_22744 = G__22803;
chunk__22504_22745 = G__22804;
count__22505_22746 = G__22805;
i__22506_22747 = G__22806;
continue;
} else {
var node_22807 = cljs.core.first(seq__22500_22801__$1);
if(cljs.core.not(node_22807.shadow$old)){
var path_match_22808 = shadow.cljs.devtools.client.browser.match_paths(node_22807.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22808)){
var new_link_22809 = (function (){var G__22555 = node_22807.cloneNode(true);
G__22555.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22808),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22555;
})();
(node_22807.shadow$old = true);

(new_link_22809.onload = ((function (seq__22500_22744,chunk__22504_22745,count__22505_22746,i__22506_22747,seq__22356,chunk__22358,count__22359,i__22360,new_link_22809,path_match_22808,node_22807,seq__22500_22801__$1,temp__5804__auto___22800,path,map__22355,map__22355__$1,msg,updates,reload_info){
return (function (e){
var seq__22556_22810 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22558_22811 = null;
var count__22559_22812 = (0);
var i__22560_22813 = (0);
while(true){
if((i__22560_22813 < count__22559_22812)){
var map__22567_22814 = chunk__22558_22811.cljs$core$IIndexed$_nth$arity$2(null, i__22560_22813);
var map__22567_22815__$1 = cljs.core.__destructure_map(map__22567_22814);
var task_22816 = map__22567_22815__$1;
var fn_str_22817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567_22815__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22567_22815__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22819 = goog.getObjectByName(fn_str_22817,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22818)].join(''));

(fn_obj_22819.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22819.cljs$core$IFn$_invoke$arity$2(path,new_link_22809) : fn_obj_22819.call(null, path,new_link_22809));


var G__22820 = seq__22556_22810;
var G__22821 = chunk__22558_22811;
var G__22822 = count__22559_22812;
var G__22823 = (i__22560_22813 + (1));
seq__22556_22810 = G__22820;
chunk__22558_22811 = G__22821;
count__22559_22812 = G__22822;
i__22560_22813 = G__22823;
continue;
} else {
var temp__5804__auto___22824__$1 = cljs.core.seq(seq__22556_22810);
if(temp__5804__auto___22824__$1){
var seq__22556_22825__$1 = temp__5804__auto___22824__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22556_22825__$1)){
var c__5525__auto___22826 = cljs.core.chunk_first(seq__22556_22825__$1);
var G__22827 = cljs.core.chunk_rest(seq__22556_22825__$1);
var G__22828 = c__5525__auto___22826;
var G__22829 = cljs.core.count(c__5525__auto___22826);
var G__22830 = (0);
seq__22556_22810 = G__22827;
chunk__22558_22811 = G__22828;
count__22559_22812 = G__22829;
i__22560_22813 = G__22830;
continue;
} else {
var map__22568_22831 = cljs.core.first(seq__22556_22825__$1);
var map__22568_22832__$1 = cljs.core.__destructure_map(map__22568_22831);
var task_22833 = map__22568_22832__$1;
var fn_str_22834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568_22832__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22568_22832__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22836 = goog.getObjectByName(fn_str_22834,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22835)].join(''));

(fn_obj_22836.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22836.cljs$core$IFn$_invoke$arity$2(path,new_link_22809) : fn_obj_22836.call(null, path,new_link_22809));


var G__22837 = cljs.core.next(seq__22556_22825__$1);
var G__22838 = null;
var G__22839 = (0);
var G__22840 = (0);
seq__22556_22810 = G__22837;
chunk__22558_22811 = G__22838;
count__22559_22812 = G__22839;
i__22560_22813 = G__22840;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22807);
});})(seq__22500_22744,chunk__22504_22745,count__22505_22746,i__22506_22747,seq__22356,chunk__22358,count__22359,i__22360,new_link_22809,path_match_22808,node_22807,seq__22500_22801__$1,temp__5804__auto___22800,path,map__22355,map__22355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22808], 0));

goog.dom.insertSiblingAfter(new_link_22809,node_22807);


var G__22841 = cljs.core.next(seq__22500_22801__$1);
var G__22842 = null;
var G__22843 = (0);
var G__22844 = (0);
seq__22500_22744 = G__22841;
chunk__22504_22745 = G__22842;
count__22505_22746 = G__22843;
i__22506_22747 = G__22844;
continue;
} else {
var G__22845 = cljs.core.next(seq__22500_22801__$1);
var G__22846 = null;
var G__22847 = (0);
var G__22848 = (0);
seq__22500_22744 = G__22845;
chunk__22504_22745 = G__22846;
count__22505_22746 = G__22847;
i__22506_22747 = G__22848;
continue;
}
} else {
var G__22849 = cljs.core.next(seq__22500_22801__$1);
var G__22850 = null;
var G__22851 = (0);
var G__22852 = (0);
seq__22500_22744 = G__22849;
chunk__22504_22745 = G__22850;
count__22505_22746 = G__22851;
i__22506_22747 = G__22852;
continue;
}
}
} else {
}
}
break;
}


var G__22853 = seq__22356;
var G__22854 = chunk__22358;
var G__22855 = count__22359;
var G__22856 = (i__22360 + (1));
seq__22356 = G__22853;
chunk__22358 = G__22854;
count__22359 = G__22855;
i__22360 = G__22856;
continue;
} else {
var G__22857 = seq__22356;
var G__22858 = chunk__22358;
var G__22859 = count__22359;
var G__22860 = (i__22360 + (1));
seq__22356 = G__22857;
chunk__22358 = G__22858;
count__22359 = G__22859;
i__22360 = G__22860;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22356);
if(temp__5804__auto__){
var seq__22356__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22356__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22356__$1);
var G__22861 = cljs.core.chunk_rest(seq__22356__$1);
var G__22862 = c__5525__auto__;
var G__22863 = cljs.core.count(c__5525__auto__);
var G__22864 = (0);
seq__22356 = G__22861;
chunk__22358 = G__22862;
count__22359 = G__22863;
i__22360 = G__22864;
continue;
} else {
var path = cljs.core.first(seq__22356__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22569_22865 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22573_22866 = null;
var count__22574_22867 = (0);
var i__22575_22868 = (0);
while(true){
if((i__22575_22868 < count__22574_22867)){
var node_22869 = chunk__22573_22866.cljs$core$IIndexed$_nth$arity$2(null, i__22575_22868);
if(cljs.core.not(node_22869.shadow$old)){
var path_match_22870 = shadow.cljs.devtools.client.browser.match_paths(node_22869.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22870)){
var new_link_22871 = (function (){var G__22610 = node_22869.cloneNode(true);
G__22610.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22870),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22610;
})();
(node_22869.shadow$old = true);

(new_link_22871.onload = ((function (seq__22569_22865,chunk__22573_22866,count__22574_22867,i__22575_22868,seq__22356,chunk__22358,count__22359,i__22360,new_link_22871,path_match_22870,node_22869,path,seq__22356__$1,temp__5804__auto__,map__22355,map__22355__$1,msg,updates,reload_info){
return (function (e){
var seq__22611_22872 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22613_22873 = null;
var count__22614_22874 = (0);
var i__22615_22875 = (0);
while(true){
if((i__22615_22875 < count__22614_22874)){
var map__22620_22876 = chunk__22613_22873.cljs$core$IIndexed$_nth$arity$2(null, i__22615_22875);
var map__22620_22877__$1 = cljs.core.__destructure_map(map__22620_22876);
var task_22878 = map__22620_22877__$1;
var fn_str_22879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620_22877__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22620_22877__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22881 = goog.getObjectByName(fn_str_22879,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22880)].join(''));

(fn_obj_22881.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22881.cljs$core$IFn$_invoke$arity$2(path,new_link_22871) : fn_obj_22881.call(null, path,new_link_22871));


var G__22882 = seq__22611_22872;
var G__22883 = chunk__22613_22873;
var G__22884 = count__22614_22874;
var G__22885 = (i__22615_22875 + (1));
seq__22611_22872 = G__22882;
chunk__22613_22873 = G__22883;
count__22614_22874 = G__22884;
i__22615_22875 = G__22885;
continue;
} else {
var temp__5804__auto___22886__$1 = cljs.core.seq(seq__22611_22872);
if(temp__5804__auto___22886__$1){
var seq__22611_22887__$1 = temp__5804__auto___22886__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22611_22887__$1)){
var c__5525__auto___22888 = cljs.core.chunk_first(seq__22611_22887__$1);
var G__22889 = cljs.core.chunk_rest(seq__22611_22887__$1);
var G__22890 = c__5525__auto___22888;
var G__22891 = cljs.core.count(c__5525__auto___22888);
var G__22892 = (0);
seq__22611_22872 = G__22889;
chunk__22613_22873 = G__22890;
count__22614_22874 = G__22891;
i__22615_22875 = G__22892;
continue;
} else {
var map__22621_22893 = cljs.core.first(seq__22611_22887__$1);
var map__22621_22894__$1 = cljs.core.__destructure_map(map__22621_22893);
var task_22895 = map__22621_22894__$1;
var fn_str_22896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22621_22894__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22897 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22621_22894__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22898 = goog.getObjectByName(fn_str_22896,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22897)].join(''));

(fn_obj_22898.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22898.cljs$core$IFn$_invoke$arity$2(path,new_link_22871) : fn_obj_22898.call(null, path,new_link_22871));


var G__22899 = cljs.core.next(seq__22611_22887__$1);
var G__22900 = null;
var G__22901 = (0);
var G__22902 = (0);
seq__22611_22872 = G__22899;
chunk__22613_22873 = G__22900;
count__22614_22874 = G__22901;
i__22615_22875 = G__22902;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22869);
});})(seq__22569_22865,chunk__22573_22866,count__22574_22867,i__22575_22868,seq__22356,chunk__22358,count__22359,i__22360,new_link_22871,path_match_22870,node_22869,path,seq__22356__$1,temp__5804__auto__,map__22355,map__22355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22870], 0));

goog.dom.insertSiblingAfter(new_link_22871,node_22869);


var G__22903 = seq__22569_22865;
var G__22904 = chunk__22573_22866;
var G__22905 = count__22574_22867;
var G__22906 = (i__22575_22868 + (1));
seq__22569_22865 = G__22903;
chunk__22573_22866 = G__22904;
count__22574_22867 = G__22905;
i__22575_22868 = G__22906;
continue;
} else {
var G__22907 = seq__22569_22865;
var G__22908 = chunk__22573_22866;
var G__22909 = count__22574_22867;
var G__22910 = (i__22575_22868 + (1));
seq__22569_22865 = G__22907;
chunk__22573_22866 = G__22908;
count__22574_22867 = G__22909;
i__22575_22868 = G__22910;
continue;
}
} else {
var G__22911 = seq__22569_22865;
var G__22912 = chunk__22573_22866;
var G__22913 = count__22574_22867;
var G__22914 = (i__22575_22868 + (1));
seq__22569_22865 = G__22911;
chunk__22573_22866 = G__22912;
count__22574_22867 = G__22913;
i__22575_22868 = G__22914;
continue;
}
} else {
var temp__5804__auto___22915__$1 = cljs.core.seq(seq__22569_22865);
if(temp__5804__auto___22915__$1){
var seq__22569_22916__$1 = temp__5804__auto___22915__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22569_22916__$1)){
var c__5525__auto___22917 = cljs.core.chunk_first(seq__22569_22916__$1);
var G__22918 = cljs.core.chunk_rest(seq__22569_22916__$1);
var G__22919 = c__5525__auto___22917;
var G__22920 = cljs.core.count(c__5525__auto___22917);
var G__22921 = (0);
seq__22569_22865 = G__22918;
chunk__22573_22866 = G__22919;
count__22574_22867 = G__22920;
i__22575_22868 = G__22921;
continue;
} else {
var node_22922 = cljs.core.first(seq__22569_22916__$1);
if(cljs.core.not(node_22922.shadow$old)){
var path_match_22923 = shadow.cljs.devtools.client.browser.match_paths(node_22922.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22923)){
var new_link_22924 = (function (){var G__22628 = node_22922.cloneNode(true);
G__22628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22923),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22628;
})();
(node_22922.shadow$old = true);

(new_link_22924.onload = ((function (seq__22569_22865,chunk__22573_22866,count__22574_22867,i__22575_22868,seq__22356,chunk__22358,count__22359,i__22360,new_link_22924,path_match_22923,node_22922,seq__22569_22916__$1,temp__5804__auto___22915__$1,path,seq__22356__$1,temp__5804__auto__,map__22355,map__22355__$1,msg,updates,reload_info){
return (function (e){
var seq__22629_22925 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22631_22926 = null;
var count__22632_22927 = (0);
var i__22633_22928 = (0);
while(true){
if((i__22633_22928 < count__22632_22927)){
var map__22638_22929 = chunk__22631_22926.cljs$core$IIndexed$_nth$arity$2(null, i__22633_22928);
var map__22638_22930__$1 = cljs.core.__destructure_map(map__22638_22929);
var task_22931 = map__22638_22930__$1;
var fn_str_22932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638_22930__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22638_22930__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22934 = goog.getObjectByName(fn_str_22932,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22933)].join(''));

(fn_obj_22934.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22934.cljs$core$IFn$_invoke$arity$2(path,new_link_22924) : fn_obj_22934.call(null, path,new_link_22924));


var G__22935 = seq__22629_22925;
var G__22936 = chunk__22631_22926;
var G__22937 = count__22632_22927;
var G__22938 = (i__22633_22928 + (1));
seq__22629_22925 = G__22935;
chunk__22631_22926 = G__22936;
count__22632_22927 = G__22937;
i__22633_22928 = G__22938;
continue;
} else {
var temp__5804__auto___22939__$2 = cljs.core.seq(seq__22629_22925);
if(temp__5804__auto___22939__$2){
var seq__22629_22940__$1 = temp__5804__auto___22939__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22629_22940__$1)){
var c__5525__auto___22941 = cljs.core.chunk_first(seq__22629_22940__$1);
var G__22942 = cljs.core.chunk_rest(seq__22629_22940__$1);
var G__22943 = c__5525__auto___22941;
var G__22944 = cljs.core.count(c__5525__auto___22941);
var G__22945 = (0);
seq__22629_22925 = G__22942;
chunk__22631_22926 = G__22943;
count__22632_22927 = G__22944;
i__22633_22928 = G__22945;
continue;
} else {
var map__22639_22947 = cljs.core.first(seq__22629_22940__$1);
var map__22639_22948__$1 = cljs.core.__destructure_map(map__22639_22947);
var task_22949 = map__22639_22948__$1;
var fn_str_22950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639_22948__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22639_22948__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22953 = goog.getObjectByName(fn_str_22950,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22951)].join(''));

(fn_obj_22953.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22953.cljs$core$IFn$_invoke$arity$2(path,new_link_22924) : fn_obj_22953.call(null, path,new_link_22924));


var G__22954 = cljs.core.next(seq__22629_22940__$1);
var G__22955 = null;
var G__22956 = (0);
var G__22957 = (0);
seq__22629_22925 = G__22954;
chunk__22631_22926 = G__22955;
count__22632_22927 = G__22956;
i__22633_22928 = G__22957;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22922);
});})(seq__22569_22865,chunk__22573_22866,count__22574_22867,i__22575_22868,seq__22356,chunk__22358,count__22359,i__22360,new_link_22924,path_match_22923,node_22922,seq__22569_22916__$1,temp__5804__auto___22915__$1,path,seq__22356__$1,temp__5804__auto__,map__22355,map__22355__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22923], 0));

goog.dom.insertSiblingAfter(new_link_22924,node_22922);


var G__22958 = cljs.core.next(seq__22569_22916__$1);
var G__22959 = null;
var G__22960 = (0);
var G__22961 = (0);
seq__22569_22865 = G__22958;
chunk__22573_22866 = G__22959;
count__22574_22867 = G__22960;
i__22575_22868 = G__22961;
continue;
} else {
var G__22962 = cljs.core.next(seq__22569_22916__$1);
var G__22963 = null;
var G__22964 = (0);
var G__22965 = (0);
seq__22569_22865 = G__22962;
chunk__22573_22866 = G__22963;
count__22574_22867 = G__22964;
i__22575_22868 = G__22965;
continue;
}
} else {
var G__22966 = cljs.core.next(seq__22569_22916__$1);
var G__22967 = null;
var G__22968 = (0);
var G__22969 = (0);
seq__22569_22865 = G__22966;
chunk__22573_22866 = G__22967;
count__22574_22867 = G__22968;
i__22575_22868 = G__22969;
continue;
}
}
} else {
}
}
break;
}


var G__22970 = cljs.core.next(seq__22356__$1);
var G__22971 = null;
var G__22972 = (0);
var G__22973 = (0);
seq__22356 = G__22970;
chunk__22358 = G__22971;
count__22359 = G__22972;
i__22360 = G__22973;
continue;
} else {
var G__22974 = cljs.core.next(seq__22356__$1);
var G__22975 = null;
var G__22976 = (0);
var G__22977 = (0);
seq__22356 = G__22974;
chunk__22358 = G__22975;
count__22359 = G__22976;
i__22360 = G__22977;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__22641){
var map__22642 = p__22641;
var map__22642__$1 = cljs.core.__destructure_map(map__22642);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22642__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22643,done,error){
var map__22644 = p__22643;
var map__22644__$1 = cljs.core.__destructure_map(map__22644);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22644__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22645,done,error){
var map__22646 = p__22645;
var map__22646__$1 = cljs.core.__destructure_map(map__22646);
var msg = map__22646__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22646__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22646__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22646__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22647){
var map__22648 = p__22647;
var map__22648__$1 = cljs.core.__destructure_map(map__22648);
var src = map__22648__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22648__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22649 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22649) : done.call(null, G__22649));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22650){
var map__22651 = p__22650;
var map__22651__$1 = cljs.core.__destructure_map(map__22651);
var msg__$1 = map__22651__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22651__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e22652){var ex = e22652;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22653){
var map__22654 = p__22653;
var map__22654__$1 = cljs.core.__destructure_map(map__22654);
var env = map__22654__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22654__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22657){
var map__22658 = p__22657;
var map__22658__$1 = cljs.core.__destructure_map(map__22658);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22658__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__22663){
var map__22664 = p__22663;
var map__22664__$1 = cljs.core.__destructure_map(map__22664);
var svc = map__22664__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22664__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
