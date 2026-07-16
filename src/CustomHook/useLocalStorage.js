import { useState } from "react";

function useLocalStorage(key,initialValue){
    const [value,setValue]=useState(()=>{
        const item=localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue;
    });
    const saveValue=(value) =>{
        setValue(value);
        localStorage.setItem(key,JSON.stringify(value));

    };
    return [value,saveValue];

}
export default useLocalStorage;