<script>
import Header from '../components/Header.vue';
import BlogPosts from '../components/BlogPosts.vue';

export default{
    props: ['id'],
    data(){
        return{
            blog: null
        }
    },
     mounted(){
        fetch('https://techcrunch.com/wp-json/wp/v2/posts/' + this.id)
        .then(response => response.json())
        .then(data => this.blog = data)
        .catch(error => console.log(error.message))
    },
}
</script>

<template>
  
    <main v-if="blog">
        <h1 v-html="blog.title.rendered" ></h1>
        <p v-html="blog.content.rendered"></p>
    </main>
        <BlogPosts />
   
</template>

<style scoped>
main{
    margin-top: 50px;
    max-width: 705px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    font-size: 32px;
    margin-bottom: 23px;
}
p{
    margin-bottom: 20px;
    color:#6E6E6E;
    word-spacing: 2px;
    font-size: 18px;
}
</style>
