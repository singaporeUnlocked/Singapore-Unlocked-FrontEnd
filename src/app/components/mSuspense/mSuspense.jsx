import React, { Suspense } from 'react'
import Loading from '../mLoading/mLoading'

const MSuspense = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default MSuspense
