(this["webpackJsonptv-movie-search-app"]=this["webpackJsonptv-movie-search-app"]||[]).push([[0],{79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(27),c=a.n(n),i=a(17),o=a.n(i),l=a(23),h=a(7),u=a(8),d=a(10),p=a(9),j=a(24),m=a.n(j),b=(a(79),a(80),a(81),a(45)),x=a(1),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleChange=function(t){e.props.onSearchBoxChange(t.target.value)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(x.jsx)(b.a,{onSubmit:this.props.handleSubmit,children:Object(x.jsx)(b.a.Control,{className:"border border-secondary text-center",size:this.props.size,htmlSize:"36",type:"text",placeholder:"Search for a TV show, Movie, or Actor",onChange:this.handleChange,value:this.props.inputText})})}}]),a}(s.a.Component),O=a(55),v=a(44),g=a(13),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleSubmit=function(t){t.preventDefault(),e.props.searchRequest(e.props.inputText)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(v.a,{fixed:"top",bg:"dark",variant:"dark",className:"mb-3",children:[Object(x.jsx)(v.a.Brand,{className:"home-button",onClick:this.props.returnToHomePage,children:"TV & Movie Searching App"}),Object(x.jsx)(O.a,{className:"mr-auto"}),Object(x.jsx)(f,{size:"md",handleSubmit:this.handleSubmit,onSearchBoxChange:this.props.onSearchBoxChange,inputText:this.props.inputText}),Object(x.jsx)(g.a,{className:"mx-2",variant:"outline-secondary",onClick:this.handleSubmit,children:"Search"})]})}}]),a}(s.a.Component),w=(a(86),a(28)),k=a(22),N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleSubmit=function(t){t.preventDefault(),e.props.searchRequest(e.props.inputText)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(k.a,{className:"hero-img",src:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"}),Object(x.jsx)(w.a,{fluid:!0,children:Object(x.jsxs)(w.a,{fluid:!0,className:"w-75 search-area",children:[Object(x.jsx)(f,{size:"lg",handleSubmit:this.handleSubmit,onSearchBoxChange:this.props.onSearchBoxChange,inputText:this.props.inputText}),Object(x.jsx)(g.a,{variant:"secondary",onClick:this.handleSubmit,className:"m-2",children:"Search"})]})}),Object(x.jsx)("footer",{className:"footer footer-dark",children:Object(x.jsxs)("span",{className:"footer-text",children:["This product uses the ",Object(x.jsx)("a",{className:"tmdb-link",href:"https://www.themoviedb.org/documentation/api",rel:"noreferrer",target:"_blank",children:"TMDb API"})," but is not endorsed or certified by TMDb."]})})]})}}]),a}(s.a.Component),R=(a(87),a(88),a(39)),C=(a(89),a(6)),S="https://image.tmdb.org/t/p/w500",T="https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1",D=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleChangeFocus=function(){return e.props.handleChangeFocus(e.props.data)},e}return Object(u.a)(a,[{key:"buildBackdropUrl",value:function(e){return null===e?T:S+e}},{key:"buildPosterUrl",value:function(e){return e?S+e:T}},{key:"render",value:function(){var e=this.props.data;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(C.a,{className:"cast-card shadow-sm mx-1 my-1",onClick:this.handleChangeFocus,id:e.id,children:[Object(x.jsx)(C.a.Img,{className:"cast-poster mt-1 mx-auto",variant:"top",src:this.buildPosterUrl(e.poster_path)}),Object(x.jsxs)(C.a.Body,{children:[Object(x.jsx)(C.a.Title,{children:e.character}),Object(x.jsxs)(C.a.Text,{className:"text-muted",children:[Object(x.jsx)("span",{children:"in "}),Object(x.jsx)("br",{}),"movie"===e.media_type?e.title:e.name]})]})]},this.props.index)})}}]),a}(s.a.Component),_=a(15),F=a(19),B=a(25),I="https://image.tmdb.org/t/p/w500/",P=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={combinedCredits:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.props.data.id&&0===this.state.combinedCredits.length&&this.fetchCombinedCredits(this.props.data)}},{key:"buildBackdropUrl",value:function(e){return null===e?"https://fakeimg.pl/640x360":I+e}},{key:"buildPosterUrl",value:function(e){return e?I+e:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}},{key:"fetchCombinedCredits",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.id){e.next=13;break}return a="https://api.themoviedb.org/3/person/"+t.id+"/combined_credits?api_key=8aaeb5fa2472dd850f957c983d0bb2e1&language=en-US",e.prev=2,e.next=5,m.a.get(a);case 5:r=e.sent,console.log(r),this.setState({combinedCredits:r.data.cast}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"buildPopularRolesList",value:function(){var e=this,t=[];if(this.state.combinedCredits.length>0){for(var a=0;a<30&&a<this.state.combinedCredits.length;a++){var r=this.state.combinedCredits[a];t=[].concat(Object(R.a)(t),[r])}return Object(x.jsxs)(C.a.Footer,{children:[Object(x.jsx)(C.a.Title,{className:"mx-auto",children:Object(x.jsx)("h2",{children:"Popular Roles"})}),Object(x.jsx)(B.a,{children:t.map((function(t,a){return Object(x.jsx)(D,{data:t,handleChangeFocus:e.props.handleChangeFocus},a)}))})]})}}},{key:"compileBio",value:function(e){var t={name:e.name,biography:"",birthday:""};return e.biography&&(t.biography=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h3",{children:"Biography"}),Object(x.jsx)("hr",{}),Object(x.jsx)(C.a.Text,{children:e.biography})]})),e.birthday&&(t.birthday=Object(x.jsxs)("h4",{children:["Born on ",this.props.formatDate(e.birthday)]})),e.deathday&&(t.deathday=Object(x.jsxs)("h4",{children:["Died on ",this.props.formatDate(e.deathday)]})),t}},{key:"render",value:function(){var e=this.compileBio(this.props.data);return Object(x.jsxs)(C.a,{className:"mx-auto my-3 outer-result-card",children:[Object(x.jsxs)(C.a,{className:"inner-result-card",children:[Object(x.jsx)(g.a,{className:"mx-auto",variant:"primary",onClick:this.props.handleReturnToResults,children:"Return to Search Results"}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(_.a,{lg:!0,className:"my-3 ml-1",children:Object(x.jsxs)(C.a.Title,{children:[Object(x.jsx)("h1",{className:"display-4",children:e.name}),Object(x.jsx)(C.a.Img,{className:"my-3 my-2 poster w-75",variant:"top",src:this.buildPosterUrl(this.props.data.profile_path)}),e.birthday,e.deathday]})}),Object(x.jsx)(_.a,{lg:!0,className:"mx-3",children:Object(x.jsx)(C.a.Body,{children:e.biography})})]}),Object(x.jsx)(F.a,{className:"mx-auto my-2",children:Object(x.jsx)(g.a,{variant:"primary",onClick:this.props.handleReturnToResults,children:"Return to Search Results"})})]}),this.buildPopularRolesList()]})}}]),a}(s.a.Component),U=a(37),A=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleChangeFocus=function(){return e.props.handleChangeFocus(e.props.data)},e}return Object(u.a)(a,[{key:"buildBackdropUrl",value:function(e){return null===e?"https://fakeimg.pl/640x360":"https://image.tmdb.org/t/p/w500"+e}},{key:"render",value:function(){var e=this.props.data;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(C.a,{className:"recommendation-card shadow-sm my-1 mx-auto",onClick:this.handleChangeFocus,children:[Object(x.jsx)(C.a.Img,{variant:"top recommendation-img",src:this.buildBackdropUrl(e.backdrop_path)}),Object(x.jsxs)(C.a.Body,{children:[Object(x.jsx)(C.a.Title,{children:"tv"===e.media_type?e.name:e.title}),Object(x.jsx)(C.a.Text,{className:"text-muted",children:e.overview})]})]},this.props.index)})}}]),a}(s.a.Component),J="https://image.tmdb.org/t/p/w500/",M=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"buildBackdropUrl",value:function(e){return null===e?"https://fakeimg.pl/640x360":J+e}},{key:"buildPosterUrl",value:function(){var e=this.props.data.poster_path;return e?J+e:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}},{key:"buildGenreList",value:function(e){if(e.genres&&e.genres.length>0){var t,a="Genre(s): ",r=Object(U.a)(e.genres);try{for(r.s();!(t=r.n()).done;){a+=t.value.name+", "}}catch(s){r.e(s)}finally{r.f()}return a=a.substr(0,a.length-2),Object(x.jsx)("h5",{children:a})}}},{key:"buildHomepageJsx",value:function(e){if(null!==e.homepage&&""!==e.homepage)return Object(x.jsx)("h5",{children:Object(x.jsx)("a",{href:e.homepage,target:"_blank",rel:"noreferrer",children:"Link to Homepage"})})}},{key:"buildRecommendationSectionJsx",value:function(){var e=this;if(this.props.recommendations.length>0)return Object(x.jsxs)(C.a.Footer,{children:[Object(x.jsx)(C.a.Title,{className:"mx-auto",children:Object(x.jsx)("h2",{children:"You Might Also Be Interested In"})}),Object(x.jsx)(B.a,{children:this.props.recommendations.map((function(t,a){return Object(x.jsx)(A,{index:a,data:t,handleChangeFocus:e.props.handleChangeFocus},a)}))})]})}},{key:"compileMovieData",value:function(e){return{resultName:e.title,resultPrimaryInfo:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h3",{children:["Release Date: ",this.props.formatDate(e.release_date)]}),e.runtime>0?Object(x.jsxs)("h5",{children:["Runtime: ",this.formatRuntime(e.runtime)]}):null,this.buildGenreList(e),this.buildHomepageJsx(e),Object(x.jsx)("hr",{}),Object(x.jsxs)("span",{className:"text-right",children:[this.buildBudgetJsx(e),this.buildBoxOfficeJsx(e),this.buildNetProfitJsx(e)]}),Object(x.jsx)("hr",{}),Object(x.jsx)("h4",{children:"Overview"})]}),resultOverview:e.overview}}},{key:"buildBudgetJsx",value:function(e){if(e.budget&&e.budget>0){var t=this.formatCurrency(e.budget);return Object(x.jsxs)("h5",{children:["Budget: ",t]})}}},{key:"buildBoxOfficeJsx",value:function(e){if(e.revenue&&e.revenue>0){var t=this.formatCurrency(e.revenue);return Object(x.jsxs)("h5",{children:["Box Office Revenue: ",t]})}}},{key:"buildNetProfitJsx",value:function(e){if(e.revenue&&e.revenue>0&&e.budget&&e.budget>0){var t=e.revenue-e.budget,a=this.formatCurrency(t),r=t>=0?"net-positive":"net-negative";return Object(x.jsxs)("h5",{className:r,children:["Net Income: ",a]})}}},{key:"formatCurrency",value:function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)}},{key:"formatRuntime",value:function(e){return e&&e>59?"".concat(Math.floor(e/60)," hrs, ").concat(e%60," min"):"".concat(e," min")}},{key:"render",value:function(){var e=this.compileMovieData(this.props.data);return Object(x.jsxs)(C.a,{className:"mx-auto my-3 outer-result-card",children:[Object(x.jsxs)(C.a,{className:"inner-result-card",children:[Object(x.jsx)(g.a,{className:"mx-auto",variant:"primary",onClick:this.props.handleReturnToResults,children:"Return to Search Results"}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(_.a,{lg:!0,className:"mx-2",children:Object(x.jsxs)(C.a.Title,{className:"mb-0 mt-1",children:[Object(x.jsx)(C.a.Text,{className:"text-muted",children:this.props.data.tagline}),Object(x.jsx)(C.a.Img,{className:"mx-auto my-2 poster w-75",variant:"top",src:this.buildPosterUrl()})]})}),Object(x.jsx)(_.a,{lg:!0,className:"mx-auto",children:Object(x.jsxs)(C.a.Body,{children:[Object(x.jsx)("h1",{className:"display-4",children:e.resultName}),Object(x.jsx)("h5",{className:"text-muted",children:"Movie"}),Object(x.jsx)("hr",{}),e.resultPrimaryInfo,e.resultOverview]})})]}),Object(x.jsx)(F.a,{className:"mx-auto my-2",children:Object(x.jsx)(g.a,{variant:"primary",onClick:this.props.handleReturnToResults,children:"Return to Search Results"})})]}),this.buildRecommendationSectionJsx()]})}}]),a}(s.a.Component),H=a(54),E="https://image.tmdb.org/t/p/w500/",L=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"buildBackdropUrl",value:function(e){return null===e?"https://fakeimg.pl/640x360":E+e}},{key:"buildPosterUrl",value:function(){var e=this.props.data.poster_path;return e?E+e:"https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1"}},{key:"buildHomepageJsx",value:function(e){if(null!==e.homepage&&""!==e.homepage)return Object(x.jsx)("h5",{children:Object(x.jsx)("a",{href:e.homepage,target:"_blank",rel:"noreferrer",children:"Link to Homepage"})})}},{key:"buildRecommendationSectionJsx",value:function(){var e=this;if(this.props.recommendations.length>0)return Object(x.jsxs)(C.a.Footer,{children:[Object(x.jsx)(C.a.Title,{className:"mx-auto",children:Object(x.jsx)("h2",{children:"You Might Also Be Interested In"})}),Object(x.jsx)(B.a,{children:this.props.recommendations.map((function(t,a){return Object(x.jsx)(A,{index:a,data:t,handleChangeFocus:e.props.handleChangeFocus},a)}))})]})}},{key:"buildSeasonsTable",value:function(){if(this.props.data.seasons){var e=[];return this.props.data.seasons.forEach((function(t){0!==t.season_number&&e.push(t)})),Object(x.jsxs)(H.a,{striped:!0,bordered:!0,size:"sm",className:"my-3",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Season #"}),Object(x.jsx)("th",{children:"Episode Count"})]})}),Object(x.jsx)("tbody",{children:e.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsx)("td",{children:e.episode_count})]},t)}))})]})}}},{key:"buildGenreList",value:function(e){if(e.genres&&e.genres.length>0){var t,a="Genre(s): ",r=Object(U.a)(e.genres);try{for(r.s();!(t=r.n()).done;){a+=t.value.name+", "}}catch(s){r.e(s)}finally{r.f()}return a=a.substr(0,a.length-2),Object(x.jsx)("h5",{children:a})}}},{key:"compileTvShowData",value:function(e){var t=e.in_production,a=t?"net-positive":"net-negative";return{resultName:e.name,resultPrimaryInfo:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("h3",{children:["First Air Date: ",this.props.formatDate(e.first_air_date)]}),t?Object(x.jsxs)("h3",{children:["Recent Air Date: ",this.props.formatDate(e.last_air_date)]}):Object(x.jsxs)("h3",{children:["Final Air Date: ",this.props.formatDate(e.last_air_date)]}),Object(x.jsx)("h4",{className:a,children:t?"Still in production":"No longer in production"}),this.buildGenreList(e),Object(x.jsx)("br",{}),Object(x.jsxs)("h5",{children:["Number of Seasons: ",e.number_of_seasons]}),Object(x.jsxs)("h5",{children:["Number of Episodes: ",e.number_of_episodes]}),this.buildHomepageJsx(e),Object(x.jsx)("hr",{}),Object(x.jsx)("h4",{children:"Overview"})]}),resultOverview:Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C.a.Text,{className:"w-75 mx-auto",children:e.overview}),this.buildSeasonsTable()]})}}},{key:"render",value:function(){var e=this.compileTvShowData(this.props.data);return console.log(this.props),Object(x.jsxs)(C.a,{className:"mx-auto my-3 outer-result-card",children:[Object(x.jsxs)(C.a,{className:"inner-result-card",children:[Object(x.jsx)(g.a,{className:"mx-auto",variant:"primary",onClick:this.props.handleReturnToResults,children:"Return to Search Results"}),Object(x.jsxs)(F.a,{children:[Object(x.jsx)(_.a,{lg:!0,className:"mx-2",children:Object(x.jsxs)(C.a.Title,{className:"mb-0 mt-1",children:[Object(x.jsx)(C.a.Text,{className:"text-muted",children:this.props.data.tagline}),Object(x.jsx)(C.a.Img,{className:"mx-auto my-2 poster w-75",variant:"top",src:this.buildPosterUrl()})]})}),Object(x.jsx)(_.a,{lg:!0,className:"mx-auto",children:Object(x.jsxs)(C.a.Body,{children:[Object(x.jsx)("h1",{className:"display-4",children:e.resultName}),Object(x.jsx)("h5",{className:"text-muted",children:"TV Show"}),Object(x.jsx)("hr",{}),e.resultPrimaryInfo,e.resultOverview]})})]}),Object(x.jsx)(F.a,{className:"mx-auto my-2",children:Object(x.jsx)(g.a,{variant:"primary",onClick:this.props.handleReturnToResults,children:"Return to Search Results"})})]}),this.buildRecommendationSectionJsx()]})}}]),a}(s.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={expandedData:{},recommendations:[]},e.handleChangeFocus=function(t){return e.fetchData(t)},e.handleReturnToResults=function(){return e.props.handleReturnToResults()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(this.props.data)}},{key:"resultType",value:function(){var e=this.state.expandedData.media_type;return"movie"===e?"Movie":"tv"===e?"TV Show":"person"===e?"Person":void 0}},{key:"fetchData",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.themoviedb.org/3/"+t.media_type+"/"+t.id+"?api_key=8aaeb5fa2472dd850f957c983d0bb2e1&language=en-US&append_to_response=recommendations,credits",e.prev=1,e.next=4,m.a.get(a);case 4:r=e.sent,this.setState({expandedData:r.data,recommendations:r.data.recommendations?r.data.recommendations.results:[]}),window.scrollTo(0,0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"renderType",value:function(){var e=this.state.expandedData;return console.log(e),e.birthday?Object(x.jsx)(P,{data:this.state.expandedData,handleReturnToResults:this.handleReturnToResults,handleChangeFocus:this.handleChangeFocus,formatDate:this.props.formatDate}):e.title?Object(x.jsx)(M,{data:this.state.expandedData,recommendations:this.state.recommendations,handleReturnToResults:this.handleReturnToResults,handleChangeFocus:this.handleChangeFocus,formatDate:this.props.formatDate}):Object(x.jsx)(L,{data:this.state.expandedData,recommendations:this.state.recommendations,handleReturnToResults:this.handleReturnToResults,handleChangeFocus:this.handleChangeFocus,formatDate:this.props.formatDate})}},{key:"render",value:function(){return console.log(this.state.expandedData),Object(x.jsx)(x.Fragment,{children:this.renderType()})}}]),a}(s.a.Component),z=(a(90),a(14)),G="https://image.tmdb.org/t/p/w500/",V="https://i2.wp.com/www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png?ssl=1",Y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(){return e.props.expandResult(e.props.data)},e}return Object(u.a)(a,[{key:"resultType",value:function(){var e=this.props.data.media_type;return"movie"===e?"Movie":"tv"===e?"TV Show":"person"===e?"Person":void 0}},{key:"buildPosterUrl",value:function(){var e=this.props.data,t=this.props.data.media_type,a="movie"===t||"tv"===t?e.poster_path:e.profile_path;return a?G+a:V}},{key:"buildContributionPosterUrl",value:function(e){var t=e.data.media_type,a="movie"===t||"tv"===t?e.data.poster_path:e.data.profile_path;return a?G+a:V}},{key:"buildContributionList",value:function(e){var t=[];return e.known_for.forEach((function(e){var a;"movie"===e.media_type?a=e.title:"tv"===e.media_type&&(a=e.name);var r={title:a,data:e};t=[].concat(Object(R.a)(t),[r])})),t}},{key:"buildJsx",value:function(){var e=this,t=this.props.data,a=t.media_type,r="movie"===a?t.title:t.name,s="movie"===a||"tv"===a?"movie"===a?t.release_date:t.first_air_date:{},n=this.props.formatDate(s);if("movie"===a||"tv"===a)return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(z.a.Item,{className:"w-25",children:[Object(x.jsx)("span",{className:"text-muted",children:"Title"}),Object(x.jsx)("hr",{}),Object(x.jsx)("em",{children:r})]}),Object(x.jsxs)(z.a.Item,{className:"w-25",children:[Object(x.jsx)("span",{className:"text-muted",children:"Release Date"}),Object(x.jsx)("hr",{}),n]}),Object(x.jsxs)(z.a.Item,{className:"w-50",children:[Object(x.jsx)("span",{className:"text-muted",children:"Overview"}),Object(x.jsx)("hr",{}),t.overview]})]});if("person"===a){var c,i=this.buildContributionList(t);return i.length>0&&(c=Object(x.jsxs)(z.a.Item,{children:[Object(x.jsx)("span",{className:"text-muted",children:"Popular Contributions"}),Object(x.jsx)("hr",{}),Object(x.jsx)(z.a,{horizontal:!0,children:i.map((function(t,a){return Object(x.jsxs)(z.a.Item,{className:"d-inline-block",children:[Object(x.jsx)("div",{children:Object(x.jsx)("em",{children:t.title})}),Object(x.jsx)(k.a,{className:"mx-auto known-for-poster",src:e.buildContributionPosterUrl(t)})]},a)}))})]})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(z.a.Item,{className:"w-25",children:[Object(x.jsx)("span",{className:"text-muted",children:"Name"}),Object(x.jsx)("hr",{}),r]}),Object(x.jsxs)(z.a.Item,{className:"w-25",children:[Object(x.jsx)("span",{className:"text-muted",children:"Known for"}),Object(x.jsx)("hr",{}),t.known_for_department]}),c]})}}},{key:"render",value:function(){return Object(x.jsxs)(z.a,{horizontal:"lg",className:"m-1 p-1 list-item mx-auto",onClick:this.handleClick,children:[Object(x.jsx)(z.a.Item,{children:this.resultType()}),Object(x.jsx)(z.a.Item,{children:Object(x.jsx)(k.a,{className:"mx-auto small-poster",src:this.buildPosterUrl()})}),this.buildJsx()]})}}]),a}(s.a.Component),K=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isShowingExpandedResult:!1,expandedResultData:{}},e.handleExpandResult=function(t){e.setState({isShowingExpandedResult:!0,expandedResultData:t})},e.handleReturnFromExpandedResult=function(){e.setState({isShowingExpandedResult:!1,expandedResultData:{}}),window.scrollTo(0,0)},e}return Object(u.a)(a,[{key:"formatDate",value:function(e){var t=new Date(e).toDateString().split(" ");return"".concat(t[1]," ").concat(t[2],", ").concat(t[3])}},{key:"buildPageJsx",value:function(){var e=this;return this.state.isShowingExpandedResult?Object(x.jsx)(q,{data:this.state.expandedResultData,handleReturnToResults:this.handleReturnFromExpandedResult,formatDate:this.formatDate}):Object(x.jsx)(x.Fragment,{children:this.props.searchData.map((function(t,a){return Object(x.jsx)(Y,{data:t,expandResult:e.handleExpandResult,formatDate:e.formatDate},a)}))})}},{key:"render",value:function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(w.a,{className:"results-section m-1 mx-auto",fluid:!0,children:[this.buildPageJsx(),Object(x.jsxs)("div",{className:"footer-text",children:["This product uses the ",Object(x.jsx)("a",{className:"tmdb-link",href:"https://www.themoviedb.org/documentation/api",rel:"noreferrer",target:"_blank",children:"TMDb API"})," but is not endorsed or certified by TMDb."]}),Object(x.jsx)(k.a,{className:"attribution-logo pt-2",src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"})]})})}}]),a}(s.a.Component),W="8aaeb5fa2472dd850f957c983d0bb2e1",Q="https://api.themoviedb.org/3/",X=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,s=new Array(r),n=0;n<r;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isShowingResults:!1,searchData:{},searchBoxInput:""},e.handleChangeSearchInput=function(t){e.setState({searchBoxInput:t})},e.returnToHomePage=function(){e.setState({isShowingResults:!1,searchData:{}})},e.searchRequest=function(){var t=Object(l.a)(o.a.mark((function t(a){var r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.returnToHomePage(),""===a){t.next=14;break}return e.setState({searchBoxInput:""}),r=Q+"search/multi?api_key="+W+"&language=en-US&query="+a+"&page=1&include_adult=false",t.prev=4,t.next=7,m.a.get(r);case 7:s=t.sent,e.setState({isShowingResults:!0,searchData:s.data.results}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(4),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[4,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(a,[{key:"displayPage",value:function(){return this.state.isShowingResults?Object(x.jsx)(K,{searchData:this.state.searchData}):Object(x.jsx)(N,{searchRequest:this.searchRequest,onSearchBoxChange:this.handleChangeSearchInput,inputText:this.state.searchBoxInput})}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(y,{searchRequest:this.searchRequest,returnToHomePage:this.returnToHomePage,onSearchBoxChange:this.handleChangeSearchInput,inputText:this.state.searchBoxInput}),this.displayPage()]})}}]),a}(s.a.Component);a(91);c.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(X,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.b21c9674.chunk.js.map