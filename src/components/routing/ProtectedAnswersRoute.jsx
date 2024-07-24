import useStore from '../../store/store.ts'
import { Navigate } from 'react-router-dom'
import AnswersPage from '../../pages/AnswersPage'

const ProtectedAnswersRoute = () => {
    const userAnswers = useStore((state) => state.userAnswers)
    if(!userAnswers || userAnswers.length < 10) {
        return <Navigate to="/" replace />
    }
    return <AnswersPage />
  
}

export default ProtectedAnswersRoute
