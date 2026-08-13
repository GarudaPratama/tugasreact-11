import React from 'react'
import Project from './components/Project.jsx'
import { Toaster } from "@/components/ui/toast"

function App() {
  return (
    <section>
      <Toaster />
      <Project />
    </section>
    
  )
}

export default App