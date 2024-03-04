import React from 'react'
import Loader from '../components/Loader'

const SuspenseContainer = ({children}) => {
  return (
    <React.Suspense fallback={<Loader/>}>{children}</React.Suspense>
  )
}

export default SuspenseContainer
