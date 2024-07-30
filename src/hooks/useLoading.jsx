import { useState } from "react"


const useLoading = () => {
  const [loading, setLoading] = useState(false)

  const loadingOn = () => {
    setLoading(true)
  }

  const loadingOff = () => {
    setLoading(false)
  }

  const loadingView = <div>Loading...</div>

  return { loading, loadingOn, loadingOff, loadingView}

} 

export default useLoading;