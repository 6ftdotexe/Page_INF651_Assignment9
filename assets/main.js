/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////
// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

let url = 'https://jsonplaceholder.typicode.com';

async function getAllPosts() {
    const posts = await fetch(url + '/posts');
    return await posts.json();
}

// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.

async function getAllUsers() {
    const users = await fetch(url + '/users');
    return await users.json();
}

// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

async function getComments(postID) {
    let postsurl = url + '/posts/' + postID + '/comments';
    const comments = await fetch(postsurl);
    return await comments.json();
}

// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.

async function getUser(userID){
    let userurl = url + '/users/' + userID;
    let user = await fetch(userurl);
    return await user.json();
    
  }

// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

const getTodosForUser = async (userID) => {
    //fetching the data from the URL
    const resp = await fetch(url + '/todos?userid=' + userID);
    //converting to json data
    const data = await resp.json();
    //returning the data
    return data;
};
