(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["favorites"],{"0b42":function(t,e,r){var n=r("da84"),i=r("e8b5"),o=r("68ee"),s=r("861d"),a=r("b622"),l=a("species"),u=n.Array;t.exports=function(t){var e;return i(t)&&(e=t.constructor,o(e)&&(e===u||i(e.prototype))?e=void 0:s(e)&&(e=e[l],null===e&&(e=void 0))),void 0===e?u:e}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),s=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"48d5":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"favorites"},[r("h1",[t._v("Favorites")]),r("div",[r("b-tabs",{attrs:{"content-class":"mt-3",fill:""}},[r("b-tab",{attrs:{title:"Favorites",active:""}},[r("p",[t._v("I'm the first tab")])]),r("b-tab",{attrs:{title:"Created Recipes"}},[r("p",[t._v("I'm the second tab")])])],1),r("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":!0}}]},[t._v("Add recipe")]),r("b-modal",{attrs:{id:"modal-1",title:"BootstrapVue"}},[r("Upload-Recipe",{on:{newrecipe:t.addRecipe}})],1)],1)])},i=[],o=r("71d6"),s={components:{UploadRecipe:o["default"]},data:function(){return{recipes:[]}},methods:{addRecipe:function(t){console.log(t),this.recipes.push(t),console.log(this.recipes)}}},a=s,l=r("2877"),u=Object(l["a"])(a,n,i,!1,null,null,null);e["default"]=u.exports},"65f0":function(t,e,r){var n=r("0b42");t.exports=function(t,e){return new(n(t))(0===e?0:e)}},"71d6":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-6 col-sm-8 justify-content-center container"},[r("h1",[t._v("Create Your recipe")]),t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-1",label:"Dish Name:","label-size":"lg","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Enter dish name",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-2",label:"Time Duration:","label-size":"lg","label-for":"input-2"}},[r("b-form-select",{staticClass:"col-12",attrs:{id:"input-2",options:t.time,required:""},model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),r("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-3",label:"Ingredient:","label-size":"lg"}},t._l(t.form.ingredients,(function(e,n){return r("b-form-group",{key:n,staticClass:"mt-3"},[r("b-form-input",{staticClass:"form-control",attrs:{placeholder:"ingredient","label-size":"lg",required:""},model:{value:t.form.ingredients[n],callback:function(e){t.$set(t.form.ingredients,n,e)},expression:"form.ingredients[k]"}}),r("b-button",{directives:[{name:"show",rawName:"v-show",value:n==t.form.ingredients.length-1,expression:"k == form.ingredients.length - 1"}],on:{click:function(e){return t.addItem(!0)}}},[t._v("Add item")]),r("b-button",{directives:[{name:"show",rawName:"v-show",value:n||!n&&t.form.ingredients.length>1,expression:"k || (!k && form.ingredients.length > 1)"}],on:{click:function(e){return t.removeItem(!0,n)}}},[t._v("remove item")])],1)})),1),r("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-4",label:"Step:","label-size":"lg","label-for":"input-4"}},t._l(t.form.steps,(function(e,n){return r("b-form-group",{key:n},[r("b-form-input",{staticClass:"form-control",attrs:{placeholder:"step","label-size":"lg",required:""},model:{value:t.form.steps[n],callback:function(e){t.$set(t.form.steps,n,e)},expression:"form.steps[k]"}}),r("b-button",{directives:[{name:"show",rawName:"v-show",value:n==t.form.steps.length-1,expression:"k == form.steps.length - 1"}],on:{click:function(e){return t.addItem(!1)}}},[t._v("Add item")]),r("b-button",{directives:[{name:"show",rawName:"v-show",value:n||!n&&t.form.steps.length>1,expression:"k || (!k && form.steps.length > 1)"}],on:{click:function(e){return t.removeItem(!1,n)}}},[t._v("remove item")])],1)})),1),r("b-form-group",{staticClass:"mt-3",attrs:{id:"input-group-5",label:"Additional tip:","label-size":"lg","label-for":"input-5"}},[r("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.form.tip,callback:function(e){t.$set(t.form,"tip",e)},expression:"form.tip"}})],1),r("b-button",{staticClass:"mt-4",attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),r("b-button",{staticClass:"mt-4",attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e(),r("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[r("pre",{staticClass:"m-0"},[t._v(t._s(t.form))])])],1)},i=[],o=(r("e9c4"),r("b0c0"),r("a434"),{name:"UploadRecipe",data:function(){return{form:{name:"",time:null,ingredients:[""],steps:[""],tip:""},time:[{text:"Select One",value:null},"<30min","<1 hour",">= 1 hour"],show:!0}},methods:{onSubmit:function(t){t.preventDefault(),alert(JSON.stringify(this.form)),this.$emit("newrecipe",this.form)},onReset:function(t){var e=this;t.preventDefault(),this.form.name="",this.form.tip="",this.form.time=null,this.show=!1,this.$nextTick((function(){e.show=!0}))},addItem:function(t){t?this.form.ingredients.push(""):this.form.steps.push("")},removeItem:function(t,e){t?this.form.ingredients.splice(e,1):this.form.steps.splice(e,1)},addStep:function(){}}}),s=o,a=r("2877"),l=Object(a["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports},8418:function(t,e,r){"use strict";var n=r("a04b"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var s=n(e);s in t?i.f(t,s,o(0,r)):t[s]=r}},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("23cb"),s=r("5926"),a=r("07fa"),l=r("7b0b"),u=r("65f0"),c=r("8418"),f=r("1dde"),m=f("splice"),d=i.TypeError,p=Math.max,b=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var r,n,i,f,m,g,w=l(this),x=a(w),k=o(t,x),y=arguments.length;if(0===y?r=n=0:1===y?(r=0,n=x-k):(r=y-2,n=b(p(s(e),0),x-k)),x+r-n>v)throw d(h);for(i=u(w,n),f=0;f<n;f++)m=k+f,m in w&&c(i,f,w[m]);if(i.length=n,r<n){for(f=k;f<x-n;f++)m=f+n,g=f+r,m in w?w[g]=w[m]:delete w[g];for(f=x;f>x-n+r;f--)delete w[f-1]}else if(r>n)for(f=x-n;f>k;f--)m=f+n-1,g=f+r-1,m in w?w[g]=w[m]:delete w[g];for(f=0;f<r;f++)w[f+k]=arguments[f+2];return w.length=x-n+r,i}})},b0c0:function(t,e,r){var n=r("83ab"),i=r("5e77").EXISTS,o=r("e330"),s=r("9bf2").f,a=Function.prototype,l=o(a.toString),u=/^\s*function ([^ (]*)/,c=o(u.exec),f="name";n&&!i&&s(a,f,{configurable:!0,get:function(){try{return c(u,l(this))[1]}catch(t){return""}}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},e9c4:function(t,e,r){var n=r("23e7"),i=r("da84"),o=r("d066"),s=r("2ba4"),a=r("e330"),l=r("d039"),u=i.Array,c=o("JSON","stringify"),f=a(/./.exec),m=a("".charAt),d=a("".charCodeAt),p=a("".replace),b=a(1..toString),v=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,w=function(t,e,r){var n=m(r,e-1),i=m(r,e+1);return f(h,t)&&!f(g,i)||f(g,t)&&!f(h,n)?"\\u"+b(d(t,0),16):t},x=l((function(){return'"\\udf06\\ud834"'!==c("\udf06\ud834")||'"\\udead"'!==c("\udead")}));c&&n({target:"JSON",stat:!0,forced:x},{stringify:function(t,e,r){for(var n=0,i=arguments.length,o=u(i);n<i;n++)o[n]=arguments[n];var a=s(c,null,o);return"string"==typeof a?p(a,v,w):a}})}}]);
//# sourceMappingURL=favorites.edbaec34.js.map