goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18027){
var map__18028 = p__18027;
var map__18028__$1 = cljs.core.__destructure_map(map__18028);
var runtime = map__18028__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18028__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18279 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18279)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18029 = runtime;
var G__18030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18279);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18029,G__18030) : shadow.remote.runtime.shared.process.call(null, G__18029,G__18030));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18031,res){
var map__18032 = p__18031;
var map__18032__$1 = cljs.core.__destructure_map(map__18032);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18032__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18032__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18033 = res;
var G__18033__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18033,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18033);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18033__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18033__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18038 = arguments.length;
switch (G__18038) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18041,msg,handlers,timeout_after_ms){
var map__18042 = p__18041;
var map__18042__$1 = cljs.core.__destructure_map(map__18042);
var runtime = map__18042__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18042__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18299 = arguments.length;
var i__5727__auto___18300 = (0);
while(true){
if((i__5727__auto___18300 < len__5726__auto___18299)){
args__5732__auto__.push((arguments[i__5727__auto___18300]));

var G__18301 = (i__5727__auto___18300 + (1));
i__5727__auto___18300 = G__18301;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18078,ev,args){
var map__18079 = p__18078;
var map__18079__$1 = cljs.core.__destructure_map(map__18079);
var runtime = map__18079__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18079__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18080 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18083 = null;
var count__18084 = (0);
var i__18085 = (0);
while(true){
if((i__18085 < count__18084)){
var ext = chunk__18083.cljs$core$IIndexed$_nth$arity$2(null, i__18085);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18304 = seq__18080;
var G__18305 = chunk__18083;
var G__18306 = count__18084;
var G__18307 = (i__18085 + (1));
seq__18080 = G__18304;
chunk__18083 = G__18305;
count__18084 = G__18306;
i__18085 = G__18307;
continue;
} else {
var G__18309 = seq__18080;
var G__18310 = chunk__18083;
var G__18311 = count__18084;
var G__18312 = (i__18085 + (1));
seq__18080 = G__18309;
chunk__18083 = G__18310;
count__18084 = G__18311;
i__18085 = G__18312;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18080);
if(temp__5804__auto__){
var seq__18080__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18080__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18080__$1);
var G__18314 = cljs.core.chunk_rest(seq__18080__$1);
var G__18315 = c__5525__auto__;
var G__18316 = cljs.core.count(c__5525__auto__);
var G__18317 = (0);
seq__18080 = G__18314;
chunk__18083 = G__18315;
count__18084 = G__18316;
i__18085 = G__18317;
continue;
} else {
var ext = cljs.core.first(seq__18080__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18319 = cljs.core.next(seq__18080__$1);
var G__18320 = null;
var G__18321 = (0);
var G__18322 = (0);
seq__18080 = G__18319;
chunk__18083 = G__18320;
count__18084 = G__18321;
i__18085 = G__18322;
continue;
} else {
var G__18323 = cljs.core.next(seq__18080__$1);
var G__18324 = null;
var G__18325 = (0);
var G__18326 = (0);
seq__18080 = G__18323;
chunk__18083 = G__18324;
count__18084 = G__18325;
i__18085 = G__18326;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18070){
var G__18071 = cljs.core.first(seq18070);
var seq18070__$1 = cljs.core.next(seq18070);
var G__18072 = cljs.core.first(seq18070__$1);
var seq18070__$2 = cljs.core.next(seq18070__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18071,G__18072,seq18070__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18132,p__18133){
var map__18134 = p__18132;
var map__18134__$1 = cljs.core.__destructure_map(map__18134);
var runtime = map__18134__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18134__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18135 = p__18133;
var map__18135__$1 = cljs.core.__destructure_map(map__18135);
var msg = map__18135__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18135__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18136 = cljs.core.deref(state_ref);
var map__18136__$1 = cljs.core.__destructure_map(map__18136);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18136__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18136__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18159,msg){
var map__18160 = p__18159;
var map__18160__$1 = cljs.core.__destructure_map(map__18160);
var runtime = map__18160__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18160__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18167,key,p__18168){
var map__18169 = p__18167;
var map__18169__$1 = cljs.core.__destructure_map(map__18169);
var state = map__18169__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18169__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18170 = p__18168;
var map__18170__$1 = cljs.core.__destructure_map(map__18170);
var spec = map__18170__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18170__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18189,key,spec){
var map__18191 = p__18189;
var map__18191__$1 = cljs.core.__destructure_map(map__18191);
var runtime = map__18191__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18191__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18355 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18355 == null)){
} else {
var on_welcome_18356 = temp__5808__auto___18355;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18356.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18356.cljs$core$IFn$_invoke$arity$0() : on_welcome_18356.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18197_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18197_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18198_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18198_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18199_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18199_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18200_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18200_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18201_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18201_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18221,key){
var map__18223 = p__18221;
var map__18223__$1 = cljs.core.__destructure_map(map__18223);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18223__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18234,msg){
var map__18237 = p__18234;
var map__18237__$1 = cljs.core.__destructure_map(map__18237);
var runtime = map__18237__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18237__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18242,p__18243){
var map__18247 = p__18242;
var map__18247__$1 = cljs.core.__destructure_map(map__18247);
var runtime = map__18247__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18247__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18249 = p__18243;
var map__18249__$1 = cljs.core.__destructure_map(map__18249);
var msg = map__18249__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18249__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18249__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18256 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18258 = null;
var count__18259 = (0);
var i__18260 = (0);
while(true){
if((i__18260 < count__18259)){
var map__18271 = chunk__18258.cljs$core$IIndexed$_nth$arity$2(null, i__18260);
var map__18271__$1 = cljs.core.__destructure_map(map__18271);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18271__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18386 = seq__18256;
var G__18387 = chunk__18258;
var G__18388 = count__18259;
var G__18389 = (i__18260 + (1));
seq__18256 = G__18386;
chunk__18258 = G__18387;
count__18259 = G__18388;
i__18260 = G__18389;
continue;
} else {
var G__18390 = seq__18256;
var G__18391 = chunk__18258;
var G__18392 = count__18259;
var G__18393 = (i__18260 + (1));
seq__18256 = G__18390;
chunk__18258 = G__18391;
count__18259 = G__18392;
i__18260 = G__18393;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18256);
if(temp__5804__auto__){
var seq__18256__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18256__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18256__$1);
var G__18394 = cljs.core.chunk_rest(seq__18256__$1);
var G__18395 = c__5525__auto__;
var G__18396 = cljs.core.count(c__5525__auto__);
var G__18397 = (0);
seq__18256 = G__18394;
chunk__18258 = G__18395;
count__18259 = G__18396;
i__18260 = G__18397;
continue;
} else {
var map__18273 = cljs.core.first(seq__18256__$1);
var map__18273__$1 = cljs.core.__destructure_map(map__18273);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18273__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__18398 = cljs.core.next(seq__18256__$1);
var G__18399 = null;
var G__18400 = (0);
var G__18401 = (0);
seq__18256 = G__18398;
chunk__18258 = G__18399;
count__18259 = G__18400;
i__18260 = G__18401;
continue;
} else {
var G__18402 = cljs.core.next(seq__18256__$1);
var G__18403 = null;
var G__18404 = (0);
var G__18405 = (0);
seq__18256 = G__18402;
chunk__18258 = G__18403;
count__18259 = G__18404;
i__18260 = G__18405;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
