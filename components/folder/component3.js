
// @docs descriptions To jest komponent @

// @docs functions nanana @


import React from 'react'

// @docs params
props = { 
  text,
  props2,
  props3,
}
// @

function Component3(props) {

  return (
    // @docs DOM
    <>
    <div>
        <p>Tekst: </p>
    </div>
    // @

    <div>
      // @docs translation
        <p>{Intl.translationExample}</p>

      // @
    </div>
    </>

  )
}

export default Component3;
