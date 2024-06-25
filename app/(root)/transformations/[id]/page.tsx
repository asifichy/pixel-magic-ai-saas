import React from 'react'

const TransformationsPage = ({ params }: { params: { id: string }}) => {
  return (
    <div>TransformationsPage</div>
  )
}

export default TransformationsPage

//each transformation will have its own id such as: host:3000/transformations/[id]
// and we need to use a concept called dynamic routes