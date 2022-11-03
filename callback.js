// setTimeout(()=>{
//     console.log("merhaba");
// },5000)

// setInterval(() => {
//     console.log("merhaba ben her saniye çalışacağım.");
// }, 1000);

// const sayHi = (cb) => {
//     cb();
// };

// sayHi(()=>{
//     console.log("Hello");
// });

import fetch from 'node-fetch';
import axios from 'axios';
import { text } from './my-module';

// import { user } from './my-module';

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => {
//         console.log("Users Yüklendi!", users);

//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then((data) => data.json())
//             .then((data) => {
//                 console.log("Post 1 Yüklendi!", data)

//                 fetch("https://jsonplaceholder.typicode.com/posts/2")
//                     .then((data) => data.json())
//                     .then((data) => console.log("Post 2 Yüklendi!", data))
//             });
//     });


// async function getData() {
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//     const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
//     const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

//     console.log("users", users);
//     console.log("post1", post1);
//     console.log("post2", post2);
// }

// getData();

const getUsers = () => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users");
        resolve(data);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data);
    });
};

(async () => {
    const users = await getUsers();

    const post = await getPost(1);

    console.log(users);
    console.log(post);
})();