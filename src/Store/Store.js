import { createStore } from "redux";


    const store = createStore(function(state,action){
       if(action.type === "view"){
           return {
               view:action.payload
           }
       }
    
        return state
    },{
      view:false 
    })
    export default store;

    
