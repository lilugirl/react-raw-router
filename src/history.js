export const history={
    listeners:[],
    listen(fn){
        listeners.push(fn);
        return function(){
            this.listeners=this.listeners.filter(listener=>listener!==fn)
        }
    },
    push(to,state){
        //解析用户传入的url
        // 分解成pathname search等信息
        location=getNextLocation(to,state);
         // 调用原生history的方法改变路由
        window.history.pushState(state,'',to);
        // 执行用户传入的监听函数
        this.listeners.forEach(fn=>fn(location))
    }
    
}


export const Location={

}


