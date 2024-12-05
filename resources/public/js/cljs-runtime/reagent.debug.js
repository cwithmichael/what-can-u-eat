goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__22166__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22166 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22168__i = 0, G__22168__a = new Array(arguments.length -  0);
while (G__22168__i < G__22168__a.length) {G__22168__a[G__22168__i] = arguments[G__22168__i + 0]; ++G__22168__i;}
  args = new cljs.core.IndexedSeq(G__22168__a,0,null);
} 
return G__22166__delegate.call(this,args);};
G__22166.cljs$lang$maxFixedArity = 0;
G__22166.cljs$lang$applyTo = (function (arglist__22169){
var args = cljs.core.seq(arglist__22169);
return G__22166__delegate(args);
});
G__22166.cljs$core$IFn$_invoke$arity$variadic = G__22166__delegate;
return G__22166;
})()
);

(o.error = (function() { 
var G__22170__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__22170 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22171__i = 0, G__22171__a = new Array(arguments.length -  0);
while (G__22171__i < G__22171__a.length) {G__22171__a[G__22171__i] = arguments[G__22171__i + 0]; ++G__22171__i;}
  args = new cljs.core.IndexedSeq(G__22171__a,0,null);
} 
return G__22170__delegate.call(this,args);};
G__22170.cljs$lang$maxFixedArity = 0;
G__22170.cljs$lang$applyTo = (function (arglist__22172){
var args = cljs.core.seq(arglist__22172);
return G__22170__delegate(args);
});
G__22170.cljs$core$IFn$_invoke$arity$variadic = G__22170__delegate;
return G__22170;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null, ));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
