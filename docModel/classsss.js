const content=document.querySelector('.content');
console.log(content);
content.innerHTML+=`<h2>the new content</h2>`;

const people=['ajay','balu','pruthvi'];
people.forEach(p=>
    {
         content.innerHTML+=`<p>${p}</p>`;
    });