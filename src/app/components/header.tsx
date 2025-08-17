import React from 'react'

export default function Header() {
  return (
    <div className="w-full shadow">
      <nav className="container mx-auto p-6">
        <div className="m-5 flex justify-between">
          <div className="text-2xl">
            <span className="font-bold text-black">A+</span>
            <span className="pl-1 text-black">Studio</span>
          </div>
          <div className="flex items-center space-x-10 text-xl text-black">
            <a href="#">Home</a>
            <a href="#">What We Do</a>
            <a href="#">Service</a>
            <a href="#">Project</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  )
}
