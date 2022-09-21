import React from 'react'

const CloseButton = (props) => {
  return (
    <svg onClick={props.onHide} className={props.className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

  )
}

export default CloseButton