(()=>{var e,t={9198:(e,t,r)=>{"use strict";r.r(t);var o=r(9307),s=r(5736);const n=window.wp.blocks;var a=r(1984),i=r(7713);r(6990);const l=window.wp.blockEditor,c=window.wp.components,d=window.wc.wcSettings;var w=r(7329),u=r(4184),m=r.n(u);const p=window.wp.escapeHtml,g=({error:e})=>(0,o.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,o.createElement)("span",null,(0,s.__)("The following error was returned","woocommerce"),(0,o.createElement)("br",null),(0,o.createElement)("code",null,(0,p.escapeHTML)(e))):"api"===t?(0,o.createElement)("span",null,(0,s.__)("The following error was returned from the API","woocommerce"),(0,o.createElement)("br",null),(0,o.createElement)("code",null,(0,p.escapeHTML)(e))):e:(0,s.__)("An error has prevented the block from being updated.","woocommerce"))(e));r(2513);const b=({className:e,error:t,isLoading:r=!1,onRetry:n})=>(0,o.createElement)(c.Placeholder,{icon:(0,o.createElement)(a.Z,{icon:w.Z}),label:(0,s.__)("Sorry, an error occurred","woocommerce"),className:m()("wc-block-api-error",e)},(0,o.createElement)(g,{error:t}),n&&(0,o.createElement)(o.Fragment,null,r?(0,o.createElement)(c.Spinner,null):(0,o.createElement)(c.Button,{isSecondary:!0,onClick:n},(0,s.__)("Retry","woocommerce"))));r(7349);const h=({label:e,screenReaderLabel:t,wrapperElement:r,wrapperProps:s={}})=>{let n;const a=null!=e,i=null!=t;return!a&&i?(n=r||"span",s={...s,className:m()(s.className,"screen-reader-text")},(0,o.createElement)(n,{...s},t)):(n=r||o.Fragment,a&&i&&e!==t?(0,o.createElement)(n,{...s},(0,o.createElement)("span",{"aria-hidden":"true"},e),(0,o.createElement)("span",{className:"screen-reader-text"},t)):(0,o.createElement)(n,{...s},e))},v=({onClick:e,label:t=(0,s.__)("Load more","woocommerce"),screenReaderLabel:r=(0,s.__)("Load more","woocommerce")})=>(0,o.createElement)("div",{className:"wp-block-button wc-block-load-more wc-block-components-load-more"},(0,o.createElement)("button",{className:"wp-block-button__link",onClick:e},(0,o.createElement)(h,{label:t,screenReaderLabel:r})));var _=r(4333);r(9421);const k=(0,_.withInstanceId)((({className:e,instanceId:t,label:r="",onChange:s,options:n,screenReaderLabel:a,value:i=""})=>{const l=`wc-block-components-sort-select__select-${t}`;return(0,o.createElement)("div",{className:m()("wc-block-sort-select","wc-block-components-sort-select",e)},(0,o.createElement)(h,{label:r,screenReaderLabel:a,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label wc-block-components-sort-select__label",htmlFor:l}}),(0,o.createElement)("select",{id:l,className:"wc-block-sort-select__select wc-block-components-sort-select__select",onChange:s,value:i},n&&n.map((e=>(0,o.createElement)("option",{key:e.key,value:e.key},e.label)))))}));r(8543);const y=({onChange:e,readOnly:t,value:r})=>(0,o.createElement)(k,{className:"wc-block-review-sort-select wc-block-components-review-sort-select",label:(0,s.__)("Order by","woocommerce"),onChange:e,options:[{key:"most-recent",label:(0,s.__)("Most recent","woocommerce")},{key:"highest-rating",label:(0,s.__)("Highest rating","woocommerce")},{key:"lowest-rating",label:(0,s.__)("Lowest rating","woocommerce")}],readOnly:t,screenReaderLabel:(0,s.__)("Order reviews by","woocommerce"),value:r});var R=r(4942);function f(e){let t,r,o,s=[];for(let n=0;n<e.length;n++)t=e.substring(n),r=t.match(/^&[a-z0-9#]+;/),r?(o=r[0],s.push(o),n+=o.length-1):s.push(e[n]);return s}const E=(e,t,r="...")=>{const o=function(e,t){const r=(t=t||{}).limit||100,o=void 0===t.preserveTags||t.preserveTags,s=void 0!==t.wordBreak&&t.wordBreak,n=t.suffix||"...",a=t.moreLink||"",i=t.moreText||"»",l=t.preserveWhiteSpace||!1,c=e.replace(/</g,"\n<").replace(/>/g,">\n").replace(/\n\n/g,"\n").replace(/^\n/g,"").replace(/\n$/g,"").split("\n");let d,w,u,m,p,g,b=0,h=[],v=!1;for(let e=0;e<c.length;e++){if(d=c[e],m=l?d:d.replace(/[ ]+/g," "),!d.length)continue;const t=f(m);if("<"!==d[0])if(b>=r)d="";else if(b+t.length>=r){if(w=r-b," "===t[w-1])for(;w&&(w-=1," "===t[w-1]););else u=t.slice(w).indexOf(" "),s||(-1!==u?w+=u:w=d.length);d=t.slice(0,w).join("")+n,a&&(d+='<a href="'+a+'" style="display:inline">'+i+"</a>"),b=r,v=!0}else b+=t.length;else if(o){if(b>=r)if(p=d.match(/[a-zA-Z]+/),g=p?p[0]:"",g)if("</"!==d.substring(0,2))h.push(g),d="";else{for(;h[h.length-1]!==g&&h.length;)h.pop();h.length&&(d=""),h.pop()}else d=""}else d="";c[e]=d}return{html:c.join("\n").replace(/\n/g,""),more:v}}(e,{suffix:r,limit:t});return o.html},S=(e,t,r)=>(t<=r?e.start=e.middle+1:e.end=e.middle-1,e),T=(e,t,r,o)=>{const s=((e,t,r)=>{let o={start:0,middle:0,end:e.length};for(;o.start<=o.end;)o.middle=Math.floor((o.start+o.end)/2),t.innerHTML=E(e,o.middle),o=S(o,t.clientHeight,r);return o.middle})(e,t,r);return E(e,s-o.length,o)},O={className:"read-more-content",ellipsis:"&hellip;",lessText:(0,s.__)("Read less","woocommerce"),maxLines:3,moreText:(0,s.__)("Read more","woocommerce")};class C extends o.Component{constructor(e){super(e),(0,R.Z)(this,"reviewSummary",void 0),(0,R.Z)(this,"reviewContent",void 0),this.state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},this.reviewContent=(0,o.createRef)(),this.reviewSummary=(0,o.createRef)(),this.getButton=this.getButton.bind(this),this.onClick=this.onClick.bind(this)}componentDidMount(){this.setSummary()}componentDidUpdate(e){e.maxLines===this.props.maxLines&&e.children===this.props.children||this.setState({clampEnabled:null,summary:"."},this.setSummary)}setSummary(){if(this.props.children){const{maxLines:e,ellipsis:t}=this.props;if(!this.reviewSummary.current||!this.reviewContent.current)return;const r=(this.reviewSummary.current.clientHeight+1)*e+1,o=this.reviewContent.current.clientHeight+1>r;this.setState({clampEnabled:o}),o&&this.setState({summary:T(this.reviewContent.current.innerHTML,this.reviewSummary.current,r,t)})}}getButton(){const{isExpanded:e}=this.state,{className:t,lessText:r,moreText:s}=this.props,n=e?r:s;if(n)return(0,o.createElement)("a",{href:"#more",className:t+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},n)}onClick(e){e.preventDefault();const{isExpanded:t}=this.state;this.setState({isExpanded:!t})}render(){const{className:e}=this.props,{content:t,summary:r,clampEnabled:s,isExpanded:n}=this.state;return t?!1===s?(0,o.createElement)("div",{className:e},(0,o.createElement)("div",{ref:this.reviewContent},t)):(0,o.createElement)("div",{className:e},(!n||null===s)&&(0,o.createElement)("div",{ref:this.reviewSummary,"aria-hidden":n,dangerouslySetInnerHTML:{__html:r}}),(n||null===s)&&(0,o.createElement)("div",{ref:this.reviewContent,"aria-hidden":!n},t),this.getButton()):null}}(0,R.Z)(C,"defaultProps",O);const N=C;r(8204);const P=({attributes:e,review:t={}})=>{const{imageType:r,showReviewDate:n,showReviewerName:a,showReviewImage:i,showReviewRating:l,showReviewContent:c,showProductName:d}=e,{rating:w}=t,u=!(Object.keys(t).length>0),p=Number.isFinite(w)&&l;return(0,o.createElement)("li",{className:m()("wc-block-review-list-item__item","wc-block-components-review-list-item__item",{"is-loading":u,"wc-block-components-review-list-item__item--has-image":i}),"aria-hidden":u},(d||n||a||i||p)&&(0,o.createElement)("div",{className:"wc-block-review-list-item__info wc-block-components-review-list-item__info"},i&&function(e,t,r){var n,a;return r||!e?(0,o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"}):(0,o.createElement)("div",{className:"wc-block-review-list-item__image wc-block-components-review-list-item__image"},"product"===t?(0,o.createElement)("img",{"aria-hidden":"true",alt:(null===(n=e.product_image)||void 0===n?void 0:n.alt)||"",src:(null===(a=e.product_image)||void 0===a?void 0:a.thumbnail)||""}):(0,o.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[96]||""}),e.verified&&(0,o.createElement)("div",{className:"wc-block-review-list-item__verified wc-block-components-review-list-item__verified",title:(0,s.__)("Verified buyer","woocommerce")},(0,s.__)("Verified buyer","woocommerce")))}(t,r,u),(d||a||p||n)&&(0,o.createElement)("div",{className:"wc-block-review-list-item__meta wc-block-components-review-list-item__meta"},p&&function(e){const{rating:t}=e,r={width:t/5*100+"%"},n=(0,s.sprintf)(/* translators: %f is referring to the average rating value */
(0,s.__)("Rated %f out of 5","woocommerce"),t),a={__html:(0,s.sprintf)(/* translators: %s is referring to the average rating value */
(0,s.__)("Rated %s out of 5","woocommerce"),(0,s.sprintf)('<strong class="rating">%f</strong>',t))};return(0,o.createElement)("div",{className:"wc-block-review-list-item__rating wc-block-components-review-list-item__rating"},(0,o.createElement)("div",{className:"wc-block-review-list-item__rating__stars wc-block-components-review-list-item__rating__stars",role:"img","aria-label":n},(0,o.createElement)("span",{style:r,dangerouslySetInnerHTML:a})))}(t),d&&function(e){return(0,o.createElement)("div",{className:"wc-block-review-list-item__product wc-block-components-review-list-item__product"},(0,o.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(t),a&&function(e){const{reviewer:t=""}=e;return(0,o.createElement)("div",{className:"wc-block-review-list-item__author wc-block-components-review-list-item__author"},t)}(t),n&&function(e){const{date_created:t,formatted_date_created:r}=e;return(0,o.createElement)("time",{className:"wc-block-review-list-item__published-date wc-block-components-review-list-item__published-date",dateTime:t},r)}(t))),c&&function(e){return(0,o.createElement)(N,{maxLines:10,moreText:(0,s.__)("Read full review","woocommerce"),lessText:(0,s.__)("Hide full review","woocommerce"),className:"wc-block-review-list-item__text wc-block-components-review-list-item__text"},(0,o.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(t))};r(4093);const L=({attributes:e,reviews:t})=>{const r=(0,d.getSetting)("showAvatars",!0),s=(0,d.getSetting)("reviewRatingsEnabled",!0),n=(r||"product"===e.imageType)&&e.showReviewImage,a=s&&e.showReviewRating,i={...e,showReviewImage:n,showReviewRating:a};return(0,o.createElement)("ul",{className:"wc-block-review-list wc-block-components-review-list"},0===t.length?(0,o.createElement)(P,{attributes:i}):t.map(((e,t)=>(0,o.createElement)(P,{key:e.id||t,attributes:i,review:e}))))};var A=r(9127),x=r.n(A);const I=window.wp.apiFetch;var M=r.n(I);const j=e=>{const{className:t,categoryIds:r,productId:o,showReviewDate:s,showReviewerName:n,showReviewContent:a,showProductName:i,showReviewImage:l,showReviewRating:c}=e;let d="wc-block-all-reviews";return o&&(d="wc-block-reviews-by-product"),Array.isArray(r)&&(d="wc-block-reviews-by-category"),m()(d,t,{"has-image":l,"has-name":n,"has-date":s,"has-rating":c,"has-content":a,"has-product-name":i})},D=e=>{const{categoryIds:t,imageType:r,orderby:o,productId:s,reviewsOnPageLoad:n,reviewsOnLoadMore:a,showLoadMore:i,showOrderby:l}=e,c={"data-image-type":r,"data-orderby":o,"data-reviews-on-page-load":n,"data-reviews-on-load-more":a,"data-show-load-more":i,"data-show-orderby":l};return s&&(c["data-product-id"]=s),Array.isArray(t)&&(c["data-category-ids"]=t.join(",")),c};class B extends o.Component{render(){const{attributes:e,error:t,isLoading:r,noReviewsPlaceholder:n,reviews:a,totalReviews:i}=this.props;if(t)return(0,o.createElement)(b,{className:"wc-block-featured-product-error",error:t,isLoading:r});if(0===a.length&&!r)return(0,o.createElement)(n,{attributes:e});const l=(0,d.getSetting)("reviewRatingsEnabled",!0);return(0,o.createElement)(c.Disabled,null,e.showOrderby&&l&&(0,o.createElement)(y,{readOnly:!0,value:e.orderby,onChange:()=>null}),(0,o.createElement)(L,{attributes:e,reviews:a}),e.showLoadMore&&i>a.length&&(0,o.createElement)(v,{screenReaderLabel:(0,s.__)("Load more reviews","woocommerce")}))}}const Z=(e=>{class t extends o.Component{constructor(...e){super(...e),(0,R.Z)(this,"isPreview",!!this.props.attributes.previewReviews),(0,R.Z)(this,"delayedAppendReviews",this.props.delayFunction(this.appendReviews)),(0,R.Z)(this,"isMounted",!1),(0,R.Z)(this,"state",{error:null,loading:!0,reviews:this.isPreview?this.props.attributes.previewReviews:[],totalReviews:this.isPreview?this.props.attributes.previewReviews.length:0}),(0,R.Z)(this,"setError",(async e=>{if(!this.isMounted)return;const{onReviewsLoadError:t}=this.props,r=await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e);this.setState({reviews:[],loading:!1,error:r}),t(r)}))}componentDidMount(){this.isMounted=!0,this.replaceReviews()}componentDidUpdate(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}shouldReplaceReviews(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!x()(e.categoryIds,t.categoryIds)}componentWillUnmount(){this.isMounted=!1,this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}getArgs(e){const{categoryIds:t,order:r,orderby:o,productId:s,reviewsToDisplay:n}=this.props,a={order:r,orderby:o,per_page:n-e,offset:e};if(t){const e=Array.isArray(t)?t:JSON.parse(t);a.category_id=Array.isArray(e)?e.join(","):e}return s&&(a.product_id=s),a}replaceReviews(){if(this.isPreview)return;const{onReviewsReplaced:e}=this.props;this.updateListOfReviews().then(e)}appendReviews(){if(this.isPreview)return;const{onReviewsAppended:e,reviewsToDisplay:t}=this.props,{reviews:r}=this.state;t<=r.length||this.updateListOfReviews(r).then(e)}updateListOfReviews(e=[]){const{reviewsToDisplay:t}=this.props,{totalReviews:r}=this.state,o=Math.min(r,t)-e.length;return this.setState({loading:!0,reviews:e.concat(Array(o).fill({}))}),(s=this.getArgs(e.length),M()({path:"/wc/store/v1/products/reviews?"+Object.entries(s).map((e=>e.join("="))).join("&"),parse:!1}).then((e=>e.json().then((t=>({reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)})))))).then((({reviews:t,totalReviews:r})=>(this.isMounted&&this.setState({reviews:e.filter((e=>Object.keys(e).length)).concat(t),totalReviews:r,loading:!1,error:null}),{newReviews:t}))).catch(this.setError);var s}render(){const{reviewsToDisplay:t}=this.props,{error:r,loading:s,reviews:n,totalReviews:a}=this.state;return(0,o.createElement)(e,{...this.props,error:r,isLoading:s,reviews:n.slice(0,t),totalReviews:a})}}(0,R.Z)(t,"defaultProps",{delayFunction:e=>e,onReviewsAppended:()=>{},onReviewsLoadError:()=>{},onReviewsReplaced:()=>{}});const{displayName:r=e.name||"Component"}=e;return t.displayName=`WithReviews( ${r} )`,t})(B),H=({attributes:e,icon:t,name:r,noReviewsPlaceholder:n})=>{const{categoryIds:a,productId:i,reviewsOnPageLoad:w,showProductName:u,showReviewDate:m,showReviewerName:p,showReviewContent:g,showReviewImage:b,showReviewRating:h}=e,{order:v,orderby:_}=(e=>{if((0,d.getSetting)("reviewRatingsEnabled",!0)){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}})(e.orderby),k=!(g||h||m||p||b||u),y=(0,l.useBlockProps)({className:j(e)});return k?(0,o.createElement)(c.Placeholder,{icon:t,label:r},(0,s.__)("The content for this block is hidden due to block settings.","woocommerce")):(0,o.createElement)("div",{...y},(0,o.createElement)(Z,{attributes:e,categoryIds:a,delayFunction:e=>((e,t,r)=>{let o,s=null;const n=(...t)=>{s=t,o&&clearTimeout(o),o=setTimeout((()=>{o=null,s&&e(...s)}),400)};return n.flush=()=>{o&&s&&(e(...s),clearTimeout(o),o=null)},n})(e),noReviewsPlaceholder:n,orderby:_,order:v,productId:i,reviewsToDisplay:w}))},G=()=>(0,o.createElement)(c.Placeholder,{className:"wc-block-all-reviews",icon:(0,o.createElement)(a.Z,{icon:i.Z,className:"block-editor-block-icon"}),label:(0,s.__)("All Reviews","woocommerce")},(0,s.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.","woocommerce")),F=({attributes:e,setAttributes:t})=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,{key:"inspector"},(0,o.createElement)(c.PanelBody,{title:(0,s.__)("Content","woocommerce")},(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Product name","woocommerce"),checked:e.showProductName,onChange:()=>t({showProductName:!e.showProductName})}),((e,t)=>{const r=(0,d.getSetting)("showAvatars",!0),n=(0,d.getSetting)("reviewRatingsEnabled",!0);return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Product rating","woocommerce"),checked:e.showReviewRating,onChange:()=>t({showReviewRating:!e.showReviewRating})}),e.showReviewRating&&!n&&(0,o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},(0,o.createInterpolateElement)((0,s.__)("Product rating is disabled in your <a>store settings</a>.","woocommerce"),{a:(0,o.createElement)("a",{href:(0,d.getAdminLink)("admin.php?page=wc-settings&tab=products"),target:"_blank",rel:"noopener noreferrer"})})),(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Reviewer name","woocommerce"),checked:e.showReviewerName,onChange:()=>t({showReviewerName:!e.showReviewerName})}),(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Image","woocommerce"),checked:e.showReviewImage,onChange:()=>t({showReviewImage:!e.showReviewImage})}),(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Review date","woocommerce"),checked:e.showReviewDate,onChange:()=>t({showReviewDate:!e.showReviewDate})}),(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Review content","woocommerce"),checked:e.showReviewContent,onChange:()=>t({showReviewContent:!e.showReviewContent})}),e.showReviewImage&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.__experimentalToggleGroupControl,{label:(0,s.__)("Review image","woocommerce"),value:e.imageType,onChange:e=>t({imageType:e})},(0,o.createElement)(c.__experimentalToggleGroupControlOption,{value:"reviewer",label:(0,s.__)("Reviewer photo","woocommerce")}),(0,o.createElement)(c.__experimentalToggleGroupControlOption,{value:"product",label:(0,s.__)("Product","woocommerce")})),"reviewer"===e.imageType&&!r&&(0,o.createElement)(c.Notice,{className:"wc-block-base-control-notice",isDismissible:!1},(0,o.createInterpolateElement)((0,s.__)("Reviewer photo is disabled in your <a>site settings</a>.","woocommerce"),{a:(0,o.createElement)("a",{href:(0,d.getAdminLink)("options-discussion.php"),target:"_blank",rel:"noopener noreferrer"})}))))})(e,t)),(0,o.createElement)(c.PanelBody,{title:(0,s.__)("List Settings","woocommerce")},((e,t)=>(0,o.createElement)(o.Fragment,null,(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Order by","woocommerce"),checked:e.showOrderby,onChange:()=>t({showOrderby:!e.showOrderby})}),(0,o.createElement)(c.SelectControl,{label:(0,s.__)("Order Product Reviews by","woocommerce"),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:e=>t({orderby:e})}),(0,o.createElement)(c.RangeControl,{label:(0,s.__)("Starting Number of Reviews","woocommerce"),value:e.reviewsOnPageLoad,onChange:e=>t({reviewsOnPageLoad:e}),max:20,min:1}),(0,o.createElement)(c.ToggleControl,{label:(0,s.__)("Load more","woocommerce"),checked:e.showLoadMore,onChange:()=>t({showLoadMore:!e.showLoadMore})}),e.showLoadMore&&(0,o.createElement)(c.RangeControl,{label:(0,s.__)("Load More Reviews","woocommerce"),value:e.reviewsOnLoadMore,onChange:e=>t({reviewsOnLoadMore:e}),max:20,min:1})))(e,t))),(0,o.createElement)(H,{attributes:e,icon:(0,o.createElement)(a.Z,{icon:i.Z,className:"block-editor-block-icon"}),name:(0,s.__)("All Reviews","woocommerce"),noReviewsPlaceholder:G}));var W;const U=(0,d.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),J=(U.pluginUrl,U.pluginUrl,U.buildPhase,null===(W=d.STORE_PAGES.shop)||void 0===W||W.permalink,d.STORE_PAGES.checkout.id,d.STORE_PAGES.checkout.permalink,d.STORE_PAGES.privacy.permalink,d.STORE_PAGES.privacy.title,d.STORE_PAGES.terms.permalink,d.STORE_PAGES.terms.title,d.STORE_PAGES.cart.id,d.STORE_PAGES.cart.permalink,d.STORE_PAGES.myaccount.permalink?d.STORE_PAGES.myaccount.permalink:(0,d.getSetting)("wpLoginUrl","/wp-login.php"),(0,d.getSetting)("localPickupEnabled",!1),(0,d.getSetting)("countries",{})),$=(0,d.getSetting)("countryData",{}),z=(Object.fromEntries(Object.keys($).filter((e=>!0===$[e].allowBilling)).map((e=>[e,J[e]||""]))),Object.fromEntries(Object.keys($).filter((e=>!0===$[e].allowBilling)).map((e=>[e,$[e].states||[]]))),Object.fromEntries(Object.keys($).filter((e=>!0===$[e].allowShipping)).map((e=>[e,J[e]||""]))),Object.fromEntries(Object.keys($).filter((e=>!0===$[e].allowShipping)).map((e=>[e,$[e].states||[]]))),Object.fromEntries(Object.keys($).map((e=>[e,$[e].locale||[]]))),{attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:(0,s.__)("July 15, 2019","woocommerce"),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:(0,s.__)("WordPress Pennant","woocommerce"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:(0,s.__)("Alice","woocommerce"),review:`<p>${(0,s.__)("I bought this product last week and I'm very happy with it.","woocommerce")}</p>\n`,reviewer_avatar_urls:{48:U.defaultAvatar,96:U.defaultAvatar},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:(0,s.__)("July 12, 2019","woocommerce"),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:(0,s.__)("WordPress Pennant","woocommerce"),product_permalink:"#",
/* translators: An example person name used for the block previews. */
reviewer:(0,s.__)("Bob","woocommerce"),review:`<p>${(0,s.__)("This product is awesome, I love it!","woocommerce")}</p>\n`,reviewer_avatar_urls:{48:U.defaultAvatar,96:U.defaultAvatar},rating:null,verified:!1}]}});(0,n.registerBlockType)("woocommerce/all-reviews",{apiVersion:2,title:(0,s.__)("All Reviews","woocommerce"),icon:{src:(0,o.createElement)(a.Z,{icon:i.Z,className:"wc-block-editor-components-block-icon"})},category:"woocommerce",keywords:[(0,s.__)("WooCommerce","woocommerce")],description:(0,s.__)("Show a list of all product reviews.","woocommerce"),supports:{html:!1,color:{background:!1},typography:{fontSize:!0}},example:{...z,attributes:{...z.attributes,showProductName:!0}},attributes:{editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null},showProductName:{type:"boolean",default:!0}},transforms:{from:[{type:"block",blocks:["core/legacy-widget"],isMatch:({idBase:e,instance:t})=>"woocommerce_recent_reviews"===e&&!(null==t||!t.raw),transform:({instance:e})=>(0,n.createBlock)("woocommerce/all-reviews",{reviewsOnPageLoad:e.raw.number,imageType:"product",showLoadMore:!1,showOrderby:!1,showReviewDate:!1,showReviewContent:!1})}]},edit:e=>{const t=(0,l.useBlockProps)();return(0,o.createElement)("div",{...t},(0,o.createElement)(F,{...e}))},save:({attributes:e})=>(0,o.createElement)("div",{...l.useBlockProps.save({className:j(e)}),...D(e)})})},7349:()=>{},8204:()=>{},4093:()=>{},8543:()=>{},9421:()=>{},6990:()=>{},2513:()=>{},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},9127:e=>{"use strict";e.exports=window.wp.isShallowEqual},444:e=>{"use strict";e.exports=window.wp.primitives}},r={};function o(e){var s=r[e];if(void 0!==s)return s.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,o),n.exports}o.m=t,e=[],o.O=(t,r,s,n)=>{if(!r){var a=1/0;for(d=0;d<e.length;d++){for(var[r,s,n]=e[d],i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(d--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,s,n]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j=5456,(()=>{var e={5456:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var s,n,[a,i,l]=r,c=0;if(a.some((t=>0!==e[t]))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var d=l(o)}for(t&&t(r);c<a.length;c++)n=a[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(d)},r=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var s=o.O(void 0,[2869],(()=>o(9198)));s=o.O(s),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["all-reviews"]=s})();