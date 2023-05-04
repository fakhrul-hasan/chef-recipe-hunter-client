import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - S-peac-hless`;
    },[title])
};
export default useTitle;