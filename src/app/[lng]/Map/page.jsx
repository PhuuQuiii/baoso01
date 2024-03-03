'use client';

import React from 'react'

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <iframe
        className="w-full h-full"
        src="/index.html"
        title="Fullscreen HTML"
      />
    </div>
  )
}

export default page
