import React from 'react'
import { useParams } from 'react-router-dom'

function DirectSearch () {
  const { query } = useParams()
  window.location.replace(`https://duckduckgo.com/?q=${query}`)
  return <></>
}

export default DirectSearch
