<template>
    <div class="homepage-main-view">
        <h2>Thank You For Trying This Site</h2>
        <div class="comment-container">
            <p v-for="commentArray in allcomments" :key="commentArray[0]">{{ commentArray[1] }}</p>
        </div>
        <div class="comment-method">
            <label for="comment">Comment</label>
            <textarea v-model="comment" id="comment" placeholder="Write your comment here..."></textarea>
            <button class="submit" @click="submit">Submit</button>
            <button @click="logout">Logout</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    data(){
        return{
            comment:'',
            allcomments:[],
        }
    },
    methods:{
        submit(){
            axios.post('https://rz.pythonanywhere.com/comment',{
                comment: this.comment,
            })
            .then(response =>{
                if (response && response.data && response.data.message){
                    alert(response.data.message)
                }
            })
        },
        logout() {
            this.$store.dispatch('logout');
            this.$router.push('/LoginPage');
        },
    },
    mounted(){
        axios.get('https://rz.pythonanywhere.com/allcomment')
        .then(response =>{
            this.allcomments = response.data.allcomment;
            console.log(this.allcomments);
        })
    }
}
</script>
<style>
.comment-container p{
    text-align: center;
    background-color: aliceblue;
    position: relative;
    width: 100%;
    word-wrap: break-word;
    margin-bottom: 0px;
    border: solid 2px rgb(172, 162, 162);
}
.comment-container{
    padding: 10px;
    overflow: auto;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    width: 50vh;
    height: 50vh;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 1px rgb(189, 187, 187);
    margin-bottom: 20px;
}
.submit{
    margin-top: 5px;
    margin-bottom: 30px;
}
.comment-method{
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
}
.homepage-main-view{
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}
@media screen and (max-width:450px){
    .homepage-main-view h2{
        text-align: center;
        font-size: 1.2rem;
    }
    .comment-container{
        width: 35vh;
    }
}
</style>