webpackJsonp([466],{"1hVZ":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n#choose_status[data-v-395f43c4] {\n  padding-top: 40px;\n  background-color: #fff;\n}\n#choose_status .content[data-v-395f43c4] {\n    text-align: center;\n}\n#choose_status .content .head[data-v-395f43c4] {\n      margin-top: 2rem;\n      margin-left: 1rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 3.5rem;\n}\n#choose_status .content .head .line[data-v-395f43c4] {\n        width: 0.1875rem;\n        height: 0.875rem;\n        background-color: #f87070;\n        margin-right: 1rem;\n}\n#choose_status .content .head span[data-v-395f43c4] {\n        font-size: 14px;\n        color: #f86e6e;\n}\n#choose_status .content .wrapper .shop[data-v-395f43c4] {\n      width: 19rem;\n      height: 3rem;\n      border-radius: 0.5rem;\n      border: solid 1px #f87070;\n      color: #f87070;\n      margin: 0 auto;\n      margin-bottom: 2rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 14px;\n}\n#choose_status .content .wrapper .buyer[data-v-395f43c4] {\n      width: 19rem;\n      height: 3rem;\n      border-radius: 0.5rem;\n      border: solid 1px #f87070;\n      color: #f87070;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 2rem;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 14px;\n}\n#choose_status .content .wrapper .person[data-v-395f43c4] {\n      width: 19rem;\n      height: 3rem;\n      border-radius: 0.5rem;\n      border: solid 1px #f87070;\n      color: #f87070;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 2rem;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 14px;\n}\n#choose_status .content .wrapper .people[data-v-395f43c4] {\n      width: 19rem;\n      height: 3rem;\n      border-radius: 0.5rem;\n      border: solid 1px #f87070;\n      color: #f87070;\n      margin: 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      font-size: 14px;\n}\n#choose_status .bgOrange[data-v-395f43c4] {\n    background-color: #f87070;\n    color: #fff !important;\n}\n",""])},Oxl7:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("Pexp"),s=(e("Tg7E"),{data:function(){return{isActive:1}},activated:function(){this.initData(),this.$refs.choose_status.style.height=document.body.clientHeight+"px"},methods:{initData:function(){this.isActive=1},toShop:function(){this.isActive=1,this.$router.push(this.fun.getUrl("companyLogon",{id:this.isActive}))},toperson:function(){this.isActive=3,this.$router.push(this.fun.getUrl("companyLogon",{id:this.isActive}))},topeople:function(){this.isActive=4,this.$router.push(this.fun.getUrl("personLogon",{id:this.isActive}))}},components:{cTitle:i.a}}),o={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{ref:"choose_status",attrs:{id:"choose_status"}},[e("c-title",{attrs:{hide:!1,text:"选择注册角色"}}),n._v(" "),e("div",{staticClass:"content"},[n._m(0),n._v(" "),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"shop",class:[1==n.isActive?"bgOrange":""],on:{click:function(t){return n.toShop()}}},[n._v("\n        企业店铺\n      ")]),n._v(" "),e("div",{staticClass:"person",class:[3==n.isActive?"bgOrange":""],on:{click:function(t){return n.toperson()}}},[n._v("\n        企业个体工商户\n      ")])])])],1)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"head"},[t("div",{staticClass:"line"}),this._v(" "),t("span",[this._v("选择注册角色")])])}]};var a=e("VU/8")(s,o,!1,function(n){e("czba")},"data-v-395f43c4",null);t.default=a.exports},czba:function(n,t,e){var i=e("1hVZ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("dedf5446",i,!0,{})}});