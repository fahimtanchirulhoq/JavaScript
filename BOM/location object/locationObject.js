console.log(window);
console.log(location.href);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.port);
console.log(location.pathname);

const visitButton = document.querySelector('#visit-Button');
visitButton.addEventListener('click', function () {
    location.assign("https://www.youtube.com/watch?v=ytOhuX7C69Y&list=PLgH5QX0i9K3qzryglMjcyEktz4q7ySunX&index=56");
});
