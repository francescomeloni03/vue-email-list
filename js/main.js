
const { createApp } = Vue
createApp({
    data(){
        return{
            emails: [],
            linkEmail: "https://flynn.boolean.careers/exercises/api/random/mail",
        }
    }, 
    mounted() {
            for (let c = 0; c < 10; c++) {

                axios.get(this.linkEmail).then((answer) => {
                    this.emails.push(answer.data.response)
                    console.log(this.emails)
                    
                })      
        }
    }
}).mount('#app')