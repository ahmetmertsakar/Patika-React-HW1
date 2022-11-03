import axios from 'axios';
export default homework => getUser(1);

async function getPost(user_id) {
    const { data: postUser } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    console.log("User Post Data", postUser);
}

async function getUser(user_id) {
    const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    console.log("User Data", user);
    getPost(user_id);
}