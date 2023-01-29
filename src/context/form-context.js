import { createContext, useState } from 'react'

export const FormContext = createContext({
  addNewGoals: () => null,
  courseGoals: [],
  setCourseGoals: () => null,
})

export const FormContextProvider = ({ children }) => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Become badass at React!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ])

  const addNewGoals = (goal) => {
    setCourseGoals((prev) => {
      const freshGoal = { text: goal, id: Math.random() }
      const updated = [...prev]
      updated.unshift(freshGoal)
      return updated
    })
  }

  const value = {
    courseGoals,
    addNewGoals,
    setCourseGoals,
  }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
