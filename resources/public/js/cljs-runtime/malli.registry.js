goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_12047 = (function (this$,type){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schema[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5351__auto__.call(null, this$,type));
} else {
var m__5349__auto__ = (malli.registry._schema["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5349__auto__.call(null, this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_12047(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_12075 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schemas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (malli.registry._schemas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_12075(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11879 = (function (m,fm,meta11880){
this.m = m;
this.fm = fm;
this.meta11880 = meta11880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11881,meta11880__$1){
var self__ = this;
var _11881__$1 = this;
return (new malli.registry.t_malli$registry11879(self__.m,self__.fm,meta11880__$1));
}));

(malli.registry.t_malli$registry11879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11881){
var self__ = this;
var _11881__$1 = this;
return self__.meta11880;
}));

(malli.registry.t_malli$registry11879.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11879.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry11879.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry11879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta11880","meta11880",562683143,null)], null);
}));

(malli.registry.t_malli$registry11879.cljs$lang$type = true);

(malli.registry.t_malli$registry11879.cljs$lang$ctorStr = "malli.registry/t_malli$registry11879");

(malli.registry.t_malli$registry11879.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry11879");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11879.
 */
malli.registry.__GT_t_malli$registry11879 = (function malli$registry$__GT_t_malli$registry11879(m,fm,meta11880){
return (new malli.registry.t_malli$registry11879(m,fm,meta11880));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry11879(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11885 = (function (m,meta11886){
this.m = m;
this.meta11886 = meta11886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11887,meta11886__$1){
var self__ = this;
var _11887__$1 = this;
return (new malli.registry.t_malli$registry11885(self__.m,meta11886__$1));
}));

(malli.registry.t_malli$registry11885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11887){
var self__ = this;
var _11887__$1 = this;
return self__.meta11886;
}));

(malli.registry.t_malli$registry11885.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11885.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null, type));
}));

(malli.registry.t_malli$registry11885.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry11885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta11886","meta11886",2081361048,null)], null);
}));

(malli.registry.t_malli$registry11885.cljs$lang$type = true);

(malli.registry.t_malli$registry11885.cljs$lang$ctorStr = "malli.registry/t_malli$registry11885");

(malli.registry.t_malli$registry11885.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry11885");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11885.
 */
malli.registry.__GT_t_malli$registry11885 = (function malli$registry$__GT_t_malli$registry11885(m,meta11886){
return (new malli.registry.t_malli$registry11885(m,meta11886));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry11885(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11911 = (function (meta11912){
this.meta11912 = meta11912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11913,meta11912__$1){
var self__ = this;
var _11913__$1 = this;
return (new malli.registry.t_malli$registry11911(meta11912__$1));
}));

(malli.registry.t_malli$registry11911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11913){
var self__ = this;
var _11913__$1 = this;
return self__.meta11912;
}));

(malli.registry.t_malli$registry11911.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11911.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry11911.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry11911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11912","meta11912",1916819678,null)], null);
}));

(malli.registry.t_malli$registry11911.cljs$lang$type = true);

(malli.registry.t_malli$registry11911.cljs$lang$ctorStr = "malli.registry/t_malli$registry11911");

(malli.registry.t_malli$registry11911.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry11911");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11911.
 */
malli.registry.__GT_t_malli$registry11911 = (function malli$registry$__GT_t_malli$registry11911(meta11912){
return (new malli.registry.t_malli$registry11911(meta11912));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry11911(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11970 = (function (_QMARK_registries,registries,meta11971){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta11971 = meta11971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11972,meta11971__$1){
var self__ = this;
var _11972__$1 = this;
return (new malli.registry.t_malli$registry11970(self__._QMARK_registries,self__.registries,meta11971__$1));
}));

(malli.registry.t_malli$registry11970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11972){
var self__ = this;
var _11972__$1 = this;
return self__.meta11971;
}));

(malli.registry.t_malli$registry11970.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11970.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__11930_SHARP_){
return malli.registry._schema(p1__11930_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry11970.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry11970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta11971","meta11971",-569680162,null)], null);
}));

(malli.registry.t_malli$registry11970.cljs$lang$type = true);

(malli.registry.t_malli$registry11970.cljs$lang$ctorStr = "malli.registry/t_malli$registry11970");

(malli.registry.t_malli$registry11970.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry11970");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11970.
 */
malli.registry.__GT_t_malli$registry11970 = (function malli$registry$__GT_t_malli$registry11970(_QMARK_registries,registries,meta11971){
return (new malli.registry.t_malli$registry11970(_QMARK_registries,registries,meta11971));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12111 = arguments.length;
var i__5727__auto___12112 = (0);
while(true){
if((i__5727__auto___12112 < len__5726__auto___12111)){
args__5732__auto__.push((arguments[i__5727__auto___12112]));

var G__12113 = (i__5727__auto___12112 + (1));
i__5727__auto___12112 = G__12113;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry11970(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq11933){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11933));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11977 = (function (db,meta11978){
this.db = db;
this.meta11978 = meta11978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11979,meta11978__$1){
var self__ = this;
var _11979__$1 = this;
return (new malli.registry.t_malli$registry11977(self__.db,meta11978__$1));
}));

(malli.registry.t_malli$registry11977.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11979){
var self__ = this;
var _11979__$1 = this;
return self__.meta11978;
}));

(malli.registry.t_malli$registry11977.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11977.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry11977.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry11977.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta11978","meta11978",-67459910,null)], null);
}));

(malli.registry.t_malli$registry11977.cljs$lang$type = true);

(malli.registry.t_malli$registry11977.cljs$lang$ctorStr = "malli.registry/t_malli$registry11977");

(malli.registry.t_malli$registry11977.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry11977");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11977.
 */
malli.registry.__GT_t_malli$registry11977 = (function malli$registry$__GT_t_malli$registry11977(db,meta11978){
return (new malli.registry.t_malli$registry11977(db,meta11978));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry11977(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry11987 = (function (meta11988){
this.meta11988 = meta11988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry11987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11989,meta11988__$1){
var self__ = this;
var _11989__$1 = this;
return (new malli.registry.t_malli$registry11987(meta11988__$1));
}));

(malli.registry.t_malli$registry11987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11989){
var self__ = this;
var _11989__$1 = this;
return self__.meta11988;
}));

(malli.registry.t_malli$registry11987.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry11987.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry11987.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry11987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta11988","meta11988",321581327,null)], null);
}));

(malli.registry.t_malli$registry11987.cljs$lang$type = true);

(malli.registry.t_malli$registry11987.cljs$lang$ctorStr = "malli.registry/t_malli$registry11987");

(malli.registry.t_malli$registry11987.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry11987");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry11987.
 */
malli.registry.__GT_t_malli$registry11987 = (function malli$registry$__GT_t_malli$registry11987(meta11988){
return (new malli.registry.t_malli$registry11987(meta11988));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry11987(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry12004 = (function (meta12005){
this.meta12005 = meta12005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry12004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12006,meta12005__$1){
var self__ = this;
var _12006__$1 = this;
return (new malli.registry.t_malli$registry12004(meta12005__$1));
}));

(malli.registry.t_malli$registry12004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12006){
var self__ = this;
var _12006__$1 = this;
return self__.meta12005;
}));

(malli.registry.t_malli$registry12004.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry12004.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry12004.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry12004.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta12005","meta12005",-633446677,null)], null);
}));

(malli.registry.t_malli$registry12004.cljs$lang$type = true);

(malli.registry.t_malli$registry12004.cljs$lang$ctorStr = "malli.registry/t_malli$registry12004");

(malli.registry.t_malli$registry12004.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry12004");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry12004.
 */
malli.registry.__GT_t_malli$registry12004 = (function malli$registry$__GT_t_malli$registry12004(meta12005){
return (new malli.registry.t_malli$registry12004(meta12005));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry12004(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry12014 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta12015){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta12015 = meta12015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry12014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12016,meta12015__$1){
var self__ = this;
var _12016__$1 = this;
return (new malli.registry.t_malli$registry12014(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta12015__$1));
}));

(malli.registry.t_malli$registry12014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12016){
var self__ = this;
var _12016__$1 = this;
return self__.meta12015;
}));

(malli.registry.t_malli$registry12014.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry12014.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5002__auto__ = (function (){var fexpr__12022 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__12022.cljs$core$IFn$_invoke$arity$1 ? fexpr__12022.cljs$core$IFn$_invoke$arity$1(name) : fexpr__12022.call(null, name));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = (function (){var G__12023 = name;
var G__12024 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__12023,G__12024) : self__.provider.call(null, G__12023,G__12024));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry12014.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry12014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta12015","meta12015",1167350513,null)], null);
}));

(malli.registry.t_malli$registry12014.cljs$lang$type = true);

(malli.registry.t_malli$registry12014.cljs$lang$ctorStr = "malli.registry/t_malli$registry12014");

(malli.registry.t_malli$registry12014.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry12014");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry12014.
 */
malli.registry.__GT_t_malli$registry12014 = (function malli$registry$__GT_t_malli$registry12014(default_registry,provider,cache_STAR_,registry_STAR_,meta12015){
return (new malli.registry.t_malli$registry12014(default_registry,provider,cache_STAR_,registry_STAR_,meta12015));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry12014(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
