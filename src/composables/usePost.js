import {ref} from 'vue'
export default function usePost(id){
 const posts = ref([])
 const post = ref()
 const fetchAll = async ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((res)=>posts.value=res)
 }
 const fetchOne = async ()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>res.json())
    .then((res)=>post.value=res)
 }

 return{
    posts,
    fetchAll,
    post,
    fetchOne
 }
}