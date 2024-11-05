'use client'

import React, { useState } from 'react'
import { Ghost, Skull, Candy, Moon, Flame } from 'lucide-react'

// Create BatCursor component
const BatCursor = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12h6m14 0h-6M8 12c0-2.5-1-5-4-6 3 1 6 2 6 6s3 5 6 6c-3-1-6-3-6-6zm8 0c0-2.5 1-5 4-6-3 1-6 2-6 6s-3 5-6 6c3-1 6-3 6-6z" />
  </svg>
);

export default function Page() {
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [batPosition, setBatPosition] = useState({ x: -100, y: -100 })

  const handleEasterEgg = () => {
    setShowEasterEgg(true)
    setTimeout(() => setShowEasterEgg(false), 3000)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    setBatPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <div className="min-h-screen bg-gray-900 text-orange-50" onMouseMove={handleMouseMove}>
      <div className="fixed inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5 pointer-events-none" aria-hidden="true" />
      
      {/* Header */}
      <header className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Flame className="h-8 w-8 text-orange-500 animate-pulse" />
            <span className="text-3xl font-bold text-orange-500">HalloweenHistory</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#history" className="nav-link">History</a></li>
              <li><a href="#why-celebrate" className="nav-link">Why We Celebrate</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-800 to-gray-900 py-20 text-center relative overflow-hidden">
          <h1 className="mb-6 text-6xl font-bold text-orange-500 relative z-10 animate-fade-in-down">
            The Spooky History of Halloween
          </h1>
          <p className="mx-auto max-w-2xl text-xl relative z-10 animate-fade-in-up">
            Discover the ancient origins and modern traditions of this haunting holiday.
          </p>
        </section>

        {/* History Section */}
        <section id="history" className="container mx-auto my-20 p-4">
          <h2 className="mb-8 text-4xl font-bold text-orange-500 animate-fade-in-left">
            The History of Halloween
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in-left">
              <h3 className="mb-4 text-2xl font-semibold">Ancient Origins</h3>
              <p>Halloween's roots trace back to the ancient Celtic festival of Samhain (pronounced "sow-in"). The Celts celebrated their new year on November 1st.</p>
              <p className="mt-4">This day marked the end of summer and harvest and the beginning of the dark, cold winter. Celts believed that on the night before the new year, the boundary between the worlds of the living and the dead became blurred.</p>
            </div>
            <div className="flex items-center justify-center">
              <Ghost className="h-48 w-48 text-orange-500 animate-float" />
            </div>
          </div>
        </section>

        {/* Why We Celebrate Section */}
        <section id="why-celebrate" className="bg-gray-800 py-20 relative">
          <div className="container mx-auto p-4 relative z-10">
            <h2 className="mb-8 text-4xl font-bold text-orange-500 text-center animate-fade-in-right">
              Why We Celebrate Halloween
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform animate-fade-in-up">
                <Skull className="mb-4 h-16 w-16 text-orange-500" />
                <h3 className="mb-2 text-xl font-semibold">Honoring the Dead</h3>
                <p>Halloween is a time to remember and honor our ancestors and loved ones who have passed away.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform animate-fade-in-up">
                <Candy className="mb-4 h-16 w-16 text-orange-500" />
                <h3 className="mb-2 text-xl font-semibold">Community and Fun</h3>
                <p>It's a chance for communities to come together, dress up, and enjoy festive activities.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform animate-fade-in-up">
                <Moon className="mb-4 h-16 w-16 text-orange-500" />
                <h3 className="mb-2 text-xl font-semibold">Embracing the Mysterious</h3>
                <p>Halloween allows us to explore the unknown and face our fears in a safe and entertaining way.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-orange-500">
        <div className="container mx-auto p-4 text-center">
          <p className="mb-4 text-sm">© 2023 HalloweenHistory. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Flame className="h-6 w-6 text-orange-500 animate-pulse" />
            <Ghost className="h-6 w-6 text-orange-500 animate-bounce" />
            <Skull
              className="h-6 w-6 text-orange-500 cursor-pointer transform hover:scale-110 transition-transform"
              onClick={handleEasterEgg}
            />
          </div>
        </div>
      </footer>

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 animate-fade-in">
          <div className="bg-orange-500 p-8 rounded-lg shadow-lg text-gray-900 animate-pop-up">
            <h3 className="text-2xl font-bold mb-4">Boo! You found the Easter Egg!</h3>
            <p>Happy Halloween! 🎃👻</p>
          </div>
        </div>
      )}

      {/* Custom Bat Cursor */}
      <div
        className="custom-cursor pointer-events-none"
        style={{
          position: 'fixed',
          left: `${batPosition.x}px`,
          top: `${batPosition.y}px`,
          color: 'orange',
          zIndex: 9999,
        }}
      >
        <BatCursor />
      </div>
    </div>
  )
}