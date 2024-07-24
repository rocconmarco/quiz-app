import React from 'react'
import useStore from '../../store/store.ts'
import { Navigate } from 'react-router-dom'
import SummaryPage from '../../pages/SummaryPage'

const ProtectedSummaryRoute = () => {
    const userAnswers = useStore((state) => state.userAnswers)

    if(!userAnswers || userAnswers.length < 10) {
        return <Navigate to="/" replace/>
    }
    return <SummaryPage />
}

export default ProtectedSummaryRoute
