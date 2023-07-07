import { useEffect } from "react"

const useTitle = title => {

    useEffect (() => {
document.title= `  ${title}-Lawyer Hiring`

    },[title])
};

export default  useTitle ;