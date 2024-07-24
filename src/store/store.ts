import { create } from "zustand";

interface StoreState {
    sessionQuestions: string[];
    correctAnswers: string[];
    userAnswers: string[];
    setSessionQuestions: (questions: string[]) => void;
    setCorrectAnswers: (answers: string[]) => void;
    addUserAnswer: (answer: string) => void;
    resetAnswers: () => void;
}

const useStore = create<StoreState>((set) => ({
    sessionQuestions: [],
    correctAnswers: [],
    userAnswers: [],
    setSessionQuestions: (questions) => set({sessionQuestions: questions}),
    setCorrectAnswers: (answers) => set({correctAnswers: answers}),
    addUserAnswer: (answer) => set((state) => ({userAnswers: [...state.userAnswers, answer]})),
    resetAnswers: () => set({userAnswers: []})
}))

export default useStore