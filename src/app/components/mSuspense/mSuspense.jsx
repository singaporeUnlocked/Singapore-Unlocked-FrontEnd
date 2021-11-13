import React, { Suspense } from 'react'
import Loading from '../mLoading/mLoading'

const mSuspense = ({ children }) => {
    return <Suspense fallback={<Loading />}>{children}</Suspense>
}

export default mSuspense
