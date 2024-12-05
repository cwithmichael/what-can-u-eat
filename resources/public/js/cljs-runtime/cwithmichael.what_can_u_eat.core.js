goog.provide('cwithmichael.what_can_u_eat.core');
cwithmichael.what_can_u_eat.core.get_value = (function cwithmichael$what_can_u_eat$core$get_value(val){
return val.target.value;
});
cwithmichael.what_can_u_eat.core.filter_list = (function cwithmichael$what_can_u_eat$core$filter_list(props__12889__auto__){
var clj_props__12890__auto__ = uix.core.glue_args(props__12889__auto__);
var vec__18959 = [clj_props__12890__auto__];
var map__18962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18959,(0),null);
var map__18962__$1 = cljs.core.__destructure_map(map__18962);
var handle_filter_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18962__$1,new cljs.core.Keyword(null,"handle-filter-change","handle-filter-change",1449078330));
var f__12891__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___19030 = cwithmichael.what_can_u_eat.core.filter_list.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___19030)){
var f__12820__auto___19031 = temp__5804__auto___19030;
(f__12820__auto___19031.cljs$core$IFn$_invoke$arity$0 ? f__12820__auto___19031.cljs$core$IFn$_invoke$arity$0() : f__12820__auto___19031.call(null, ));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("ul",[{'className':"filterList"}],[uix.compiler.aot._GT_el("li",[null],[uix.compiler.aot.create_uix_input("input",[{'type':"checkbox",'id':"keto",'name':"keto",'value':"keto",'onChange':(function (p1__18956_SHARP_){
var G__18963 = cwithmichael.what_can_u_eat.core.get_value(p1__18956_SHARP_);
return (handle_filter_change.cljs$core$IFn$_invoke$arity$1 ? handle_filter_change.cljs$core$IFn$_invoke$arity$1(G__18963) : handle_filter_change.call(null, G__18963));
})}],[]),uix.compiler.aot._GT_el("label",[{'htmlFor':"keto"}],["Keto Friendly"])]),uix.compiler.aot._GT_el("li",[null],[uix.compiler.aot.create_uix_input("input",[{'type':"checkbox",'id':"tmau",'name':"tmau",'value':"tmau",'onChange':(function (p1__18957_SHARP_){
var G__18964 = cwithmichael.what_can_u_eat.core.get_value(p1__18957_SHARP_);
return (handle_filter_change.cljs$core$IFn$_invoke$arity$1 ? handle_filter_change.cljs$core$IFn$_invoke$arity$1(G__18964) : handle_filter_change.call(null, G__18964));
})}],[]),uix.compiler.aot._GT_el("label",[{'htmlFor':"tmau"}],["TMAU Friendly"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__18965 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__18966 = cwithmichael.what_can_u_eat.core.filter_list;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__18966);

try{if(((cljs.core.map_QMARK_(clj_props__12890__auto__)) || ((clj_props__12890__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12890__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12890__auto__) (clojure.core/nil? clj-props__12890__auto__))"].join('')));
}

return f__12891__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__18965);
}} else {
return f__12891__auto__();
}
});

(cwithmichael.what_can_u_eat.core.filter_list.uix_component_QMARK_ = true);

(cwithmichael.what_can_u_eat.core.filter_list.displayName = "cwithmichael.what-can-u-eat.core/filter-list");

Object.defineProperty(cwithmichael.what_can_u_eat.core.filter_list,"name",(function (){var obj18968 = ({"value":"cwithmichael.what-can-u-eat.core/filter-list"});
return obj18968;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12829__auto___19032 = window.uix.dev.signature_BANG_();
(sig__12829__auto___19032.cljs$core$IFn$_invoke$arity$4 ? sig__12829__auto___19032.cljs$core$IFn$_invoke$arity$4(cwithmichael.what_can_u_eat.core.filter_list,"",null,null) : sig__12829__auto___19032.call(null, cwithmichael.what_can_u_eat.core.filter_list,"",null,null));

window.uix.dev.register_BANG_(cwithmichael.what_can_u_eat.core.filter_list,cwithmichael.what_can_u_eat.core.filter_list.displayName);

(cwithmichael.what_can_u_eat.core.filter_list.fast_refresh_signature = sig__12829__auto___19032);
} else {
}
} else {
}

cwithmichael.what_can_u_eat.core.message_view = (function cwithmichael$what_can_u_eat$core$message_view(props__12889__auto__){
var clj_props__12890__auto__ = uix.core.glue_args(props__12889__auto__);
var vec__18973 = [clj_props__12890__auto__];
var map__18976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(0),null);
var map__18976__$1 = cljs.core.__destructure_map(map__18976);
var in_default_state_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"in-default-state?","in-default-state?",2012862693));
var food_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"food-name","food-name",-1614009188));
var missing_info_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"missing-info?","missing-info?",-315074000));
var can_eat_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"can-eat?","can-eat?",143974721));
var nutrients = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18976__$1,new cljs.core.Keyword(null,"nutrients","nutrients",348737023));
var f__12891__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___19033 = cwithmichael.what_can_u_eat.core.message_view.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___19033)){
var f__12820__auto___19034 = temp__5804__auto___19033;
(f__12820__auto___19034.cljs$core$IFn$_invoke$arity$0 ? f__12820__auto___19034.cljs$core$IFn$_invoke$arity$0() : f__12820__auto___19034.call(null, ));
} else {
}
} else {
}

var message = (cljs.core.truth_(in_default_state_QMARK_)?null:(cljs.core.truth_(missing_info_QMARK_)?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("Missing information to determine",["span",null,"messageTextFailure",false],false),[]):(cljs.core.truth_(can_eat_QMARK_)?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("You can eat it! Just make sure to watch your total daily intake.",["span",null,"messageTextSuccess",false],false),[]):uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs("You should probably not eat it.",["span",null,"messageTextFailure",false],false),[])
)));
var net_carbs = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18969_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nutrient-id","nutrient-id",11401185).cljs$core$IFn$_invoke$arity$1(p1__18969_SHARP_),(1005));
}),nutrients));
var sugar = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18970_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nutrient-id","nutrient-id",11401185).cljs$core$IFn$_invoke$arity$1(p1__18970_SHARP_),(2000));
}),nutrients));
var choline = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18971_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nutrient-id","nutrient-id",11401185).cljs$core$IFn$_invoke$arity$1(p1__18971_SHARP_),(1180));
}),nutrients));
return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(message,["div",null,"message",false],false),[((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,food_name))?uix.compiler.aot._GT_el("p",uix.compiler.attributes.interpret_attrs(["Food description: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(food_name)].join(''),["p",null,null,false],false),[]):null),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,nutrients)) && (cljs.core.not(missing_info_QMARK_))))?uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs((cljs.core.truth_(net_carbs)?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(["Net Carbs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(net_carbs)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit-name","unit-name",983540599).cljs$core$IFn$_invoke$arity$1(net_carbs))].join(''),["span",null,"nutrient",false],false),[]):null),["div",null,"nutrients",false],false),[(cljs.core.truth_(sugar)?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(["Sugars: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(sugar)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit-name","unit-name",983540599).cljs$core$IFn$_invoke$arity$1(sugar))].join(''),["span",null,"nutrient",false],false),[]):null),(cljs.core.truth_(choline)?uix.compiler.aot._GT_el("span",uix.compiler.attributes.interpret_attrs(["Choline: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(choline)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"unit-name","unit-name",983540599).cljs$core$IFn$_invoke$arity$1(choline))].join(''),["span",null,"nutrient",false],false),[]):null)]):null)]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__18977 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__18978 = cwithmichael.what_can_u_eat.core.message_view;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__18978);

try{if(((cljs.core.map_QMARK_(clj_props__12890__auto__)) || ((clj_props__12890__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12890__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12890__auto__) (clojure.core/nil? clj-props__12890__auto__))"].join('')));
}

return f__12891__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__18977);
}} else {
return f__12891__auto__();
}
});

(cwithmichael.what_can_u_eat.core.message_view.uix_component_QMARK_ = true);

(cwithmichael.what_can_u_eat.core.message_view.displayName = "cwithmichael.what-can-u-eat.core/message-view");

Object.defineProperty(cwithmichael.what_can_u_eat.core.message_view,"name",(function (){var obj18980 = ({"value":"cwithmichael.what-can-u-eat.core/message-view"});
return obj18980;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12829__auto___19035 = window.uix.dev.signature_BANG_();
(sig__12829__auto___19035.cljs$core$IFn$_invoke$arity$4 ? sig__12829__auto___19035.cljs$core$IFn$_invoke$arity$4(cwithmichael.what_can_u_eat.core.message_view,"",null,null) : sig__12829__auto___19035.call(null, cwithmichael.what_can_u_eat.core.message_view,"",null,null));

window.uix.dev.register_BANG_(cwithmichael.what_can_u_eat.core.message_view,cwithmichael.what_can_u_eat.core.message_view.displayName);

(cwithmichael.what_can_u_eat.core.message_view.fast_refresh_signature = sig__12829__auto___19035);
} else {
}
} else {
}

cwithmichael.what_can_u_eat.core.search_form = (function cwithmichael$what_can_u_eat$core$search_form(props__12889__auto__){
var clj_props__12890__auto__ = uix.core.glue_args(props__12889__auto__);
var vec__18984 = [clj_props__12890__auto__];
var map__18987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18984,(0),null);
var map__18987__$1 = cljs.core.__destructure_map(map__18987);
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var handle_filter_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18987__$1,new cljs.core.Keyword(null,"handle-filter-change","handle-filter-change",1449078330));
var f__12891__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___19036 = cwithmichael.what_can_u_eat.core.search_form.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___19036)){
var f__12820__auto___19037 = temp__5804__auto___19036;
(f__12820__auto___19037.cljs$core$IFn$_invoke$arity$0 ? f__12820__auto___19037.cljs$core$IFn$_invoke$arity$0() : f__12820__auto___19037.call(null, ));
} else {
}
} else {
}

var vec__18988 = uix.core.use_state("");
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18988,(0),null);
var set_query_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18988,(1),null);
return uix.compiler.aot._GT_el("form",[{'className':"searchForm"}],[uix.compiler.alpha.component_element(cwithmichael.what_can_u_eat.core.filter_list,[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filters","filters",974726919),filters,new cljs.core.Keyword(null,"handle-filter-change","handle-filter-change",1449078330),handle_filter_change], null)],[]),uix.compiler.aot.create_uix_input("input",[{'className':"searchBar",'placeholder':"enter food",'type':"text",'name':"food",'onChange':(function (p1__18981_SHARP_){
var G__18991 = cwithmichael.what_can_u_eat.core.get_value(p1__18981_SHARP_);
return (set_query_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_query_BANG_.cljs$core$IFn$_invoke$arity$1(G__18991) : set_query_BANG_.call(null, G__18991));
})}],[]),uix.compiler.aot._GT_el("button",[{'className':"searchButton",'type':"submit",'onClick':(function (p1__18982_SHARP_){
return (handle_submit.cljs$core$IFn$_invoke$arity$2 ? handle_submit.cljs$core$IFn$_invoke$arity$2(p1__18982_SHARP_,query) : handle_submit.call(null, p1__18982_SHARP_,query));
})}],["Can I Eat It?"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__18992 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__18993 = cwithmichael.what_can_u_eat.core.search_form;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__18993);

try{if(((cljs.core.map_QMARK_(clj_props__12890__auto__)) || ((clj_props__12890__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__12890__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__12890__auto__) (clojure.core/nil? clj-props__12890__auto__))"].join('')));
}

return f__12891__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__18992);
}} else {
return f__12891__auto__();
}
});

(cwithmichael.what_can_u_eat.core.search_form.uix_component_QMARK_ = true);

(cwithmichael.what_can_u_eat.core.search_form.displayName = "cwithmichael.what-can-u-eat.core/search-form");

Object.defineProperty(cwithmichael.what_can_u_eat.core.search_form,"name",(function (){var obj18995 = ({"value":"cwithmichael.what-can-u-eat.core/search-form"});
return obj18995;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12829__auto___19038 = window.uix.dev.signature_BANG_();
(sig__12829__auto___19038.cljs$core$IFn$_invoke$arity$4 ? sig__12829__auto___19038.cljs$core$IFn$_invoke$arity$4(cwithmichael.what_can_u_eat.core.search_form,"(uix.core/use-state \"\")",null,null) : sig__12829__auto___19038.call(null, cwithmichael.what_can_u_eat.core.search_form,"(uix.core/use-state \"\")",null,null));

window.uix.dev.register_BANG_(cwithmichael.what_can_u_eat.core.search_form,cwithmichael.what_can_u_eat.core.search_form.displayName);

(cwithmichael.what_can_u_eat.core.search_form.fast_refresh_signature = sig__12829__auto___19038);
} else {
}
} else {
}

cwithmichael.what_can_u_eat.core.home_page = (function cwithmichael$what_can_u_eat$core$home_page(){
var f__12887__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___19039 = cwithmichael.what_can_u_eat.core.home_page.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___19039)){
var f__12820__auto___19040 = temp__5804__auto___19039;
(f__12820__auto___19040.cljs$core$IFn$_invoke$arity$0 ? f__12820__auto___19040.cljs$core$IFn$_invoke$arity$0() : f__12820__auto___19040.call(null, ));
} else {
}
} else {
}

var vec__18999 = uix.core.use_state(cljs.core.PersistentVector.EMPTY);
var filters = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999,(0),null);
var set_filters_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18999,(1),null);
var vec__19002 = uix.core.use_state(null);
var food = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19002,(0),null);
var set_food_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19002,(1),null);
var vec__19005 = uix.core.use_state(false);
var can_eat_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19005,(0),null);
var set_can_eat_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19005,(1),null);
var vec__19008 = uix.core.use_state(null);
var nutrients = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19008,(0),null);
var set_nutrients_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19008,(1),null);
var vec__19011 = uix.core.use_state(true);
var in_default_state_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19011,(0),null);
var set_in_default_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19011,(1),null);
var vec__19014 = uix.core.use_state(false);
var in_loading_state_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(0),null);
var set_in_loading_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19014,(1),null);
var vec__19017 = uix.core.use_state(false);
var missing_info_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19017,(0),null);
var set_missing_info_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19017,(1),null);
var check_food = (function (food_data,filters__$1){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/api/checkFood",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response], 0));

var G__19020_19041 = new cljs.core.Keyword(null,"missing-info","missing-info",480476395).cljs$core$IFn$_invoke$arity$1(response);
(set_missing_info_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_missing_info_BANG_.cljs$core$IFn$_invoke$arity$1(G__19020_19041) : set_missing_info_BANG_.call(null, G__19020_19041));

var G__19021 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response);
return (set_can_eat_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_can_eat_BANG_.cljs$core$IFn$_invoke$arity$1(G__19021) : set_can_eat_BANG_.call(null, G__19021));
}),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"food","food",1842183121),food_data,new cljs.core.Keyword(null,"filters","filters",974726919),filters__$1], null)], null)], 0));
});
var handle_filter_change = (function (val){
if(cljs.core.truth_(cljs.core.some((function (p1__18996_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__18996_SHARP_,val);
}),filters))){
var G__19022 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18997_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__18997_SHARP_,val);
}),filters));
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__19022) : set_filters_BANG_.call(null, G__19022));
} else {
var G__19023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filters,val);
return (set_filters_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_filters_BANG_.cljs$core$IFn$_invoke$arity$1(G__19023) : set_filters_BANG_.call(null, G__19023));
}
});
var handle_submit = (function (e,query){
e.preventDefault();

(set_in_loading_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_in_loading_state_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_in_loading_state_BANG_.call(null, true));

(set_in_default_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_in_default_state_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_in_default_state_BANG_.call(null, false));

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(["http://localhost:3000/api/food/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var G__19024_19042 = new cljs.core.Keyword(null,"food","food",1842183121).cljs$core$IFn$_invoke$arity$1(response);
(set_food_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_food_BANG_.cljs$core$IFn$_invoke$arity$1(G__19024_19042) : set_food_BANG_.call(null, G__19024_19042));

var G__19025_19043 = new cljs.core.Keyword(null,"food-nutrients","food-nutrients",-970052223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"food","food",1842183121).cljs$core$IFn$_invoke$arity$1(response));
(set_nutrients_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_nutrients_BANG_.cljs$core$IFn$_invoke$arity$1(G__19025_19043) : set_nutrients_BANG_.call(null, G__19025_19043));

check_food(response,filters);

return (set_in_loading_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_in_loading_state_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_in_loading_state_BANG_.call(null, false));
})], null)], 0));
});
return uix.compiler.aot._GT_el("div",[{'className':"container"}],[uix.compiler.aot._GT_el("h1",uix.compiler.attributes.interpret_attrs("Can you eat it?",["h1",null,"heading",false],false),[]),uix.compiler.alpha.component_element(cwithmichael.what_can_u_eat.core.search_form,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917),handle_submit,new cljs.core.Keyword(null,"filters","filters",974726919),filters,new cljs.core.Keyword(null,"handle-filter-change","handle-filter-change",1449078330),handle_filter_change], null)],[]),(cljs.core.truth_(in_loading_state_QMARK_)?uix.compiler.aot._GT_el("p",uix.compiler.attributes.interpret_attrs("Loading...",["p",null,"loadingMessage",false],false),[]):uix.compiler.alpha.component_element(cwithmichael.what_can_u_eat.core.message_view,[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"in-default-state?","in-default-state?",2012862693),in_default_state_QMARK_,new cljs.core.Keyword(null,"food-name","food-name",-1614009188),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(food),new cljs.core.Keyword(null,"missing-info?","missing-info?",-315074000),missing_info_QMARK_,new cljs.core.Keyword(null,"can-eat?","can-eat?",143974721),can_eat_QMARK_,new cljs.core.Keyword(null,"nutrients","nutrients",348737023),nutrients], null)],[]))]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__19026 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__19027 = cwithmichael.what_can_u_eat.core.home_page;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__19027);

try{return f__12887__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__19026);
}} else {
return f__12887__auto__();
}
});

(cwithmichael.what_can_u_eat.core.home_page.uix_component_QMARK_ = true);

(cwithmichael.what_can_u_eat.core.home_page.displayName = "cwithmichael.what-can-u-eat.core/home-page");

Object.defineProperty(cwithmichael.what_can_u_eat.core.home_page,"name",(function (){var obj19029 = ({"value":"cwithmichael.what-can-u-eat.core/home-page"});
return obj19029;
})());

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__12829__auto___19044 = window.uix.dev.signature_BANG_();
(sig__12829__auto___19044.cljs$core$IFn$_invoke$arity$4 ? sig__12829__auto___19044.cljs$core$IFn$_invoke$arity$4(cwithmichael.what_can_u_eat.core.home_page,"(uix.core/use-state [])(uix.core/use-state nil)(uix.core/use-state false)(uix.core/use-state nil)(uix.core/use-state true)(uix.core/use-state false)(uix.core/use-state false)",null,null) : sig__12829__auto___19044.call(null, cwithmichael.what_can_u_eat.core.home_page,"(uix.core/use-state [])(uix.core/use-state nil)(uix.core/use-state false)(uix.core/use-state nil)(uix.core/use-state true)(uix.core/use-state false)(uix.core/use-state false)",null,null));

window.uix.dev.register_BANG_(cwithmichael.what_can_u_eat.core.home_page,cwithmichael.what_can_u_eat.core.home_page.displayName);

(cwithmichael.what_can_u_eat.core.home_page.fast_refresh_signature = sig__12829__auto___19044);
} else {
}
} else {
}

if((typeof cwithmichael !== 'undefined') && (typeof cwithmichael.what_can_u_eat !== 'undefined') && (typeof cwithmichael.what_can_u_eat.core !== 'undefined') && (typeof cwithmichael.what_can_u_eat.core.root !== 'undefined')){
} else {
cwithmichael.what_can_u_eat.core.root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}
cwithmichael.what_can_u_eat.core.init_BANG_ = (function cwithmichael$what_can_u_eat$core$init_BANG_(){
return uix.dom.render_root(uix.compiler.alpha.component_element(cwithmichael.what_can_u_eat.core.home_page,[null],[]),cwithmichael.what_can_u_eat.core.root);
});
goog.exportSymbol('cwithmichael.what_can_u_eat.core.init_BANG_', cwithmichael.what_can_u_eat.core.init_BANG_);

//# sourceMappingURL=cwithmichael.what_can_u_eat.core.js.map
