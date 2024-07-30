import { useState } from "react"


const useLoading = () => {
  const [loading, setLoading] = useState(false)

  const loadingOn = () => {
    setLoading(true)
  }

  const loadingOff = () => {
    setLoading(false)
  }


  return { loading, loadingOn, loadingOff }

} 

export default useLoading;