import { useState } from 'react'

const steps = [1, 2, 3]

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  console.log('currentStep', currentStep)

  return (
    <div>
      <div>
        {steps.map((step) => (
          <span
            key={step}
            className={`step ${currentStep >= step && 'bg-red'}`}
          >
            {step}
          </span>
        ))}
      </div>
      <button onClick={handlePrevStep}>Previous</button>
      <button onClick={handleNextStep}> Next</button>
    </div>
  )
}

export default Stepper