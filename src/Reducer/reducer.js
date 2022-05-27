const initialState ={Shirt:0,Laptop:0,Shirt1:0,Shirt2:0,Laptop1:0,Laptop2:0,Watch:0,Watch1:0,Watch2:0} ;

const CartFun = (state = initialState, action) => {
    switch (action.type) {
        case "ADD": 
        switch(action.payload){
            case "Shirt":
                return ({...state,Shirt:state.Shirt+1});
            case "Laptop":
                return ({...state,Laptop:state.Laptop+1});
            case "Shirt1":
                return ({...state,Shirt1:state.Shirt1+1});
            case "Shirt2":
                return ({...state,Shirt2:state.Shirt2+1});
            case "Laptop1":
                return ({...state,Laptop1:state.Laptop1+1});
            case "Laptop2":
                return ({...state,Laptop2:state.Laptop2+1});
            case 'Watch':
              
                return ({...state,Watch:state.Watch+1});
            case 'Watch1':
                return ({...state,Watch1:state.Watch1+1});
            case 'Watch2':
                return ({...state,Watch2:state.Watch2+1});
        }
        case "SUB":        
        switch(action.payload){
                case "Shirt":
                    return ({...state,Shirt:state.Shirt-1});
                case "Laptop":
                    return ({...state,Laptop:state.Laptop-1});
                case "Shirt1":
                    return ({...state,Shirt1:state.Shirt1-1});
                case "Shirt2":
                    return ({...state,Shirt2:state.Shirt2-1});
                case "Laptop1":
                    return ({...state,Laptop1:state.Laptop1-1});
                case "Laptop2":
                    return ({...state,Laptop2:state.Laptop2-1});
                case 'Watch':
                    return ({...state,Watch:state.Watch-1});
                case 'Watch1':
                    return ({...state,Watch1:state.Watch1-1});
                case 'Watch2':
                    return ({...state,Watch2:state.Watch2-1});
        }
        default: return state;
    }
}

export default CartFun;