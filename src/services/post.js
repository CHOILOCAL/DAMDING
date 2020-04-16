// QnaPost 관련 API
import axios from 'axios';

// `postId에 따른 post 불러오기`
export function getPost(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/` + postId);
}

// `postId에 따른 코맨트 불러오기`
export function getComment(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
}

// api 호출 테스트 링크 : https://jsonplaceholder.typicode.com/
// postman