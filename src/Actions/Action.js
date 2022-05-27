 export const addItem=(item)=>{
    
    return {
        type: 'ADD',
        payload: item
    }
 }

 export const subItem=(item)=>{
    return {
        type: 'SUB',
        payload: item
    }
 }