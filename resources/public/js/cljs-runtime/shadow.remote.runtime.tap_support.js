goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21832,p__21833){
var map__21835 = p__21832;
var map__21835__$1 = cljs.core.__destructure_map(map__21835);
var svc = map__21835__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21835__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21835__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21835__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21836 = p__21833;
var map__21836__$1 = cljs.core.__destructure_map(map__21836);
var msg = map__21836__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21836__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21836__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21836__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21836__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21844,p__21845){
var map__21846 = p__21844;
var map__21846__$1 = cljs.core.__destructure_map(map__21846);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21846__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21847 = p__21845;
var map__21847__$1 = cljs.core.__destructure_map(map__21847);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21847__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21853,p__21854){
var map__21855 = p__21853;
var map__21855__$1 = cljs.core.__destructure_map(map__21855);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21855__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21856 = p__21854;
var map__21856__$1 = cljs.core.__destructure_map(map__21856);
var msg = map__21856__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21856__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21859,tid){
var map__21860 = p__21859;
var map__21860__$1 = cljs.core.__destructure_map(map__21860);
var svc = map__21860__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21860__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21868 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21869 = null;
var count__21870 = (0);
var i__21871 = (0);
while(true){
if((i__21871 < count__21870)){
var vec__21879 = chunk__21869.cljs$core$IIndexed$_nth$arity$2(null, i__21871);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21879,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21879,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21896 = seq__21868;
var G__21897 = chunk__21869;
var G__21898 = count__21870;
var G__21899 = (i__21871 + (1));
seq__21868 = G__21896;
chunk__21869 = G__21897;
count__21870 = G__21898;
i__21871 = G__21899;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21868);
if(temp__5804__auto__){
var seq__21868__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21868__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21868__$1);
var G__21900 = cljs.core.chunk_rest(seq__21868__$1);
var G__21901 = c__5525__auto__;
var G__21902 = cljs.core.count(c__5525__auto__);
var G__21903 = (0);
seq__21868 = G__21900;
chunk__21869 = G__21901;
count__21870 = G__21902;
i__21871 = G__21903;
continue;
} else {
var vec__21883 = cljs.core.first(seq__21868__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21883,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21883,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21904 = cljs.core.next(seq__21868__$1);
var G__21905 = null;
var G__21906 = (0);
var G__21907 = (0);
seq__21868 = G__21904;
chunk__21869 = G__21905;
count__21870 = G__21906;
i__21871 = G__21907;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21863_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21863_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21864_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21864_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21865_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21865_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21866_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21866_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21886){
var map__21890 = p__21886;
var map__21890__$1 = cljs.core.__destructure_map(map__21890);
var svc = map__21890__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21890__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21890__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
