import React from 'react'

export default function Alert(props) {
  return (
    
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.type}</strong>{props.msg} 
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}
