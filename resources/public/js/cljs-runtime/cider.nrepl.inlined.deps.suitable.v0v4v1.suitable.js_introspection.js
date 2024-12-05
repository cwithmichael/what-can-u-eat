goog.provide('cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection');
goog.scope(function(){
  cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object = goog.module.get('goog.object');
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__30779 = Object.getPrototypeOf(obj__$1);
var G__30780 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.own_property_descriptors(obj__$1)], null));
obj__$1 = G__30779;
protos = G__30780;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$property_names_and_types(var_args){
var G__30766 = arguments.length;
switch (G__30766) {
case 1:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__5480__auto__ = (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__30767(s__30768){
return (new cljs.core.LazySeq(null,(function (){
var s__30768__$1 = s__30768;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30768__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__30773 = cljs.core.first(xs__6360__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30773,(0),null);
var map__30776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30773,(1),null);
var map__30776__$1 = cljs.core.__destructure_map(map__30776);
var _obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30776__$1,new cljs.core.Keyword(null,"_obj","_obj",-592966725));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30776__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__5476__auto__ = ((function (s__30768__$1,vec__30773,i,map__30776,map__30776__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__30767_$_iter__30769(s__30770){
return (new cljs.core.LazySeq(null,((function (s__30768__$1,vec__30773,i,map__30776,map__30776__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen){
return (function (){
var s__30770__$1 = s__30770;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__30770__$1);
if(temp__5804__auto____$1){
var s__30770__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30770__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__30770__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__30772 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__30771 = (0);
while(true){
if((i__30771 < size__5479__auto__)){
var key = cljs.core._nth(c__5478__auto__,i__30771);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__30772,(function (){var prop = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5002__auto__ = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e30777){if((e30777 instanceof Error)){
var _e = e30777;
return "var";
} else {
throw e30777;

}
}})()], null);
})());

var G__30782 = (i__30771 + (1));
i__30771 = G__30782;
continue;
} else {
var G__30783 = (i__30771 + (1));
i__30771 = G__30783;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30772),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__30767_$_iter__30769(cljs.core.chunk_rest(s__30770__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30772),null);
}
} else {
var key = cljs.core.first(s__30770__$2);
if(((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5802__auto__ = (function (){var or__5002__auto__ = cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"value");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.goog$module$goog$object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e30778){if((e30778 instanceof Error)){
var _e = e30778;
return "var";
} else {
throw e30778;

}
}})()], null);
})(),cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__30767_$_iter__30769(cljs.core.rest(s__30770__$2)));
} else {
var G__30784 = cljs.core.rest(s__30770__$2);
s__30770__$1 = G__30784;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30768__$1,vec__30773,i,map__30776,map__30776__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
,null,null));
});})(s__30768__$1,vec__30773,i,map__30776,map__30776__$1,_obj,props,xs__6360__auto__,temp__5804__auto__,seen))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.js_keys(props)));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,cider$nrepl$inlined$deps$suitable$v0v4v1$suitable$js_introspection$iter__30767(cljs.core.rest(s__30768__$1)));
} else {
var G__30785 = cljs.core.rest(s__30768__$1);
s__30768__$1 = G__30785;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined.deps.suitable.v0v4v1.suitable.js_introspection.js.map
