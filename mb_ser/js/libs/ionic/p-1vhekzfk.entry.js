import{r as t,c as o,e as n,d as r,h as s,H as e}from"./p-4c3fdda3.js";import"./p-9825fcb7.js";import{e as i}from"./p-0af5fad6.js";import{o as a,c}from"./p-72ca39bb.js";const h=class{constructor(n){t(this,n),this.url="",this.ionRouteDataChanged=o(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,o){if(t===o)return;const n=t?Object.keys(t):[],r=o?Object.keys(o):[];if(n.length===r.length){for(const s of n)if(t[s]!==o[s])return void this.onUpdate(t)}else this.onUpdate(t)}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},u=class{constructor(n){t(this,n),this.ionRouteRedirectChanged=o(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},l=t=>"/"+t.filter(t=>t.length>0).join("/"),f=t=>{if(null==t)return[""];const o=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===o.length?[""]:o},d=async(t,o,n,r,s=!1)=>{try{const e=p(t);if(r>=o.length||!e)return s;await e.componentOnReady();const i=o[r],a=await e.setRouteId(i.id,i.params,n);return a.changed&&(n="root",s=!0),s=await d(a.element,o,n,r+1,s),a.markVisible&&await a.markVisible(),s}catch(e){return console.error(e),!1}},w=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",p=t=>{if(!t)return;if(t.matches(w))return t;return t.querySelector(w)||void 0},m=(t,o)=>o.find(o=>((t,o)=>{const{from:n,to:r}=o;if(void 0===r)return!1;if(n.length>t.length)return!1;for(let s=0;s<n.length;s++){const o=n[s];if("*"===o)return!0;if(o!==t[s])return!1}return n.length===t.length})(t,o)),g=(t,o)=>{const n=Math.min(t.length,o.length);let r=0;for(;r<n&&t[r].toLowerCase()===o[r].id;r++);return r},C=(t,o)=>{const n=new y(t);let r,s=!1;for(let e=0;e<o.length;e++){const t=o[e].path;if(""===t[0])s=!0;else{for(const o of t){const t=n.next();if(":"===o[0]){if(""===t)return null;((r=r||[])[e]||(r[e]={}))[o.slice(1)]=t}else if(t!==o)return null}s=!1}}return s&&s!==(""===n.next())?null:r?o.map((t,o)=>({id:t.id,path:t.path,params:R(t.params,r[o])})):o},R=(t,o)=>!t&&o?o:t&&!o?t:t&&o?Object.assign(Object.assign({},t),o):void 0,b=t=>{let o=1,n=1;for(const r of t)for(const t of r.path)":"===t[0]?o+=Math.pow(1,n):""!==t&&(o+=Math.pow(2,n)),n++;return o};class y{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const v=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const o=D(t,"to");return{from:f(D(t,"from")),to:null==o?void 0:f(o)}}),E=t=>j(O(t)),O=(t,o=t)=>Array.from(o.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(o=>{const n=D(o,"component");if(null==n)throw new Error("component missing in ion-route");return{path:f(D(o,"url")),id:n.toLowerCase(),params:o.componentProps,children:O(t,o)}}),D=(t,o)=>o in t?t[o]:t.hasAttribute(o)?t.getAttribute(o):null,j=t=>{const o=[];for(const n of t)P([],o,n);return o},P=(t,o,n)=>{const r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(const s of n.children)P(r,o,s);else o.push(r)},k=class{constructor(n){t(this,n),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=o(this,"ionRouteWillChange",7),this.ionRouteDidChange=o(this,"ionRouteDidChange",7)}async componentWillLoad(){await(()=>p(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}))(),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",i(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",i(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),o=this.getPath();return this.writeNavStateRoot(o,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,o="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);const n=f(t);return this.setPath(n,o),this.writeNavStateRoot(n,o)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){this.getPath(),(t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const o of t){const t=[];o.forEach(o=>t.push(...o.path));const n=o.map(t=>t.id);l(t),n.join(", ")}console.groupEnd()})(E(this.el)),(t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const o of t)o.to&&(l(o.from),l(o.to));console.groupEnd()})(v(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:o,outlet:n}=await(async()=>{const t=[];let o,n=window.document.body;for(;o=p(n);){const r=await o.getRouteId();if(!r)break;n=r.element,r.element=void 0,t.push(r)}return{ids:t,outlet:o}})(),r=((t,o)=>{let n=null,r=0;const s=t.map(t=>t.id);for(const e of o){const t=g(s,e);t>r&&(n=e,r=t)}return n?n.map((o,n)=>({id:o.id,path:o.path,params:R(o.params,t[n]&&t[n].params)})):null})(o,E(this.el));if(!r)return console.warn("[ion-router] no matching URL for ",o.map(t=>t.id)),!1;const s=(t=>{const o=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const r=n.params&&n.params[t.slice(1)];if(!r)return null;o.push(r)}else""!==t&&o.push(t);return o})(r);return s?(this.setPath(s,t),await this.safeWriteNavState(n,r,"root",s,null,o.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&m(t,v(this.el))&&this.writeNavStateRoot(t,"root")}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),"root")}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const o=t.history.state,n=this.lastState;return this.lastState=o,o>n?"forward":o<n?"back":"root"}async writeNavStateRoot(t,o){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=v(this.el),r=m(t,n);let s=null;r&&(this.setPath(r.to,o),s=r.from,t=r.to);const e=((t,o)=>{let n=null,r=0;for(const s of o){const o=C(t,s);if(null!==o){const t=b(o);t>r&&(r=t,n=o)}}return n})(t,E(this.el));return e?this.safeWriteNavState(document.body,e,o,t,s):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,o,n,r,s,e=0){const i=await this.lock();let a=!1;try{a=await this.writeNavState(t,o,n,r,s,e)}catch(c){console.error(c)}return i(),a}async lock(){const t=this.waitPromise;let o;return this.waitPromise=new Promise(t=>o=t),void 0!==t&&await t,o}async writeNavState(t,o,n,r,s,e=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const i=this.routeChangeEvent(r,s);i&&this.ionRouteWillChange.emit(i);const a=await d(t,o,n,e);return this.busy=!1,i&&this.ionRouteDidChange.emit(i),a}setPath(t,o){this.state++,((t,o,n,r,s,e)=>{let i=l([...f(this.root),...r]);n&&(i="#"+i),"forward"===s?t.pushState(e,"",i):t.replaceState(e,"",i)})(window.history,0,this.useHash,t,o,this.state)}getPath(){return((t,o)=>{let n=t.pathname;if(this.useHash){const o=t.hash;n="#"===o[0]?o.slice(1):""}return((t,o)=>{if(t.length>o.length)return null;if(t.length<=1&&""===t[0])return o;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==o[n])return null;return o.length===t.length?[""]:o.slice(t.length)})(f(o),f(n))})(window.location,this.root)}routeChangeEvent(t,o){const n=this.previousPath,r=l(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:o?l(o):null,to:r}}get el(){return n(this)}},L=class{constructor(o){t(this,o),this.routerDirection="forward",this.onClick=t=>{a(this.href,t,this.routerDirection)}}render(){const t=r(this),o={href:this.href,rel:this.rel,target:this.target};return s(e,{onClick:this.onClick,class:Object.assign(Object.assign({},c(this.color)),{[t]:!0,"ion-activatable":!0})},s("a",Object.assign({},o),s("slot",null)))}static get style(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}};export{h as ion_route,u as ion_route_redirect,k as ion_router,L as ion_router_link};