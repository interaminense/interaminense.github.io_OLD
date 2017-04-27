(function() {

  'use strict';

  const url = 'js/data.json';
  const ul = document.getElementById('projects');

  const createNode = function(element) {
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
  }

  fetch(url).then(function(response) { 
    return response.json();
  }).then(function(data) {

    //print data
    console.log(data);

    let projects = data.projects;
    return projects.map(function(project){

      let li = createNode('li'),
          title = createNode('h3'),
          subtitle = createNode('h5'),
          boxDescription = createNode('div'),
          description = createNode('p'),
          tech = createNode('p'),
          techUl = createNode('ul'),
          hosted = createNode('span'),
          created = createNode('div'),
          url = createNode('a'),
          boxImg = createNode('div'),
          img = createNode('img');

      //li
      addClass(li, 'lp__project');

      //created
      created.innerHTML = 'created on ' + project.created;
      addClass(created, 'lp__project-created');
      append(li, created);

      //hosted
      hosted.innerHTML = 'hosted on ' + project.hosted;
      addClass(hosted, 'lp__project-hosted');
      addClass(hosted, 'badge');
      addClass(hosted, 'badge-default');
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
      img.src = 'imgs/' + project.img;
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

      append(li, url);
      append(ul, li);
    })
  });

})();