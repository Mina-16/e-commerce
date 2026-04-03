import React from 'react'

function SkeltonProductInfo() {
  return (
    <div className="max-w-2xl rounded-2xl p-6 bg-white animate-pulse">

      {/* title */}
      <div className="h-6 bg-gray-300 rounded w-3/1 mb-3"></div>

      {/* description */}
      <div className="h-4 bg-gray-300 rounded w-7/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-6/2 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-6/3 mb-4"></div>


      {/* price */}
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>

      {/* button */}
      <div className="h-10 bg-gray-300 rounded-xl w-32"></div>

    </div>
  )
}

export default SkeltonProductInfo