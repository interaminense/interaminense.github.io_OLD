(function() {

  'use strict';

  const url = 'src/js/data.json',

  _idProjects = document.getElementById('projects'),
  _idSocialNetwork = document.getElementById('socialNetwork'),
  _idAboutMe = document.getElementById('aboutMe'),
  _idBlur = document.getElementById('blur'),
  _idOpenMenu = document.getElementById('openMenu'),
  _idCloseMenu = document.getElementById('closeMenu'),

  createNode = function(element) {
    return document.createElement(element);
  },
  append = function(parent, el) {
    return parent.appendChild(el);
  },
  addClass = function(el, classname) {
    return el.classList.add(classname);
  },
  removeClass = function(el, classname) {
    return el.classList.remove(classname);
  },
  getColorBadge = function(el) {
    let classname;
    switch (el) {
      case 'github':
        classname = 'badge-a';
        break;
      case 'codepen':
        classname = 'badge-b';
        break;
      default:
        classname = 'badge-default';
        break;
    }

    return classname;
  },
  action = function(event, item, _function) {
    item.addEventListener(event, function() {
      _function();
    });
  }

  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {

    //print data
    console.log("data", data);

    //Projects
    let _projects = data.projects;
    _projects.map(function(project){

      let li = createNode('li'),
          title = createNode('h1'),
          subtitle = createNode('h5'),
          boxDescription = createNode('div'),
          description = createNode('p'),
          tech = createNode('p'),
          techUl = createNode('ul'),
          hosted = createNode('span'),
          created = createNode('div'),
          spanCreated = createNode('span'),
          url = createNode('a'),
          boxImg = createNode('div'),
          img = createNode('img');

      //li
      addClass(li, 'lp__project');

      //created
      addClass(created, 'lp__project-created');
      append(li, created);

      //sapn created
      spanCreated.innerHTML = 'created in ' + project.created;
      addClass(spanCreated, 'right-gap');
      append(created, spanCreated);

      //hosted
      hosted.innerHTML = 'hosted on ' + project.hosted;
      addClass(hosted, 'lp__project-hosted');
      addClass(hosted, 'badge');
      addClass(hosted, getColorBadge(project.hosted));
      append(created, hosted);

      //title
      title.innerHTML = project.title;
      addClass(title, 'lp__project-title');
      addClass(title, 'text-uppercase');
      append(li, title);

      //subtitle
      subtitle.innerHTML = project.subtitle;
      addClass(subtitle, 'lp__project-subtitle');
      append(li, subtitle);

      //box img
      addClass(boxImg, 'lp__project-img');
      append(li, boxImg);

      //img
      img.src = 'src/imgs/' + project.img;
      append(boxImg, img);

      //box description
      addClass(boxDescription, 'lp__project-box-description');
      append(li, boxDescription);

      //description
      description.innerHTML = project.description;
      addClass(description, 'lp__project-description');
      append(boxDescription, description);

      //tech description
      tech.innerHTML = project.tech.description;
      addClass(tech, 'lp__project-tech');
      append(boxDescription, tech);

      //tech list
      append(boxDescription, techUl);
      addClass(techUl, 'lp__project-tech-list')
      project.tech.used.map(function(item){
        let techLi = createNode('li');
        techLi.innerHTML = item;
        append(techUl, techLi);
      })

      //url
      url.href = project.url;
      url.innerHTML = 'visit the website';
      url.target = '_blank';
      addClass(url, 'lp__project-url');
      addClass(url, 'btn');
      addClass(url, 'btn-default');
      append(li, url);

      //append li inside projects
      append(_idProjects, li);
    })

    //Social Networks
    let _social = data.socialNetwork;
    _social.map(function(social){

      let li = createNode('li'),
          url = createNode('a'),
          icon = createNode('span');

      //url
      url.href = social.url;
      url.target = '_blank';
      url.title = 'go to my ' + social.name;
      append(li, url);

      //icon
      addClass(icon, social.icon);
      append(url, icon);

      //append li inside header__links
      append(_idSocialNetwork, li);

    })

    //About Me
    let aboutMe = data.aboutMe,
        aboutTitle = createNode('h6'),
        aboutBoxImage = createNode('div'),
        aboutImage = createNode('img'),
        aboutDescription = createNode('p');

    append(_idAboutMe, aboutBoxImage);
    addClass(aboutBoxImage, 'lp__side-image');
    addClass(aboutBoxImage, 'circle');

    aboutImage.src = aboutMe.image;
    append(aboutBoxImage, aboutImage);

    aboutTitle.innerHTML = aboutMe.title;
    addClass(aboutTitle, 'text-center');
    addClass(aboutTitle, 'text-uppercase');
    addClass(aboutTitle, 'text-weight-500');
    append(_idAboutMe, aboutTitle);

    aboutDescription.innerHTML = aboutMe.description;
    append(_idAboutMe, aboutDescription);

    //blur
    _idBlur.style.backgroundImage = 'url('+aboutMe.image+')';

  });

  //click to open menu on mobile devices
  action('click', _idOpenMenu, function(){
    let side = document.getElementById('side').classList.add('lp__side--is-open');
  });
  action('click', _idCloseMenu, function(){
    let side = document.getElementById('side').classList.remove('lp__side--is-open');
  });

})();