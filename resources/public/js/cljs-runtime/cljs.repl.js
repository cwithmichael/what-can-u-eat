goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20764){
var map__20765 = p__20764;
var map__20765__$1 = cljs.core.__destructure_map(map__20765);
var m = map__20765__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20776_21182 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20777_21183 = null;
var count__20778_21184 = (0);
var i__20779_21185 = (0);
while(true){
if((i__20779_21185 < count__20778_21184)){
var f_21186 = chunk__20777_21183.cljs$core$IIndexed$_nth$arity$2(null, i__20779_21185);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21186], 0));


var G__21188 = seq__20776_21182;
var G__21189 = chunk__20777_21183;
var G__21190 = count__20778_21184;
var G__21191 = (i__20779_21185 + (1));
seq__20776_21182 = G__21188;
chunk__20777_21183 = G__21189;
count__20778_21184 = G__21190;
i__20779_21185 = G__21191;
continue;
} else {
var temp__5804__auto___21195 = cljs.core.seq(seq__20776_21182);
if(temp__5804__auto___21195){
var seq__20776_21196__$1 = temp__5804__auto___21195;
if(cljs.core.chunked_seq_QMARK_(seq__20776_21196__$1)){
var c__5525__auto___21199 = cljs.core.chunk_first(seq__20776_21196__$1);
var G__21200 = cljs.core.chunk_rest(seq__20776_21196__$1);
var G__21201 = c__5525__auto___21199;
var G__21202 = cljs.core.count(c__5525__auto___21199);
var G__21203 = (0);
seq__20776_21182 = G__21200;
chunk__20777_21183 = G__21201;
count__20778_21184 = G__21202;
i__20779_21185 = G__21203;
continue;
} else {
var f_21206 = cljs.core.first(seq__20776_21196__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21206], 0));


var G__21207 = cljs.core.next(seq__20776_21196__$1);
var G__21208 = null;
var G__21209 = (0);
var G__21210 = (0);
seq__20776_21182 = G__21207;
chunk__20777_21183 = G__21208;
count__20778_21184 = G__21209;
i__20779_21185 = G__21210;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21212 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21212], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21212)))?cljs.core.second(arglists_21212):arglists_21212)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20792_21220 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20793_21221 = null;
var count__20794_21222 = (0);
var i__20795_21223 = (0);
while(true){
if((i__20795_21223 < count__20794_21222)){
var vec__20812_21224 = chunk__20793_21221.cljs$core$IIndexed$_nth$arity$2(null, i__20795_21223);
var name_21225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812_21224,(0),null);
var map__20816_21226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20812_21224,(1),null);
var map__20816_21227__$1 = cljs.core.__destructure_map(map__20816_21226);
var doc_21228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20816_21227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20816_21227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21225], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21229], 0));

if(cljs.core.truth_(doc_21228)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21228], 0));
} else {
}


var G__21238 = seq__20792_21220;
var G__21239 = chunk__20793_21221;
var G__21240 = count__20794_21222;
var G__21241 = (i__20795_21223 + (1));
seq__20792_21220 = G__21238;
chunk__20793_21221 = G__21239;
count__20794_21222 = G__21240;
i__20795_21223 = G__21241;
continue;
} else {
var temp__5804__auto___21242 = cljs.core.seq(seq__20792_21220);
if(temp__5804__auto___21242){
var seq__20792_21243__$1 = temp__5804__auto___21242;
if(cljs.core.chunked_seq_QMARK_(seq__20792_21243__$1)){
var c__5525__auto___21244 = cljs.core.chunk_first(seq__20792_21243__$1);
var G__21245 = cljs.core.chunk_rest(seq__20792_21243__$1);
var G__21246 = c__5525__auto___21244;
var G__21247 = cljs.core.count(c__5525__auto___21244);
var G__21248 = (0);
seq__20792_21220 = G__21245;
chunk__20793_21221 = G__21246;
count__20794_21222 = G__21247;
i__20795_21223 = G__21248;
continue;
} else {
var vec__20832_21251 = cljs.core.first(seq__20792_21243__$1);
var name_21252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832_21251,(0),null);
var map__20835_21253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20832_21251,(1),null);
var map__20835_21254__$1 = cljs.core.__destructure_map(map__20835_21253);
var doc_21255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21254__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20835_21254__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21252], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21256], 0));

if(cljs.core.truth_(doc_21255)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21255], 0));
} else {
}


var G__21260 = cljs.core.next(seq__20792_21243__$1);
var G__21261 = null;
var G__21262 = (0);
var G__21263 = (0);
seq__20792_21220 = G__21260;
chunk__20793_21221 = G__21261;
count__20794_21222 = G__21262;
i__20795_21223 = G__21263;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20845 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20846 = null;
var count__20847 = (0);
var i__20848 = (0);
while(true){
if((i__20848 < count__20847)){
var role = chunk__20846.cljs$core$IIndexed$_nth$arity$2(null, i__20848);
var temp__5804__auto___21266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21266__$1)){
var spec_21267 = temp__5804__auto___21266__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21267)], 0));
} else {
}


var G__21269 = seq__20845;
var G__21270 = chunk__20846;
var G__21271 = count__20847;
var G__21272 = (i__20848 + (1));
seq__20845 = G__21269;
chunk__20846 = G__21270;
count__20847 = G__21271;
i__20848 = G__21272;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20845);
if(temp__5804__auto____$1){
var seq__20845__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20845__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20845__$1);
var G__21273 = cljs.core.chunk_rest(seq__20845__$1);
var G__21274 = c__5525__auto__;
var G__21275 = cljs.core.count(c__5525__auto__);
var G__21276 = (0);
seq__20845 = G__21273;
chunk__20846 = G__21274;
count__20847 = G__21275;
i__20848 = G__21276;
continue;
} else {
var role = cljs.core.first(seq__20845__$1);
var temp__5804__auto___21278__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21278__$2)){
var spec_21279 = temp__5804__auto___21278__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21279)], 0));
} else {
}


var G__21280 = cljs.core.next(seq__20845__$1);
var G__21281 = null;
var G__21282 = (0);
var G__21283 = (0);
seq__20845 = G__21280;
chunk__20846 = G__21281;
count__20847 = G__21282;
i__20848 = G__21283;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20977 = datafied_throwable;
var map__20977__$1 = cljs.core.__destructure_map(map__20977);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20977__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20978 = cljs.core.last(via);
var map__20978__$1 = cljs.core.__destructure_map(map__20978);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20978__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20979 = data;
var map__20979__$1 = cljs.core.__destructure_map(map__20979);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20979__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20980 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20980__$1 = cljs.core.__destructure_map(map__20980);
var top_data = map__20980__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20980__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20984 = phase;
var G__20984__$1 = (((G__20984 instanceof cljs.core.Keyword))?G__20984.fqn:null);
switch (G__20984__$1) {
case "read-source":
var map__20987 = data;
var map__20987__$1 = cljs.core.__destructure_map(map__20987);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20993 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20993__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20993,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20993);
var G__20993__$2 = (cljs.core.truth_((function (){var fexpr__21000 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21000.cljs$core$IFn$_invoke$arity$1 ? fexpr__21000.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21000.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20993__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20993__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20993__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20993__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21005 = top_data;
var G__21005__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21005,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21005);
var G__21005__$2 = (cljs.core.truth_((function (){var fexpr__21009 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21009.cljs$core$IFn$_invoke$arity$1 ? fexpr__21009.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21009.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21005__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21005__$1);
var G__21005__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21005__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21005__$2);
var G__21005__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21005__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21005__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21005__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21005__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21016 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21016,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21016,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21016,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21016,(3),null);
var G__21020 = top_data;
var G__21020__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21020,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21020);
var G__21020__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21020__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21020__$1);
var G__21020__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21020__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21020__$2);
var G__21020__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21020__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21020__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21020__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21020__$4;
}

break;
case "execution":
var vec__21036 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21036,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21036,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21036,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21036,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20974_SHARP_){
var or__5002__auto__ = (p1__20974_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__21047 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21047.cljs$core$IFn$_invoke$arity$1 ? fexpr__21047.cljs$core$IFn$_invoke$arity$1(p1__20974_SHARP_) : fexpr__21047.call(null, p1__20974_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__21056 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21056__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21056,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21056);
var G__21056__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21056__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21056__$1);
var G__21056__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21056__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21056__$2);
var G__21056__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21056__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21056__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21056__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21056__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20984__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21062){
var map__21067 = p__21062;
var map__21067__$1 = cljs.core.__destructure_map(map__21067);
var triage_data = map__21067__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21067__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21068 = phase;
var G__21068__$1 = (((G__21068 instanceof cljs.core.Keyword))?G__21068.fqn:null);
switch (G__21068__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21069 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21070 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21071 = loc;
var G__21072 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21080_21371 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21081_21372 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21082_21373 = true;
var _STAR_print_fn_STAR__temp_val__21083_21374 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21082_21373);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21083_21374);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21060_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21060_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21081_21372);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21080_21371);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21069,G__21070,G__21071,G__21072) : format.call(null, G__21069,G__21070,G__21071,G__21072));

break;
case "macroexpansion":
var G__21124 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21125 = cause_type;
var G__21126 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21127 = loc;
var G__21128 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21124,G__21125,G__21126,G__21127,G__21128) : format.call(null, G__21124,G__21125,G__21126,G__21127,G__21128));

break;
case "compile-syntax-check":
var G__21129 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21130 = cause_type;
var G__21131 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21132 = loc;
var G__21133 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21129,G__21130,G__21131,G__21132,G__21133) : format.call(null, G__21129,G__21130,G__21131,G__21132,G__21133));

break;
case "compilation":
var G__21135 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21136 = cause_type;
var G__21137 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21138 = loc;
var G__21139 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21135,G__21136,G__21137,G__21138,G__21139) : format.call(null, G__21135,G__21136,G__21137,G__21138,G__21139));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21141 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21142 = symbol;
var G__21143 = loc;
var G__21144 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21145_21388 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21146_21389 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21147_21390 = true;
var _STAR_print_fn_STAR__temp_val__21148_21391 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21147_21390);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21148_21391);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21061_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21061_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21146_21389);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21145_21388);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21141,G__21142,G__21143,G__21144) : format.call(null, G__21141,G__21142,G__21143,G__21144));
} else {
var G__21157 = "Execution error%s at %s(%s).\n%s\n";
var G__21159 = cause_type;
var G__21160 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21161 = loc;
var G__21162 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21157,G__21159,G__21160,G__21161,G__21162) : format.call(null, G__21157,G__21159,G__21160,G__21161,G__21162));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21068__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
