import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        if(title === ''){
            document.title = 'S-peac-hless';
        }else{
            document.title = `${title} - S-peac-hless`;
        }
    },[title])
};
export default useTitle;