(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["system"],{"10e1":function(e,t,a){"use strict";a.r(t);var n,i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("CrudTable",{ref:"table",attrs:{tableName:"role",tableTitle:"角色列表",fullHeight:"",orderCondition:"timestamp desc",visibleList:{btnDel:!0}}})],1)},l=[],o=a("0e4d"),s=a("76ff"),c=a("3a68"),u=a("e4a1"),d=(n=Object(u["a"])({name:"Role"}),n(i=function(e){Object(s["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(u["c"]))||i),f=d,b=a("5d22"),p=Object(b["a"])(f,r,l,!1,null,null,null);t["default"]=p.exports},"2b78":function(e,t,a){"use strict";a.r(t);var n,i,r,l,o,s,c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("el-row",{staticClass:"full-height",attrs:{gutter:15}},[a("el-col",{staticClass:"full-height",attrs:{span:4}},[a("div",{staticClass:"full-height",staticStyle:{overflow:"auto"}},[a("el-input",{attrs:{placeholder:"请输入查询内容",size:"mini","prefix-icon":"el-icon-search"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"deptTree",staticClass:"deptTree",attrs:{"highlight-current":"",accordion:"",data:e.deptTree.data,"filter-node-method":e.filterNode,"check-strictly":"",props:e.deptTree.mapping,"node-key":e.deptTree.mapping.nodeKey,"default-expanded-keys":e.deptTree.expandedKeys},on:{"node-click":e.nodeClick},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.node;return a("span",{staticClass:"custom-tree-node"},[a("div",{staticStyle:{float:"left"}},[n.isLeaf?a("i",{staticClass:"el-icon el-icon-user-solid"}):a("i",{staticClass:"el-icon el-icon-s-home"}),a("span",[e._v(e._s(n.label))])])])}}])})],1)]),a("el-col",{attrs:{span:20}},[a("CrudTable",{ref:"table",attrs:{tableName:"users",tableTitle:e.tableTitle,orderCondition:"timestamp desc",remoteFuncs:e.remoteFuncs,fullHeight:"",prefill:e.tableParams,actionColumnWidth:300,tableParams:e.tableParams,visibleList:{tableTitle:!0,btnDel:!0}},scopedSlots:e._u([{key:"columnFormatter",fn:function(t){var n=t.row,i=t.prop;return["photo"===i?[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,headers:{Authorization:e.getToken},data:{userid:e.userid},"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[n.photo?a("img",{staticClass:"avatar",attrs:{src:n.photo},on:{click:function(t){e.userid=n.id}}}):a("i",{staticClass:"el-icon el-icon-plus avatar-uploader-icon",on:{click:function(t){e.userid=n.id}}})])]:e._e()]}},{key:"btnCustom",fn:function(t){var n=t.row;return[a("el-button",{attrs:{slot:"btnCustom",icon:"el-icon-edit-outline",type:"warning",size:"mini"},on:{click:function(t){return e.resetPassword(n)}},slot:"btnCustom"},[e._v("重置密码")])]}}])})],1)],1)],1)},u=[],d=(a("b4fb"),a("dbb3"),a("b130"),a("2eeb"),a("053b"),a("b73f"),a("90aa"),a("d211")),f=a("3df4"),b=a("0e4d"),p=a("94ef"),h=a("db6f"),m=a("76ff"),v=a("3a68"),g=a("28f8"),j=a("75f7"),O=(a("ba5b"),a("e4a1")),y=a("d1a9"),T=a("a349"),C=(n=Object(O["a"])({name:"Users"}),i=Object(O["d"])("filterText"),n((s=function(e){Object(m["a"])(a,e);var t=Object(v["a"])(a);function a(){var e;Object(b["a"])(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return e=t.call.apply(t,[this].concat(i)),Object(f["a"])(Object(h["a"])(e),"config",o,Object(h["a"])(e)),Object(g["a"])(Object(h["a"])(e),"imageUrl",""),Object(g["a"])(Object(h["a"])(e),"loading",!1),Object(g["a"])(Object(h["a"])(e),"tableTitle",""),Object(g["a"])(Object(h["a"])(e),"filterText",""),Object(g["a"])(Object(h["a"])(e),"userid",""),Object(g["a"])(Object(h["a"])(e),"tableParams",{}),Object(g["a"])(Object(h["a"])(e),"deptTree",{data:[],mapping:{children:"children",label:"name",nodeKey:"id",isLeaf:"leaf",disabled:"parentid"},rootId:"-1",rootParentid:0,expandedKeys:["-1"]}),Object(g["a"])(Object(h["a"])(e),"remoteFuncs",{funcGetRole:function(e){Object(y["b"])(y["a"].SELECT,"role").then((function(t){var a=t.data.list.map((function(e){return{label:e.roleName,value:e.id}}));e(a)}))},funcGetDeptTree:function(e){Object(y["b"])(y["a"].TREE,"dept").then((function(t){e(t.data)}))}}),e}return Object(p["a"])(a,[{key:"created",value:function(){this.loadDeptTree()}},{key:"handleAvatarSuccess",value:function(e,t){this.$refs.table.tableReload()}},{key:"beforeAvatarUpload",value:function(e){var t="image/jpeg,image/png".includes(e.type),a=e.size/1024/1024<2;return t||this.$message.error("上传图片只能是 JPG/PNG 格式!"),a||this.$message.error("上传图片大小不能超过 2MB!"),t&&a}},{key:"resetPassword",value:function(e){var t=this,a=this.config.initialPassword;this.$confirm("确认重置到初始密码".concat(a),"提示",{confirmButtonText:"重置",cancelButtonText:"取消",type:"warning"}).then((function(){var n=Object(d["a"])({},e);n.password=a,Object(y["b"])(y["a"].UPDATE,"users",n).then((function(e){200===e.code&&(t.$message("重置成功"),t.$refs.table.tableReload())}))})).catch((function(){t.$message({type:"info",message:"已取消重置"})}))}},{key:"loadDeptTree",value:function(e){var t=this;this.loading=!0,Object(y["b"])(y["a"].TREE,"dept").then((function(e){t.deptTree.data=[{name:"全部",id:"-1",children:e.data}],t.loading=!1,t.deptTree.expandedKeys.push(t.deptTree.rootId)}))}},{key:"dialogOnClose",value:function(){this.$refs.table.tableReload()}},{key:"filterNode",value:function(e,t,a){return!e||t.name.includes(e)}},{key:"nodeClick",value:function(e,t){e.id===this.deptTree.rootId?delete this.tableParams.deptid:this.tableParams.deptid=e.id,this.tableTitle=e.name,this.$refs.table.tableReload()}},{key:"filterTextChange",value:function(e){this.$refs.deptTree.filter(e)}},{key:"getToken",get:function(){return this.$store.getters.token}},{key:"uploadUrl",get:function(){return"".concat(window.__HOST__URL__+window.__PREFIX__URL__,"users/uploadImage")}}]),a}(O["c"]),l=s,o=Object(j["a"])(l.prototype,"config",[T["a"]],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Object(j["a"])(l.prototype,"filterTextChange",[i],Object.getOwnPropertyDescriptor(l.prototype,"filterTextChange"),l.prototype),r=l))||r),_=C,k=(a("fc70"),a("5d22")),w=Object(k["a"])(_,c,u,!1,null,"37946ac0",null);t["default"]=w.exports},"3df4":function(e,t,a){"use strict";function n(e,t,a,n){a&&Object.defineProperty(e,t,{enumerable:a.enumerable,configurable:a.configurable,writable:a.writable,value:a.initializer?a.initializer.call(n):void 0})}a.d(t,"a",(function(){return n}))},"3f10":function(e,t,a){"use strict";a.r(t);var n,i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("CrudTable",{ref:"table",attrs:{tableName:"person",tableTitle:"员工管理",fullHeight:"",orderCondition:"timestamp desc",visibleList:{btnDel:!0}},scopedSlots:e._u([{key:"columnFormatter",fn:function(t){var n=t.row,i=t.prop;return["jobno"===i?a("el-tag",[e._v(e._s(n.jobno))]):e._e(),"personname"===i?a("span",[a("i",{staticClass:"el-icon el-icon-user",staticStyle:{color:"red"}}),e._v(e._s(n.personname))]):e._e(),"avatar"===i?a("el-image",{staticStyle:{width:"50px",height:"50px"},attrs:{fit:"fill",src:e.getAvatarUrl(n),"preview-src-list":[e.getAvatarUrl(n)]}},[a("div",{staticStyle:{height:"100%"},attrs:{slot:"error"},slot:"error"},[a("div",{staticClass:"error"},[a("i",{staticClass:"el-icon-picture-outline"})])])]):e._e()]}}])})],1)},l=[],o=a("0e4d"),s=a("94ef"),c=a("76ff"),u=a("3a68"),d=a("e4a1"),f=(n=Object(d["a"])({name:"Person"}),n(i=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"getAvatarUrl",value:function(e){return this.API_URL+e.avatar}}]),a}(d["c"]))||i),b=f,p=(a("90f7"),a("5d22")),h=Object(p["a"])(b,r,l,!1,null,"14766ec8",null);t["default"]=h.exports},6805:function(e,t,a){},"90f7":function(e,t,a){"use strict";a("f4dc")},a654:function(e,t,a){"use strict";a.r(t);var n,i,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container"},[a("CrudTable",{ref:"table",attrs:{tableName:"dept",tableTitle:"部门列表",listField:"data",border:"",visibleList:{searchForm:!1,btnAdd:!1,btnDel:!0,actionColumnBtnAdd:!0},prefill:{parentId:"id"},promiseForSelect:e.promiseForSelect,fullHeight:""}})],1)},l=[],o=(a("e18c"),a("0e4d")),s=a("94ef"),c=a("76ff"),u=a("3a68"),d=a("d1a9"),f=a("e4a1"),b=(n=Object(f["a"])({name:"Dept"}),n(i=function(e){Object(c["a"])(a,e);var t=Object(u["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return Object(s["a"])(a,[{key:"promiseForSelect",value:function(){return new Promise((function(e,t){Object(d["b"])(d["a"].TREE,"dept").then((function(t){e(t)})).catch((function(e){return t(e)}))}))}}]),a}(f["c"]))||i),p=b,h=a("5d22"),m=Object(h["a"])(p,r,l,!1,null,"737eb2ad",null);t["default"]=m.exports},ba5b:function(e,t,a){"use strict"},f4dc:function(e,t,a){},fc70:function(e,t,a){"use strict";a("6805")}}]);