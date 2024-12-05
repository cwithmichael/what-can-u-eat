goog.provide('schema.utils');
goog.scope(function(){
  schema.utils.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12160 = arguments.length;
var i__5727__auto___12161 = (0);
while(true){
if((i__5727__auto___12161 < len__5726__auto___12160)){
args__5732__auto__.push((arguments[i__5727__auto___12161]));

var G__12166 = (i__5727__auto___12161 + (1));
i__5727__auto___12161 = G__12166;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = m;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__5480__auto__ = (function schema$utils$iter__11929(s__11930){
return (new cljs.core.LazySeq(null,(function (){
var s__11930__$1 = s__11930;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11930__$1);
if(temp__5804__auto__){
var s__11930__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11930__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__11930__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__11932 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__11931 = (0);
while(true){
if((i__11931 < size__5479__auto__)){
var vec__11933 = cljs.core._nth(c__5478__auto__,i__11931);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__11932,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__12192 = (i__11931 + (1));
i__11931 = G__12192;
continue;
} else {
var G__12193 = (i__11931 + (1));
i__11931 = G__12193;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11932),schema$utils$iter__11929(cljs.core.chunk_rest(s__11930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11932),null);
}
} else {
var vec__11936 = cljs.core.first(s__11930__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__11929(cljs.core.rest(s__11930__$2)));
} else {
var G__12199 = cljs.core.rest(s__11930__$2);
s__11930__$1 = G__12199;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
}));

(schema.utils.assoc_when.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.assoc_when.cljs$lang$applyTo = (function (seq11927){
var G__11928 = cljs.core.first(seq11927);
var seq11927__$1 = cljs.core.next(seq11927);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11928,seq11927__$1);
}));

schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12205 = arguments.length;
var i__5727__auto___12206 = (0);
while(true){
if((i__5727__auto___12206 < len__5726__auto___12205)){
args__5732__auto__.push((arguments[i__5727__auto___12206]));

var G__12208 = (i__5727__auto___12206 + (1));
i__5727__auto___12206 = G__12208;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq11939){
var G__11940 = cljs.core.first(seq11939);
var seq11939__$1 = cljs.core.next(seq11939);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11940,seq11939__$1);
}));

schema.utils.max_value_length = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((19));
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((((cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)).length) <= cljs.core.deref(schema.utils.max_value_length))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
}
});
/**
 * A meaningful name for a function that looks like its symbol, if applicable.
 */
schema.utils.fn_name = (function schema$utils$fn_name(f){
var vec__11948 = cljs.core.re_matches(/#object\[(.*)\]/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Function",s)){
return "function";
} else {
return cljs.core.re_find(/[^\/]+(?:$|(?=\/+$))/,cljs.core.demunge(s));
}
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.validation_error_explain.call(null, this$__$1)),writer,opts);
}));

(schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
}));

(schema.utils.ValidationError.cljs$lang$type = true);

(schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError");

(schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"schema.utils/ValidationError");
}));

/**
 * Positional factory function for schema.utils/ValidationError.
 */
schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return (new cljs.core.List(null,(function (){var or__5002__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})(),(new cljs.core.List(null,cljs.core.deref(err.expectation_delay),null,(1),null)),(2),null));
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
 * @implements {cljs.core.IPrintWithWriter}
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(this$__$1) : schema.utils.named_error_explain.call(null, this$__$1)),writer,opts);
}));

(schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.NamedError.cljs$lang$type = true);

(schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError");

(schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"schema.utils/NamedError");
}));

/**
 * Positional factory function for schema.utils/NamedError.
 */
schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"named","named",1218138048,null),(new cljs.core.List(null,err.error,(new cljs.core.List(null,err.name,null,(1),null)),(2),null)),(3),null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k11996,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12008 = k11996;
var G__12008__$1 = (((G__12008 instanceof cljs.core.Keyword))?G__12008.fqn:null);
switch (G__12008__$1) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11996,else__5303__auto__);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12019){
var vec__12020 = p__12019;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12020,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11995){
var self__ = this;
var G__11995__$1 = this;
return (new cljs.core.RecordIter((0),G__11995__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1172277899 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11997,other11998){
var self__ = this;
var this11997__$1 = this;
return (((!((other11998 == null)))) && ((((this11997__$1.constructor === other11998.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11997__$1.error,other11998.error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this11997__$1.__extmap,other11998.__extmap)))))));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k11996){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12059 = k11996;
var G__12059__$1 = (((G__12059 instanceof cljs.core.Keyword))?G__12059.fqn:null);
switch (G__12059__$1) {
case "error":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k11996);

}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__11995){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12063 = cljs.core.keyword_identical_QMARK_;
var expr__12064 = k__5309__auto__;
if(cljs.core.truth_((pred__12063.cljs$core$IFn$_invoke$arity$2 ? pred__12063.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),expr__12064) : pred__12063.call(null, new cljs.core.Keyword(null,"error","error",-978969032),expr__12064)))){
return (new schema.utils.ErrorContainer(G__11995,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__11995),null));
}
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"error","error",-978969032),self__.error,null))], null),self__.__extmap));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__11995){
var self__ = this;
var this__5299__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__11995,self__.__extmap,self__.__hash));
}));

(schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
}));

(schema.utils.ErrorContainer.cljs$lang$type = true);

(schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"schema.utils/ErrorContainer",null,(1),null));
}));

(schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"schema.utils/ErrorContainer");
}));

/**
 * Positional factory function for schema.utils/ErrorContainer.
 */
schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

/**
 * Factory function for schema.utils/ErrorContainer, taking a map of keywords to field values.
 */
schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__11999){
var extmap__5342__auto__ = (function (){var G__12087 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__11999,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.record_QMARK_(G__11999)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12087);
} else {
return G__12087;
}
})();
return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__11999),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error("Assert failed: x"));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(schema.utils.error_QMARK_(x)){
return x.error;
} else {
return null;
}
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return schema.utils.goog$module$goog$object.set(klass,"schema$utils$schema",schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return schema.utils.goog$module$goog$object.get(klass,"schema$utils$schema");
});
/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);

//# sourceMappingURL=schema.utils.js.map
