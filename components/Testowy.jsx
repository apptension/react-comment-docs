import React from 'react'

function TestComponent() {
  return (
    // @docs DOM
    <div>
      <p>Test</p>
      <div>
        // @docs translation
        <p>
          {Intl.translation()}
        </p>
        // !docs translation
      </div>
    </div>
    // !docs DOM
  )
}

export default TestComponent
