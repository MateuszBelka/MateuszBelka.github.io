(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),i=a(9),o=a(10),s=a(12),u=a(11),m=a(21),d=a(4),p=a(105),f=a(106);a(51);function h(){return r.a.createElement(p.a,{collapseOnSelect:!0,expand:"lg",bg:"inherit",variant:"dark",className:"navHeader"},r.a.createElement(p.a.Brand,{href:"#/"},r.a.createElement("div",{className:"nameContainer"},r.a.createElement("div",{className:"name"},"Mateusz Belka"),r.a.createElement("div",{className:"jobTitle"},r.a.createElement("p",null,"Software"),r.a.createElement("p",null,"Engineer")))),r.a.createElement(p.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(p.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(f.a,{className:"ml-auto"},r.a.createElement(f.a.Link,{href:"#/projects"},"Projects"),r.a.createElement(f.a.Link,{href:"#/resume"},"Resume"),r.a.createElement(f.a.Link,{href:"#/about"},"About"),r.a.createElement("a",{href:"mailto:belka.mateusz.bm@gmail.com",rel:"noopener noreferrer",target:"_blank",className:"email-link"},"Get In Touch"))))}var b=a(15),E=a(24),g=a(19),v=(a(59),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Mateusz Belka | Fullstack Software Engineer"}},{key:"render",value:function(){return r.a.createElement("div",{className:"grid center fullHeight inherit-background"},r.a.createElement("div",{className:"overlay"}),r.a.createElement("header",null,r.a.createElement("div",{className:"title-wrapper"},r.a.createElement("h1",null,"Mateusz Belka"),r.a.createElement("div",null,r.a.createElement("p",null,"Software"),r.a.createElement("p",null,"Engineer"))),r.a.createElement("nav",{className:"grid"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(m.b,{to:"/projects"},r.a.createElement(b.a,{icon:E.b})),r.a.createElement("span",null,"Projects")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/resume"},r.a.createElement(b.a,{icon:E.a})),r.a.createElement("span",null,"Portfolio")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/MateuszBelka",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(b.a,{icon:g.b})),r.a.createElement("span",null,"Linkedin")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/MateuszBelka",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(b.a,{icon:g.a})),r.a.createElement("span",null,"Github")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:belka.mateusz.bm@gmail.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(b.a,{icon:E.c})),r.a.createElement("span",null,"Get In Touch"))))))}}]),a}(n.Component)),k=a(35);a(62);var j=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).updateCardHeightOnResize=function(){var e=null===n.card_ref.current?n.state.default_card_height:n.card_ref.current.clientHeight;n.setState({card_height:e,bottom_height:e/2})},n.updateCardHeightOnMobileClick=function(){if(window.innerWidth<=740&&0!==Object.keys(n.props.project.desc).length){var e=n.state.default_card_height,t=n.card_ref.current.clientHeight,a=n.ul_ref.current.clientHeight;(r=10,new Promise((function(e){return setTimeout(e,r)}))).then((function(){a=n.ul_ref.current.clientHeight;var r=n.card_ref.current.className.includes("expandMobile")?t+a:e,l=r/2+(n.card_ref.current.className.includes("expandMobile")?a/2:0);n.setState({card_height:r,bottom_height:l})}))}var r},n.state={card_height:-1,default_card_height:-1,bottom_height:-1},n.card_ref=r.a.createRef(),n.top_ref=r.a.createRef(),n.bottom_ref=r.a.createRef(),n.ul_ref=r.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateCardHeightOnResize),this.setState({card_height:this.card_ref.current.clientHeight,default_card_height:this.card_ref.current.clientHeight,bottom_height:this.card_ref.current.clientHeight/2})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateCardHeightOnResize)}},{key:"render",value:function(){var e=this,t={},a={};return this.props.fullscreen||(t={height:this.state.card_height+"px"},a={height:this.state.bottom_height+"px"}),r.a.createElement("div",{className:"project-card ".concat(this.props.fullscreen?"":this.props.classToAdd),onClick:function(){e.props.fullscreen||(e.props.onClick(e.props.id),e.updateCardHeightOnMobileClick())},ref:this.card_ref,style:t},r.a.createElement("div",{className:"card-content",onClick:this.props.disableOnClick?function(e){e.stopPropagation()}:void 0},r.a.createElement("div",{className:"top",ref:this.top_ref},r.a.createElement("div",{style:{content:"url(".concat(this.props.project.backgroundImage,")")}})),r.a.createElement("div",{className:"bottom",ref:this.bottom_ref,style:a},r.a.createElement("div",{className:"bottom-wrapper"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("h1",{className:"title"},this.props.project.name),r.a.createElement("ul",{ref:this.ul_ref},this.props.project.desc.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{id:"click-for-more"},"Click for more...")),r.a.createElement("div",{className:"action-buttons"},r.a.createElement("div",{className:"stack"},this.props.project.stack.map((function(e,t){return r.a.createElement("div",{className:"tech",key:t},e)}))),r.a.createElement("div",{className:"buttons"},function(e){return e.buttons.map((function(e,t){return r.a.createElement("div",{className:"button-wrapper",key:t},r.a.createElement("a",{href:e.url,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("button",null,e.name)))}))}(this.props.project)))))))}}]),a}(n.Component);function N(e){var t=e.project,a=e.turnOffFunc;return r.a.createElement("div",{className:"project-card"},r.a.createElement("button",{className:"x-btn",onClick:a},"\u2716"),r.a.createElement(j,{project:t,disableOnClick:!0,fullscreen:!0}))}function _(e){var t=e.project,a=e.id,n=e.onClick,l=e.classToAdd;return r.a.createElement(j,{project:t,disableOnClick:!1,fullscreen:!1,id:a,onClick:n,classToAdd:l})}var w=a(34),M=(a(63),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).showMore=function(e){window.innerWidth>740?n.turnOnFullscreen(e):n.changeDescMobile(e)},n.changeDescMobile=function(e){var t=Object(k.a)(n.state.isMobileExpanded);t[e]=!n.state.isMobileExpanded[e],n.setState({isMobileExpanded:t})},n.turnOnFullscreen=function(e){n.setState({fullscreen:!0,fullscreenProjectID:e})},n.turnOffFullscreen=function(){n.setState({fullscreen:!1,fullscreenProjectID:-1})},n.addToCardRefs=function(e){e&&!n.cards_ref.current.includes(e)&&(n.cards_ref.current.push(e),n.setState((function(e){return{isMobileExpanded:[].concat(Object(k.a)(e.isMobileExpanded),[!1])}})))},n.state={fullscreen:!1,fullscreenProjectID:-1,isMobileExpanded:[]},n.cards_ref=r.a.createRef(),n.cards_ref.current=[],n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Mateusz Belka | Projects"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"projects"},r.a.createElement("div",{className:"mini-cards"},w.Projects.map((function(t,a){return r.a.createElement("div",{ref:e.addToCardRefs,key:a,className:"card-wrapper"},r.a.createElement(_,{project:t,id:a,onClick:e.showMore,classToAdd:e.state.isMobileExpanded[a]?"expandMobile":""}))}))),this.state.fullscreen&&r.a.createElement("div",{className:"fullscreen-wrapper",onClick:this.turnOffFullscreen},r.a.createElement(N,{project:w.Projects[this.state.fullscreenProjectID],turnOffFunc:this.turnOffFullscreen})))}}]),a}(n.Component)),O=(a(64),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Mateusz Belka | About"}},{key:"render",value:function(){return r.a.createElement("div",{className:"about-me-parent"},r.a.createElement("div",{className:"about-me-wrapper"},r.a.createElement("div",{className:"text-wrapper"},r.a.createElement("div",{className:"header"},r.a.createElement("p",null,"Hi, my name is"),r.a.createElement("h1",null,"Mateusz Belka"),r.a.createElement("p",null,"or just call me Matt")),r.a.createElement("div",{className:"body"},r.a.createElement("p",null,"I'm a dedicated developer, passionate about technology, programming, and learning new things. I'm also well-versed in software design and development through theoretical engagement in data structures and algorithms as well as practical projects. I'm determined to produce consistent results in an agile environment using Scrum methodology."))),r.a.createElement("div",{className:"image-wrapper"},r.a.createElement("img",{src:"/profile_pic.jpg",alt:"Profile"}),r.a.createElement("div",{className:"job-title"},"Full-stack Engineer"),r.a.createElement("div",{className:"location"},"Based in Amsterdam, NL"))))}}]),a}(n.Component)),y=a(25),C=a(44),x=a.n(C),z=(a(98),a(99),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){document.title="Mateusz Belka | Resume"}},{key:"render",value:function(){return r.a.createElement("div",{className:"ResumeContainer"},r.a.createElement(y.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js"},r.a.createElement(y.Viewer,{fileUrl:x.a,defaultScale:y.SpecialZoomLevel.PageFit})))}}]),a}(n.Component));a(100);function S(){return r.a.createElement("div",null,r.a.createElement("div",{className:"footerMargin"}),r.a.createElement(p.a,{fixed:"bottom",className:"d-flex justify-content-start footer",variant:"dark",bg:"dark"},r.a.createElement(p.a.Brand,{href:"#/about/",className:"mr-auto ml-65to150 children-inherit-background"},"\xa9 2020",r.a.createElement("span",{className:"bold-text"}," Mateusz Belka"),r.a.createElement("span",{className:"mobile-hide"},", All rights reserved.")),r.a.createElement(p.a.Text,{className:"inherit-background grid mr-65to150 links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/MateuszBelka",rel:"noopener noreferrer",target:"_blank",className:"children-inherit-background"},r.a.createElement(b.a,{icon:g.b}),r.a.createElement("span",{className:"mobile-hide"},"Linkedin")),r.a.createElement("a",{href:"https://github.com/MateuszBelka",rel:"noopener noreferrer",target:"_blank",className:"children-inherit-background"},r.a.createElement(b.a,{icon:g.a}),r.a.createElement("span",{className:"mobile-hide"},"Github")))))}a(101),a(102);var B=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(v,null)),r.a.createElement(d.b,{exact:!0,path:"/projects/"},r.a.createElement(h,null),r.a.createElement("div",{className:"horizontal-margin-large"},r.a.createElement(M,null)),r.a.createElement(S,null)),r.a.createElement(d.b,{exact:!0,path:"/resume/"},r.a.createElement(h,null),r.a.createElement("div",{className:"horizontal-margin-large"},r.a.createElement(z,null)),r.a.createElement(S,null)),r.a.createElement(d.b,{exact:!0,path:"/about/"},r.a.createElement(h,null),r.a.createElement("div",{className:"horizontal-margin-large"},r.a.createElement(O,null)),r.a.createElement(S,null)),r.a.createElement(d.a,{from:"*",to:"/"}))))}}]),a}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))},34:function(e){e.exports=JSON.parse('{"Projects":[{"name":"Personal Portfolio","desc":["Modular component-based responsive web design in React.","Single-page application with scalability in mind."],"stack":["React","Bootstrap"],"backgroundImage":"/bg-personal-portfolio.png","buttons":[{"name":"Live","url":"https://mateuszbelka.github.io/"},{"name":"Source Code","url":"https://github.com/MateuszBelka/mateuszbelka.github.io"}]},{"name":"AWS Automation","desc":["Start/Stop AWS instance","Automatically update server hardware depending on user needs","Automate customization of offline server\'s configuration to minimize costs","Discord Bot solution that allows end-users to have effortless communication with AWS instances."],"stack":["Python","AWS","Heroku"],"backgroundImage":"/bg-aws-automation.png","buttons":[{"name":"Source Code","url":"https://github.com/MateuszBelka/shr1mpBot"}]},{"name":"University Map","desc":["Website to inform students of current locations available for studying.","Designed the front-end to be easily scalable to back-end implementation."],"stack":["React"],"backgroundImage":"/bg-vu-maps.png","buttons":[{"name":"Live","url":"https://valeriankass.github.io/VU_Interactive_map/"},{"name":"Source Code","url":"https://github.com/MateuszBelka/VU_Interactive_map"}]},{"name":"Text Adventure Game","desc":["Wrote software in accordance with before-established UML class, object, sequence, and state diagrams.","Actively iterated the product\u2019s features in accordance to internal feedback using Scrum.","Utilized knowledge of GitHub to conduct peer reviews and collaborate on multi-week project.","Constructed UI/UX, game engine, JSON serialization, player progression and combat.","Delivered a fully functional game, which exceeded expected feature goals."],"stack":["Java","JavaFX"],"backgroundImage":"/bg-text-adventure-game.png","buttons":[{"name":"Download","url":"https://github.com/MateuszBelka/Text_Adventure_Game/raw/master/build/libs/software-design-vu-2020.jar"},{"name":"Video Demo","url":"https://youtu.be/ydla-xiwkoM"},{"name":"Source Code","url":"https://github.com/MateuszBelka/VU_Interactive_map"}]}]}')},44:function(e,t,a){e.exports=a.p+"static/media/resume.a5731793.pdf"},46:function(e,t,a){e.exports=a(103)},51:function(e,t,a){},59:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},93:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t){},97:function(e,t){},99:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.2aa1b403.chunk.js.map