goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17976 = (function (f,blockable,meta17977){
this.f = f;
this.blockable = blockable;
this.meta17977 = meta17977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17978,meta17977__$1){
var self__ = this;
var _17978__$1 = this;
return (new cljs.core.async.t_cljs$core$async17976(self__.f,self__.blockable,meta17977__$1));
}));

(cljs.core.async.t_cljs$core$async17976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17978){
var self__ = this;
var _17978__$1 = this;
return self__.meta17977;
}));

(cljs.core.async.t_cljs$core$async17976.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17976.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17976.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17976.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17977","meta17977",-1072471892,null)], null);
}));

(cljs.core.async.t_cljs$core$async17976.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17976");

(cljs.core.async.t_cljs$core$async17976.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17976");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17976.
 */
cljs.core.async.__GT_t_cljs$core$async17976 = (function cljs$core$async$__GT_t_cljs$core$async17976(f,blockable,meta17977){
return (new cljs.core.async.t_cljs$core$async17976(f,blockable,meta17977));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17973 = arguments.length;
switch (G__17973) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17976(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17999 = arguments.length;
switch (G__17999) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18003 = arguments.length;
switch (G__18003) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18012 = arguments.length;
switch (G__18012) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_20255 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20255) : fn1.call(null, val_20255));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_20255) : fn1.call(null, val_20255));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18015 = arguments.length;
switch (G__18015) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___20265 = n;
var x_20266 = (0);
while(true){
if((x_20266 < n__5593__auto___20265)){
(a[x_20266] = x_20266);

var G__20267 = (x_20266 + (1));
x_20266 = G__20267;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18020 = (function (flag,meta18021){
this.flag = flag;
this.meta18021 = meta18021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18022,meta18021__$1){
var self__ = this;
var _18022__$1 = this;
return (new cljs.core.async.t_cljs$core$async18020(self__.flag,meta18021__$1));
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18022){
var self__ = this;
var _18022__$1 = this;
return self__.meta18021;
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18020.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18021","meta18021",-348817320,null)], null);
}));

(cljs.core.async.t_cljs$core$async18020.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18020");

(cljs.core.async.t_cljs$core$async18020.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18020");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18020.
 */
cljs.core.async.__GT_t_cljs$core$async18020 = (function cljs$core$async$__GT_t_cljs$core$async18020(flag,meta18021){
return (new cljs.core.async.t_cljs$core$async18020(flag,meta18021));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18020(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18024 = (function (flag,cb,meta18025){
this.flag = flag;
this.cb = cb;
this.meta18025 = meta18025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18026,meta18025__$1){
var self__ = this;
var _18026__$1 = this;
return (new cljs.core.async.t_cljs$core$async18024(self__.flag,self__.cb,meta18025__$1));
}));

(cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18026){
var self__ = this;
var _18026__$1 = this;
return self__.meta18025;
}));

(cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18025","meta18025",1676186146,null)], null);
}));

(cljs.core.async.t_cljs$core$async18024.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18024");

(cljs.core.async.t_cljs$core$async18024.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18024");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18024.
 */
cljs.core.async.__GT_t_cljs$core$async18024 = (function cljs$core$async$__GT_t_cljs$core$async18024(flag,cb,meta18025){
return (new cljs.core.async.t_cljs$core$async18024(flag,cb,meta18025));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18024(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18034_SHARP_){
var G__18039 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18034_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18039) : fret.call(null, G__18039));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18035_SHARP_){
var G__18040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18035_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18040) : fret.call(null, G__18040));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20282 = (i + (1));
i = G__20282;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20283 = arguments.length;
var i__5727__auto___20284 = (0);
while(true){
if((i__5727__auto___20284 < len__5726__auto___20283)){
args__5732__auto__.push((arguments[i__5727__auto___20284]));

var G__20285 = (i__5727__auto___20284 + (1));
i__5727__auto___20284 = G__20285;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18074){
var map__18075 = p__18074;
var map__18075__$1 = cljs.core.__destructure_map(map__18075);
var opts = map__18075__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18068){
var G__18069 = cljs.core.first(seq18068);
var seq18068__$1 = cljs.core.next(seq18068);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18069,seq18068__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18110 = arguments.length;
switch (G__18110) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17907__auto___20296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18190){
var state_val_18192 = (state_18190[(1)]);
if((state_val_18192 === (7))){
var inst_18184 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18203_20297 = state_18190__$1;
(statearr_18203_20297[(2)] = inst_18184);

(statearr_18203_20297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (1))){
var state_18190__$1 = state_18190;
var statearr_18208_20299 = state_18190__$1;
(statearr_18208_20299[(2)] = null);

(statearr_18208_20299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (4))){
var inst_18162 = (state_18190[(7)]);
var inst_18162__$1 = (state_18190[(2)]);
var inst_18163 = (inst_18162__$1 == null);
var state_18190__$1 = (function (){var statearr_18213 = state_18190;
(statearr_18213[(7)] = inst_18162__$1);

return statearr_18213;
})();
if(cljs.core.truth_(inst_18163)){
var statearr_18214_20300 = state_18190__$1;
(statearr_18214_20300[(1)] = (5));

} else {
var statearr_18215_20301 = state_18190__$1;
(statearr_18215_20301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (13))){
var state_18190__$1 = state_18190;
var statearr_18216_20302 = state_18190__$1;
(statearr_18216_20302[(2)] = null);

(statearr_18216_20302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (6))){
var inst_18162 = (state_18190[(7)]);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18190__$1,(11),to,inst_18162);
} else {
if((state_val_18192 === (3))){
var inst_18187 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18190__$1,inst_18187);
} else {
if((state_val_18192 === (12))){
var state_18190__$1 = state_18190;
var statearr_18219_20303 = state_18190__$1;
(statearr_18219_20303[(2)] = null);

(statearr_18219_20303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (2))){
var state_18190__$1 = state_18190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18190__$1,(4),from);
} else {
if((state_val_18192 === (11))){
var inst_18177 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
if(cljs.core.truth_(inst_18177)){
var statearr_18222_20304 = state_18190__$1;
(statearr_18222_20304[(1)] = (12));

} else {
var statearr_18224_20305 = state_18190__$1;
(statearr_18224_20305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (9))){
var state_18190__$1 = state_18190;
var statearr_18226_20306 = state_18190__$1;
(statearr_18226_20306[(2)] = null);

(statearr_18226_20306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (5))){
var state_18190__$1 = state_18190;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18228_20309 = state_18190__$1;
(statearr_18228_20309[(1)] = (8));

} else {
var statearr_18229_20310 = state_18190__$1;
(statearr_18229_20310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (14))){
var inst_18182 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18230_20311 = state_18190__$1;
(statearr_18230_20311[(2)] = inst_18182);

(statearr_18230_20311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (10))){
var inst_18174 = (state_18190[(2)]);
var state_18190__$1 = state_18190;
var statearr_18231_20313 = state_18190__$1;
(statearr_18231_20313[(2)] = inst_18174);

(statearr_18231_20313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18192 === (8))){
var inst_18171 = cljs.core.async.close_BANG_(to);
var state_18190__$1 = state_18190;
var statearr_18232_20314 = state_18190__$1;
(statearr_18232_20314[(2)] = inst_18171);

(statearr_18232_20314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_18190){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18190);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18235){var ex__17762__auto__ = e18235;
var statearr_18236_20317 = state_18190;
(statearr_18236_20317[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18190[(4)]))){
var statearr_18239_20318 = state_18190;
(statearr_18239_20318[(1)] = cljs.core.first((state_18190[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20319 = state_18190;
state_18190 = G__20319;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_18190){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_18190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18240 = f__17908__auto__();
(statearr_18240[(6)] = c__17907__auto___20296);

return statearr_18240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18241){
var vec__18244 = p__18241;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18244,(1),null);
var job = vec__18244;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17907__auto___20322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18254){
var state_val_18255 = (state_18254[(1)]);
if((state_val_18255 === (1))){
var state_18254__$1 = state_18254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18254__$1,(2),res,v);
} else {
if((state_val_18255 === (2))){
var inst_18251 = (state_18254[(2)]);
var inst_18252 = cljs.core.async.close_BANG_(res);
var state_18254__$1 = (function (){var statearr_18264 = state_18254;
(statearr_18264[(7)] = inst_18251);

return statearr_18264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18254__$1,inst_18252);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0 = (function (){
var statearr_18265 = [null,null,null,null,null,null,null,null];
(statearr_18265[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__);

(statearr_18265[(1)] = (1));

return statearr_18265;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1 = (function (state_18254){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18254);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18267){var ex__17762__auto__ = e18267;
var statearr_18268_20324 = state_18254;
(statearr_18268_20324[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18254[(4)]))){
var statearr_18269_20325 = state_18254;
(statearr_18269_20325[(1)] = cljs.core.first((state_18254[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20326 = state_18254;
state_18254 = G__20326;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = function(state_18254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1.call(this,state_18254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18272 = f__17908__auto__();
(statearr_18272[(6)] = c__17907__auto___20322);

return statearr_18272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18275){
var vec__18276 = p__18275;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(1),null);
var job = vec__18276;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___20327 = n;
var __20328 = (0);
while(true){
if((__20328 < n__5593__auto___20327)){
var G__18281_20329 = type;
var G__18281_20330__$1 = (((G__18281_20329 instanceof cljs.core.Keyword))?G__18281_20329.fqn:null);
switch (G__18281_20330__$1) {
case "compute":
var c__17907__auto___20332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20328,c__17907__auto___20332,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async){
return (function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = ((function (__20328,c__17907__auto___20332,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async){
return (function (state_18295){
var state_val_18296 = (state_18295[(1)]);
if((state_val_18296 === (1))){
var state_18295__$1 = state_18295;
var statearr_18297_20333 = state_18295__$1;
(statearr_18297_20333[(2)] = null);

(statearr_18297_20333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (2))){
var state_18295__$1 = state_18295;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18295__$1,(4),jobs);
} else {
if((state_val_18296 === (3))){
var inst_18293 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18295__$1,inst_18293);
} else {
if((state_val_18296 === (4))){
var inst_18285 = (state_18295[(2)]);
var inst_18286 = process__$1(inst_18285);
var state_18295__$1 = state_18295;
if(cljs.core.truth_(inst_18286)){
var statearr_18302_20334 = state_18295__$1;
(statearr_18302_20334[(1)] = (5));

} else {
var statearr_18303_20335 = state_18295__$1;
(statearr_18303_20335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (5))){
var state_18295__$1 = state_18295;
var statearr_18308_20336 = state_18295__$1;
(statearr_18308_20336[(2)] = null);

(statearr_18308_20336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (6))){
var state_18295__$1 = state_18295;
var statearr_18313_20337 = state_18295__$1;
(statearr_18313_20337[(2)] = null);

(statearr_18313_20337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18296 === (7))){
var inst_18291 = (state_18295[(2)]);
var state_18295__$1 = state_18295;
var statearr_18318_20338 = state_18295__$1;
(statearr_18318_20338[(2)] = inst_18291);

(statearr_18318_20338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20328,c__17907__auto___20332,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async))
;
return ((function (__20328,switch__17758__auto__,c__17907__auto___20332,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0 = (function (){
var statearr_18328 = [null,null,null,null,null,null,null];
(statearr_18328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__);

(statearr_18328[(1)] = (1));

return statearr_18328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1 = (function (state_18295){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18295);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18329){var ex__17762__auto__ = e18329;
var statearr_18330_20339 = state_18295;
(statearr_18330_20339[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18295[(4)]))){
var statearr_18331_20340 = state_18295;
(statearr_18331_20340[(1)] = cljs.core.first((state_18295[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20341 = state_18295;
state_18295 = G__20341;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = function(state_18295){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1.call(this,state_18295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__;
})()
;})(__20328,switch__17758__auto__,c__17907__auto___20332,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async))
})();
var state__17909__auto__ = (function (){var statearr_18332 = f__17908__auto__();
(statearr_18332[(6)] = c__17907__auto___20332);

return statearr_18332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(__20328,c__17907__auto___20332,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async))
);


break;
case "async":
var c__17907__auto___20342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__20328,c__17907__auto___20342,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async){
return (function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = ((function (__20328,c__17907__auto___20342,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async){
return (function (state_18345){
var state_val_18346 = (state_18345[(1)]);
if((state_val_18346 === (1))){
var state_18345__$1 = state_18345;
var statearr_18348_20347 = state_18345__$1;
(statearr_18348_20347[(2)] = null);

(statearr_18348_20347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (2))){
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18345__$1,(4),jobs);
} else {
if((state_val_18346 === (3))){
var inst_18343 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18345__$1,inst_18343);
} else {
if((state_val_18346 === (4))){
var inst_18335 = (state_18345[(2)]);
var inst_18336 = async(inst_18335);
var state_18345__$1 = state_18345;
if(cljs.core.truth_(inst_18336)){
var statearr_18349_20348 = state_18345__$1;
(statearr_18349_20348[(1)] = (5));

} else {
var statearr_18350_20349 = state_18345__$1;
(statearr_18350_20349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (5))){
var state_18345__$1 = state_18345;
var statearr_18351_20350 = state_18345__$1;
(statearr_18351_20350[(2)] = null);

(statearr_18351_20350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (6))){
var state_18345__$1 = state_18345;
var statearr_18352_20352 = state_18345__$1;
(statearr_18352_20352[(2)] = null);

(statearr_18352_20352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18346 === (7))){
var inst_18341 = (state_18345[(2)]);
var state_18345__$1 = state_18345;
var statearr_18354_20354 = state_18345__$1;
(statearr_18354_20354[(2)] = inst_18341);

(statearr_18354_20354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__20328,c__17907__auto___20342,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async))
;
return ((function (__20328,switch__17758__auto__,c__17907__auto___20342,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0 = (function (){
var statearr_18357 = [null,null,null,null,null,null,null];
(statearr_18357[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__);

(statearr_18357[(1)] = (1));

return statearr_18357;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1 = (function (state_18345){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18345);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18358){var ex__17762__auto__ = e18358;
var statearr_18359_20355 = state_18345;
(statearr_18359_20355[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18345[(4)]))){
var statearr_18360_20356 = state_18345;
(statearr_18360_20356[(1)] = cljs.core.first((state_18345[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20357 = state_18345;
state_18345 = G__20357;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = function(state_18345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1.call(this,state_18345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__;
})()
;})(__20328,switch__17758__auto__,c__17907__auto___20342,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async))
})();
var state__17909__auto__ = (function (){var statearr_18361 = f__17908__auto__();
(statearr_18361[(6)] = c__17907__auto___20342);

return statearr_18361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
});})(__20328,c__17907__auto___20342,G__18281_20329,G__18281_20330__$1,n__5593__auto___20327,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18281_20330__$1)].join('')));

}

var G__20364 = (__20328 + (1));
__20328 = G__20364;
continue;
} else {
}
break;
}

var c__17907__auto___20365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18384){
var state_val_18385 = (state_18384[(1)]);
if((state_val_18385 === (7))){
var inst_18380 = (state_18384[(2)]);
var state_18384__$1 = state_18384;
var statearr_18407_20366 = state_18384__$1;
(statearr_18407_20366[(2)] = inst_18380);

(statearr_18407_20366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18385 === (1))){
var state_18384__$1 = state_18384;
var statearr_18408_20370 = state_18384__$1;
(statearr_18408_20370[(2)] = null);

(statearr_18408_20370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18385 === (4))){
var inst_18365 = (state_18384[(7)]);
var inst_18365__$1 = (state_18384[(2)]);
var inst_18366 = (inst_18365__$1 == null);
var state_18384__$1 = (function (){var statearr_18410 = state_18384;
(statearr_18410[(7)] = inst_18365__$1);

return statearr_18410;
})();
if(cljs.core.truth_(inst_18366)){
var statearr_18411_20371 = state_18384__$1;
(statearr_18411_20371[(1)] = (5));

} else {
var statearr_18412_20372 = state_18384__$1;
(statearr_18412_20372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18385 === (6))){
var inst_18370 = (state_18384[(8)]);
var inst_18365 = (state_18384[(7)]);
var inst_18370__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18372 = [inst_18365,inst_18370__$1];
var inst_18373 = (new cljs.core.PersistentVector(null,2,(5),inst_18371,inst_18372,null));
var state_18384__$1 = (function (){var statearr_18413 = state_18384;
(statearr_18413[(8)] = inst_18370__$1);

return statearr_18413;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18384__$1,(8),jobs,inst_18373);
} else {
if((state_val_18385 === (3))){
var inst_18382 = (state_18384[(2)]);
var state_18384__$1 = state_18384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18384__$1,inst_18382);
} else {
if((state_val_18385 === (2))){
var state_18384__$1 = state_18384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18384__$1,(4),from);
} else {
if((state_val_18385 === (9))){
var inst_18377 = (state_18384[(2)]);
var state_18384__$1 = (function (){var statearr_18414 = state_18384;
(statearr_18414[(9)] = inst_18377);

return statearr_18414;
})();
var statearr_18415_20379 = state_18384__$1;
(statearr_18415_20379[(2)] = null);

(statearr_18415_20379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18385 === (5))){
var inst_18368 = cljs.core.async.close_BANG_(jobs);
var state_18384__$1 = state_18384;
var statearr_18416_20380 = state_18384__$1;
(statearr_18416_20380[(2)] = inst_18368);

(statearr_18416_20380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18385 === (8))){
var inst_18370 = (state_18384[(8)]);
var inst_18375 = (state_18384[(2)]);
var state_18384__$1 = (function (){var statearr_18417 = state_18384;
(statearr_18417[(10)] = inst_18375);

return statearr_18417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18384__$1,(9),results,inst_18370);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0 = (function (){
var statearr_18418 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__);

(statearr_18418[(1)] = (1));

return statearr_18418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1 = (function (state_18384){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18384);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18420){var ex__17762__auto__ = e18420;
var statearr_18421_20381 = state_18384;
(statearr_18421_20381[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18384[(4)]))){
var statearr_18422_20382 = state_18384;
(statearr_18422_20382[(1)] = cljs.core.first((state_18384[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20384 = state_18384;
state_18384 = G__20384;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = function(state_18384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1.call(this,state_18384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18423 = f__17908__auto__();
(statearr_18423[(6)] = c__17907__auto___20365);

return statearr_18423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18462){
var state_val_18463 = (state_18462[(1)]);
if((state_val_18463 === (7))){
var inst_18458 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18465_20385 = state_18462__$1;
(statearr_18465_20385[(2)] = inst_18458);

(statearr_18465_20385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (20))){
var state_18462__$1 = state_18462;
var statearr_18466_20386 = state_18462__$1;
(statearr_18466_20386[(2)] = null);

(statearr_18466_20386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (1))){
var state_18462__$1 = state_18462;
var statearr_18468_20387 = state_18462__$1;
(statearr_18468_20387[(2)] = null);

(statearr_18468_20387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (4))){
var inst_18426 = (state_18462[(7)]);
var inst_18426__$1 = (state_18462[(2)]);
var inst_18427 = (inst_18426__$1 == null);
var state_18462__$1 = (function (){var statearr_18469 = state_18462;
(statearr_18469[(7)] = inst_18426__$1);

return statearr_18469;
})();
if(cljs.core.truth_(inst_18427)){
var statearr_18470_20394 = state_18462__$1;
(statearr_18470_20394[(1)] = (5));

} else {
var statearr_18471_20396 = state_18462__$1;
(statearr_18471_20396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (15))){
var inst_18440 = (state_18462[(8)]);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18462__$1,(18),to,inst_18440);
} else {
if((state_val_18463 === (21))){
var inst_18453 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18472_20398 = state_18462__$1;
(statearr_18472_20398[(2)] = inst_18453);

(statearr_18472_20398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (13))){
var inst_18455 = (state_18462[(2)]);
var state_18462__$1 = (function (){var statearr_18473 = state_18462;
(statearr_18473[(9)] = inst_18455);

return statearr_18473;
})();
var statearr_18475_20399 = state_18462__$1;
(statearr_18475_20399[(2)] = null);

(statearr_18475_20399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (6))){
var inst_18426 = (state_18462[(7)]);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18462__$1,(11),inst_18426);
} else {
if((state_val_18463 === (17))){
var inst_18448 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
if(cljs.core.truth_(inst_18448)){
var statearr_18476_20401 = state_18462__$1;
(statearr_18476_20401[(1)] = (19));

} else {
var statearr_18477_20403 = state_18462__$1;
(statearr_18477_20403[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (3))){
var inst_18460 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18462__$1,inst_18460);
} else {
if((state_val_18463 === (12))){
var inst_18437 = (state_18462[(10)]);
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18462__$1,(14),inst_18437);
} else {
if((state_val_18463 === (2))){
var state_18462__$1 = state_18462;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18462__$1,(4),results);
} else {
if((state_val_18463 === (19))){
var state_18462__$1 = state_18462;
var statearr_18478_20405 = state_18462__$1;
(statearr_18478_20405[(2)] = null);

(statearr_18478_20405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (11))){
var inst_18437 = (state_18462[(2)]);
var state_18462__$1 = (function (){var statearr_18479 = state_18462;
(statearr_18479[(10)] = inst_18437);

return statearr_18479;
})();
var statearr_18480_20412 = state_18462__$1;
(statearr_18480_20412[(2)] = null);

(statearr_18480_20412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (9))){
var state_18462__$1 = state_18462;
var statearr_18482_20413 = state_18462__$1;
(statearr_18482_20413[(2)] = null);

(statearr_18482_20413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (5))){
var state_18462__$1 = state_18462;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18483_20414 = state_18462__$1;
(statearr_18483_20414[(1)] = (8));

} else {
var statearr_18484_20415 = state_18462__$1;
(statearr_18484_20415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (14))){
var inst_18442 = (state_18462[(11)]);
var inst_18440 = (state_18462[(8)]);
var inst_18440__$1 = (state_18462[(2)]);
var inst_18441 = (inst_18440__$1 == null);
var inst_18442__$1 = cljs.core.not(inst_18441);
var state_18462__$1 = (function (){var statearr_18485 = state_18462;
(statearr_18485[(11)] = inst_18442__$1);

(statearr_18485[(8)] = inst_18440__$1);

return statearr_18485;
})();
if(inst_18442__$1){
var statearr_18486_20416 = state_18462__$1;
(statearr_18486_20416[(1)] = (15));

} else {
var statearr_18487_20417 = state_18462__$1;
(statearr_18487_20417[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (16))){
var inst_18442 = (state_18462[(11)]);
var state_18462__$1 = state_18462;
var statearr_18488_20418 = state_18462__$1;
(statearr_18488_20418[(2)] = inst_18442);

(statearr_18488_20418[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (10))){
var inst_18434 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18489_20419 = state_18462__$1;
(statearr_18489_20419[(2)] = inst_18434);

(statearr_18489_20419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (18))){
var inst_18445 = (state_18462[(2)]);
var state_18462__$1 = state_18462;
var statearr_18491_20420 = state_18462__$1;
(statearr_18491_20420[(2)] = inst_18445);

(statearr_18491_20420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18463 === (8))){
var inst_18430 = cljs.core.async.close_BANG_(to);
var state_18462__$1 = state_18462;
var statearr_18492_20421 = state_18462__$1;
(statearr_18492_20421[(2)] = inst_18430);

(statearr_18492_20421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0 = (function (){
var statearr_18493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__);

(statearr_18493[(1)] = (1));

return statearr_18493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1 = (function (state_18462){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18462);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18494){var ex__17762__auto__ = e18494;
var statearr_18495_20423 = state_18462;
(statearr_18495_20423[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18462[(4)]))){
var statearr_18496_20424 = state_18462;
(statearr_18496_20424[(1)] = cljs.core.first((state_18462[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20425 = state_18462;
state_18462 = G__20425;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__ = function(state_18462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1.call(this,state_18462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17759__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18497 = f__17908__auto__();
(statearr_18497[(6)] = c__17907__auto__);

return statearr_18497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));

return c__17907__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18500 = arguments.length;
switch (G__18500) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18502 = arguments.length;
switch (G__18502) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18505 = arguments.length;
switch (G__18505) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17907__auto___20447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18533){
var state_val_18534 = (state_18533[(1)]);
if((state_val_18534 === (7))){
var inst_18528 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18535_20448 = state_18533__$1;
(statearr_18535_20448[(2)] = inst_18528);

(statearr_18535_20448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (1))){
var state_18533__$1 = state_18533;
var statearr_18536_20449 = state_18533__$1;
(statearr_18536_20449[(2)] = null);

(statearr_18536_20449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (4))){
var inst_18508 = (state_18533[(7)]);
var inst_18508__$1 = (state_18533[(2)]);
var inst_18509 = (inst_18508__$1 == null);
var state_18533__$1 = (function (){var statearr_18537 = state_18533;
(statearr_18537[(7)] = inst_18508__$1);

return statearr_18537;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18538_20450 = state_18533__$1;
(statearr_18538_20450[(1)] = (5));

} else {
var statearr_18539_20451 = state_18533__$1;
(statearr_18539_20451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (13))){
var state_18533__$1 = state_18533;
var statearr_18540_20452 = state_18533__$1;
(statearr_18540_20452[(2)] = null);

(statearr_18540_20452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (6))){
var inst_18508 = (state_18533[(7)]);
var inst_18515 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18508) : p.call(null, inst_18508));
var state_18533__$1 = state_18533;
if(cljs.core.truth_(inst_18515)){
var statearr_18541_20453 = state_18533__$1;
(statearr_18541_20453[(1)] = (9));

} else {
var statearr_18542_20454 = state_18533__$1;
(statearr_18542_20454[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (3))){
var inst_18530 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18533__$1,inst_18530);
} else {
if((state_val_18534 === (12))){
var state_18533__$1 = state_18533;
var statearr_18544_20455 = state_18533__$1;
(statearr_18544_20455[(2)] = null);

(statearr_18544_20455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (2))){
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18533__$1,(4),ch);
} else {
if((state_val_18534 === (11))){
var inst_18508 = (state_18533[(7)]);
var inst_18519 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18533__$1,(8),inst_18519,inst_18508);
} else {
if((state_val_18534 === (9))){
var state_18533__$1 = state_18533;
var statearr_18545_20457 = state_18533__$1;
(statearr_18545_20457[(2)] = tc);

(statearr_18545_20457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (5))){
var inst_18511 = cljs.core.async.close_BANG_(tc);
var inst_18512 = cljs.core.async.close_BANG_(fc);
var state_18533__$1 = (function (){var statearr_18546 = state_18533;
(statearr_18546[(8)] = inst_18511);

return statearr_18546;
})();
var statearr_18547_20458 = state_18533__$1;
(statearr_18547_20458[(2)] = inst_18512);

(statearr_18547_20458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (14))){
var inst_18526 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
var statearr_18548_20460 = state_18533__$1;
(statearr_18548_20460[(2)] = inst_18526);

(statearr_18548_20460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (10))){
var state_18533__$1 = state_18533;
var statearr_18549_20461 = state_18533__$1;
(statearr_18549_20461[(2)] = fc);

(statearr_18549_20461[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18534 === (8))){
var inst_18521 = (state_18533[(2)]);
var state_18533__$1 = state_18533;
if(cljs.core.truth_(inst_18521)){
var statearr_18551_20462 = state_18533__$1;
(statearr_18551_20462[(1)] = (12));

} else {
var statearr_18552_20463 = state_18533__$1;
(statearr_18552_20463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_18553 = [null,null,null,null,null,null,null,null,null];
(statearr_18553[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_18553[(1)] = (1));

return statearr_18553;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_18533){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18533);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18554){var ex__17762__auto__ = e18554;
var statearr_18555_20473 = state_18533;
(statearr_18555_20473[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18533[(4)]))){
var statearr_18556_20474 = state_18533;
(statearr_18556_20474[(1)] = cljs.core.first((state_18533[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20475 = state_18533;
state_18533 = G__20475;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_18533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_18533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18557 = f__17908__auto__();
(statearr_18557[(6)] = c__17907__auto___20447);

return statearr_18557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18581){
var state_val_18582 = (state_18581[(1)]);
if((state_val_18582 === (7))){
var inst_18577 = (state_18581[(2)]);
var state_18581__$1 = state_18581;
var statearr_18583_20476 = state_18581__$1;
(statearr_18583_20476[(2)] = inst_18577);

(statearr_18583_20476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (1))){
var inst_18559 = init;
var inst_18560 = inst_18559;
var state_18581__$1 = (function (){var statearr_18584 = state_18581;
(statearr_18584[(7)] = inst_18560);

return statearr_18584;
})();
var statearr_18586_20477 = state_18581__$1;
(statearr_18586_20477[(2)] = null);

(statearr_18586_20477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (4))){
var inst_18563 = (state_18581[(8)]);
var inst_18563__$1 = (state_18581[(2)]);
var inst_18564 = (inst_18563__$1 == null);
var state_18581__$1 = (function (){var statearr_18587 = state_18581;
(statearr_18587[(8)] = inst_18563__$1);

return statearr_18587;
})();
if(cljs.core.truth_(inst_18564)){
var statearr_18588_20478 = state_18581__$1;
(statearr_18588_20478[(1)] = (5));

} else {
var statearr_18589_20479 = state_18581__$1;
(statearr_18589_20479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (6))){
var inst_18567 = (state_18581[(9)]);
var inst_18563 = (state_18581[(8)]);
var inst_18560 = (state_18581[(7)]);
var inst_18567__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18560,inst_18563) : f.call(null, inst_18560,inst_18563));
var inst_18568 = cljs.core.reduced_QMARK_(inst_18567__$1);
var state_18581__$1 = (function (){var statearr_18590 = state_18581;
(statearr_18590[(9)] = inst_18567__$1);

return statearr_18590;
})();
if(inst_18568){
var statearr_18591_20480 = state_18581__$1;
(statearr_18591_20480[(1)] = (8));

} else {
var statearr_18593_20481 = state_18581__$1;
(statearr_18593_20481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (3))){
var inst_18579 = (state_18581[(2)]);
var state_18581__$1 = state_18581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18581__$1,inst_18579);
} else {
if((state_val_18582 === (2))){
var state_18581__$1 = state_18581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18581__$1,(4),ch);
} else {
if((state_val_18582 === (9))){
var inst_18567 = (state_18581[(9)]);
var inst_18560 = inst_18567;
var state_18581__$1 = (function (){var statearr_18594 = state_18581;
(statearr_18594[(7)] = inst_18560);

return statearr_18594;
})();
var statearr_18595_20486 = state_18581__$1;
(statearr_18595_20486[(2)] = null);

(statearr_18595_20486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (5))){
var inst_18560 = (state_18581[(7)]);
var state_18581__$1 = state_18581;
var statearr_18597_20490 = state_18581__$1;
(statearr_18597_20490[(2)] = inst_18560);

(statearr_18597_20490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (10))){
var inst_18574 = (state_18581[(2)]);
var state_18581__$1 = state_18581;
var statearr_18598_20491 = state_18581__$1;
(statearr_18598_20491[(2)] = inst_18574);

(statearr_18598_20491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18582 === (8))){
var inst_18567 = (state_18581[(9)]);
var inst_18570 = cljs.core.deref(inst_18567);
var state_18581__$1 = state_18581;
var statearr_18599_20499 = state_18581__$1;
(statearr_18599_20499[(2)] = inst_18570);

(statearr_18599_20499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17759__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17759__auto____0 = (function (){
var statearr_18600 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18600[(0)] = cljs$core$async$reduce_$_state_machine__17759__auto__);

(statearr_18600[(1)] = (1));

return statearr_18600;
});
var cljs$core$async$reduce_$_state_machine__17759__auto____1 = (function (state_18581){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18581);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18601){var ex__17762__auto__ = e18601;
var statearr_18602_20503 = state_18581;
(statearr_18602_20503[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18581[(4)]))){
var statearr_18603_20504 = state_18581;
(statearr_18603_20504[(1)] = cljs.core.first((state_18581[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20505 = state_18581;
state_18581 = G__20505;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17759__auto__ = function(state_18581){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17759__auto____1.call(this,state_18581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17759__auto____0;
cljs$core$async$reduce_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17759__auto____1;
return cljs$core$async$reduce_$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18605 = f__17908__auto__();
(statearr_18605[(6)] = c__17907__auto__);

return statearr_18605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));

return c__17907__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18611){
var state_val_18612 = (state_18611[(1)]);
if((state_val_18612 === (1))){
var inst_18606 = cljs.core.async.reduce(f__$1,init,ch);
var state_18611__$1 = state_18611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18611__$1,(2),inst_18606);
} else {
if((state_val_18612 === (2))){
var inst_18608 = (state_18611[(2)]);
var inst_18609 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18608) : f__$1.call(null, inst_18608));
var state_18611__$1 = state_18611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18611__$1,inst_18609);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17759__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17759__auto____0 = (function (){
var statearr_18614 = [null,null,null,null,null,null,null];
(statearr_18614[(0)] = cljs$core$async$transduce_$_state_machine__17759__auto__);

(statearr_18614[(1)] = (1));

return statearr_18614;
});
var cljs$core$async$transduce_$_state_machine__17759__auto____1 = (function (state_18611){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18611);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18615){var ex__17762__auto__ = e18615;
var statearr_18616_20512 = state_18611;
(statearr_18616_20512[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18611[(4)]))){
var statearr_18617_20513 = state_18611;
(statearr_18617_20513[(1)] = cljs.core.first((state_18611[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20517 = state_18611;
state_18611 = G__20517;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17759__auto__ = function(state_18611){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17759__auto____1.call(this,state_18611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17759__auto____0;
cljs$core$async$transduce_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17759__auto____1;
return cljs$core$async$transduce_$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18618 = f__17908__auto__();
(statearr_18618[(6)] = c__17907__auto__);

return statearr_18618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));

return c__17907__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18621 = arguments.length;
switch (G__18621) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18647){
var state_val_18648 = (state_18647[(1)]);
if((state_val_18648 === (7))){
var inst_18629 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
var statearr_18649_20519 = state_18647__$1;
(statearr_18649_20519[(2)] = inst_18629);

(statearr_18649_20519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (1))){
var inst_18622 = cljs.core.seq(coll);
var inst_18623 = inst_18622;
var state_18647__$1 = (function (){var statearr_18650 = state_18647;
(statearr_18650[(7)] = inst_18623);

return statearr_18650;
})();
var statearr_18651_20520 = state_18647__$1;
(statearr_18651_20520[(2)] = null);

(statearr_18651_20520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (4))){
var inst_18623 = (state_18647[(7)]);
var inst_18627 = cljs.core.first(inst_18623);
var state_18647__$1 = state_18647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18647__$1,(7),ch,inst_18627);
} else {
if((state_val_18648 === (13))){
var inst_18641 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
var statearr_18653_20521 = state_18647__$1;
(statearr_18653_20521[(2)] = inst_18641);

(statearr_18653_20521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (6))){
var inst_18632 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
if(cljs.core.truth_(inst_18632)){
var statearr_18654_20522 = state_18647__$1;
(statearr_18654_20522[(1)] = (8));

} else {
var statearr_18655_20523 = state_18647__$1;
(statearr_18655_20523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (3))){
var inst_18645 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18647__$1,inst_18645);
} else {
if((state_val_18648 === (12))){
var state_18647__$1 = state_18647;
var statearr_18656_20524 = state_18647__$1;
(statearr_18656_20524[(2)] = null);

(statearr_18656_20524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (2))){
var inst_18623 = (state_18647[(7)]);
var state_18647__$1 = state_18647;
if(cljs.core.truth_(inst_18623)){
var statearr_18657_20525 = state_18647__$1;
(statearr_18657_20525[(1)] = (4));

} else {
var statearr_18658_20526 = state_18647__$1;
(statearr_18658_20526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (11))){
var inst_18638 = cljs.core.async.close_BANG_(ch);
var state_18647__$1 = state_18647;
var statearr_18659_20527 = state_18647__$1;
(statearr_18659_20527[(2)] = inst_18638);

(statearr_18659_20527[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (9))){
var state_18647__$1 = state_18647;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18661_20528 = state_18647__$1;
(statearr_18661_20528[(1)] = (11));

} else {
var statearr_18662_20529 = state_18647__$1;
(statearr_18662_20529[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (5))){
var inst_18623 = (state_18647[(7)]);
var state_18647__$1 = state_18647;
var statearr_18663_20530 = state_18647__$1;
(statearr_18663_20530[(2)] = inst_18623);

(statearr_18663_20530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (10))){
var inst_18643 = (state_18647[(2)]);
var state_18647__$1 = state_18647;
var statearr_18664_20531 = state_18647__$1;
(statearr_18664_20531[(2)] = inst_18643);

(statearr_18664_20531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18648 === (8))){
var inst_18623 = (state_18647[(7)]);
var inst_18634 = cljs.core.next(inst_18623);
var inst_18623__$1 = inst_18634;
var state_18647__$1 = (function (){var statearr_18665 = state_18647;
(statearr_18665[(7)] = inst_18623__$1);

return statearr_18665;
})();
var statearr_18666_20532 = state_18647__$1;
(statearr_18666_20532[(2)] = null);

(statearr_18666_20532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_18667 = [null,null,null,null,null,null,null,null];
(statearr_18667[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_18667[(1)] = (1));

return statearr_18667;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_18647){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18647);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e18669){var ex__17762__auto__ = e18669;
var statearr_18670_20533 = state_18647;
(statearr_18670_20533[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18647[(4)]))){
var statearr_18671_20534 = state_18647;
(statearr_18671_20534[(1)] = cljs.core.first((state_18647[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20535 = state_18647;
state_18647 = G__20535;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_18647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_18647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_18672 = f__17908__auto__();
(statearr_18672[(6)] = c__17907__auto__);

return statearr_18672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));

return c__17907__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18675 = arguments.length;
switch (G__18675) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20539 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20539(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20541 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20541(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20543 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20543(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20544 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20544(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18681 = (function (ch,cs,meta18682){
this.ch = ch;
this.cs = cs;
this.meta18682 = meta18682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18683,meta18682__$1){
var self__ = this;
var _18683__$1 = this;
return (new cljs.core.async.t_cljs$core$async18681(self__.ch,self__.cs,meta18682__$1));
}));

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18683){
var self__ = this;
var _18683__$1 = this;
return self__.meta18682;
}));

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18681.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18682","meta18682",899936264,null)], null);
}));

(cljs.core.async.t_cljs$core$async18681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18681");

(cljs.core.async.t_cljs$core$async18681.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async18681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18681.
 */
cljs.core.async.__GT_t_cljs$core$async18681 = (function cljs$core$async$__GT_t_cljs$core$async18681(ch,cs,meta18682){
return (new cljs.core.async.t_cljs$core$async18681(ch,cs,meta18682));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async18681(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17907__auto___20545 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_18820){
var state_val_18821 = (state_18820[(1)]);
if((state_val_18821 === (7))){
var inst_18816 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18822_20546 = state_18820__$1;
(statearr_18822_20546[(2)] = inst_18816);

(statearr_18822_20546[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (20))){
var inst_18719 = (state_18820[(7)]);
var inst_18731 = cljs.core.first(inst_18719);
var inst_18732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18731,(0),null);
var inst_18733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18731,(1),null);
var state_18820__$1 = (function (){var statearr_18826 = state_18820;
(statearr_18826[(8)] = inst_18732);

return statearr_18826;
})();
if(cljs.core.truth_(inst_18733)){
var statearr_18827_20552 = state_18820__$1;
(statearr_18827_20552[(1)] = (22));

} else {
var statearr_18828_20553 = state_18820__$1;
(statearr_18828_20553[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (27))){
var inst_18688 = (state_18820[(9)]);
var inst_18763 = (state_18820[(10)]);
var inst_18770 = (state_18820[(11)]);
var inst_18765 = (state_18820[(12)]);
var inst_18770__$1 = cljs.core._nth(inst_18763,inst_18765);
var inst_18771 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18770__$1,inst_18688,done);
var state_18820__$1 = (function (){var statearr_18832 = state_18820;
(statearr_18832[(11)] = inst_18770__$1);

return statearr_18832;
})();
if(cljs.core.truth_(inst_18771)){
var statearr_18833_20557 = state_18820__$1;
(statearr_18833_20557[(1)] = (30));

} else {
var statearr_18834_20558 = state_18820__$1;
(statearr_18834_20558[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (1))){
var state_18820__$1 = state_18820;
var statearr_18838_20559 = state_18820__$1;
(statearr_18838_20559[(2)] = null);

(statearr_18838_20559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (24))){
var inst_18719 = (state_18820[(7)]);
var inst_18738 = (state_18820[(2)]);
var inst_18739 = cljs.core.next(inst_18719);
var inst_18697 = inst_18739;
var inst_18698 = null;
var inst_18699 = (0);
var inst_18700 = (0);
var state_18820__$1 = (function (){var statearr_18839 = state_18820;
(statearr_18839[(13)] = inst_18697);

(statearr_18839[(14)] = inst_18698);

(statearr_18839[(15)] = inst_18699);

(statearr_18839[(16)] = inst_18738);

(statearr_18839[(17)] = inst_18700);

return statearr_18839;
})();
var statearr_18840_20560 = state_18820__$1;
(statearr_18840_20560[(2)] = null);

(statearr_18840_20560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (39))){
var state_18820__$1 = state_18820;
var statearr_18844_20561 = state_18820__$1;
(statearr_18844_20561[(2)] = null);

(statearr_18844_20561[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (4))){
var inst_18688 = (state_18820[(9)]);
var inst_18688__$1 = (state_18820[(2)]);
var inst_18689 = (inst_18688__$1 == null);
var state_18820__$1 = (function (){var statearr_18846 = state_18820;
(statearr_18846[(9)] = inst_18688__$1);

return statearr_18846;
})();
if(cljs.core.truth_(inst_18689)){
var statearr_18849_20562 = state_18820__$1;
(statearr_18849_20562[(1)] = (5));

} else {
var statearr_18851_20563 = state_18820__$1;
(statearr_18851_20563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (15))){
var inst_18697 = (state_18820[(13)]);
var inst_18698 = (state_18820[(14)]);
var inst_18699 = (state_18820[(15)]);
var inst_18700 = (state_18820[(17)]);
var inst_18715 = (state_18820[(2)]);
var inst_18716 = (inst_18700 + (1));
var tmp18841 = inst_18697;
var tmp18842 = inst_18698;
var tmp18843 = inst_18699;
var inst_18697__$1 = tmp18841;
var inst_18698__$1 = tmp18842;
var inst_18699__$1 = tmp18843;
var inst_18700__$1 = inst_18716;
var state_18820__$1 = (function (){var statearr_18853 = state_18820;
(statearr_18853[(13)] = inst_18697__$1);

(statearr_18853[(14)] = inst_18698__$1);

(statearr_18853[(18)] = inst_18715);

(statearr_18853[(15)] = inst_18699__$1);

(statearr_18853[(17)] = inst_18700__$1);

return statearr_18853;
})();
var statearr_18856_20567 = state_18820__$1;
(statearr_18856_20567[(2)] = null);

(statearr_18856_20567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (21))){
var inst_18742 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18861_20568 = state_18820__$1;
(statearr_18861_20568[(2)] = inst_18742);

(statearr_18861_20568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (31))){
var inst_18770 = (state_18820[(11)]);
var inst_18774 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_18770);
var state_18820__$1 = state_18820;
var statearr_18866_20572 = state_18820__$1;
(statearr_18866_20572[(2)] = inst_18774);

(statearr_18866_20572[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (32))){
var inst_18763 = (state_18820[(10)]);
var inst_18764 = (state_18820[(19)]);
var inst_18765 = (state_18820[(12)]);
var inst_18762 = (state_18820[(20)]);
var inst_18776 = (state_18820[(2)]);
var inst_18777 = (inst_18765 + (1));
var tmp18858 = inst_18763;
var tmp18859 = inst_18764;
var tmp18860 = inst_18762;
var inst_18762__$1 = tmp18860;
var inst_18763__$1 = tmp18858;
var inst_18764__$1 = tmp18859;
var inst_18765__$1 = inst_18777;
var state_18820__$1 = (function (){var statearr_18868 = state_18820;
(statearr_18868[(10)] = inst_18763__$1);

(statearr_18868[(19)] = inst_18764__$1);

(statearr_18868[(21)] = inst_18776);

(statearr_18868[(12)] = inst_18765__$1);

(statearr_18868[(20)] = inst_18762__$1);

return statearr_18868;
})();
var statearr_18892_20573 = state_18820__$1;
(statearr_18892_20573[(2)] = null);

(statearr_18892_20573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (40))){
var inst_18789 = (state_18820[(22)]);
var inst_18793 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_18789);
var state_18820__$1 = state_18820;
var statearr_18893_20574 = state_18820__$1;
(statearr_18893_20574[(2)] = inst_18793);

(statearr_18893_20574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (33))){
var inst_18780 = (state_18820[(23)]);
var inst_18782 = cljs.core.chunked_seq_QMARK_(inst_18780);
var state_18820__$1 = state_18820;
if(inst_18782){
var statearr_18895_20575 = state_18820__$1;
(statearr_18895_20575[(1)] = (36));

} else {
var statearr_18896_20576 = state_18820__$1;
(statearr_18896_20576[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (13))){
var inst_18709 = (state_18820[(24)]);
var inst_18712 = cljs.core.async.close_BANG_(inst_18709);
var state_18820__$1 = state_18820;
var statearr_18900_20577 = state_18820__$1;
(statearr_18900_20577[(2)] = inst_18712);

(statearr_18900_20577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (22))){
var inst_18732 = (state_18820[(8)]);
var inst_18735 = cljs.core.async.close_BANG_(inst_18732);
var state_18820__$1 = state_18820;
var statearr_18902_20581 = state_18820__$1;
(statearr_18902_20581[(2)] = inst_18735);

(statearr_18902_20581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (36))){
var inst_18780 = (state_18820[(23)]);
var inst_18784 = cljs.core.chunk_first(inst_18780);
var inst_18785 = cljs.core.chunk_rest(inst_18780);
var inst_18786 = cljs.core.count(inst_18784);
var inst_18762 = inst_18785;
var inst_18763 = inst_18784;
var inst_18764 = inst_18786;
var inst_18765 = (0);
var state_18820__$1 = (function (){var statearr_18906 = state_18820;
(statearr_18906[(10)] = inst_18763);

(statearr_18906[(19)] = inst_18764);

(statearr_18906[(12)] = inst_18765);

(statearr_18906[(20)] = inst_18762);

return statearr_18906;
})();
var statearr_18908_20582 = state_18820__$1;
(statearr_18908_20582[(2)] = null);

(statearr_18908_20582[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (41))){
var inst_18780 = (state_18820[(23)]);
var inst_18795 = (state_18820[(2)]);
var inst_18796 = cljs.core.next(inst_18780);
var inst_18762 = inst_18796;
var inst_18763 = null;
var inst_18764 = (0);
var inst_18765 = (0);
var state_18820__$1 = (function (){var statearr_18912 = state_18820;
(statearr_18912[(25)] = inst_18795);

(statearr_18912[(10)] = inst_18763);

(statearr_18912[(19)] = inst_18764);

(statearr_18912[(12)] = inst_18765);

(statearr_18912[(20)] = inst_18762);

return statearr_18912;
})();
var statearr_18917_20583 = state_18820__$1;
(statearr_18917_20583[(2)] = null);

(statearr_18917_20583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (43))){
var state_18820__$1 = state_18820;
var statearr_18918_20587 = state_18820__$1;
(statearr_18918_20587[(2)] = null);

(statearr_18918_20587[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (29))){
var inst_18804 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18920_20588 = state_18820__$1;
(statearr_18920_20588[(2)] = inst_18804);

(statearr_18920_20588[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (44))){
var inst_18813 = (state_18820[(2)]);
var state_18820__$1 = (function (){var statearr_18922 = state_18820;
(statearr_18922[(26)] = inst_18813);

return statearr_18922;
})();
var statearr_18925_20589 = state_18820__$1;
(statearr_18925_20589[(2)] = null);

(statearr_18925_20589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (6))){
var inst_18753 = (state_18820[(27)]);
var inst_18752 = cljs.core.deref(cs);
var inst_18753__$1 = cljs.core.keys(inst_18752);
var inst_18755 = cljs.core.count(inst_18753__$1);
var inst_18756 = cljs.core.reset_BANG_(dctr,inst_18755);
var inst_18761 = cljs.core.seq(inst_18753__$1);
var inst_18762 = inst_18761;
var inst_18763 = null;
var inst_18764 = (0);
var inst_18765 = (0);
var state_18820__$1 = (function (){var statearr_18927 = state_18820;
(statearr_18927[(10)] = inst_18763);

(statearr_18927[(19)] = inst_18764);

(statearr_18927[(28)] = inst_18756);

(statearr_18927[(12)] = inst_18765);

(statearr_18927[(20)] = inst_18762);

(statearr_18927[(27)] = inst_18753__$1);

return statearr_18927;
})();
var statearr_18931_20593 = state_18820__$1;
(statearr_18931_20593[(2)] = null);

(statearr_18931_20593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (28))){
var inst_18780 = (state_18820[(23)]);
var inst_18762 = (state_18820[(20)]);
var inst_18780__$1 = cljs.core.seq(inst_18762);
var state_18820__$1 = (function (){var statearr_18933 = state_18820;
(statearr_18933[(23)] = inst_18780__$1);

return statearr_18933;
})();
if(inst_18780__$1){
var statearr_18934_20594 = state_18820__$1;
(statearr_18934_20594[(1)] = (33));

} else {
var statearr_18935_20595 = state_18820__$1;
(statearr_18935_20595[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (25))){
var inst_18764 = (state_18820[(19)]);
var inst_18765 = (state_18820[(12)]);
var inst_18767 = (inst_18765 < inst_18764);
var inst_18768 = inst_18767;
var state_18820__$1 = state_18820;
if(cljs.core.truth_(inst_18768)){
var statearr_18939_20596 = state_18820__$1;
(statearr_18939_20596[(1)] = (27));

} else {
var statearr_18940_20597 = state_18820__$1;
(statearr_18940_20597[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (34))){
var state_18820__$1 = state_18820;
var statearr_18942_20599 = state_18820__$1;
(statearr_18942_20599[(2)] = null);

(statearr_18942_20599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (17))){
var state_18820__$1 = state_18820;
var statearr_18945_20603 = state_18820__$1;
(statearr_18945_20603[(2)] = null);

(statearr_18945_20603[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (3))){
var inst_18818 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18820__$1,inst_18818);
} else {
if((state_val_18821 === (12))){
var inst_18747 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18948_20604 = state_18820__$1;
(statearr_18948_20604[(2)] = inst_18747);

(statearr_18948_20604[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (2))){
var state_18820__$1 = state_18820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18820__$1,(4),ch);
} else {
if((state_val_18821 === (23))){
var state_18820__$1 = state_18820;
var statearr_18952_20605 = state_18820__$1;
(statearr_18952_20605[(2)] = null);

(statearr_18952_20605[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (35))){
var inst_18802 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18954_20607 = state_18820__$1;
(statearr_18954_20607[(2)] = inst_18802);

(statearr_18954_20607[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (19))){
var inst_18719 = (state_18820[(7)]);
var inst_18723 = cljs.core.chunk_first(inst_18719);
var inst_18724 = cljs.core.chunk_rest(inst_18719);
var inst_18725 = cljs.core.count(inst_18723);
var inst_18697 = inst_18724;
var inst_18698 = inst_18723;
var inst_18699 = inst_18725;
var inst_18700 = (0);
var state_18820__$1 = (function (){var statearr_18958 = state_18820;
(statearr_18958[(13)] = inst_18697);

(statearr_18958[(14)] = inst_18698);

(statearr_18958[(15)] = inst_18699);

(statearr_18958[(17)] = inst_18700);

return statearr_18958;
})();
var statearr_18959_20608 = state_18820__$1;
(statearr_18959_20608[(2)] = null);

(statearr_18959_20608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (11))){
var inst_18719 = (state_18820[(7)]);
var inst_18697 = (state_18820[(13)]);
var inst_18719__$1 = cljs.core.seq(inst_18697);
var state_18820__$1 = (function (){var statearr_18963 = state_18820;
(statearr_18963[(7)] = inst_18719__$1);

return statearr_18963;
})();
if(inst_18719__$1){
var statearr_18965_20609 = state_18820__$1;
(statearr_18965_20609[(1)] = (16));

} else {
var statearr_18966_20614 = state_18820__$1;
(statearr_18966_20614[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (9))){
var inst_18750 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18968_20615 = state_18820__$1;
(statearr_18968_20615[(2)] = inst_18750);

(statearr_18968_20615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (5))){
var inst_18695 = cljs.core.deref(cs);
var inst_18696 = cljs.core.seq(inst_18695);
var inst_18697 = inst_18696;
var inst_18698 = null;
var inst_18699 = (0);
var inst_18700 = (0);
var state_18820__$1 = (function (){var statearr_18972 = state_18820;
(statearr_18972[(13)] = inst_18697);

(statearr_18972[(14)] = inst_18698);

(statearr_18972[(15)] = inst_18699);

(statearr_18972[(17)] = inst_18700);

return statearr_18972;
})();
var statearr_18973_20620 = state_18820__$1;
(statearr_18973_20620[(2)] = null);

(statearr_18973_20620[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (14))){
var state_18820__$1 = state_18820;
var statearr_18975_20621 = state_18820__$1;
(statearr_18975_20621[(2)] = null);

(statearr_18975_20621[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (45))){
var inst_18810 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18979_20622 = state_18820__$1;
(statearr_18979_20622[(2)] = inst_18810);

(statearr_18979_20622[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (26))){
var inst_18753 = (state_18820[(27)]);
var inst_18806 = (state_18820[(2)]);
var inst_18807 = cljs.core.seq(inst_18753);
var state_18820__$1 = (function (){var statearr_18982 = state_18820;
(statearr_18982[(29)] = inst_18806);

return statearr_18982;
})();
if(inst_18807){
var statearr_18983_20623 = state_18820__$1;
(statearr_18983_20623[(1)] = (42));

} else {
var statearr_18984_20624 = state_18820__$1;
(statearr_18984_20624[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (16))){
var inst_18719 = (state_18820[(7)]);
var inst_18721 = cljs.core.chunked_seq_QMARK_(inst_18719);
var state_18820__$1 = state_18820;
if(inst_18721){
var statearr_18988_20625 = state_18820__$1;
(statearr_18988_20625[(1)] = (19));

} else {
var statearr_18989_20626 = state_18820__$1;
(statearr_18989_20626[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (38))){
var inst_18799 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18991_20629 = state_18820__$1;
(statearr_18991_20629[(2)] = inst_18799);

(statearr_18991_20629[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (30))){
var state_18820__$1 = state_18820;
var statearr_18995_20630 = state_18820__$1;
(statearr_18995_20630[(2)] = null);

(statearr_18995_20630[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (10))){
var inst_18698 = (state_18820[(14)]);
var inst_18700 = (state_18820[(17)]);
var inst_18708 = cljs.core._nth(inst_18698,inst_18700);
var inst_18709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18708,(0),null);
var inst_18710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18708,(1),null);
var state_18820__$1 = (function (){var statearr_18997 = state_18820;
(statearr_18997[(24)] = inst_18709);

return statearr_18997;
})();
if(cljs.core.truth_(inst_18710)){
var statearr_18999_20631 = state_18820__$1;
(statearr_18999_20631[(1)] = (13));

} else {
var statearr_19002_20632 = state_18820__$1;
(statearr_19002_20632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (18))){
var inst_18745 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_19003_20636 = state_18820__$1;
(statearr_19003_20636[(2)] = inst_18745);

(statearr_19003_20636[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (42))){
var state_18820__$1 = state_18820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18820__$1,(45),dchan);
} else {
if((state_val_18821 === (37))){
var inst_18688 = (state_18820[(9)]);
var inst_18789 = (state_18820[(22)]);
var inst_18780 = (state_18820[(23)]);
var inst_18789__$1 = cljs.core.first(inst_18780);
var inst_18790 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18789__$1,inst_18688,done);
var state_18820__$1 = (function (){var statearr_19009 = state_18820;
(statearr_19009[(22)] = inst_18789__$1);

return statearr_19009;
})();
if(cljs.core.truth_(inst_18790)){
var statearr_19010_20637 = state_18820__$1;
(statearr_19010_20637[(1)] = (39));

} else {
var statearr_19012_20638 = state_18820__$1;
(statearr_19012_20638[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (8))){
var inst_18699 = (state_18820[(15)]);
var inst_18700 = (state_18820[(17)]);
var inst_18702 = (inst_18700 < inst_18699);
var inst_18703 = inst_18702;
var state_18820__$1 = state_18820;
if(cljs.core.truth_(inst_18703)){
var statearr_19015_20639 = state_18820__$1;
(statearr_19015_20639[(1)] = (10));

} else {
var statearr_19017_20640 = state_18820__$1;
(statearr_19017_20640[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17759__auto__ = null;
var cljs$core$async$mult_$_state_machine__17759__auto____0 = (function (){
var statearr_19023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19023[(0)] = cljs$core$async$mult_$_state_machine__17759__auto__);

(statearr_19023[(1)] = (1));

return statearr_19023;
});
var cljs$core$async$mult_$_state_machine__17759__auto____1 = (function (state_18820){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_18820);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19025){var ex__17762__auto__ = e19025;
var statearr_19026_20641 = state_18820;
(statearr_19026_20641[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_18820[(4)]))){
var statearr_19027_20642 = state_18820;
(statearr_19027_20642[(1)] = cljs.core.first((state_18820[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20643 = state_18820;
state_18820 = G__20643;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17759__auto__ = function(state_18820){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17759__auto____1.call(this,state_18820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17759__auto____0;
cljs$core$async$mult_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17759__auto____1;
return cljs$core$async$mult_$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19032 = f__17908__auto__();
(statearr_19032[(6)] = c__17907__auto___20545);

return statearr_19032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19038 = arguments.length;
switch (G__19038) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20645 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20645(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20648 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20648(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20649 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20649(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20650 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20650(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20651 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20651(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___20652 = arguments.length;
var i__5727__auto___20653 = (0);
while(true){
if((i__5727__auto___20653 < len__5726__auto___20652)){
args__5732__auto__.push((arguments[i__5727__auto___20653]));

var G__20655 = (i__5727__auto___20653 + (1));
i__5727__auto___20653 = G__20655;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19094){
var map__19095 = p__19094;
var map__19095__$1 = cljs.core.__destructure_map(map__19095);
var opts = map__19095__$1;
var statearr_19096_20656 = state;
(statearr_19096_20656[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19098_20657 = state;
(statearr_19098_20657[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_19099_20658 = state;
(statearr_19099_20658[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19090){
var G__19091 = cljs.core.first(seq19090);
var seq19090__$1 = cljs.core.next(seq19090);
var G__19092 = cljs.core.first(seq19090__$1);
var seq19090__$2 = cljs.core.next(seq19090__$1);
var G__19093 = cljs.core.first(seq19090__$2);
var seq19090__$3 = cljs.core.next(seq19090__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19091,G__19092,G__19093,seq19090__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19100 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19101){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19101 = meta19101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19102,meta19101__$1){
var self__ = this;
var _19102__$1 = this;
return (new cljs.core.async.t_cljs$core$async19100(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19101__$1));
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19102){
var self__ = this;
var _19102__$1 = this;
return self__.meta19101;
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19100.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async19100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19101","meta19101",-1129374761,null)], null);
}));

(cljs.core.async.t_cljs$core$async19100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19100");

(cljs.core.async.t_cljs$core$async19100.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19100.
 */
cljs.core.async.__GT_t_cljs$core$async19100 = (function cljs$core$async$__GT_t_cljs$core$async19100(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19101){
return (new cljs.core.async.t_cljs$core$async19100(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19101));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19100(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__17907__auto___20677 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19172){
var state_val_19173 = (state_19172[(1)]);
if((state_val_19173 === (7))){
var inst_19132 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
if(cljs.core.truth_(inst_19132)){
var statearr_19174_20678 = state_19172__$1;
(statearr_19174_20678[(1)] = (8));

} else {
var statearr_19175_20679 = state_19172__$1;
(statearr_19175_20679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (20))){
var inst_19125 = (state_19172[(7)]);
var state_19172__$1 = state_19172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19172__$1,(23),out,inst_19125);
} else {
if((state_val_19173 === (1))){
var inst_19108 = calc_state();
var inst_19109 = cljs.core.__destructure_map(inst_19108);
var inst_19110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19109,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19109,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19109,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19113 = inst_19108;
var state_19172__$1 = (function (){var statearr_19176 = state_19172;
(statearr_19176[(8)] = inst_19113);

(statearr_19176[(9)] = inst_19110);

(statearr_19176[(10)] = inst_19111);

(statearr_19176[(11)] = inst_19112);

return statearr_19176;
})();
var statearr_19177_20680 = state_19172__$1;
(statearr_19177_20680[(2)] = null);

(statearr_19177_20680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (24))){
var inst_19116 = (state_19172[(12)]);
var inst_19113 = inst_19116;
var state_19172__$1 = (function (){var statearr_19178 = state_19172;
(statearr_19178[(8)] = inst_19113);

return statearr_19178;
})();
var statearr_19179_20681 = state_19172__$1;
(statearr_19179_20681[(2)] = null);

(statearr_19179_20681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (4))){
var inst_19127 = (state_19172[(13)]);
var inst_19125 = (state_19172[(7)]);
var inst_19124 = (state_19172[(2)]);
var inst_19125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19124,(0),null);
var inst_19126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19124,(1),null);
var inst_19127__$1 = (inst_19125__$1 == null);
var state_19172__$1 = (function (){var statearr_19180 = state_19172;
(statearr_19180[(14)] = inst_19126);

(statearr_19180[(13)] = inst_19127__$1);

(statearr_19180[(7)] = inst_19125__$1);

return statearr_19180;
})();
if(cljs.core.truth_(inst_19127__$1)){
var statearr_19181_20685 = state_19172__$1;
(statearr_19181_20685[(1)] = (5));

} else {
var statearr_19182_20686 = state_19172__$1;
(statearr_19182_20686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (15))){
var inst_19146 = (state_19172[(15)]);
var inst_19117 = (state_19172[(16)]);
var inst_19146__$1 = cljs.core.empty_QMARK_(inst_19117);
var state_19172__$1 = (function (){var statearr_19183 = state_19172;
(statearr_19183[(15)] = inst_19146__$1);

return statearr_19183;
})();
if(inst_19146__$1){
var statearr_19184_20687 = state_19172__$1;
(statearr_19184_20687[(1)] = (17));

} else {
var statearr_19185_20688 = state_19172__$1;
(statearr_19185_20688[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (21))){
var inst_19116 = (state_19172[(12)]);
var inst_19113 = inst_19116;
var state_19172__$1 = (function (){var statearr_19187 = state_19172;
(statearr_19187[(8)] = inst_19113);

return statearr_19187;
})();
var statearr_19189_20689 = state_19172__$1;
(statearr_19189_20689[(2)] = null);

(statearr_19189_20689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (13))){
var inst_19139 = (state_19172[(2)]);
var inst_19140 = calc_state();
var inst_19113 = inst_19140;
var state_19172__$1 = (function (){var statearr_19190 = state_19172;
(statearr_19190[(17)] = inst_19139);

(statearr_19190[(8)] = inst_19113);

return statearr_19190;
})();
var statearr_19191_20690 = state_19172__$1;
(statearr_19191_20690[(2)] = null);

(statearr_19191_20690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (22))){
var inst_19166 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
var statearr_19192_20692 = state_19172__$1;
(statearr_19192_20692[(2)] = inst_19166);

(statearr_19192_20692[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (6))){
var inst_19126 = (state_19172[(14)]);
var inst_19130 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19126,change);
var state_19172__$1 = state_19172;
var statearr_19193_20696 = state_19172__$1;
(statearr_19193_20696[(2)] = inst_19130);

(statearr_19193_20696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (25))){
var state_19172__$1 = state_19172;
var statearr_19194_20697 = state_19172__$1;
(statearr_19194_20697[(2)] = null);

(statearr_19194_20697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (17))){
var inst_19118 = (state_19172[(18)]);
var inst_19126 = (state_19172[(14)]);
var inst_19148 = (inst_19118.cljs$core$IFn$_invoke$arity$1 ? inst_19118.cljs$core$IFn$_invoke$arity$1(inst_19126) : inst_19118.call(null, inst_19126));
var inst_19149 = cljs.core.not(inst_19148);
var state_19172__$1 = state_19172;
var statearr_19195_20698 = state_19172__$1;
(statearr_19195_20698[(2)] = inst_19149);

(statearr_19195_20698[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (3))){
var inst_19170 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19172__$1,inst_19170);
} else {
if((state_val_19173 === (12))){
var state_19172__$1 = state_19172;
var statearr_19196_20699 = state_19172__$1;
(statearr_19196_20699[(2)] = null);

(statearr_19196_20699[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (2))){
var inst_19113 = (state_19172[(8)]);
var inst_19116 = (state_19172[(12)]);
var inst_19116__$1 = cljs.core.__destructure_map(inst_19113);
var inst_19117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19116__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19118 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19116__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19116__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19172__$1 = (function (){var statearr_19201 = state_19172;
(statearr_19201[(18)] = inst_19118);

(statearr_19201[(12)] = inst_19116__$1);

(statearr_19201[(16)] = inst_19117);

return statearr_19201;
})();
return cljs.core.async.ioc_alts_BANG_(state_19172__$1,(4),inst_19119);
} else {
if((state_val_19173 === (23))){
var inst_19157 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
if(cljs.core.truth_(inst_19157)){
var statearr_19206_20700 = state_19172__$1;
(statearr_19206_20700[(1)] = (24));

} else {
var statearr_19207_20703 = state_19172__$1;
(statearr_19207_20703[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (19))){
var inst_19152 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
var statearr_19209_20705 = state_19172__$1;
(statearr_19209_20705[(2)] = inst_19152);

(statearr_19209_20705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (11))){
var inst_19126 = (state_19172[(14)]);
var inst_19136 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19126);
var state_19172__$1 = state_19172;
var statearr_19210_20707 = state_19172__$1;
(statearr_19210_20707[(2)] = inst_19136);

(statearr_19210_20707[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (9))){
var inst_19143 = (state_19172[(19)]);
var inst_19126 = (state_19172[(14)]);
var inst_19117 = (state_19172[(16)]);
var inst_19143__$1 = (inst_19117.cljs$core$IFn$_invoke$arity$1 ? inst_19117.cljs$core$IFn$_invoke$arity$1(inst_19126) : inst_19117.call(null, inst_19126));
var state_19172__$1 = (function (){var statearr_19211 = state_19172;
(statearr_19211[(19)] = inst_19143__$1);

return statearr_19211;
})();
if(cljs.core.truth_(inst_19143__$1)){
var statearr_19212_20708 = state_19172__$1;
(statearr_19212_20708[(1)] = (14));

} else {
var statearr_19213_20710 = state_19172__$1;
(statearr_19213_20710[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (5))){
var inst_19127 = (state_19172[(13)]);
var state_19172__$1 = state_19172;
var statearr_19214_20711 = state_19172__$1;
(statearr_19214_20711[(2)] = inst_19127);

(statearr_19214_20711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (14))){
var inst_19143 = (state_19172[(19)]);
var state_19172__$1 = state_19172;
var statearr_19215_20712 = state_19172__$1;
(statearr_19215_20712[(2)] = inst_19143);

(statearr_19215_20712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (26))){
var inst_19162 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
var statearr_19216_20713 = state_19172__$1;
(statearr_19216_20713[(2)] = inst_19162);

(statearr_19216_20713[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (16))){
var inst_19154 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
if(cljs.core.truth_(inst_19154)){
var statearr_19224_20714 = state_19172__$1;
(statearr_19224_20714[(1)] = (20));

} else {
var statearr_19225_20715 = state_19172__$1;
(statearr_19225_20715[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (10))){
var inst_19168 = (state_19172[(2)]);
var state_19172__$1 = state_19172;
var statearr_19227_20716 = state_19172__$1;
(statearr_19227_20716[(2)] = inst_19168);

(statearr_19227_20716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (18))){
var inst_19146 = (state_19172[(15)]);
var state_19172__$1 = state_19172;
var statearr_19228_20717 = state_19172__$1;
(statearr_19228_20717[(2)] = inst_19146);

(statearr_19228_20717[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19173 === (8))){
var inst_19125 = (state_19172[(7)]);
var inst_19134 = (inst_19125 == null);
var state_19172__$1 = state_19172;
if(cljs.core.truth_(inst_19134)){
var statearr_19229_20718 = state_19172__$1;
(statearr_19229_20718[(1)] = (11));

} else {
var statearr_19230_20719 = state_19172__$1;
(statearr_19230_20719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17759__auto__ = null;
var cljs$core$async$mix_$_state_machine__17759__auto____0 = (function (){
var statearr_19235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19235[(0)] = cljs$core$async$mix_$_state_machine__17759__auto__);

(statearr_19235[(1)] = (1));

return statearr_19235;
});
var cljs$core$async$mix_$_state_machine__17759__auto____1 = (function (state_19172){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19172);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19239){var ex__17762__auto__ = e19239;
var statearr_19240_20720 = state_19172;
(statearr_19240_20720[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19172[(4)]))){
var statearr_19242_20721 = state_19172;
(statearr_19242_20721[(1)] = cljs.core.first((state_19172[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20722 = state_19172;
state_19172 = G__20722;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17759__auto__ = function(state_19172){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17759__auto____1.call(this,state_19172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17759__auto____0;
cljs$core$async$mix_$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17759__auto____1;
return cljs$core$async$mix_$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19243 = f__17908__auto__();
(statearr_19243[(6)] = c__17907__auto___20677);

return statearr_19243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20723 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20723(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20728 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20728(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20733 = (function() {
var G__20734 = null;
var G__20734__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20734__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20734 = function(p,v){
switch(arguments.length){
case 1:
return G__20734__1.call(this,p);
case 2:
return G__20734__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20734.cljs$core$IFn$_invoke$arity$1 = G__20734__1;
G__20734.cljs$core$IFn$_invoke$arity$2 = G__20734__2;
return G__20734;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__19271 = arguments.length;
switch (G__19271) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20733(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20733(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19296 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta19297){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta19297 = meta19297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19298,meta19297__$1){
var self__ = this;
var _19298__$1 = this;
return (new cljs.core.async.t_cljs$core$async19296(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta19297__$1));
}));

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19298){
var self__ = this;
var _19298__$1 = this;
return self__.meta19297;
}));

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async19296.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async19296.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta19297","meta19297",-19104985,null)], null);
}));

(cljs.core.async.t_cljs$core$async19296.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19296");

(cljs.core.async.t_cljs$core$async19296.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19296");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19296.
 */
cljs.core.async.__GT_t_cljs$core$async19296 = (function cljs$core$async$__GT_t_cljs$core$async19296(ch,topic_fn,buf_fn,mults,ensure_mult,meta19297){
return (new cljs.core.async.t_cljs$core$async19296(ch,topic_fn,buf_fn,mults,ensure_mult,meta19297));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__19289 = arguments.length;
switch (G__19289) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__19284_SHARP_){
if(cljs.core.truth_((p1__19284_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__19284_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__19284_SHARP_.call(null, topic)))){
return p1__19284_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19284_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async19296(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__17907__auto___20749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19390){
var state_val_19391 = (state_19390[(1)]);
if((state_val_19391 === (7))){
var inst_19386 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19397_20750 = state_19390__$1;
(statearr_19397_20750[(2)] = inst_19386);

(statearr_19397_20750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (20))){
var state_19390__$1 = state_19390;
var statearr_19398_20751 = state_19390__$1;
(statearr_19398_20751[(2)] = null);

(statearr_19398_20751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (1))){
var state_19390__$1 = state_19390;
var statearr_19399_20752 = state_19390__$1;
(statearr_19399_20752[(2)] = null);

(statearr_19399_20752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (24))){
var inst_19369 = (state_19390[(7)]);
var inst_19378 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_19369);
var state_19390__$1 = state_19390;
var statearr_19400_20753 = state_19390__$1;
(statearr_19400_20753[(2)] = inst_19378);

(statearr_19400_20753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (4))){
var inst_19317 = (state_19390[(8)]);
var inst_19317__$1 = (state_19390[(2)]);
var inst_19318 = (inst_19317__$1 == null);
var state_19390__$1 = (function (){var statearr_19401 = state_19390;
(statearr_19401[(8)] = inst_19317__$1);

return statearr_19401;
})();
if(cljs.core.truth_(inst_19318)){
var statearr_19402_20754 = state_19390__$1;
(statearr_19402_20754[(1)] = (5));

} else {
var statearr_19403_20755 = state_19390__$1;
(statearr_19403_20755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (15))){
var inst_19363 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19405_20758 = state_19390__$1;
(statearr_19405_20758[(2)] = inst_19363);

(statearr_19405_20758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (21))){
var inst_19383 = (state_19390[(2)]);
var state_19390__$1 = (function (){var statearr_19407 = state_19390;
(statearr_19407[(9)] = inst_19383);

return statearr_19407;
})();
var statearr_19408_20759 = state_19390__$1;
(statearr_19408_20759[(2)] = null);

(statearr_19408_20759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (13))){
var inst_19345 = (state_19390[(10)]);
var inst_19347 = cljs.core.chunked_seq_QMARK_(inst_19345);
var state_19390__$1 = state_19390;
if(inst_19347){
var statearr_19409_20760 = state_19390__$1;
(statearr_19409_20760[(1)] = (16));

} else {
var statearr_19410_20761 = state_19390__$1;
(statearr_19410_20761[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (22))){
var inst_19375 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
if(cljs.core.truth_(inst_19375)){
var statearr_19411_20762 = state_19390__$1;
(statearr_19411_20762[(1)] = (23));

} else {
var statearr_19412_20763 = state_19390__$1;
(statearr_19412_20763[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (6))){
var inst_19371 = (state_19390[(11)]);
var inst_19317 = (state_19390[(8)]);
var inst_19369 = (state_19390[(7)]);
var inst_19369__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_19317) : topic_fn.call(null, inst_19317));
var inst_19370 = cljs.core.deref(mults);
var inst_19371__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19370,inst_19369__$1);
var state_19390__$1 = (function (){var statearr_19413 = state_19390;
(statearr_19413[(11)] = inst_19371__$1);

(statearr_19413[(7)] = inst_19369__$1);

return statearr_19413;
})();
if(cljs.core.truth_(inst_19371__$1)){
var statearr_19414_20766 = state_19390__$1;
(statearr_19414_20766[(1)] = (19));

} else {
var statearr_19415_20767 = state_19390__$1;
(statearr_19415_20767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (25))){
var inst_19380 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19416_20768 = state_19390__$1;
(statearr_19416_20768[(2)] = inst_19380);

(statearr_19416_20768[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (17))){
var inst_19345 = (state_19390[(10)]);
var inst_19354 = cljs.core.first(inst_19345);
var inst_19355 = cljs.core.async.muxch_STAR_(inst_19354);
var inst_19356 = cljs.core.async.close_BANG_(inst_19355);
var inst_19357 = cljs.core.next(inst_19345);
var inst_19327 = inst_19357;
var inst_19328 = null;
var inst_19329 = (0);
var inst_19330 = (0);
var state_19390__$1 = (function (){var statearr_19417 = state_19390;
(statearr_19417[(12)] = inst_19329);

(statearr_19417[(13)] = inst_19330);

(statearr_19417[(14)] = inst_19328);

(statearr_19417[(15)] = inst_19356);

(statearr_19417[(16)] = inst_19327);

return statearr_19417;
})();
var statearr_19418_20772 = state_19390__$1;
(statearr_19418_20772[(2)] = null);

(statearr_19418_20772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (3))){
var inst_19388 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19390__$1,inst_19388);
} else {
if((state_val_19391 === (12))){
var inst_19365 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19419_20773 = state_19390__$1;
(statearr_19419_20773[(2)] = inst_19365);

(statearr_19419_20773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (2))){
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19390__$1,(4),ch);
} else {
if((state_val_19391 === (23))){
var state_19390__$1 = state_19390;
var statearr_19420_20774 = state_19390__$1;
(statearr_19420_20774[(2)] = null);

(statearr_19420_20774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (19))){
var inst_19371 = (state_19390[(11)]);
var inst_19317 = (state_19390[(8)]);
var inst_19373 = cljs.core.async.muxch_STAR_(inst_19371);
var state_19390__$1 = state_19390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19390__$1,(22),inst_19373,inst_19317);
} else {
if((state_val_19391 === (11))){
var inst_19345 = (state_19390[(10)]);
var inst_19327 = (state_19390[(16)]);
var inst_19345__$1 = cljs.core.seq(inst_19327);
var state_19390__$1 = (function (){var statearr_19421 = state_19390;
(statearr_19421[(10)] = inst_19345__$1);

return statearr_19421;
})();
if(inst_19345__$1){
var statearr_19422_20782 = state_19390__$1;
(statearr_19422_20782[(1)] = (13));

} else {
var statearr_19423_20783 = state_19390__$1;
(statearr_19423_20783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (9))){
var inst_19367 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19424_20785 = state_19390__$1;
(statearr_19424_20785[(2)] = inst_19367);

(statearr_19424_20785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (5))){
var inst_19324 = cljs.core.deref(mults);
var inst_19325 = cljs.core.vals(inst_19324);
var inst_19326 = cljs.core.seq(inst_19325);
var inst_19327 = inst_19326;
var inst_19328 = null;
var inst_19329 = (0);
var inst_19330 = (0);
var state_19390__$1 = (function (){var statearr_19425 = state_19390;
(statearr_19425[(12)] = inst_19329);

(statearr_19425[(13)] = inst_19330);

(statearr_19425[(14)] = inst_19328);

(statearr_19425[(16)] = inst_19327);

return statearr_19425;
})();
var statearr_19426_20791 = state_19390__$1;
(statearr_19426_20791[(2)] = null);

(statearr_19426_20791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (14))){
var state_19390__$1 = state_19390;
var statearr_19430_20796 = state_19390__$1;
(statearr_19430_20796[(2)] = null);

(statearr_19430_20796[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (16))){
var inst_19345 = (state_19390[(10)]);
var inst_19349 = cljs.core.chunk_first(inst_19345);
var inst_19350 = cljs.core.chunk_rest(inst_19345);
var inst_19351 = cljs.core.count(inst_19349);
var inst_19327 = inst_19350;
var inst_19328 = inst_19349;
var inst_19329 = inst_19351;
var inst_19330 = (0);
var state_19390__$1 = (function (){var statearr_19431 = state_19390;
(statearr_19431[(12)] = inst_19329);

(statearr_19431[(13)] = inst_19330);

(statearr_19431[(14)] = inst_19328);

(statearr_19431[(16)] = inst_19327);

return statearr_19431;
})();
var statearr_19432_20802 = state_19390__$1;
(statearr_19432_20802[(2)] = null);

(statearr_19432_20802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (10))){
var inst_19329 = (state_19390[(12)]);
var inst_19330 = (state_19390[(13)]);
var inst_19328 = (state_19390[(14)]);
var inst_19327 = (state_19390[(16)]);
var inst_19338 = cljs.core._nth(inst_19328,inst_19330);
var inst_19339 = cljs.core.async.muxch_STAR_(inst_19338);
var inst_19340 = cljs.core.async.close_BANG_(inst_19339);
var inst_19341 = (inst_19330 + (1));
var tmp19427 = inst_19329;
var tmp19428 = inst_19328;
var tmp19429 = inst_19327;
var inst_19327__$1 = tmp19429;
var inst_19328__$1 = tmp19428;
var inst_19329__$1 = tmp19427;
var inst_19330__$1 = inst_19341;
var state_19390__$1 = (function (){var statearr_19433 = state_19390;
(statearr_19433[(12)] = inst_19329__$1);

(statearr_19433[(13)] = inst_19330__$1);

(statearr_19433[(17)] = inst_19340);

(statearr_19433[(14)] = inst_19328__$1);

(statearr_19433[(16)] = inst_19327__$1);

return statearr_19433;
})();
var statearr_19434_20815 = state_19390__$1;
(statearr_19434_20815[(2)] = null);

(statearr_19434_20815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (18))){
var inst_19360 = (state_19390[(2)]);
var state_19390__$1 = state_19390;
var statearr_19435_20821 = state_19390__$1;
(statearr_19435_20821[(2)] = inst_19360);

(statearr_19435_20821[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19391 === (8))){
var inst_19329 = (state_19390[(12)]);
var inst_19330 = (state_19390[(13)]);
var inst_19332 = (inst_19330 < inst_19329);
var inst_19334 = inst_19332;
var state_19390__$1 = state_19390;
if(cljs.core.truth_(inst_19334)){
var statearr_19436_20826 = state_19390__$1;
(statearr_19436_20826[(1)] = (10));

} else {
var statearr_19437_20827 = state_19390__$1;
(statearr_19437_20827[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_19438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19438[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_19438[(1)] = (1));

return statearr_19438;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_19390){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19390);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19439){var ex__17762__auto__ = e19439;
var statearr_19441_20836 = state_19390;
(statearr_19441_20836[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19390[(4)]))){
var statearr_19442_20840 = state_19390;
(statearr_19442_20840[(1)] = cljs.core.first((state_19390[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20841 = state_19390;
state_19390 = G__20841;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_19390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_19390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19444 = f__17908__auto__();
(statearr_19444[(6)] = c__17907__auto___20749);

return statearr_19444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19446 = arguments.length;
switch (G__19446) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19452 = arguments.length;
switch (G__19452) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19454 = arguments.length;
switch (G__19454) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17907__auto___20872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19503){
var state_val_19504 = (state_19503[(1)]);
if((state_val_19504 === (7))){
var state_19503__$1 = state_19503;
var statearr_19506_20873 = state_19503__$1;
(statearr_19506_20873[(2)] = null);

(statearr_19506_20873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (1))){
var state_19503__$1 = state_19503;
var statearr_19507_20874 = state_19503__$1;
(statearr_19507_20874[(2)] = null);

(statearr_19507_20874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (4))){
var inst_19457 = (state_19503[(7)]);
var inst_19458 = (state_19503[(8)]);
var inst_19460 = (inst_19458 < inst_19457);
var state_19503__$1 = state_19503;
if(cljs.core.truth_(inst_19460)){
var statearr_19508_20875 = state_19503__$1;
(statearr_19508_20875[(1)] = (6));

} else {
var statearr_19510_20876 = state_19503__$1;
(statearr_19510_20876[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (15))){
var inst_19486 = (state_19503[(9)]);
var inst_19494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19486);
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19503__$1,(17),out,inst_19494);
} else {
if((state_val_19504 === (13))){
var inst_19486 = (state_19503[(9)]);
var inst_19486__$1 = (state_19503[(2)]);
var inst_19490 = cljs.core.some(cljs.core.nil_QMARK_,inst_19486__$1);
var state_19503__$1 = (function (){var statearr_19512 = state_19503;
(statearr_19512[(9)] = inst_19486__$1);

return statearr_19512;
})();
if(cljs.core.truth_(inst_19490)){
var statearr_19514_20884 = state_19503__$1;
(statearr_19514_20884[(1)] = (14));

} else {
var statearr_19516_20885 = state_19503__$1;
(statearr_19516_20885[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (6))){
var state_19503__$1 = state_19503;
var statearr_19517_20886 = state_19503__$1;
(statearr_19517_20886[(2)] = null);

(statearr_19517_20886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (17))){
var inst_19496 = (state_19503[(2)]);
var state_19503__$1 = (function (){var statearr_19522 = state_19503;
(statearr_19522[(10)] = inst_19496);

return statearr_19522;
})();
var statearr_19523_20891 = state_19503__$1;
(statearr_19523_20891[(2)] = null);

(statearr_19523_20891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (3))){
var inst_19501 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19503__$1,inst_19501);
} else {
if((state_val_19504 === (12))){
var _ = (function (){var statearr_19524 = state_19503;
(statearr_19524[(4)] = cljs.core.rest((state_19503[(4)])));

return statearr_19524;
})();
var state_19503__$1 = state_19503;
var ex19521 = (state_19503__$1[(2)]);
var statearr_19525_20906 = state_19503__$1;
(statearr_19525_20906[(5)] = ex19521);


if((ex19521 instanceof Object)){
var statearr_19526_20907 = state_19503__$1;
(statearr_19526_20907[(1)] = (11));

(statearr_19526_20907[(5)] = null);

} else {
throw ex19521;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (2))){
var inst_19456 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19457 = cnt;
var inst_19458 = (0);
var state_19503__$1 = (function (){var statearr_19546 = state_19503;
(statearr_19546[(11)] = inst_19456);

(statearr_19546[(7)] = inst_19457);

(statearr_19546[(8)] = inst_19458);

return statearr_19546;
})();
var statearr_19547_20912 = state_19503__$1;
(statearr_19547_20912[(2)] = null);

(statearr_19547_20912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (11))){
var inst_19464 = (state_19503[(2)]);
var inst_19465 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19503__$1 = (function (){var statearr_19548 = state_19503;
(statearr_19548[(12)] = inst_19464);

return statearr_19548;
})();
var statearr_19549_20924 = state_19503__$1;
(statearr_19549_20924[(2)] = inst_19465);

(statearr_19549_20924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (9))){
var inst_19458 = (state_19503[(8)]);
var _ = (function (){var statearr_19550 = state_19503;
(statearr_19550[(4)] = cljs.core.cons((12),(state_19503[(4)])));

return statearr_19550;
})();
var inst_19471 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19458) : chs__$1.call(null, inst_19458));
var inst_19472 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19458) : done.call(null, inst_19458));
var inst_19473 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19471,inst_19472);
var ___$1 = (function (){var statearr_19551 = state_19503;
(statearr_19551[(4)] = cljs.core.rest((state_19503[(4)])));

return statearr_19551;
})();
var state_19503__$1 = state_19503;
var statearr_19556_20934 = state_19503__$1;
(statearr_19556_20934[(2)] = inst_19473);

(statearr_19556_20934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (5))){
var inst_19483 = (state_19503[(2)]);
var state_19503__$1 = (function (){var statearr_19560 = state_19503;
(statearr_19560[(13)] = inst_19483);

return statearr_19560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19503__$1,(13),dchan);
} else {
if((state_val_19504 === (14))){
var inst_19492 = cljs.core.async.close_BANG_(out);
var state_19503__$1 = state_19503;
var statearr_19564_20939 = state_19503__$1;
(statearr_19564_20939[(2)] = inst_19492);

(statearr_19564_20939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (16))){
var inst_19499 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
var statearr_19565_20943 = state_19503__$1;
(statearr_19565_20943[(2)] = inst_19499);

(statearr_19565_20943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (10))){
var inst_19458 = (state_19503[(8)]);
var inst_19476 = (state_19503[(2)]);
var inst_19477 = (inst_19458 + (1));
var inst_19458__$1 = inst_19477;
var state_19503__$1 = (function (){var statearr_19569 = state_19503;
(statearr_19569[(14)] = inst_19476);

(statearr_19569[(8)] = inst_19458__$1);

return statearr_19569;
})();
var statearr_19570_20967 = state_19503__$1;
(statearr_19570_20967[(2)] = null);

(statearr_19570_20967[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19504 === (8))){
var inst_19481 = (state_19503[(2)]);
var state_19503__$1 = state_19503;
var statearr_19571_20972 = state_19503__$1;
(statearr_19571_20972[(2)] = inst_19481);

(statearr_19571_20972[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_19572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19572[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_19572[(1)] = (1));

return statearr_19572;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_19503){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19503);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19573){var ex__17762__auto__ = e19573;
var statearr_19574_20982 = state_19503;
(statearr_19574_20982[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19503[(4)]))){
var statearr_19575_20983 = state_19503;
(statearr_19575_20983[(1)] = cljs.core.first((state_19503[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20986 = state_19503;
state_19503 = G__20986;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_19503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_19503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19576 = f__17908__auto__();
(statearr_19576[(6)] = c__17907__auto___20872);

return statearr_19576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19583 = arguments.length;
switch (G__19583) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___20994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19619){
var state_val_19620 = (state_19619[(1)]);
if((state_val_19620 === (7))){
var inst_19594 = (state_19619[(7)]);
var inst_19595 = (state_19619[(8)]);
var inst_19594__$1 = (state_19619[(2)]);
var inst_19595__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19594__$1,(0),null);
var inst_19596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19594__$1,(1),null);
var inst_19597 = (inst_19595__$1 == null);
var state_19619__$1 = (function (){var statearr_19624 = state_19619;
(statearr_19624[(7)] = inst_19594__$1);

(statearr_19624[(8)] = inst_19595__$1);

(statearr_19624[(9)] = inst_19596);

return statearr_19624;
})();
if(cljs.core.truth_(inst_19597)){
var statearr_19626_21001 = state_19619__$1;
(statearr_19626_21001[(1)] = (8));

} else {
var statearr_19627_21002 = state_19619__$1;
(statearr_19627_21002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (1))){
var inst_19584 = cljs.core.vec(chs);
var inst_19585 = inst_19584;
var state_19619__$1 = (function (){var statearr_19628 = state_19619;
(statearr_19628[(10)] = inst_19585);

return statearr_19628;
})();
var statearr_19629_21004 = state_19619__$1;
(statearr_19629_21004[(2)] = null);

(statearr_19629_21004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (4))){
var inst_19585 = (state_19619[(10)]);
var state_19619__$1 = state_19619;
return cljs.core.async.ioc_alts_BANG_(state_19619__$1,(7),inst_19585);
} else {
if((state_val_19620 === (6))){
var inst_19615 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19630_21006 = state_19619__$1;
(statearr_19630_21006[(2)] = inst_19615);

(statearr_19630_21006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (3))){
var inst_19617 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19619__$1,inst_19617);
} else {
if((state_val_19620 === (2))){
var inst_19585 = (state_19619[(10)]);
var inst_19587 = cljs.core.count(inst_19585);
var inst_19588 = (inst_19587 > (0));
var state_19619__$1 = state_19619;
if(cljs.core.truth_(inst_19588)){
var statearr_19632_21010 = state_19619__$1;
(statearr_19632_21010[(1)] = (4));

} else {
var statearr_19633_21011 = state_19619__$1;
(statearr_19633_21011[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (11))){
var inst_19585 = (state_19619[(10)]);
var inst_19608 = (state_19619[(2)]);
var tmp19631 = inst_19585;
var inst_19585__$1 = tmp19631;
var state_19619__$1 = (function (){var statearr_19634 = state_19619;
(statearr_19634[(11)] = inst_19608);

(statearr_19634[(10)] = inst_19585__$1);

return statearr_19634;
})();
var statearr_19635_21012 = state_19619__$1;
(statearr_19635_21012[(2)] = null);

(statearr_19635_21012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (9))){
var inst_19595 = (state_19619[(8)]);
var state_19619__$1 = state_19619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19619__$1,(11),out,inst_19595);
} else {
if((state_val_19620 === (5))){
var inst_19613 = cljs.core.async.close_BANG_(out);
var state_19619__$1 = state_19619;
var statearr_19638_21014 = state_19619__$1;
(statearr_19638_21014[(2)] = inst_19613);

(statearr_19638_21014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (10))){
var inst_19611 = (state_19619[(2)]);
var state_19619__$1 = state_19619;
var statearr_19639_21015 = state_19619__$1;
(statearr_19639_21015[(2)] = inst_19611);

(statearr_19639_21015[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19620 === (8))){
var inst_19585 = (state_19619[(10)]);
var inst_19594 = (state_19619[(7)]);
var inst_19595 = (state_19619[(8)]);
var inst_19596 = (state_19619[(9)]);
var inst_19603 = (function (){var cs = inst_19585;
var vec__19590 = inst_19594;
var v = inst_19595;
var c = inst_19596;
return (function (p1__19581_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19581_SHARP_);
});
})();
var inst_19604 = cljs.core.filterv(inst_19603,inst_19585);
var inst_19585__$1 = inst_19604;
var state_19619__$1 = (function (){var statearr_19641 = state_19619;
(statearr_19641[(10)] = inst_19585__$1);

return statearr_19641;
})();
var statearr_19642_21019 = state_19619__$1;
(statearr_19642_21019[(2)] = null);

(statearr_19642_21019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_19647 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19647[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_19647[(1)] = (1));

return statearr_19647;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_19619){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19619);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19648){var ex__17762__auto__ = e19648;
var statearr_19649_21021 = state_19619;
(statearr_19649_21021[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19619[(4)]))){
var statearr_19650_21025 = state_19619;
(statearr_19650_21025[(1)] = cljs.core.first((state_19619[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21027 = state_19619;
state_19619 = G__21027;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_19619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_19619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19651 = f__17908__auto__();
(statearr_19651[(6)] = c__17907__auto___20994);

return statearr_19651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19653 = arguments.length;
switch (G__19653) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___21033 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19697){
var state_val_19698 = (state_19697[(1)]);
if((state_val_19698 === (7))){
var inst_19679 = (state_19697[(7)]);
var inst_19679__$1 = (state_19697[(2)]);
var inst_19680 = (inst_19679__$1 == null);
var inst_19681 = cljs.core.not(inst_19680);
var state_19697__$1 = (function (){var statearr_19701 = state_19697;
(statearr_19701[(7)] = inst_19679__$1);

return statearr_19701;
})();
if(inst_19681){
var statearr_19702_21034 = state_19697__$1;
(statearr_19702_21034[(1)] = (8));

} else {
var statearr_19703_21035 = state_19697__$1;
(statearr_19703_21035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (1))){
var inst_19674 = (0);
var state_19697__$1 = (function (){var statearr_19704 = state_19697;
(statearr_19704[(8)] = inst_19674);

return statearr_19704;
})();
var statearr_19705_21039 = state_19697__$1;
(statearr_19705_21039[(2)] = null);

(statearr_19705_21039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (4))){
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19697__$1,(7),ch);
} else {
if((state_val_19698 === (6))){
var inst_19692 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19709_21040 = state_19697__$1;
(statearr_19709_21040[(2)] = inst_19692);

(statearr_19709_21040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (3))){
var inst_19694 = (state_19697[(2)]);
var inst_19695 = cljs.core.async.close_BANG_(out);
var state_19697__$1 = (function (){var statearr_19710 = state_19697;
(statearr_19710[(9)] = inst_19694);

return statearr_19710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19697__$1,inst_19695);
} else {
if((state_val_19698 === (2))){
var inst_19674 = (state_19697[(8)]);
var inst_19676 = (inst_19674 < n);
var state_19697__$1 = state_19697;
if(cljs.core.truth_(inst_19676)){
var statearr_19711_21045 = state_19697__$1;
(statearr_19711_21045[(1)] = (4));

} else {
var statearr_19712_21046 = state_19697__$1;
(statearr_19712_21046[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (11))){
var inst_19674 = (state_19697[(8)]);
var inst_19684 = (state_19697[(2)]);
var inst_19685 = (inst_19674 + (1));
var inst_19674__$1 = inst_19685;
var state_19697__$1 = (function (){var statearr_19713 = state_19697;
(statearr_19713[(10)] = inst_19684);

(statearr_19713[(8)] = inst_19674__$1);

return statearr_19713;
})();
var statearr_19714_21048 = state_19697__$1;
(statearr_19714_21048[(2)] = null);

(statearr_19714_21048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (9))){
var state_19697__$1 = state_19697;
var statearr_19715_21049 = state_19697__$1;
(statearr_19715_21049[(2)] = null);

(statearr_19715_21049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (5))){
var state_19697__$1 = state_19697;
var statearr_19716_21052 = state_19697__$1;
(statearr_19716_21052[(2)] = null);

(statearr_19716_21052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (10))){
var inst_19689 = (state_19697[(2)]);
var state_19697__$1 = state_19697;
var statearr_19717_21055 = state_19697__$1;
(statearr_19717_21055[(2)] = inst_19689);

(statearr_19717_21055[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19698 === (8))){
var inst_19679 = (state_19697[(7)]);
var state_19697__$1 = state_19697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19697__$1,(11),out,inst_19679);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_19718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19718[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_19718[(1)] = (1));

return statearr_19718;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_19697){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19697);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19719){var ex__17762__auto__ = e19719;
var statearr_19720_21057 = state_19697;
(statearr_19720_21057[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19697[(4)]))){
var statearr_19721_21058 = state_19697;
(statearr_19721_21058[(1)] = cljs.core.first((state_19697[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21059 = state_19697;
state_19697 = G__21059;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_19697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_19697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19722 = f__17908__auto__();
(statearr_19722[(6)] = c__17907__auto___21033);

return statearr_19722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19727 = (function (f,ch,meta19725,_,fn1,meta19728){
this.f = f;
this.ch = ch;
this.meta19725 = meta19725;
this._ = _;
this.fn1 = fn1;
this.meta19728 = meta19728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19729,meta19728__$1){
var self__ = this;
var _19729__$1 = this;
return (new cljs.core.async.t_cljs$core$async19727(self__.f,self__.ch,self__.meta19725,self__._,self__.fn1,meta19728__$1));
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19729){
var self__ = this;
var _19729__$1 = this;
return self__.meta19728;
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19723_SHARP_){
var G__19730 = (((p1__19723_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19723_SHARP_) : self__.f.call(null, p1__19723_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19730) : f1.call(null, G__19730));
});
}));

(cljs.core.async.t_cljs$core$async19727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19725","meta19725",49146593,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19724","cljs.core.async/t_cljs$core$async19724",-974135000,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19728","meta19728",-69147552,null)], null);
}));

(cljs.core.async.t_cljs$core$async19727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19727");

(cljs.core.async.t_cljs$core$async19727.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19727.
 */
cljs.core.async.__GT_t_cljs$core$async19727 = (function cljs$core$async$__GT_t_cljs$core$async19727(f,ch,meta19725,_,fn1,meta19728){
return (new cljs.core.async.t_cljs$core$async19727(f,ch,meta19725,_,fn1,meta19728));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19724 = (function (f,ch,meta19725){
this.f = f;
this.ch = ch;
this.meta19725 = meta19725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19726,meta19725__$1){
var self__ = this;
var _19726__$1 = this;
return (new cljs.core.async.t_cljs$core$async19724(self__.f,self__.ch,meta19725__$1));
}));

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19726){
var self__ = this;
var _19726__$1 = this;
return self__.meta19725;
}));

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async19727(self__.f,self__.ch,self__.meta19725,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19731 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19731) : self__.f.call(null, G__19731));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19725","meta19725",49146593,null)], null);
}));

(cljs.core.async.t_cljs$core$async19724.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19724");

(cljs.core.async.t_cljs$core$async19724.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19724");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19724.
 */
cljs.core.async.__GT_t_cljs$core$async19724 = (function cljs$core$async$__GT_t_cljs$core$async19724(f,ch,meta19725){
return (new cljs.core.async.t_cljs$core$async19724(f,ch,meta19725));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19724(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19733 = (function (f,ch,meta19734){
this.f = f;
this.ch = ch;
this.meta19734 = meta19734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19735,meta19734__$1){
var self__ = this;
var _19735__$1 = this;
return (new cljs.core.async.t_cljs$core$async19733(self__.f,self__.ch,meta19734__$1));
}));

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19735){
var self__ = this;
var _19735__$1 = this;
return self__.meta19734;
}));

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19734","meta19734",1080630807,null)], null);
}));

(cljs.core.async.t_cljs$core$async19733.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19733");

(cljs.core.async.t_cljs$core$async19733.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19733");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19733.
 */
cljs.core.async.__GT_t_cljs$core$async19733 = (function cljs$core$async$__GT_t_cljs$core$async19733(f,ch,meta19734){
return (new cljs.core.async.t_cljs$core$async19733(f,ch,meta19734));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async19733(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19743 = (function (p,ch,meta19744){
this.p = p;
this.ch = ch;
this.meta19744 = meta19744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19745,meta19744__$1){
var self__ = this;
var _19745__$1 = this;
return (new cljs.core.async.t_cljs$core$async19743(self__.p,self__.ch,meta19744__$1));
}));

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19745){
var self__ = this;
var _19745__$1 = this;
return self__.meta19744;
}));

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19743.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19744","meta19744",-411774498,null)], null);
}));

(cljs.core.async.t_cljs$core$async19743.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19743");

(cljs.core.async.t_cljs$core$async19743.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async19743");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19743.
 */
cljs.core.async.__GT_t_cljs$core$async19743 = (function cljs$core$async$__GT_t_cljs$core$async19743(p,ch,meta19744){
return (new cljs.core.async.t_cljs$core$async19743(p,ch,meta19744));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async19743(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19747 = arguments.length;
switch (G__19747) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___21096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19788){
var state_val_19789 = (state_19788[(1)]);
if((state_val_19789 === (7))){
var inst_19784 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
var statearr_19804_21104 = state_19788__$1;
(statearr_19804_21104[(2)] = inst_19784);

(statearr_19804_21104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (1))){
var state_19788__$1 = state_19788;
var statearr_19805_21105 = state_19788__$1;
(statearr_19805_21105[(2)] = null);

(statearr_19805_21105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (4))){
var inst_19770 = (state_19788[(7)]);
var inst_19770__$1 = (state_19788[(2)]);
var inst_19771 = (inst_19770__$1 == null);
var state_19788__$1 = (function (){var statearr_19812 = state_19788;
(statearr_19812[(7)] = inst_19770__$1);

return statearr_19812;
})();
if(cljs.core.truth_(inst_19771)){
var statearr_19813_21106 = state_19788__$1;
(statearr_19813_21106[(1)] = (5));

} else {
var statearr_19814_21107 = state_19788__$1;
(statearr_19814_21107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (6))){
var inst_19770 = (state_19788[(7)]);
var inst_19775 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19770) : p.call(null, inst_19770));
var state_19788__$1 = state_19788;
if(cljs.core.truth_(inst_19775)){
var statearr_19815_21111 = state_19788__$1;
(statearr_19815_21111[(1)] = (8));

} else {
var statearr_19816_21112 = state_19788__$1;
(statearr_19816_21112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (3))){
var inst_19786 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19788__$1,inst_19786);
} else {
if((state_val_19789 === (2))){
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19788__$1,(4),ch);
} else {
if((state_val_19789 === (11))){
var inst_19778 = (state_19788[(2)]);
var state_19788__$1 = state_19788;
var statearr_19819_21117 = state_19788__$1;
(statearr_19819_21117[(2)] = inst_19778);

(statearr_19819_21117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (9))){
var state_19788__$1 = state_19788;
var statearr_19820_21118 = state_19788__$1;
(statearr_19820_21118[(2)] = null);

(statearr_19820_21118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (5))){
var inst_19773 = cljs.core.async.close_BANG_(out);
var state_19788__$1 = state_19788;
var statearr_19822_21119 = state_19788__$1;
(statearr_19822_21119[(2)] = inst_19773);

(statearr_19822_21119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (10))){
var inst_19781 = (state_19788[(2)]);
var state_19788__$1 = (function (){var statearr_19823 = state_19788;
(statearr_19823[(8)] = inst_19781);

return statearr_19823;
})();
var statearr_19824_21120 = state_19788__$1;
(statearr_19824_21120[(2)] = null);

(statearr_19824_21120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19789 === (8))){
var inst_19770 = (state_19788[(7)]);
var state_19788__$1 = state_19788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19788__$1,(11),out,inst_19770);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_19825 = [null,null,null,null,null,null,null,null,null];
(statearr_19825[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_19825[(1)] = (1));

return statearr_19825;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_19788){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19788);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19826){var ex__17762__auto__ = e19826;
var statearr_19827_21121 = state_19788;
(statearr_19827_21121[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19788[(4)]))){
var statearr_19828_21122 = state_19788;
(statearr_19828_21122[(1)] = cljs.core.first((state_19788[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21123 = state_19788;
state_19788 = G__21123;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_19788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_19788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19832 = f__17908__auto__();
(statearr_19832[(6)] = c__17907__auto___21096);

return statearr_19832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19834 = arguments.length;
switch (G__19834) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17907__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19896){
var state_val_19897 = (state_19896[(1)]);
if((state_val_19897 === (7))){
var inst_19892 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19898_21140 = state_19896__$1;
(statearr_19898_21140[(2)] = inst_19892);

(statearr_19898_21140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (20))){
var inst_19862 = (state_19896[(7)]);
var inst_19873 = (state_19896[(2)]);
var inst_19874 = cljs.core.next(inst_19862);
var inst_19848 = inst_19874;
var inst_19849 = null;
var inst_19850 = (0);
var inst_19851 = (0);
var state_19896__$1 = (function (){var statearr_19899 = state_19896;
(statearr_19899[(8)] = inst_19848);

(statearr_19899[(9)] = inst_19873);

(statearr_19899[(10)] = inst_19850);

(statearr_19899[(11)] = inst_19849);

(statearr_19899[(12)] = inst_19851);

return statearr_19899;
})();
var statearr_19900_21149 = state_19896__$1;
(statearr_19900_21149[(2)] = null);

(statearr_19900_21149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (1))){
var state_19896__$1 = state_19896;
var statearr_19901_21150 = state_19896__$1;
(statearr_19901_21150[(2)] = null);

(statearr_19901_21150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (4))){
var inst_19837 = (state_19896[(13)]);
var inst_19837__$1 = (state_19896[(2)]);
var inst_19838 = (inst_19837__$1 == null);
var state_19896__$1 = (function (){var statearr_19902 = state_19896;
(statearr_19902[(13)] = inst_19837__$1);

return statearr_19902;
})();
if(cljs.core.truth_(inst_19838)){
var statearr_19904_21151 = state_19896__$1;
(statearr_19904_21151[(1)] = (5));

} else {
var statearr_19906_21152 = state_19896__$1;
(statearr_19906_21152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (15))){
var state_19896__$1 = state_19896;
var statearr_19916_21154 = state_19896__$1;
(statearr_19916_21154[(2)] = null);

(statearr_19916_21154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (21))){
var state_19896__$1 = state_19896;
var statearr_19917_21156 = state_19896__$1;
(statearr_19917_21156[(2)] = null);

(statearr_19917_21156[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (13))){
var inst_19848 = (state_19896[(8)]);
var inst_19850 = (state_19896[(10)]);
var inst_19849 = (state_19896[(11)]);
var inst_19851 = (state_19896[(12)]);
var inst_19858 = (state_19896[(2)]);
var inst_19859 = (inst_19851 + (1));
var tmp19911 = inst_19848;
var tmp19912 = inst_19850;
var tmp19913 = inst_19849;
var inst_19848__$1 = tmp19911;
var inst_19849__$1 = tmp19913;
var inst_19850__$1 = tmp19912;
var inst_19851__$1 = inst_19859;
var state_19896__$1 = (function (){var statearr_19921 = state_19896;
(statearr_19921[(8)] = inst_19848__$1);

(statearr_19921[(10)] = inst_19850__$1);

(statearr_19921[(14)] = inst_19858);

(statearr_19921[(11)] = inst_19849__$1);

(statearr_19921[(12)] = inst_19851__$1);

return statearr_19921;
})();
var statearr_19922_21169 = state_19896__$1;
(statearr_19922_21169[(2)] = null);

(statearr_19922_21169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (22))){
var state_19896__$1 = state_19896;
var statearr_19923_21171 = state_19896__$1;
(statearr_19923_21171[(2)] = null);

(statearr_19923_21171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (6))){
var inst_19837 = (state_19896[(13)]);
var inst_19846 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19837) : f.call(null, inst_19837));
var inst_19847 = cljs.core.seq(inst_19846);
var inst_19848 = inst_19847;
var inst_19849 = null;
var inst_19850 = (0);
var inst_19851 = (0);
var state_19896__$1 = (function (){var statearr_19924 = state_19896;
(statearr_19924[(8)] = inst_19848);

(statearr_19924[(10)] = inst_19850);

(statearr_19924[(11)] = inst_19849);

(statearr_19924[(12)] = inst_19851);

return statearr_19924;
})();
var statearr_19925_21174 = state_19896__$1;
(statearr_19925_21174[(2)] = null);

(statearr_19925_21174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (17))){
var inst_19862 = (state_19896[(7)]);
var inst_19866 = cljs.core.chunk_first(inst_19862);
var inst_19867 = cljs.core.chunk_rest(inst_19862);
var inst_19868 = cljs.core.count(inst_19866);
var inst_19848 = inst_19867;
var inst_19849 = inst_19866;
var inst_19850 = inst_19868;
var inst_19851 = (0);
var state_19896__$1 = (function (){var statearr_19926 = state_19896;
(statearr_19926[(8)] = inst_19848);

(statearr_19926[(10)] = inst_19850);

(statearr_19926[(11)] = inst_19849);

(statearr_19926[(12)] = inst_19851);

return statearr_19926;
})();
var statearr_19927_21181 = state_19896__$1;
(statearr_19927_21181[(2)] = null);

(statearr_19927_21181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (3))){
var inst_19894 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19896__$1,inst_19894);
} else {
if((state_val_19897 === (12))){
var inst_19882 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19928_21193 = state_19896__$1;
(statearr_19928_21193[(2)] = inst_19882);

(statearr_19928_21193[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (2))){
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19896__$1,(4),in$);
} else {
if((state_val_19897 === (23))){
var inst_19890 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19929_21205 = state_19896__$1;
(statearr_19929_21205[(2)] = inst_19890);

(statearr_19929_21205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (19))){
var inst_19877 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19930_21211 = state_19896__$1;
(statearr_19930_21211[(2)] = inst_19877);

(statearr_19930_21211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (11))){
var inst_19848 = (state_19896[(8)]);
var inst_19862 = (state_19896[(7)]);
var inst_19862__$1 = cljs.core.seq(inst_19848);
var state_19896__$1 = (function (){var statearr_19931 = state_19896;
(statearr_19931[(7)] = inst_19862__$1);

return statearr_19931;
})();
if(inst_19862__$1){
var statearr_19932_21214 = state_19896__$1;
(statearr_19932_21214[(1)] = (14));

} else {
var statearr_19933_21215 = state_19896__$1;
(statearr_19933_21215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (9))){
var inst_19884 = (state_19896[(2)]);
var inst_19885 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19896__$1 = (function (){var statearr_19934 = state_19896;
(statearr_19934[(15)] = inst_19884);

return statearr_19934;
})();
if(cljs.core.truth_(inst_19885)){
var statearr_19935_21217 = state_19896__$1;
(statearr_19935_21217[(1)] = (21));

} else {
var statearr_19936_21218 = state_19896__$1;
(statearr_19936_21218[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (5))){
var inst_19840 = cljs.core.async.close_BANG_(out);
var state_19896__$1 = state_19896;
var statearr_19937_21219 = state_19896__$1;
(statearr_19937_21219[(2)] = inst_19840);

(statearr_19937_21219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (14))){
var inst_19862 = (state_19896[(7)]);
var inst_19864 = cljs.core.chunked_seq_QMARK_(inst_19862);
var state_19896__$1 = state_19896;
if(inst_19864){
var statearr_19938_21232 = state_19896__$1;
(statearr_19938_21232[(1)] = (17));

} else {
var statearr_19939_21235 = state_19896__$1;
(statearr_19939_21235[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (16))){
var inst_19880 = (state_19896[(2)]);
var state_19896__$1 = state_19896;
var statearr_19941_21236 = state_19896__$1;
(statearr_19941_21236[(2)] = inst_19880);

(statearr_19941_21236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19897 === (10))){
var inst_19849 = (state_19896[(11)]);
var inst_19851 = (state_19896[(12)]);
var inst_19856 = cljs.core._nth(inst_19849,inst_19851);
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19896__$1,(13),out,inst_19856);
} else {
if((state_val_19897 === (18))){
var inst_19862 = (state_19896[(7)]);
var inst_19871 = cljs.core.first(inst_19862);
var state_19896__$1 = state_19896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19896__$1,(20),out,inst_19871);
} else {
if((state_val_19897 === (8))){
var inst_19850 = (state_19896[(10)]);
var inst_19851 = (state_19896[(12)]);
var inst_19853 = (inst_19851 < inst_19850);
var inst_19854 = inst_19853;
var state_19896__$1 = state_19896;
if(cljs.core.truth_(inst_19854)){
var statearr_19944_21249 = state_19896__$1;
(statearr_19944_21249[(1)] = (10));

} else {
var statearr_19946_21250 = state_19896__$1;
(statearr_19946_21250[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17759__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17759__auto____0 = (function (){
var statearr_19947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19947[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17759__auto__);

(statearr_19947[(1)] = (1));

return statearr_19947;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17759__auto____1 = (function (state_19896){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19896);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e19948){var ex__17762__auto__ = e19948;
var statearr_19949_21257 = state_19896;
(statearr_19949_21257[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19896[(4)]))){
var statearr_19950_21258 = state_19896;
(statearr_19950_21258[(1)] = cljs.core.first((state_19896[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21259 = state_19896;
state_19896 = G__21259;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17759__auto__ = function(state_19896){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17759__auto____1.call(this,state_19896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17759__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17759__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_19953 = f__17908__auto__();
(statearr_19953[(6)] = c__17907__auto__);

return statearr_19953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));

return c__17907__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19956 = arguments.length;
switch (G__19956) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19959 = arguments.length;
switch (G__19959) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19961 = arguments.length;
switch (G__19961) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___21300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_19988){
var state_val_19989 = (state_19988[(1)]);
if((state_val_19989 === (7))){
var inst_19983 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_19990_21307 = state_19988__$1;
(statearr_19990_21307[(2)] = inst_19983);

(statearr_19990_21307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (1))){
var inst_19962 = null;
var state_19988__$1 = (function (){var statearr_19991 = state_19988;
(statearr_19991[(7)] = inst_19962);

return statearr_19991;
})();
var statearr_19992_21319 = state_19988__$1;
(statearr_19992_21319[(2)] = null);

(statearr_19992_21319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (4))){
var inst_19965 = (state_19988[(8)]);
var inst_19965__$1 = (state_19988[(2)]);
var inst_19969 = (inst_19965__$1 == null);
var inst_19970 = cljs.core.not(inst_19969);
var state_19988__$1 = (function (){var statearr_19993 = state_19988;
(statearr_19993[(8)] = inst_19965__$1);

return statearr_19993;
})();
if(inst_19970){
var statearr_19994_21320 = state_19988__$1;
(statearr_19994_21320[(1)] = (5));

} else {
var statearr_19998_21325 = state_19988__$1;
(statearr_19998_21325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (6))){
var state_19988__$1 = state_19988;
var statearr_20002_21327 = state_19988__$1;
(statearr_20002_21327[(2)] = null);

(statearr_20002_21327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (3))){
var inst_19985 = (state_19988[(2)]);
var inst_19986 = cljs.core.async.close_BANG_(out);
var state_19988__$1 = (function (){var statearr_20007 = state_19988;
(statearr_20007[(9)] = inst_19985);

return statearr_20007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19988__$1,inst_19986);
} else {
if((state_val_19989 === (2))){
var state_19988__$1 = state_19988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19988__$1,(4),ch);
} else {
if((state_val_19989 === (11))){
var inst_19965 = (state_19988[(8)]);
var inst_19977 = (state_19988[(2)]);
var inst_19962 = inst_19965;
var state_19988__$1 = (function (){var statearr_20011 = state_19988;
(statearr_20011[(7)] = inst_19962);

(statearr_20011[(10)] = inst_19977);

return statearr_20011;
})();
var statearr_20012_21344 = state_19988__$1;
(statearr_20012_21344[(2)] = null);

(statearr_20012_21344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (9))){
var inst_19965 = (state_19988[(8)]);
var state_19988__$1 = state_19988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19988__$1,(11),out,inst_19965);
} else {
if((state_val_19989 === (5))){
var inst_19965 = (state_19988[(8)]);
var inst_19962 = (state_19988[(7)]);
var inst_19972 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19965,inst_19962);
var state_19988__$1 = state_19988;
if(inst_19972){
var statearr_20014_21348 = state_19988__$1;
(statearr_20014_21348[(1)] = (8));

} else {
var statearr_20019_21349 = state_19988__$1;
(statearr_20019_21349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (10))){
var inst_19980 = (state_19988[(2)]);
var state_19988__$1 = state_19988;
var statearr_20023_21350 = state_19988__$1;
(statearr_20023_21350[(2)] = inst_19980);

(statearr_20023_21350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19989 === (8))){
var inst_19962 = (state_19988[(7)]);
var tmp20013 = inst_19962;
var inst_19962__$1 = tmp20013;
var state_19988__$1 = (function (){var statearr_20027 = state_19988;
(statearr_20027[(7)] = inst_19962__$1);

return statearr_20027;
})();
var statearr_20028_21352 = state_19988__$1;
(statearr_20028_21352[(2)] = null);

(statearr_20028_21352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_20029 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20029[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_20029[(1)] = (1));

return statearr_20029;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_19988){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_19988);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e20030){var ex__17762__auto__ = e20030;
var statearr_20034_21356 = state_19988;
(statearr_20034_21356[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_19988[(4)]))){
var statearr_20035_21358 = state_19988;
(statearr_20035_21358[(1)] = cljs.core.first((state_19988[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21359 = state_19988;
state_19988 = G__21359;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_19988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_19988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_20043 = f__17908__auto__();
(statearr_20043[(6)] = c__17907__auto___21300);

return statearr_20043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__20052 = arguments.length;
switch (G__20052) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___21364 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_20092){
var state_val_20093 = (state_20092[(1)]);
if((state_val_20093 === (7))){
var inst_20088 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20094_21365 = state_20092__$1;
(statearr_20094_21365[(2)] = inst_20088);

(statearr_20094_21365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (1))){
var inst_20055 = (new Array(n));
var inst_20056 = inst_20055;
var inst_20057 = (0);
var state_20092__$1 = (function (){var statearr_20095 = state_20092;
(statearr_20095[(7)] = inst_20057);

(statearr_20095[(8)] = inst_20056);

return statearr_20095;
})();
var statearr_20096_21366 = state_20092__$1;
(statearr_20096_21366[(2)] = null);

(statearr_20096_21366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (4))){
var inst_20060 = (state_20092[(9)]);
var inst_20060__$1 = (state_20092[(2)]);
var inst_20061 = (inst_20060__$1 == null);
var inst_20062 = cljs.core.not(inst_20061);
var state_20092__$1 = (function (){var statearr_20097 = state_20092;
(statearr_20097[(9)] = inst_20060__$1);

return statearr_20097;
})();
if(inst_20062){
var statearr_20098_21368 = state_20092__$1;
(statearr_20098_21368[(1)] = (5));

} else {
var statearr_20099_21369 = state_20092__$1;
(statearr_20099_21369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (15))){
var inst_20082 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20100_21370 = state_20092__$1;
(statearr_20100_21370[(2)] = inst_20082);

(statearr_20100_21370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (13))){
var state_20092__$1 = state_20092;
var statearr_20101_21375 = state_20092__$1;
(statearr_20101_21375[(2)] = null);

(statearr_20101_21375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (6))){
var inst_20057 = (state_20092[(7)]);
var inst_20078 = (inst_20057 > (0));
var state_20092__$1 = state_20092;
if(cljs.core.truth_(inst_20078)){
var statearr_20102_21376 = state_20092__$1;
(statearr_20102_21376[(1)] = (12));

} else {
var statearr_20103_21377 = state_20092__$1;
(statearr_20103_21377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (3))){
var inst_20090 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20092__$1,inst_20090);
} else {
if((state_val_20093 === (12))){
var inst_20056 = (state_20092[(8)]);
var inst_20080 = cljs.core.vec(inst_20056);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20092__$1,(15),out,inst_20080);
} else {
if((state_val_20093 === (2))){
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20092__$1,(4),ch);
} else {
if((state_val_20093 === (11))){
var inst_20072 = (state_20092[(2)]);
var inst_20073 = (new Array(n));
var inst_20056 = inst_20073;
var inst_20057 = (0);
var state_20092__$1 = (function (){var statearr_20104 = state_20092;
(statearr_20104[(10)] = inst_20072);

(statearr_20104[(7)] = inst_20057);

(statearr_20104[(8)] = inst_20056);

return statearr_20104;
})();
var statearr_20106_21379 = state_20092__$1;
(statearr_20106_21379[(2)] = null);

(statearr_20106_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (9))){
var inst_20056 = (state_20092[(8)]);
var inst_20070 = cljs.core.vec(inst_20056);
var state_20092__$1 = state_20092;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20092__$1,(11),out,inst_20070);
} else {
if((state_val_20093 === (5))){
var inst_20060 = (state_20092[(9)]);
var inst_20057 = (state_20092[(7)]);
var inst_20056 = (state_20092[(8)]);
var inst_20065 = (state_20092[(11)]);
var inst_20064 = (inst_20056[inst_20057] = inst_20060);
var inst_20065__$1 = (inst_20057 + (1));
var inst_20066 = (inst_20065__$1 < n);
var state_20092__$1 = (function (){var statearr_20108 = state_20092;
(statearr_20108[(11)] = inst_20065__$1);

(statearr_20108[(12)] = inst_20064);

return statearr_20108;
})();
if(cljs.core.truth_(inst_20066)){
var statearr_20109_21380 = state_20092__$1;
(statearr_20109_21380[(1)] = (8));

} else {
var statearr_20110_21381 = state_20092__$1;
(statearr_20110_21381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (14))){
var inst_20085 = (state_20092[(2)]);
var inst_20086 = cljs.core.async.close_BANG_(out);
var state_20092__$1 = (function (){var statearr_20113 = state_20092;
(statearr_20113[(13)] = inst_20085);

return statearr_20113;
})();
var statearr_20114_21383 = state_20092__$1;
(statearr_20114_21383[(2)] = inst_20086);

(statearr_20114_21383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (10))){
var inst_20076 = (state_20092[(2)]);
var state_20092__$1 = state_20092;
var statearr_20125_21384 = state_20092__$1;
(statearr_20125_21384[(2)] = inst_20076);

(statearr_20125_21384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20093 === (8))){
var inst_20056 = (state_20092[(8)]);
var inst_20065 = (state_20092[(11)]);
var tmp20111 = inst_20056;
var inst_20056__$1 = tmp20111;
var inst_20057 = inst_20065;
var state_20092__$1 = (function (){var statearr_20126 = state_20092;
(statearr_20126[(7)] = inst_20057);

(statearr_20126[(8)] = inst_20056__$1);

return statearr_20126;
})();
var statearr_20127_21387 = state_20092__$1;
(statearr_20127_21387[(2)] = null);

(statearr_20127_21387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_20128 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20128[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_20128[(1)] = (1));

return statearr_20128;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_20092){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_20092);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e20130){var ex__17762__auto__ = e20130;
var statearr_20131_21396 = state_20092;
(statearr_20131_21396[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_20092[(4)]))){
var statearr_20132_21400 = state_20092;
(statearr_20132_21400[(1)] = cljs.core.first((state_20092[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21401 = state_20092;
state_20092 = G__21401;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_20092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_20092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_20134 = f__17908__auto__();
(statearr_20134[(6)] = c__17907__auto___21364);

return statearr_20134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__20136 = arguments.length;
switch (G__20136) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17907__auto___21416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17908__auto__ = (function (){var switch__17758__auto__ = (function (state_20181){
var state_val_20182 = (state_20181[(1)]);
if((state_val_20182 === (7))){
var inst_20177 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20183_21418 = state_20181__$1;
(statearr_20183_21418[(2)] = inst_20177);

(statearr_20183_21418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (1))){
var inst_20137 = [];
var inst_20138 = inst_20137;
var inst_20139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_20181__$1 = (function (){var statearr_20185 = state_20181;
(statearr_20185[(7)] = inst_20138);

(statearr_20185[(8)] = inst_20139);

return statearr_20185;
})();
var statearr_20187_21422 = state_20181__$1;
(statearr_20187_21422[(2)] = null);

(statearr_20187_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (4))){
var inst_20142 = (state_20181[(9)]);
var inst_20142__$1 = (state_20181[(2)]);
var inst_20143 = (inst_20142__$1 == null);
var inst_20144 = cljs.core.not(inst_20143);
var state_20181__$1 = (function (){var statearr_20188 = state_20181;
(statearr_20188[(9)] = inst_20142__$1);

return statearr_20188;
})();
if(inst_20144){
var statearr_20189_21425 = state_20181__$1;
(statearr_20189_21425[(1)] = (5));

} else {
var statearr_20190_21426 = state_20181__$1;
(statearr_20190_21426[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (15))){
var inst_20138 = (state_20181[(7)]);
var inst_20169 = cljs.core.vec(inst_20138);
var state_20181__$1 = state_20181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20181__$1,(18),out,inst_20169);
} else {
if((state_val_20182 === (13))){
var inst_20164 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20192_21429 = state_20181__$1;
(statearr_20192_21429[(2)] = inst_20164);

(statearr_20192_21429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (6))){
var inst_20138 = (state_20181[(7)]);
var inst_20166 = inst_20138.length;
var inst_20167 = (inst_20166 > (0));
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20167)){
var statearr_20193_21430 = state_20181__$1;
(statearr_20193_21430[(1)] = (15));

} else {
var statearr_20194_21435 = state_20181__$1;
(statearr_20194_21435[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (17))){
var inst_20174 = (state_20181[(2)]);
var inst_20175 = cljs.core.async.close_BANG_(out);
var state_20181__$1 = (function (){var statearr_20195 = state_20181;
(statearr_20195[(10)] = inst_20174);

return statearr_20195;
})();
var statearr_20196_21439 = state_20181__$1;
(statearr_20196_21439[(2)] = inst_20175);

(statearr_20196_21439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (3))){
var inst_20179 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20181__$1,inst_20179);
} else {
if((state_val_20182 === (12))){
var inst_20138 = (state_20181[(7)]);
var inst_20157 = cljs.core.vec(inst_20138);
var state_20181__$1 = state_20181;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20181__$1,(14),out,inst_20157);
} else {
if((state_val_20182 === (2))){
var state_20181__$1 = state_20181;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20181__$1,(4),ch);
} else {
if((state_val_20182 === (11))){
var inst_20146 = (state_20181[(11)]);
var inst_20138 = (state_20181[(7)]);
var inst_20142 = (state_20181[(9)]);
var inst_20154 = inst_20138.push(inst_20142);
var tmp20197 = inst_20138;
var inst_20138__$1 = tmp20197;
var inst_20139 = inst_20146;
var state_20181__$1 = (function (){var statearr_20207 = state_20181;
(statearr_20207[(7)] = inst_20138__$1);

(statearr_20207[(8)] = inst_20139);

(statearr_20207[(12)] = inst_20154);

return statearr_20207;
})();
var statearr_20208_21444 = state_20181__$1;
(statearr_20208_21444[(2)] = null);

(statearr_20208_21444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (9))){
var inst_20139 = (state_20181[(8)]);
var inst_20150 = cljs.core.keyword_identical_QMARK_(inst_20139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_20181__$1 = state_20181;
var statearr_20210_21449 = state_20181__$1;
(statearr_20210_21449[(2)] = inst_20150);

(statearr_20210_21449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (5))){
var inst_20146 = (state_20181[(11)]);
var inst_20147 = (state_20181[(13)]);
var inst_20139 = (state_20181[(8)]);
var inst_20142 = (state_20181[(9)]);
var inst_20146__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20142) : f.call(null, inst_20142));
var inst_20147__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_20146__$1,inst_20139);
var state_20181__$1 = (function (){var statearr_20211 = state_20181;
(statearr_20211[(11)] = inst_20146__$1);

(statearr_20211[(13)] = inst_20147__$1);

return statearr_20211;
})();
if(inst_20147__$1){
var statearr_20212_21450 = state_20181__$1;
(statearr_20212_21450[(1)] = (8));

} else {
var statearr_20213_21451 = state_20181__$1;
(statearr_20213_21451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (14))){
var inst_20146 = (state_20181[(11)]);
var inst_20142 = (state_20181[(9)]);
var inst_20159 = (state_20181[(2)]);
var inst_20160 = [];
var inst_20161 = inst_20160.push(inst_20142);
var inst_20138 = inst_20160;
var inst_20139 = inst_20146;
var state_20181__$1 = (function (){var statearr_20214 = state_20181;
(statearr_20214[(7)] = inst_20138);

(statearr_20214[(14)] = inst_20159);

(statearr_20214[(15)] = inst_20161);

(statearr_20214[(8)] = inst_20139);

return statearr_20214;
})();
var statearr_20215_21453 = state_20181__$1;
(statearr_20215_21453[(2)] = null);

(statearr_20215_21453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (16))){
var state_20181__$1 = state_20181;
var statearr_20216_21455 = state_20181__$1;
(statearr_20216_21455[(2)] = null);

(statearr_20216_21455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (10))){
var inst_20152 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
if(cljs.core.truth_(inst_20152)){
var statearr_20217_21456 = state_20181__$1;
(statearr_20217_21456[(1)] = (11));

} else {
var statearr_20218_21457 = state_20181__$1;
(statearr_20218_21457[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (18))){
var inst_20171 = (state_20181[(2)]);
var state_20181__$1 = state_20181;
var statearr_20219_21458 = state_20181__$1;
(statearr_20219_21458[(2)] = inst_20171);

(statearr_20219_21458[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20182 === (8))){
var inst_20147 = (state_20181[(13)]);
var state_20181__$1 = state_20181;
var statearr_20220_21459 = state_20181__$1;
(statearr_20220_21459[(2)] = inst_20147);

(statearr_20220_21459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17759__auto__ = null;
var cljs$core$async$state_machine__17759__auto____0 = (function (){
var statearr_20221 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20221[(0)] = cljs$core$async$state_machine__17759__auto__);

(statearr_20221[(1)] = (1));

return statearr_20221;
});
var cljs$core$async$state_machine__17759__auto____1 = (function (state_20181){
while(true){
var ret_value__17760__auto__ = (function (){try{while(true){
var result__17761__auto__ = switch__17758__auto__(state_20181);
if(cljs.core.keyword_identical_QMARK_(result__17761__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17761__auto__;
}
break;
}
}catch (e20222){var ex__17762__auto__ = e20222;
var statearr_20223_21460 = state_20181;
(statearr_20223_21460[(2)] = ex__17762__auto__);


if(cljs.core.seq((state_20181[(4)]))){
var statearr_20224_21461 = state_20181;
(statearr_20224_21461[(1)] = cljs.core.first((state_20181[(4)])));

} else {
throw ex__17762__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17760__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21462 = state_20181;
state_20181 = G__21462;
continue;
} else {
return ret_value__17760__auto__;
}
break;
}
});
cljs$core$async$state_machine__17759__auto__ = function(state_20181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17759__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17759__auto____1.call(this,state_20181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17759__auto____0;
cljs$core$async$state_machine__17759__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17759__auto____1;
return cljs$core$async$state_machine__17759__auto__;
})()
})();
var state__17909__auto__ = (function (){var statearr_20227 = f__17908__auto__();
(statearr_20227[(6)] = c__17907__auto___21416);

return statearr_20227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17909__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
