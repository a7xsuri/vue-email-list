const app = new Vue({
    el:'#app',
    data:{
        emails:[],
        num: 10,
    },
    methods:{
        getEmails(){ 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
            const email = res.data.response
            this.emails.push(email)
            console.log(res.data.response)
            console.log(this.emails.length)

        }).catch((error)=>{
            console.log(error);
        })
        }
    },
    created(){
        for(let i = 0; i < this.num; i++){this.getEmails();}
    }
})