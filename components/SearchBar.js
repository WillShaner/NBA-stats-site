import React from 'react'
import Button from 'react-bootstrap/Button'

function SearchBar({ fieldRef, onsubmit, type, placeholder, errors }) {
  return (
    <form onSubmit={onsubmit} className="w-100 d-flex flex-column justify-content-center align-items-center my-3 search">
      <input className="w-100 text-center mb-2" ref={fieldRef} type={type} placeholder={placeholder} />
      <p className="text-danger">{errors}</p>
      <Button type='submit'>Search</Button>
    </form>
  )
}

export default SearchBar