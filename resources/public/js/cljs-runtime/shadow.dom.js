goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16416 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16416(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16417 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16417(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15477 = coll;
var G__15478 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15477,G__15478) : shadow.dom.lazy_native_coll_seq.call(null, G__15477,G__15478));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15520 = arguments.length;
switch (G__15520) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15526 = arguments.length;
switch (G__15526) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15537 = arguments.length;
switch (G__15537) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15545 = arguments.length;
switch (G__15545) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15554 = arguments.length;
switch (G__15554) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15569 = arguments.length;
switch (G__15569) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e15575){if((e15575 instanceof Object)){
var e = e15575;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15575;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15584 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15585 = null;
var count__15586 = (0);
var i__15587 = (0);
while(true){
if((i__15587 < count__15586)){
var el = chunk__15585.cljs$core$IIndexed$_nth$arity$2(null, i__15587);
var handler_16434__$1 = ((function (seq__15584,chunk__15585,count__15586,i__15587,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15584,chunk__15585,count__15586,i__15587,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16434__$1);


var G__16436 = seq__15584;
var G__16437 = chunk__15585;
var G__16438 = count__15586;
var G__16439 = (i__15587 + (1));
seq__15584 = G__16436;
chunk__15585 = G__16437;
count__15586 = G__16438;
i__15587 = G__16439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15584);
if(temp__5804__auto__){
var seq__15584__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15584__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15584__$1);
var G__16448 = cljs.core.chunk_rest(seq__15584__$1);
var G__16449 = c__5525__auto__;
var G__16450 = cljs.core.count(c__5525__auto__);
var G__16451 = (0);
seq__15584 = G__16448;
chunk__15585 = G__16449;
count__15586 = G__16450;
i__15587 = G__16451;
continue;
} else {
var el = cljs.core.first(seq__15584__$1);
var handler_16453__$1 = ((function (seq__15584,chunk__15585,count__15586,i__15587,el,seq__15584__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__15584,chunk__15585,count__15586,i__15587,el,seq__15584__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16453__$1);


var G__16454 = cljs.core.next(seq__15584__$1);
var G__16455 = null;
var G__16456 = (0);
var G__16457 = (0);
seq__15584 = G__16454;
chunk__15585 = G__16455;
count__15586 = G__16456;
i__15587 = G__16457;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15596 = arguments.length;
switch (G__15596) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15609 = cljs.core.seq(events);
var chunk__15610 = null;
var count__15611 = (0);
var i__15612 = (0);
while(true){
if((i__15612 < count__15611)){
var vec__15637 = chunk__15610.cljs$core$IIndexed$_nth$arity$2(null, i__15612);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15637,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16464 = seq__15609;
var G__16465 = chunk__15610;
var G__16466 = count__15611;
var G__16467 = (i__15612 + (1));
seq__15609 = G__16464;
chunk__15610 = G__16465;
count__15611 = G__16466;
i__15612 = G__16467;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15609);
if(temp__5804__auto__){
var seq__15609__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15609__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15609__$1);
var G__16469 = cljs.core.chunk_rest(seq__15609__$1);
var G__16470 = c__5525__auto__;
var G__16471 = cljs.core.count(c__5525__auto__);
var G__16472 = (0);
seq__15609 = G__16469;
chunk__15610 = G__16470;
count__15611 = G__16471;
i__15612 = G__16472;
continue;
} else {
var vec__15652 = cljs.core.first(seq__15609__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15652,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16474 = cljs.core.next(seq__15609__$1);
var G__16475 = null;
var G__16476 = (0);
var G__16477 = (0);
seq__15609 = G__16474;
chunk__15610 = G__16475;
count__15611 = G__16476;
i__15612 = G__16477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15665 = cljs.core.seq(styles);
var chunk__15666 = null;
var count__15667 = (0);
var i__15668 = (0);
while(true){
if((i__15668 < count__15667)){
var vec__15679 = chunk__15666.cljs$core$IIndexed$_nth$arity$2(null, i__15668);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15679,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16478 = seq__15665;
var G__16479 = chunk__15666;
var G__16480 = count__15667;
var G__16481 = (i__15668 + (1));
seq__15665 = G__16478;
chunk__15666 = G__16479;
count__15667 = G__16480;
i__15668 = G__16481;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15665);
if(temp__5804__auto__){
var seq__15665__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15665__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15665__$1);
var G__16482 = cljs.core.chunk_rest(seq__15665__$1);
var G__16483 = c__5525__auto__;
var G__16484 = cljs.core.count(c__5525__auto__);
var G__16485 = (0);
seq__15665 = G__16482;
chunk__15666 = G__16483;
count__15667 = G__16484;
i__15668 = G__16485;
continue;
} else {
var vec__15683 = cljs.core.first(seq__15665__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15683,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15683,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16486 = cljs.core.next(seq__15665__$1);
var G__16487 = null;
var G__16488 = (0);
var G__16489 = (0);
seq__15665 = G__16486;
chunk__15666 = G__16487;
count__15667 = G__16488;
i__15668 = G__16489;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15689_16490 = key;
var G__15689_16491__$1 = (((G__15689_16490 instanceof cljs.core.Keyword))?G__15689_16490.fqn:null);
switch (G__15689_16491__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16495 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_16495,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_16495,"aria-");
}
})())){
el.setAttribute(ks_16495,value);
} else {
(el[ks_16495] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15714){
var map__15715 = p__15714;
var map__15715__$1 = cljs.core.__destructure_map(map__15715);
var props = map__15715__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15715__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15717 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15717,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15720 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15720,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15720;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15724 = arguments.length;
switch (G__15724) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15735){
var vec__15736 = p__15735;
var seq__15737 = cljs.core.seq(vec__15736);
var first__15738 = cljs.core.first(seq__15737);
var seq__15737__$1 = cljs.core.next(seq__15737);
var nn = first__15738;
var first__15738__$1 = cljs.core.first(seq__15737__$1);
var seq__15737__$2 = cljs.core.next(seq__15737__$1);
var np = first__15738__$1;
var nc = seq__15737__$2;
var node = vec__15736;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15740 = nn;
var G__15741 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15740,G__15741) : create_fn.call(null, G__15740,G__15741));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15742 = nn;
var G__15743 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15742,G__15743) : create_fn.call(null, G__15742,G__15743));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15744 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15744,(1),null);
var seq__15747_16501 = cljs.core.seq(node_children);
var chunk__15748_16502 = null;
var count__15749_16503 = (0);
var i__15750_16504 = (0);
while(true){
if((i__15750_16504 < count__15749_16503)){
var child_struct_16505 = chunk__15748_16502.cljs$core$IIndexed$_nth$arity$2(null, i__15750_16504);
var children_16507 = shadow.dom.dom_node(child_struct_16505);
if(cljs.core.seq_QMARK_(children_16507)){
var seq__15769_16508 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16507));
var chunk__15771_16509 = null;
var count__15772_16510 = (0);
var i__15773_16511 = (0);
while(true){
if((i__15773_16511 < count__15772_16510)){
var child_16512 = chunk__15771_16509.cljs$core$IIndexed$_nth$arity$2(null, i__15773_16511);
if(cljs.core.truth_(child_16512)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16512);


var G__16513 = seq__15769_16508;
var G__16514 = chunk__15771_16509;
var G__16515 = count__15772_16510;
var G__16516 = (i__15773_16511 + (1));
seq__15769_16508 = G__16513;
chunk__15771_16509 = G__16514;
count__15772_16510 = G__16515;
i__15773_16511 = G__16516;
continue;
} else {
var G__16518 = seq__15769_16508;
var G__16519 = chunk__15771_16509;
var G__16520 = count__15772_16510;
var G__16521 = (i__15773_16511 + (1));
seq__15769_16508 = G__16518;
chunk__15771_16509 = G__16519;
count__15772_16510 = G__16520;
i__15773_16511 = G__16521;
continue;
}
} else {
var temp__5804__auto___16522 = cljs.core.seq(seq__15769_16508);
if(temp__5804__auto___16522){
var seq__15769_16523__$1 = temp__5804__auto___16522;
if(cljs.core.chunked_seq_QMARK_(seq__15769_16523__$1)){
var c__5525__auto___16524 = cljs.core.chunk_first(seq__15769_16523__$1);
var G__16525 = cljs.core.chunk_rest(seq__15769_16523__$1);
var G__16526 = c__5525__auto___16524;
var G__16527 = cljs.core.count(c__5525__auto___16524);
var G__16528 = (0);
seq__15769_16508 = G__16525;
chunk__15771_16509 = G__16526;
count__15772_16510 = G__16527;
i__15773_16511 = G__16528;
continue;
} else {
var child_16530 = cljs.core.first(seq__15769_16523__$1);
if(cljs.core.truth_(child_16530)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16530);


var G__16531 = cljs.core.next(seq__15769_16523__$1);
var G__16532 = null;
var G__16533 = (0);
var G__16534 = (0);
seq__15769_16508 = G__16531;
chunk__15771_16509 = G__16532;
count__15772_16510 = G__16533;
i__15773_16511 = G__16534;
continue;
} else {
var G__16535 = cljs.core.next(seq__15769_16523__$1);
var G__16536 = null;
var G__16537 = (0);
var G__16538 = (0);
seq__15769_16508 = G__16535;
chunk__15771_16509 = G__16536;
count__15772_16510 = G__16537;
i__15773_16511 = G__16538;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16507);
}


var G__16539 = seq__15747_16501;
var G__16540 = chunk__15748_16502;
var G__16541 = count__15749_16503;
var G__16542 = (i__15750_16504 + (1));
seq__15747_16501 = G__16539;
chunk__15748_16502 = G__16540;
count__15749_16503 = G__16541;
i__15750_16504 = G__16542;
continue;
} else {
var temp__5804__auto___16543 = cljs.core.seq(seq__15747_16501);
if(temp__5804__auto___16543){
var seq__15747_16545__$1 = temp__5804__auto___16543;
if(cljs.core.chunked_seq_QMARK_(seq__15747_16545__$1)){
var c__5525__auto___16546 = cljs.core.chunk_first(seq__15747_16545__$1);
var G__16547 = cljs.core.chunk_rest(seq__15747_16545__$1);
var G__16548 = c__5525__auto___16546;
var G__16549 = cljs.core.count(c__5525__auto___16546);
var G__16550 = (0);
seq__15747_16501 = G__16547;
chunk__15748_16502 = G__16548;
count__15749_16503 = G__16549;
i__15750_16504 = G__16550;
continue;
} else {
var child_struct_16551 = cljs.core.first(seq__15747_16545__$1);
var children_16552 = shadow.dom.dom_node(child_struct_16551);
if(cljs.core.seq_QMARK_(children_16552)){
var seq__15781_16553 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16552));
var chunk__15783_16554 = null;
var count__15784_16555 = (0);
var i__15785_16556 = (0);
while(true){
if((i__15785_16556 < count__15784_16555)){
var child_16557 = chunk__15783_16554.cljs$core$IIndexed$_nth$arity$2(null, i__15785_16556);
if(cljs.core.truth_(child_16557)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16557);


var G__16558 = seq__15781_16553;
var G__16559 = chunk__15783_16554;
var G__16560 = count__15784_16555;
var G__16561 = (i__15785_16556 + (1));
seq__15781_16553 = G__16558;
chunk__15783_16554 = G__16559;
count__15784_16555 = G__16560;
i__15785_16556 = G__16561;
continue;
} else {
var G__16562 = seq__15781_16553;
var G__16563 = chunk__15783_16554;
var G__16564 = count__15784_16555;
var G__16565 = (i__15785_16556 + (1));
seq__15781_16553 = G__16562;
chunk__15783_16554 = G__16563;
count__15784_16555 = G__16564;
i__15785_16556 = G__16565;
continue;
}
} else {
var temp__5804__auto___16566__$1 = cljs.core.seq(seq__15781_16553);
if(temp__5804__auto___16566__$1){
var seq__15781_16567__$1 = temp__5804__auto___16566__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15781_16567__$1)){
var c__5525__auto___16568 = cljs.core.chunk_first(seq__15781_16567__$1);
var G__16569 = cljs.core.chunk_rest(seq__15781_16567__$1);
var G__16570 = c__5525__auto___16568;
var G__16571 = cljs.core.count(c__5525__auto___16568);
var G__16572 = (0);
seq__15781_16553 = G__16569;
chunk__15783_16554 = G__16570;
count__15784_16555 = G__16571;
i__15785_16556 = G__16572;
continue;
} else {
var child_16573 = cljs.core.first(seq__15781_16567__$1);
if(cljs.core.truth_(child_16573)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16573);


var G__16574 = cljs.core.next(seq__15781_16567__$1);
var G__16575 = null;
var G__16576 = (0);
var G__16577 = (0);
seq__15781_16553 = G__16574;
chunk__15783_16554 = G__16575;
count__15784_16555 = G__16576;
i__15785_16556 = G__16577;
continue;
} else {
var G__16578 = cljs.core.next(seq__15781_16567__$1);
var G__16579 = null;
var G__16580 = (0);
var G__16581 = (0);
seq__15781_16553 = G__16578;
chunk__15783_16554 = G__16579;
count__15784_16555 = G__16580;
i__15785_16556 = G__16581;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16552);
}


var G__16582 = cljs.core.next(seq__15747_16545__$1);
var G__16583 = null;
var G__16584 = (0);
var G__16585 = (0);
seq__15747_16501 = G__16582;
chunk__15748_16502 = G__16583;
count__15749_16503 = G__16584;
i__15750_16504 = G__16585;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15797 = cljs.core.seq(node);
var chunk__15798 = null;
var count__15799 = (0);
var i__15800 = (0);
while(true){
if((i__15800 < count__15799)){
var n = chunk__15798.cljs$core$IIndexed$_nth$arity$2(null, i__15800);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16587 = seq__15797;
var G__16588 = chunk__15798;
var G__16589 = count__15799;
var G__16590 = (i__15800 + (1));
seq__15797 = G__16587;
chunk__15798 = G__16588;
count__15799 = G__16589;
i__15800 = G__16590;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15797);
if(temp__5804__auto__){
var seq__15797__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15797__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15797__$1);
var G__16591 = cljs.core.chunk_rest(seq__15797__$1);
var G__16592 = c__5525__auto__;
var G__16593 = cljs.core.count(c__5525__auto__);
var G__16594 = (0);
seq__15797 = G__16591;
chunk__15798 = G__16592;
count__15799 = G__16593;
i__15800 = G__16594;
continue;
} else {
var n = cljs.core.first(seq__15797__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__16595 = cljs.core.next(seq__15797__$1);
var G__16596 = null;
var G__16597 = (0);
var G__16598 = (0);
seq__15797 = G__16595;
chunk__15798 = G__16596;
count__15799 = G__16597;
i__15800 = G__16598;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15802 = arguments.length;
switch (G__15802) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15804 = arguments.length;
switch (G__15804) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15812 = arguments.length;
switch (G__15812) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16620 = arguments.length;
var i__5727__auto___16621 = (0);
while(true){
if((i__5727__auto___16621 < len__5726__auto___16620)){
args__5732__auto__.push((arguments[i__5727__auto___16621]));

var G__16622 = (i__5727__auto___16621 + (1));
i__5727__auto___16621 = G__16622;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15848_16626 = cljs.core.seq(nodes);
var chunk__15849_16627 = null;
var count__15850_16628 = (0);
var i__15851_16629 = (0);
while(true){
if((i__15851_16629 < count__15850_16628)){
var node_16632 = chunk__15849_16627.cljs$core$IIndexed$_nth$arity$2(null, i__15851_16629);
fragment.appendChild(shadow.dom._to_dom(node_16632));


var G__16634 = seq__15848_16626;
var G__16635 = chunk__15849_16627;
var G__16636 = count__15850_16628;
var G__16637 = (i__15851_16629 + (1));
seq__15848_16626 = G__16634;
chunk__15849_16627 = G__16635;
count__15850_16628 = G__16636;
i__15851_16629 = G__16637;
continue;
} else {
var temp__5804__auto___16638 = cljs.core.seq(seq__15848_16626);
if(temp__5804__auto___16638){
var seq__15848_16639__$1 = temp__5804__auto___16638;
if(cljs.core.chunked_seq_QMARK_(seq__15848_16639__$1)){
var c__5525__auto___16640 = cljs.core.chunk_first(seq__15848_16639__$1);
var G__16641 = cljs.core.chunk_rest(seq__15848_16639__$1);
var G__16642 = c__5525__auto___16640;
var G__16643 = cljs.core.count(c__5525__auto___16640);
var G__16644 = (0);
seq__15848_16626 = G__16641;
chunk__15849_16627 = G__16642;
count__15850_16628 = G__16643;
i__15851_16629 = G__16644;
continue;
} else {
var node_16646 = cljs.core.first(seq__15848_16639__$1);
fragment.appendChild(shadow.dom._to_dom(node_16646));


var G__16647 = cljs.core.next(seq__15848_16639__$1);
var G__16648 = null;
var G__16649 = (0);
var G__16650 = (0);
seq__15848_16626 = G__16647;
chunk__15849_16627 = G__16648;
count__15850_16628 = G__16649;
i__15851_16629 = G__16650;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15842){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15842));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15873_16659 = cljs.core.seq(scripts);
var chunk__15874_16660 = null;
var count__15875_16661 = (0);
var i__15876_16662 = (0);
while(true){
if((i__15876_16662 < count__15875_16661)){
var vec__15895_16663 = chunk__15874_16660.cljs$core$IIndexed$_nth$arity$2(null, i__15876_16662);
var script_tag_16664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15895_16663,(0),null);
var script_body_16665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15895_16663,(1),null);
eval(script_body_16665);


var G__16666 = seq__15873_16659;
var G__16667 = chunk__15874_16660;
var G__16668 = count__15875_16661;
var G__16669 = (i__15876_16662 + (1));
seq__15873_16659 = G__16666;
chunk__15874_16660 = G__16667;
count__15875_16661 = G__16668;
i__15876_16662 = G__16669;
continue;
} else {
var temp__5804__auto___16670 = cljs.core.seq(seq__15873_16659);
if(temp__5804__auto___16670){
var seq__15873_16671__$1 = temp__5804__auto___16670;
if(cljs.core.chunked_seq_QMARK_(seq__15873_16671__$1)){
var c__5525__auto___16672 = cljs.core.chunk_first(seq__15873_16671__$1);
var G__16674 = cljs.core.chunk_rest(seq__15873_16671__$1);
var G__16675 = c__5525__auto___16672;
var G__16676 = cljs.core.count(c__5525__auto___16672);
var G__16677 = (0);
seq__15873_16659 = G__16674;
chunk__15874_16660 = G__16675;
count__15875_16661 = G__16676;
i__15876_16662 = G__16677;
continue;
} else {
var vec__15904_16679 = cljs.core.first(seq__15873_16671__$1);
var script_tag_16680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904_16679,(0),null);
var script_body_16681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15904_16679,(1),null);
eval(script_body_16681);


var G__16683 = cljs.core.next(seq__15873_16671__$1);
var G__16684 = null;
var G__16685 = (0);
var G__16686 = (0);
seq__15873_16659 = G__16683;
chunk__15874_16660 = G__16684;
count__15875_16661 = G__16685;
i__15876_16662 = G__16686;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15908){
var vec__15910 = p__15908;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15910,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15910,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15952 = arguments.length;
switch (G__15952) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__16013 = cljs.core.seq(style_keys);
var chunk__16014 = null;
var count__16015 = (0);
var i__16016 = (0);
while(true){
if((i__16016 < count__16015)){
var it = chunk__16014.cljs$core$IIndexed$_nth$arity$2(null, i__16016);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16696 = seq__16013;
var G__16697 = chunk__16014;
var G__16698 = count__16015;
var G__16699 = (i__16016 + (1));
seq__16013 = G__16696;
chunk__16014 = G__16697;
count__16015 = G__16698;
i__16016 = G__16699;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16013);
if(temp__5804__auto__){
var seq__16013__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16013__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16013__$1);
var G__16700 = cljs.core.chunk_rest(seq__16013__$1);
var G__16701 = c__5525__auto__;
var G__16702 = cljs.core.count(c__5525__auto__);
var G__16703 = (0);
seq__16013 = G__16700;
chunk__16014 = G__16701;
count__16015 = G__16702;
i__16016 = G__16703;
continue;
} else {
var it = cljs.core.first(seq__16013__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16704 = cljs.core.next(seq__16013__$1);
var G__16705 = null;
var G__16706 = (0);
var G__16707 = (0);
seq__16013 = G__16704;
chunk__16014 = G__16705;
count__16015 = G__16706;
i__16016 = G__16707;
continue;
}
} else {
return null;
}
}
break;
}
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16036,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16063 = k16036;
var G__16063__$1 = (((G__16063 instanceof cljs.core.Keyword))?G__16063.fqn:null);
switch (G__16063__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16036,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16081){
var vec__16082 = p__16081;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16082,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16082,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16035){
var self__ = this;
var G__16035__$1 = this;
return (new cljs.core.RecordIter((0),G__16035__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16037,other16038){
var self__ = this;
var this16037__$1 = this;
return (((!((other16038 == null)))) && ((((this16037__$1.constructor === other16038.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16037__$1.x,other16038.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16037__$1.y,other16038.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16037__$1.__extmap,other16038.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16036){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16171 = k16036;
var G__16171__$1 = (((G__16171 instanceof cljs.core.Keyword))?G__16171.fqn:null);
switch (G__16171__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16036);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16035){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16185 = cljs.core.keyword_identical_QMARK_;
var expr__16186 = k__5309__auto__;
if(cljs.core.truth_((pred__16185.cljs$core$IFn$_invoke$arity$2 ? pred__16185.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__16186) : pred__16185.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__16186)))){
return (new shadow.dom.Coordinate(G__16035,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16185.cljs$core$IFn$_invoke$arity$2 ? pred__16185.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__16186) : pred__16185.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__16186)))){
return (new shadow.dom.Coordinate(self__.x,G__16035,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16035),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16035){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__16035,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__16039){
var extmap__5342__auto__ = (function (){var G__16197 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16039,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__16039)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16197);
} else {
return G__16197;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__16039),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__16039),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16205,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16209 = k16205;
var G__16209__$1 = (((G__16209 instanceof cljs.core.Keyword))?G__16209.fqn:null);
switch (G__16209__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16205,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16210){
var vec__16211 = p__16210;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16211,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16211,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16204){
var self__ = this;
var G__16204__$1 = this;
return (new cljs.core.RecordIter((0),G__16204__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16206,other16207){
var self__ = this;
var this16206__$1 = this;
return (((!((other16207 == null)))) && ((((this16206__$1.constructor === other16207.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16206__$1.w,other16207.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16206__$1.h,other16207.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16206__$1.__extmap,other16207.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16205){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16218 = k16205;
var G__16218__$1 = (((G__16218 instanceof cljs.core.Keyword))?G__16218.fqn:null);
switch (G__16218__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16205);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16204){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16219 = cljs.core.keyword_identical_QMARK_;
var expr__16220 = k__5309__auto__;
if(cljs.core.truth_((pred__16219.cljs$core$IFn$_invoke$arity$2 ? pred__16219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__16220) : pred__16219.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__16220)))){
return (new shadow.dom.Size(G__16204,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16219.cljs$core$IFn$_invoke$arity$2 ? pred__16219.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__16220) : pred__16219.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__16220)))){
return (new shadow.dom.Size(self__.w,G__16204,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16204),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16204){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__16204,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__16208){
var extmap__5342__auto__ = (function (){var G__16247 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16208,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__16208)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16247);
} else {
return G__16247;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__16208),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__16208),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__16732 = (i + (1));
var G__16733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16732;
ret = G__16733;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16277){
var vec__16278 = p__16277;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16278,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16282 = arguments.length;
switch (G__16282) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16741 = ps;
var G__16742 = (i + (1));
el__$1 = G__16741;
i = G__16742;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16288 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16288,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16292_16745 = cljs.core.seq(props);
var chunk__16293_16746 = null;
var count__16294_16747 = (0);
var i__16295_16748 = (0);
while(true){
if((i__16295_16748 < count__16294_16747)){
var vec__16314_16749 = chunk__16293_16746.cljs$core$IIndexed$_nth$arity$2(null, i__16295_16748);
var k_16750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16314_16749,(0),null);
var v_16751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16314_16749,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_16750);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16750),v_16751);


var G__16752 = seq__16292_16745;
var G__16753 = chunk__16293_16746;
var G__16754 = count__16294_16747;
var G__16755 = (i__16295_16748 + (1));
seq__16292_16745 = G__16752;
chunk__16293_16746 = G__16753;
count__16294_16747 = G__16754;
i__16295_16748 = G__16755;
continue;
} else {
var temp__5804__auto___16756 = cljs.core.seq(seq__16292_16745);
if(temp__5804__auto___16756){
var seq__16292_16757__$1 = temp__5804__auto___16756;
if(cljs.core.chunked_seq_QMARK_(seq__16292_16757__$1)){
var c__5525__auto___16758 = cljs.core.chunk_first(seq__16292_16757__$1);
var G__16759 = cljs.core.chunk_rest(seq__16292_16757__$1);
var G__16760 = c__5525__auto___16758;
var G__16761 = cljs.core.count(c__5525__auto___16758);
var G__16762 = (0);
seq__16292_16745 = G__16759;
chunk__16293_16746 = G__16760;
count__16294_16747 = G__16761;
i__16295_16748 = G__16762;
continue;
} else {
var vec__16318_16763 = cljs.core.first(seq__16292_16757__$1);
var k_16764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16318_16763,(0),null);
var v_16765 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16318_16763,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_16764);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16764),v_16765);


var G__16766 = cljs.core.next(seq__16292_16757__$1);
var G__16767 = null;
var G__16768 = (0);
var G__16769 = (0);
seq__16292_16745 = G__16766;
chunk__16293_16746 = G__16767;
count__16294_16747 = G__16768;
i__16295_16748 = G__16769;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16328 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16328,(1),null);
var seq__16331_16771 = cljs.core.seq(node_children);
var chunk__16333_16772 = null;
var count__16334_16773 = (0);
var i__16335_16774 = (0);
while(true){
if((i__16335_16774 < count__16334_16773)){
var child_struct_16775 = chunk__16333_16772.cljs$core$IIndexed$_nth$arity$2(null, i__16335_16774);
if((!((child_struct_16775 == null)))){
if(typeof child_struct_16775 === 'string'){
var text_16776 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16776),child_struct_16775].join(''));
} else {
var children_16781 = shadow.dom.svg_node(child_struct_16775);
if(cljs.core.seq_QMARK_(children_16781)){
var seq__16367_16782 = cljs.core.seq(children_16781);
var chunk__16369_16783 = null;
var count__16370_16784 = (0);
var i__16371_16785 = (0);
while(true){
if((i__16371_16785 < count__16370_16784)){
var child_16786 = chunk__16369_16783.cljs$core$IIndexed$_nth$arity$2(null, i__16371_16785);
if(cljs.core.truth_(child_16786)){
node.appendChild(child_16786);


var G__16787 = seq__16367_16782;
var G__16788 = chunk__16369_16783;
var G__16789 = count__16370_16784;
var G__16790 = (i__16371_16785 + (1));
seq__16367_16782 = G__16787;
chunk__16369_16783 = G__16788;
count__16370_16784 = G__16789;
i__16371_16785 = G__16790;
continue;
} else {
var G__16795 = seq__16367_16782;
var G__16796 = chunk__16369_16783;
var G__16797 = count__16370_16784;
var G__16798 = (i__16371_16785 + (1));
seq__16367_16782 = G__16795;
chunk__16369_16783 = G__16796;
count__16370_16784 = G__16797;
i__16371_16785 = G__16798;
continue;
}
} else {
var temp__5804__auto___16800 = cljs.core.seq(seq__16367_16782);
if(temp__5804__auto___16800){
var seq__16367_16801__$1 = temp__5804__auto___16800;
if(cljs.core.chunked_seq_QMARK_(seq__16367_16801__$1)){
var c__5525__auto___16802 = cljs.core.chunk_first(seq__16367_16801__$1);
var G__16803 = cljs.core.chunk_rest(seq__16367_16801__$1);
var G__16804 = c__5525__auto___16802;
var G__16805 = cljs.core.count(c__5525__auto___16802);
var G__16806 = (0);
seq__16367_16782 = G__16803;
chunk__16369_16783 = G__16804;
count__16370_16784 = G__16805;
i__16371_16785 = G__16806;
continue;
} else {
var child_16807 = cljs.core.first(seq__16367_16801__$1);
if(cljs.core.truth_(child_16807)){
node.appendChild(child_16807);


var G__16808 = cljs.core.next(seq__16367_16801__$1);
var G__16809 = null;
var G__16810 = (0);
var G__16811 = (0);
seq__16367_16782 = G__16808;
chunk__16369_16783 = G__16809;
count__16370_16784 = G__16810;
i__16371_16785 = G__16811;
continue;
} else {
var G__16812 = cljs.core.next(seq__16367_16801__$1);
var G__16813 = null;
var G__16814 = (0);
var G__16815 = (0);
seq__16367_16782 = G__16812;
chunk__16369_16783 = G__16813;
count__16370_16784 = G__16814;
i__16371_16785 = G__16815;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16781);
}
}


var G__16816 = seq__16331_16771;
var G__16817 = chunk__16333_16772;
var G__16818 = count__16334_16773;
var G__16819 = (i__16335_16774 + (1));
seq__16331_16771 = G__16816;
chunk__16333_16772 = G__16817;
count__16334_16773 = G__16818;
i__16335_16774 = G__16819;
continue;
} else {
var G__16820 = seq__16331_16771;
var G__16821 = chunk__16333_16772;
var G__16822 = count__16334_16773;
var G__16823 = (i__16335_16774 + (1));
seq__16331_16771 = G__16820;
chunk__16333_16772 = G__16821;
count__16334_16773 = G__16822;
i__16335_16774 = G__16823;
continue;
}
} else {
var temp__5804__auto___16824 = cljs.core.seq(seq__16331_16771);
if(temp__5804__auto___16824){
var seq__16331_16825__$1 = temp__5804__auto___16824;
if(cljs.core.chunked_seq_QMARK_(seq__16331_16825__$1)){
var c__5525__auto___16826 = cljs.core.chunk_first(seq__16331_16825__$1);
var G__16827 = cljs.core.chunk_rest(seq__16331_16825__$1);
var G__16828 = c__5525__auto___16826;
var G__16829 = cljs.core.count(c__5525__auto___16826);
var G__16830 = (0);
seq__16331_16771 = G__16827;
chunk__16333_16772 = G__16828;
count__16334_16773 = G__16829;
i__16335_16774 = G__16830;
continue;
} else {
var child_struct_16831 = cljs.core.first(seq__16331_16825__$1);
if((!((child_struct_16831 == null)))){
if(typeof child_struct_16831 === 'string'){
var text_16832 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16832),child_struct_16831].join(''));
} else {
var children_16833 = shadow.dom.svg_node(child_struct_16831);
if(cljs.core.seq_QMARK_(children_16833)){
var seq__16378_16834 = cljs.core.seq(children_16833);
var chunk__16380_16835 = null;
var count__16381_16836 = (0);
var i__16382_16837 = (0);
while(true){
if((i__16382_16837 < count__16381_16836)){
var child_16839 = chunk__16380_16835.cljs$core$IIndexed$_nth$arity$2(null, i__16382_16837);
if(cljs.core.truth_(child_16839)){
node.appendChild(child_16839);


var G__16840 = seq__16378_16834;
var G__16841 = chunk__16380_16835;
var G__16842 = count__16381_16836;
var G__16843 = (i__16382_16837 + (1));
seq__16378_16834 = G__16840;
chunk__16380_16835 = G__16841;
count__16381_16836 = G__16842;
i__16382_16837 = G__16843;
continue;
} else {
var G__16844 = seq__16378_16834;
var G__16845 = chunk__16380_16835;
var G__16846 = count__16381_16836;
var G__16847 = (i__16382_16837 + (1));
seq__16378_16834 = G__16844;
chunk__16380_16835 = G__16845;
count__16381_16836 = G__16846;
i__16382_16837 = G__16847;
continue;
}
} else {
var temp__5804__auto___16848__$1 = cljs.core.seq(seq__16378_16834);
if(temp__5804__auto___16848__$1){
var seq__16378_16849__$1 = temp__5804__auto___16848__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16378_16849__$1)){
var c__5525__auto___16851 = cljs.core.chunk_first(seq__16378_16849__$1);
var G__16852 = cljs.core.chunk_rest(seq__16378_16849__$1);
var G__16853 = c__5525__auto___16851;
var G__16854 = cljs.core.count(c__5525__auto___16851);
var G__16855 = (0);
seq__16378_16834 = G__16852;
chunk__16380_16835 = G__16853;
count__16381_16836 = G__16854;
i__16382_16837 = G__16855;
continue;
} else {
var child_16856 = cljs.core.first(seq__16378_16849__$1);
if(cljs.core.truth_(child_16856)){
node.appendChild(child_16856);


var G__16857 = cljs.core.next(seq__16378_16849__$1);
var G__16858 = null;
var G__16859 = (0);
var G__16860 = (0);
seq__16378_16834 = G__16857;
chunk__16380_16835 = G__16858;
count__16381_16836 = G__16859;
i__16382_16837 = G__16860;
continue;
} else {
var G__16862 = cljs.core.next(seq__16378_16849__$1);
var G__16863 = null;
var G__16864 = (0);
var G__16865 = (0);
seq__16378_16834 = G__16862;
chunk__16380_16835 = G__16863;
count__16381_16836 = G__16864;
i__16382_16837 = G__16865;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16833);
}
}


var G__16866 = cljs.core.next(seq__16331_16825__$1);
var G__16867 = null;
var G__16868 = (0);
var G__16869 = (0);
seq__16331_16771 = G__16866;
chunk__16333_16772 = G__16867;
count__16334_16773 = G__16868;
i__16335_16774 = G__16869;
continue;
} else {
var G__16870 = cljs.core.next(seq__16331_16825__$1);
var G__16871 = null;
var G__16872 = (0);
var G__16873 = (0);
seq__16331_16771 = G__16870;
chunk__16333_16772 = G__16871;
count__16334_16773 = G__16872;
i__16335_16774 = G__16873;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16876 = arguments.length;
var i__5727__auto___16877 = (0);
while(true){
if((i__5727__auto___16877 < len__5726__auto___16876)){
args__5732__auto__.push((arguments[i__5727__auto___16877]));

var G__16878 = (i__5727__auto___16877 + (1));
i__5727__auto___16877 = G__16878;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16407){
var G__16408 = cljs.core.first(seq16407);
var seq16407__$1 = cljs.core.next(seq16407);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16408,seq16407__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
