import { useState } from "react";

function useLocalStorage(key,initialValue){
    const [value,setValue]=useState(()=>{
        try {
            const item=localStorage.getItem(key);
            return item ? JSON.parse(item): initialValue;
        } catch {
            return initialValue;
        }
    });
    const saveValue=(newValue) =>{
        try {
            setValue(newValue);
            localStorage.setItem(key,JSON.stringify(newValue));
        } catch {
            setValue(newValue);
        }

    };
    return [value,saveValue];

}
export default useLocalStorage;