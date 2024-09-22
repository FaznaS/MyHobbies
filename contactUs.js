new Vue ({
    el: '#app',
    data: {
        name:'',
        email:'',
        hobby:'',
        feedback: '',
        submitcomment: false
    },
    methods: {
        submitFeedback: function () {
            this.submitcomment = true;
            display=this.feedback
            return display
        }
    }
})