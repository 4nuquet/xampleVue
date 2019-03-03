Vue.component('my-component',{
    props:{
        title: ''
    },
    template: 
    ` <div class="container">
        <form>
        <h1>To Do</h1>
            <div class="form-group">
                <input type="text" class="form-control">
            </div>
            <div class="form-group"> 
            <button class="btn btn-success btn-sm">Create</button>
            </div>
        </form>
    </div>`,
    
});

new Vue({
    el: '#app',
    data:{

    }
});