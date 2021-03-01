(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),n=a(6),s=a.n(n),c=(a(11),a(2)),o=a(0);var l=function(e){return Object(o.jsx)("div",{className:"navbar-fixed",children:Object(o.jsx)("nav",{children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)("a",{href:"#!",className:"brand-logo",children:"Moon Ink"}),Object(o.jsx)("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger",children:Object(o.jsx)("i",{className:"material-icons",children:"menu"})}),Object(o.jsx)("ul",{id:"nav-mobile",className:"nav nav-tabs right hide-on-med-and-down",children:["About","Portfolio","Resume","Contact"].map((function(t){return Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})]})})})},d=function(e){var t=e.heading,a=e.paragraph,i=e.imgUrl,r=e.projectLink,n=e.githubLink,s=e.alt;return Object(o.jsx)("div",{className:"col s12 m6 l6",children:Object(o.jsxs)("div",{className:"card small sticky-action",children:[Object(o.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(o.jsx)("img",{className:"activator",src:i,alt:s})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("span",{className:"card-title activator grey-text text-darken-4",children:[t,Object(o.jsx)("i",{className:"material-icons right",children:"more_vert"})]}),Object(o.jsxs)("div",{className:"card-action center",children:[Object(o.jsx)("a",{href:r||"#",target:"_blank",rel:"noopener noreferrer",children:"Check it out"}),Object(o.jsx)("a",{href:n||"#",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]}),Object(o.jsxs)("div",{className:"card-reveal",children:[Object(o.jsxs)("span",{className:"card-title grey-text text-darken-4",children:[t,Object(o.jsx)("i",{className:"material-icons right",children:"close"})]}),Object(o.jsx)("p",{children:a})]})]})})},h={projects:[{id:1,title:"LookUp",para:"Interested in knowing which celestial bodies are (or will be) above you at any given time? Allow the browser to gauge your location, then enter a date and time to find out! Results will show you the planets/bodies that will be overhead and will pull images of each from the NASA Image and Video Library.",imageSrc:a.p+"static/media/LookUp-image.afc44665.jpg",alt:"planet",url:"https://kristinmoon.github.io/lookup/",githubUrl:"https://github.com/benmcrae5/lookup-by-ben-kara-kristin"},{id:2,title:"Collaborate",para:"A collaborative whiteboard for sharing ideas: Whether you're creating a MMORPG or designing an event, this is the place to share and develop your ideas with collaborators. This app is still a work in progress and is a product of a group project for the UA Coding Bootcamp.",imageSrc:a.p+"static/media/Collaborate-image.0fbd7882.png",alt:"collaborative drawing",url:"https://glacial-dusk-52239.herokuapp.com/",githubUrl:"https://github.com/kristinmoon/collaborate"},{id:3,title:"Let's Get Technical",para:"Writing about tech can be just as important as making it. Let's Get Technical is a CMS-style blog site where developers can publish blog posts and comment on other developers\u2019 posts as well.",imageSrc:a.p+"static/media/Technical-image.b4249e9a.jpg",alt:"keyboard",url:"https://powerful-temple-08997.herokuapp.com/",githubUrl:"https://github.com/kristinmoon/lets-get-technical"},{id:4,title:"Oh Snap",para:"A no-frills site to display photos for a budding photographer using React.",imageSrc:a.p+"static/media/OhSnap-image.533ae8f6.jpg",alt:"photo studio",url:"https://kristinmoon.github.io/photo-port/",githubUrl:"https://github.com/kristinmoon/photo-port"},{id:5,title:"BudgetTrak",para:"BudgetTrak is a PWA that gives users a fast and easy way to track their money. This application allows for offline access and functionality so that the user will be able to add expenses and deposits to their budget with or without an internet connection.",imageSrc:a.p+"static/media/BudgetTrak-image.819932a5.jpg",alt:"money",url:"https://murmuring-depths-29548.herokuapp.com/",githubUrl:"https://github.com/kristinmoon/budget-tracker"},{id:6,title:"Run Buddy",para:"One of my very first applications built during the UA Coding Bootcamp, Run Buddy is a website that offers fitness training services.",imageSrc:a.p+"static/media/RunBuddy-image.89fc40b0.jpg",alt:"runner tying shoes",url:"https://kristinmoon.github.io/run-buddy/",githubUrl:"https://github.com/kristinmoon/run-buddy"}]},u=function(){return Object(o.jsx)("section",{id:"portfolio",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h3",{children:"Portfolio"}),Object(o.jsx)("div",{className:"row",children:h.projects.map((function(e){return Object(o.jsx)(d,{heading:e.title,paragraph:e.para,imgUrl:e.imageSrc,projectLink:e.url,githubLink:e.githubUrl},e.id)}))})]})})},m=a.p+"static/media/kmoon-headshot.3f5d4126.jpg";var j=function(){return Object(o.jsx)("section",{id:"about",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h3",{children:"Hi, I'm Kristin!"}),Object(o.jsx)("img",{src:m,className:"my-2",style:{width:"25%"},alt:"headshot"}),Object(o.jsx)("p",{children:"I am a native Arizonan and currently live in Central Phoenix with my husband and two-year-old son. I love to travel the world and look forward to sharing that with my growing family. I have my degree in art history from the University of Arizona and have been an event planner for the past 15 years, coordinating large conferences, professional development trainings, fundraisers, golf tournaments, weddings, and art shows. Recently, I also completed my Master Florist certification through the Arizona Florists Association. Now, rounding out my resume, I am pursuing a certificate in coding through the University of Arizona. This is the beginning of my online portfolio. Enjoy!"})]})})},b=a(3),g=a(5);var p=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(c.a)(e,2),a=t[0],r=t[1],n=a.name,s=a.email,l=a.message,d=Object(i.useState)(""),h=Object(c.a)(d,2),u=h[0],m=h[1];function j(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);m(t?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."));u||r(Object(g.a)(Object(g.a)({},a),{},Object(b.a)({},e.target.name,e.target.value)))}return Object(o.jsx)("section",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h3",{children:"Let's Connect!"}),Object(o.jsxs)("form",{id:"contact-form",className:"col s12",onSubmit:function(e){e.preventDefault()},children:[Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s6",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{type:"text",name:"name",defaultValue:n,onBlur:j})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s6",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{type:"email",defaultValue:s,name:"email",onBlur:j})]})}),Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{name:"message",className:"materialize-textarea",defaultValue:l,onBlur:j,rows:"5"})]})}),u&&Object(o.jsx)("div",{children:Object(o.jsx)("p",{className:"error-text",children:u})}),Object(o.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",children:["Submit",Object(o.jsx)("i",{class:"material-icons right",children:"send"})]})]})]})})})},f=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"About Page"}),Object(o.jsx)("p",{children:"Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at."})]})},O=function(){return Object(o.jsxs)("footer",{className:"page-footer",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col l12 s12",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/kristinmoon",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/moonkristin/",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://twitter.com/kristindmoon",target:"_blank",rel:"noopener noreferrer",children:"Twitter"})})]})})})}),Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsx)("div",{className:"container",children:"\xa9 2021 Moon Ink"})})]})},x=function(){var e=Object(i.useState)("About"),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{currentPage:a,handlePageChange:r}),Object(o.jsx)("div",{children:function(){switch(a){case"About":return Object(o.jsx)(j,{});case"Portfolio":return Object(o.jsx)(u,{});case"Resume":return Object(o.jsx)(f,{});case"Contact":return Object(o.jsx)(p,{});default:return Object(o.jsx)(j,{})}}()}),Object(o.jsx)(O,{})]})},v=function(){return Object(o.jsx)(x,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),i(e),r(e),n(e),s(e)}))};a(13);s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),w()}},[[14,1,2]]]);
//# sourceMappingURL=main.e537d51f.chunk.js.map