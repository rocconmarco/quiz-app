import { create } from "zustand";

interface StoreState {
    correctAnswers: string[];
    userAnswers: string[];
    setCorrectAnswers: (answers: string[]) => void;
    addUserAnswer: (answer: string) => void;
    resetAnswers: () => void;
}

const useStore = create<StoreState>((set) => ({
    correctAnswers: [],
    userAnswers: [],
    setCorrectAnswers: (answers) => set({correctAnswers: answers}),
    addUserAnswer: (answer) => set((state) => ({userAnswers: [...state.userAnswers, answer]})),
    resetAnswers: () => set({userAnswers: []})
}))

export default useStore