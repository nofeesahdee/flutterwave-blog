
<script>
</script>


<template>
  <div class="footer-container">
    <h4>Join our Team of Writers</h4>
    <p>
        On dasdas, writers earn a living doing what they love. 
        Getting started is easy. Just pay a one time <strong>$25 fee</strong> and everything is ready to go.
    </p>
    <button @click="payViaService">Join Us</button>
  </div>
</template>

<style scoped>
    h4{
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 12px;
    }
    p{
        color:#6E6E6E;
        font-size: 22px;
        max-width: 741px;
        margin-bottom: 35px;
        text-align: center;
    }
    button{
        background-color: black;
        color: #ffffff;
        text-transform: uppercase;
        border: none;
        font-size: 18px;
        width: 117px;
        height: 45px;
        cursor: pointer;
    }
    button:hover{
        transform: scale(1.1);
    }
</style>
