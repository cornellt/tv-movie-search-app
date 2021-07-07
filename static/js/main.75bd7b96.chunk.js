(this["webpackJsonptv-movie-search-app"]=this["webpackJsonptv-movie-search-app"]||[]).push([[0],{76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(25),r=a.n(n),i=a(15),o=a.n(i),l=a(21),d=a(14),h=a(23),j=a.n(h),u=(a(76),a(77),a(78),a(42)),m=a(0);function b(e){return Object(m.jsx)(u.a,{onSubmit:e.handleSubmit,children:Object(m.jsx)(u.a.Control,{className:"border border-secondary text-center",size:e.size,htmlSize:"36",type:"text",placeholder:"Search for a TV show, Movie, or Actor",onChange:function(t){e.onSearchBoxChange(t.target.value)},value:e.inputText})})}var x=a(52),p=a(41),O=a(10);function g(e){var t=function(t){t.preventDefault(),e.searchRequest(e.inputText)};return Object(m.jsxs)(p.a,{fixed:"top",bg:"dark",variant:"dark",className:"mb-3",children:[Object(m.jsx)(p.a.Brand,{className:"home-button",onClick:e.returnToHomePage,children:"Home"}),Object(m.jsx)(x.a,{className:"mr-auto"}),Object(m.jsx)(b,{size:"md",handleSubmit:t,onSearchBoxChange:e.onSearchBoxChange,inputText:e.inputText}),Object(m.jsx)(O.a,{className:"mx-2",variant:"outline-secondary",onClick:t,children:"Search"})]})}a(83);var f=a(27),v=a(20);function w(e){var t=function(t){t.preventDefault(),e.searchRequest(e.inputText)};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v.a,{className:"hero-img",src:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"}),Object(m.jsx)(f.a,{fluid:!0,children:Object(m.jsxs)(f.a,{fluid:!0,className:"w-75 search-area",children:[Object(m.jsx)(b,{size:"lg",handleSubmit:t,onSearchBoxChange:e.onSearchBoxChange,inputText:e.inputText}),Object(m.jsx)(O.a,{variant:"secondary",onClick:t,className:"m-2",children:"Search"})]})}),Object(m.jsx)("footer",{className:"footer footer-dark",children:Object(m.jsxs)("span",{className:"footer-text",children:["This product uses the ",Object(m.jsx)("a",{className:"tmdb-link",href:"https://www.themoviedb.org/documentation/api",rel:"noreferrer",target:"_blank",children:"TMDb API"})," but is not endorsed or certified by TMDb."]})})]})}a(84),a(85);var N=a(28),y=a(5);a(86);function _(e){var t=e.data,a=t.poster_path;return Object(m.jsxs)(y.a,{className:"cast-card shadow-sm mx-1 my-1 bg-light",onClick:function(){return e.handleChangeFocus(e.data)},id:t.id,children:[Object(m.jsx)(y.a.Img,{className:"cast-poster mt-1 mx-auto",variant:"top",src:a?"https://image.tmdb.org/t/p/w500"+a:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}),Object(m.jsxs)(y.a.Body,{children:[Object(m.jsx)(y.a.Title,{children:e.role}),Object(m.jsxs)(y.a.Text,{children:[Object(m.jsx)("span",{className:"text-muted",children:"in "}),Object(m.jsx)("br",{}),"movie"===t.media_type?t.title:t.name]})]})]},e.index)}var C=a(7),T=a(13),F=a(17),R="8aaeb5fa2472dd850f957c983d0bb2e1",D="https://api.themoviedb.org/3/";function S(e){var t=Object(s.useState)([]),a=Object(d.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),h=i[0],u=i[1];Object(s.useEffect)((function(){function t(){return(t=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id){e.next=13;break}return a=D+"person/"+t.id+"/combined_credits?api_key="+R+"&language=en-US",e.prev=2,e.next=5,j.a.get(a);case 5:s=e.sent,n(s.data.cast),u(s.data.crew),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}!function(e){t.apply(this,arguments)}(e.data)}),[e.data]);var b,x=function(t){var a={name:t.name,biography:"",birthday:""};return t.biography&&(a.biography=Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{children:"Biography"}),Object(m.jsx)("hr",{}),Object(m.jsx)(y.a.Text,{children:t.biography})]})),t.birthday&&(a.birthday=Object(m.jsxs)("h4",{children:["Born on ",e.formatDate(t.birthday)]})),t.deathday&&(a.deathday=Object(m.jsxs)("h4",{children:["Died on ",e.formatDate(t.deathday)]})),a}(e.data);return Object(m.jsxs)(y.a,{className:"mx-auto my-3 outer-result-card",children:[Object(m.jsxs)(y.a,{className:"inner-result-card py-3 px-3",children:[Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C.a,{lg:!0,className:"my-3 ml-1",children:Object(m.jsxs)(y.a.Title,{className:"mb-0",children:[Object(m.jsx)("h1",{className:"display-4",children:x.name}),Object(m.jsx)(y.a.Img,{className:"my-3 my-2 poster w-75",variant:"top",src:(b=e.data.profile_path,b?"https://image.tmdb.org/t/p/w500/"+b:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1")}),x.birthday,x.deathday]})}),Object(m.jsx)(C.a,{lg:!0,className:"mx-3",children:Object(m.jsx)(y.a.Body,{className:"w-75 mx-auto",children:x.biography})})]}),Object(m.jsx)(T.a,{className:"mx-auto my-2",children:Object(m.jsx)(O.a,{variant:"primary",onClick:e.handleReturnToResults,children:"Return to Search Results"})})]}),function(){if(c.length>0||h.length>0){var t=[];if(c.length>0)for(var a=0;a<200&&a<c.length;a++){var s=c[a];t=[].concat(Object(N.a)(t),[s])}var n=[];if(h.length>0)for(var r=0;r<200&&r<h.length;r++){var i=h[r];n=[].concat(Object(N.a)(n),[i])}return"Acting"===e.data.known_for_department?Object(m.jsx)(y.a.Footer,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C.a,{children:Object(m.jsxs)(y.a,{className:"bg-light",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto mt-2 mb-0",children:Object(m.jsx)("h2",{children:"Acting Roles"})}),Object(m.jsx)(F.a,{children:t.map((function(t,a){return Object(m.jsx)(_,{data:t,role:t.character,handleChangeFocus:e.handleChangeFocus},a)}))})]})}),Object(m.jsx)(C.a,{children:Object(m.jsxs)(y.a,{className:"bg-light",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto mt-2 mb-0",children:Object(m.jsx)("h2",{children:"Production Roles"})}),Object(m.jsx)(F.a,{children:n.map((function(t,a){return Object(m.jsx)(_,{data:t,role:t.department,handleChangeFocus:e.handleChangeFocus},a)}))})]})})]})}):Object(m.jsx)(y.a.Footer,{children:Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C.a,{children:Object(m.jsxs)(y.a,{className:"bg-light",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto mt-2 mb-0",children:Object(m.jsx)("h2",{children:"Production Roles"})}),Object(m.jsx)(F.a,{children:n.map((function(t,a){return Object(m.jsx)(_,{data:t,role:t.department,handleChangeFocus:e.handleChangeFocus},a)}))})]})}),Object(m.jsx)(C.a,{children:Object(m.jsxs)(y.a,{className:"bg-light",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto mt-2 mb-0",children:Object(m.jsx)("h2",{children:"Acting Roles"})}),Object(m.jsx)(F.a,{children:t.map((function(t,a){return Object(m.jsx)(_,{data:t,role:t.character,handleChangeFocus:e.handleChangeFocus},a)}))})]})})]})})}}()]})}var k=a(35);function I(e){var t;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(y.a,{className:"recommendation-card shadow-sm my-1 mx-1",onClick:function(){return e.handleChangeFocus(e.data)},children:[Object(m.jsx)(y.a.Img,{variant:"top recommendation-img",src:(t=e.data.backdrop_path,null===t?"https://fakeimg.pl/640x360":"https://image.tmdb.org/t/p/w500"+t)}),Object(m.jsxs)(y.a.Body,{children:[Object(m.jsx)(y.a.Title,{children:"tv"===e.data.media_type?e.data.name:e.data.title}),Object(m.jsx)(y.a.Text,{className:"text-muted",children:e.data.overview})]})]},e.index)})}a(87);function B(e){var t=e.data;t.media_type="person";var a=t.profile_path;return Object(m.jsxs)(y.a,{className:"mini-cast-card shadow-sm mr-1 bg-light d-flex",onClick:function(){return e.handleChangeFocus(e.data)},id:t.id,children:[Object(m.jsx)(y.a.Img,{className:"mini-cast-poster mt-1 mx-auto",variant:"top",src:a?"https://image.tmdb.org/t/p/w500"+a:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}),Object(m.jsx)(y.a.Body,{children:Object(m.jsxs)(y.a.Text,{className:"wrap-text",children:[e.cast||e.data.jobs?t.job?t.job:t.jobs[0].job:t.roles?t.roles[0].character:t.character,Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"text-muted",children:"movie"===t.media_type?t.title:t.name})]})})]},e.index)}a(88);function M(e){var t=Object(s.useRef)(null);Object(s.useEffect)((function(){t.current.scrollTo(0,0)}));var a=e.rawCastList.slice(0,50);return Object(m.jsx)("div",{ref:t,className:"cast-horiz-scroll d-flex flex-row",children:a.map((function(t,a){return Object(m.jsx)(B,{index:a,data:t,handleChangeFocus:e.handleChangeFocus,cast:!!t.job},a)}))})}function E(e){function t(e){if(e.genres&&e.genres.length>0){var t,a="Genre(s): ",s=Object(k.a)(e.genres);try{for(s.s();!(t=s.n()).done;){a+=t.value.name+", "}}catch(c){s.e(c)}finally{s.f()}return a=a.substr(0,a.length-2),Object(m.jsx)("h5",{children:a})}}function a(e){if(null!==e.homepage&&""!==e.homepage)return Object(m.jsx)("h5",{children:Object(m.jsx)("a",{href:e.homepage,target:"_blank",rel:"noreferrer",children:"Link to Homepage"})})}function c(){if(e.data.credits&&e.data.credits.cast.length>0){var t=e.data.credits.cast.slice(0);return Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"Cast"})}),Object(m.jsx)(M,{rawCastList:t,handleChangeFocus:e.handleChangeFocus})]})}}function n(e){if(e.budget&&e.budget>0){var t=o(e.budget);return Object(m.jsxs)("h5",{children:["Budget: ",t]})}}function r(e){if(e.revenue&&e.revenue>0){var t=o(e.revenue);return Object(m.jsxs)("h5",{children:["Box Office Revenue: ",t]})}}function i(e){if(e.revenue&&e.revenue>0&&e.budget&&e.budget>0){var t=e.revenue-e.budget,a=o(t),s=t>=0?"net-positive":"net-negative";return Object(m.jsxs)("h5",{className:s,children:["Net Income: ",a]})}}function o(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}Object(s.useEffect)((function(){c()&&window.scrollTo(0,0)}));var l=function(s){return{title:s.title,primaryInfo:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h3",{children:["Release Date: ",e.formatDate(s.release_date)]}),s.runtime>0?Object(m.jsxs)("h5",{children:["Runtime: ",(c=s.runtime,c&&c>59?"".concat(Math.floor(c/60)," hrs, ").concat(c%60," min"):"".concat(c," min"))]}):null,t(s),a(s),Object(m.jsx)("hr",{}),Object(m.jsxs)("span",{className:"text-right",children:[n(s),r(s),i(s)]}),n(s)?Object(m.jsx)("hr",{}):Object(m.jsx)("span",{}),Object(m.jsx)("h4",{children:"Overview"})]}),overview:s.overview};var c}(e.data);return Object(m.jsxs)(y.a,{className:"mx-auto my-3 outer-result-card",children:[Object(m.jsxs)(y.a,{className:"inner-result-card py-3 px-3",children:[Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C.a,{lg:!0,className:"mx-2",children:Object(m.jsxs)(y.a.Title,{className:"mb-0 mt-3",children:[Object(m.jsx)(y.a.Text,{className:"text-muted mb-0",children:e.data.tagline}),Object(m.jsx)(y.a.Img,{className:"mx-auto my-2 poster w-75",variant:"top",src:function(){var t=e.data.poster_path;return t?"https://image.tmdb.org/t/p/w500/"+t:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}()})]})}),Object(m.jsx)(C.a,{lg:!0,className:"mx-auto",children:Object(m.jsxs)(y.a.Body,{children:[Object(m.jsx)("h1",{className:"display-4",children:l.title}),Object(m.jsx)("h5",{className:"text-muted",children:"Movie"}),Object(m.jsx)("hr",{}),l.primaryInfo,l.overview]})})]}),Object(m.jsx)(T.a,{className:"mx-auto my-2",children:Object(m.jsx)(O.a,{variant:"primary",onClick:e.handleReturnToResults,children:"Return to Search Results"})})]}),c(),function(){if(e.data.credits&&e.data.credits.crew.length>0)return Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"Crew"})}),Object(m.jsx)(M,{rawCastList:e.data.credits.crew,handleChangeFocus:e.handleChangeFocus})]})}(),function(){if(e.recommendations.length>0)return Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"You Might Also Be Interested In"})}),Object(m.jsx)(F.a,{children:e.recommendations.map((function(t,a){return Object(m.jsx)(I,{index:a,data:t,handleChangeFocus:e.handleChangeFocus},a)}))})]})}()]})}var A=a(51);function z(e){function t(e){if(null!==e.homepage&&""!==e.homepage)return Object(m.jsx)("h5",{children:Object(m.jsx)("a",{href:e.homepage,target:"_blank",rel:"noreferrer",children:"Link to Homepage"})})}function a(){if(e.data.seasons){var t=[];return e.data.seasons.forEach((function(e){0!==e.season_number&&t.push(e)})),Object(m.jsxs)(A.a,{striped:!0,bordered:!0,size:"sm",className:"my-3",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Season"}),Object(m.jsx)("th",{children:"Episodes"})]})}),Object(m.jsxs)("tbody",{children:[t.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t+1}),Object(m.jsx)("td",{children:e.episode_count})]},t)})),Object(m.jsxs)("tr",{children:[Object(m.jsxs)("th",{children:[e.data.number_of_seasons," Seasons"]}),Object(m.jsxs)("th",{children:[e.data.number_of_episodes," Episodes"]})]})]})]})}}function s(e){if(e.genres&&e.genres.length>0){var t,a="Genre(s): ",s=Object(k.a)(e.genres);try{for(s.s();!(t=s.n()).done;){a+=t.value.name+", "}}catch(c){s.e(c)}finally{s.f()}return a=a.substr(0,a.length-2),Object(m.jsx)("h5",{children:a})}}var c=function(c){var n=c.in_production,r=n?"net-positive":"net-negative";return{title:c.name,primaryInfo:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("h3",{children:["First Air Date: ",e.formatDate(c.first_air_date)]}),n?Object(m.jsxs)("h3",{children:["Recent Air Date: ",e.formatDate(c.last_air_date)]}):Object(m.jsxs)("h3",{children:["Final Air Date: ",e.formatDate(c.last_air_date)]}),Object(m.jsx)("h4",{className:r,children:n?"Still in production":"No longer in production"}),s(c),Object(m.jsx)("br",{}),t(c),Object(m.jsx)("hr",{}),Object(m.jsx)("h4",{children:"Overview"})]}),overviewData:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.a.Text,{className:"w-75 mx-auto",children:c.overview}),a()]})}}(e.data);return Object(m.jsxs)(y.a,{className:"mx-auto my-3 outer-result-card",children:[Object(m.jsxs)(y.a,{className:"inner-result-card py-3 px-3",children:[Object(m.jsxs)(T.a,{children:[Object(m.jsx)(C.a,{lg:!0,className:"mx-2",children:Object(m.jsxs)(y.a.Title,{className:"mb-0 mt-3",children:[Object(m.jsx)(y.a.Text,{className:"text-muted mb-0",children:e.data.tagline}),Object(m.jsx)(y.a.Img,{className:"mx-auto my-2 poster w-75",variant:"top",src:function(){var t=e.data.poster_path;return t?"https://image.tmdb.org/t/p/w500/"+t:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}()})]})}),Object(m.jsx)(C.a,{lg:!0,className:"mx-auto",children:Object(m.jsxs)(y.a.Body,{children:[Object(m.jsx)("h1",{className:"display-4",children:c.title}),Object(m.jsx)("h5",{className:"text-muted",children:"TV Show"}),Object(m.jsx)("hr",{}),c.primaryInfo,c.overviewData," "]})})]}),Object(m.jsx)(T.a,{className:"mx-auto my-2",children:Object(m.jsx)(O.a,{variant:"primary",onClick:e.handleReturnToResults,children:"Return to Search Results"})})]}),function(){if(e.data.aggregate_credits&&e.data.aggregate_credits.cast.length>0)return Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"Cast"})}),Object(m.jsx)(M,{rawCastList:e.data.aggregate_credits.cast,handleChangeFocus:e.handleChangeFocus})]})}(),e.data.credits&&e.data.credits.crew.length>0?Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"Crew"})}),Object(m.jsx)(M,{rawCastList:e.data.credits.crew,handleChangeFocus:e.handleChangeFocus})]}):e.data.aggregate_credits&&e.data.aggregate_credits.crew.length>0?Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"Crew"})}),Object(m.jsx)(M,{rawCastList:e.data.aggregate_credits.crew,handleChangeFocus:e.handleChangeFocus})]}):void 0,function(){if(e.recommendations.length>0)return Object(m.jsxs)(y.a.Footer,{className:"mx-1",children:[Object(m.jsx)(y.a.Title,{className:"mx-auto",children:Object(m.jsx)("h2",{children:"You Might Also Be Interested In"})}),Object(m.jsx)(F.a,{children:e.recommendations.map((function(t,a){return Object(m.jsx)(I,{index:a,data:t,handleChangeFocus:e.handleChangeFocus},a)}))})]})}()]})}var H="8aaeb5fa2472dd850f957c983d0bb2e1",L="https://api.themoviedb.org/3/";function P(e){var t=Object(s.useState)({expandedData:{},recommendations:[]}),a=Object(d.a)(t,2),c=a[0],n=a[1];Object(s.useEffect)((function(){h(e.data)}),[e.data]);var r=function(e){return h(e)},i=function(){return e.handleReturnToResults()};function h(e){return u.apply(this,arguments)}function u(){return(u=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=L+t.media_type+"/"+t.id+"?api_key="+H+"&language=en-US&append_to_response=recommendations,credits,aggregate_credits",e.prev=1,e.next=4,j.a.get(a);case 4:s=e.sent,n({expandedData:s.data,recommendations:s.data.recommendations?s.data.recommendations.results:[],type:t.media_type}),window.scrollTo(0,0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(O.a,{className:"mx-auto",variant:"primary",onClick:e.handleReturnToResults,children:"Return to Search Results"}),function(){var t=c.type;return"person"===t?Object(m.jsx)(S,{data:c.expandedData,handleReturnToResults:i,handleChangeFocus:r,formatDate:e.formatDate}):"movie"===t?Object(m.jsx)(E,{data:c.expandedData,recommendations:c.recommendations,handleReturnToResults:i,handleChangeFocus:r,formatDate:e.formatDate}):Object(m.jsx)(z,{data:c.expandedData,recommendations:c.recommendations,handleReturnToResults:i,handleChangeFocus:r,formatDate:e.formatDate})}()]})}a(89);var q=a(11),U="https://image.tmdb.org/t/p/w500/",G="https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1";function V(e){function t(e){var t=e.data.media_type,a="movie"===t||"tv"===t?e.data.poster_path:e.data.profile_path;return a?U+a:G}return Object(m.jsxs)(q.a,{horizontal:"lg",className:"m-1 p-1 list-item mx-auto",onClick:function(){return e.expandResult(e.data)},children:[Object(m.jsx)(q.a.Item,{children:function(){var t=e.data.media_type;return"movie"===t?"Movie":"tv"===t?"TV Show":"person"===t?"Person":void 0}()}),Object(m.jsx)(q.a.Item,{children:Object(m.jsx)(v.a,{className:"mx-auto small-poster",src:function(){var t=e.data,a=e.data.media_type,s="movie"===a||"tv"===a?t.poster_path:t.profile_path;return s?U+s:G}()})}),function(){var a=e.data,s=a.media_type,c="movie"===s?a.title:a.name,n="movie"===s||"tv"===s?"movie"===s?a.release_date:a.first_air_date:{},r=e.formatDate(n);if("movie"===s||"tv"===s)return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(q.a.Item,{className:"w-25",children:[Object(m.jsx)("span",{className:"text-muted",children:"Title"}),Object(m.jsx)("hr",{}),Object(m.jsx)("em",{children:c})]}),Object(m.jsxs)(q.a.Item,{className:"w-25",children:[Object(m.jsx)("span",{className:"text-muted",children:"Release Date"}),Object(m.jsx)("hr",{}),r]}),Object(m.jsxs)(q.a.Item,{className:"w-50",children:[Object(m.jsx)("span",{className:"text-muted",children:"Overview"}),Object(m.jsx)("hr",{}),a.overview]})]});if("person"===s){var i,o=function(e){var t=[];return e.known_for.forEach((function(e){var a;"movie"===e.media_type?a=e.title:"tv"===e.media_type&&(a=e.name);var s={title:a,data:e};t=[].concat(Object(N.a)(t),[s])})),t}(a);return o.length>0&&(i=Object(m.jsxs)(q.a.Item,{children:[Object(m.jsx)("span",{className:"text-muted",children:"Popular Contributions"}),Object(m.jsx)("hr",{}),Object(m.jsx)(q.a,{horizontal:!0,children:o.map((function(e,a){return Object(m.jsxs)(q.a.Item,{className:"d-inline-block",children:[Object(m.jsx)("div",{children:Object(m.jsx)("em",{children:e.title})}),Object(m.jsx)(v.a,{className:"mx-auto known-for-poster",src:t(e)})]},a)}))})]})),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(q.a.Item,{className:"w-25",children:[Object(m.jsx)("span",{className:"text-muted",children:"Name"}),Object(m.jsx)("hr",{}),c]}),Object(m.jsxs)(q.a.Item,{className:"w-25",children:[Object(m.jsx)("span",{className:"text-muted",children:"Known for"}),Object(m.jsx)("hr",{}),a.known_for_department]}),i]})}}()]})}function Y(e){var t=Object(s.useState)({isShowingExpandedResult:!1,expandedResultData:{}}),a=Object(d.a)(t,2),c=a[0],n=a[1],r=function(e){n({isShowingExpandedResult:!0,expandedResultData:e})},i=function(){n({isShowingExpandedResult:!1,expandedResultData:{}}),window.scrollTo(0,0)};function o(e){var t=new Date(e).toDateString().split(" ");return"".concat(t[1]," ").concat(t[2],", ").concat(t[3])}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(f.a,{className:"results-section m-1 mx-auto",fluid:!0,children:[c.isShowingExpandedResult?Object(m.jsx)(P,{data:c.expandedResultData,handleReturnToResults:i,formatDate:o}):Object(m.jsx)(m.Fragment,{children:e.searchData.map((function(e,t){return Object(m.jsx)(V,{data:e,expandResult:r,formatDate:o},t)}))}),Object(m.jsxs)("div",{className:"footer-text",children:["This product uses the ",Object(m.jsx)("a",{className:"tmdb-link",href:"https://www.themoviedb.org/documentation/api",rel:"noreferrer",target:"_blank",children:"TMDb API"})," but is not endorsed or certified by TMDb."]}),Object(m.jsx)(v.a,{className:"attribution-logo pt-2",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"})]})})}function J(){var e=Object(s.useState)({isShowingResults:!1,searchData:{}}),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({text:""}),r=Object(d.a)(n,2),i=r[0],h=r[1],u=function(e){h({text:e})},b=function(){c({isShowingResults:!1,searchData:{}})},x=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(),""===t){e.next=14;break}return h({text:""}),a="https://api.themoviedb.org/3/search/multi?api_key=8aaeb5fa2472dd850f957c983d0bb2e1&language=en-US&query="+t+"&page=1&include_adult=false",e.prev=4,e.next=7,j.a.get(a);case 7:s=e.sent,c({isShowingResults:!0,searchData:s.data.results}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{searchRequest:x,returnToHomePage:b,onSearchBoxChange:u,inputText:i.text}),a.isShowingResults?Object(m.jsx)(Y,{searchData:a.searchData}):Object(m.jsx)(w,{searchRequest:x,onSearchBoxChange:u,inputText:i.text})]})}a(90);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.75bd7b96.chunk.js.map