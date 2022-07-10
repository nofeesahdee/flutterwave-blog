<script>
    export default {
        data () {
            return{
                blogs:[]
            }
        },
        mounted(){
            fetch('https://techcrunch.com/wp-json/wp/v2/posts?page=2')
            .then(response => response.json())
            .then(data => this.blogs = data)
        },
    }
</script>

<template>
    <div class="blog-container">
        <div v-for="blog in blogs" :key="blog.id" class="blog-card">
            <img src="./icon/techcrunch.png" alt="techcrunch" class="card-header-image">
            <div class="blog-text">
                <div class="date-time">
                    <span>{{ blog.category }}</span>
                    <span>{{ blog.date }}</span>
                </div>
                <h2>{{ blog.title.rendered }}</h2>
                <p>{{ blog.excerpt.rendered }}</p>
                <div class="blog-link">
                    <span>10 min read</span>
                    <button>
                        Read More
                        <img src="./icon/arrow.svg" alt="arrow">
                    </button>
                </div>
            </div>
             
        </div>
    </div>
</template>

<style scoped>
.blog-container{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom:62px;
}
.blog-card{
    width: 350px;
    padding: 10px;
    border: 1px solid #F5F5F5;
    background-color: #ffffff;
    margin-bottom: 62px;
}
.card-header-image{
    margin-bottom: 16px;
    width: 330px;
    align-self: center;
}
.blog-text{
    display: flex;
    flex-direction: column;
}
.date-time{
    margin-bottom: 8px;
}
h2{
    font-size: 18px;
    margin-bottom: 8px;
}
p{
    font-size: 14px;
    color:#6E6E6E;
    line-height:21px;
}
.blog-link{
    display: flex;
    justify-content:space-between;
    font-size: 12px;
}
button{
    color: #1473E6;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
}
</style>
