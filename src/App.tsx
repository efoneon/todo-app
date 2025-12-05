import './index.css'
import { useState, useEffect } from 'react'

export function App() {
  const [displayText, setDisplayText] = useState('Todo App')

  useEffect(() => {
    // Check URL hash on mount
    const hash = window.location.hash
    if (hash === '#about') {
      setDisplayText('About')
    } else if (hash === '#faq') {
      setDisplayText('FAQ')
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const currentHash = window.location.hash
      if (currentHash === '#about') {
        setDisplayText('About')
      } else if (currentHash === '#faq') {
        setDisplayText('FAQ')
      } else {
        setDisplayText('Todo App')
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleAboutClick = () => {
    setDisplayText('About')
  }

  const handleFaqClick = () => {
    setDisplayText('FAQ')
  }

  return (
    <div className="w-full">
      <nav className="w-full bg-gray-200 px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <img src="/images/list.png" alt="Todo App Logo" className="w-8 h-8" />
          <span
            className="text-2xl italic font-bold"
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 900
            }}
          >
            Todo App
          </span>
        </a>
        <div className="flex items-center">
          <div className="flex items-center gap-8 mr-6">
            <a href="#about" className="text-lg text-gray-700 hover:text-gray-900" onClick={handleAboutClick}>About</a>
            <a href="#faq" className="text-lg text-gray-700 hover:text-gray-900" onClick={handleFaqClick}>FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition-transform hover:scale-105">
              Sign Up
            </button>
            <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer transition-transform hover:scale-105">
              Log In
            </button>
          </div>
        </div>
      </nav>
      <h1
        className="text-9xl pt-24 pl-64 italic"
        style={{
          fontFamily: 'Lato, sans-serif',
          fontWeight: 900,
          fontSize: '10rem'
        }}
      >
        {displayText}
      </h1>
      {displayText === 'About' && (
        <div className="text-justify mt-8 mx-auto max-w-4xl px-6">
          <p className="text-2xl mb-6">
            This application is a simple todo list made by Aaron Cordova. It was designed to help users organize their daily tasks
            and manage their productivity in an intuitive and efficient way. The application features a clean, modern interface
            built with React and styled using Tailwind CSS, providing a seamless user experience across all devices.
          </p>
          <p className="text-2xl mb-6">
            The goal of this project was to create a minimalist yet powerful task management tool that focuses on simplicity
            and ease of use. Whether you're managing personal tasks, work projects, or long-term goals, this todo app
            provides all the essential features you need without the clutter of unnecessary complexity.
          </p>
          <p className="text-2xl mb-6">
            Built with modern web technologies including React, TypeScript, and Bun, this application demonstrates
            best practices in frontend development and responsive design. The project is continuously being improved
            with new features and enhancements based on user feedback and emerging web standards.
          </p>
          <p className="text-2xl">
            Check out his github page at{' '}
            <a
              href="https://github.com/efoneon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              efoneon
            </a>
            {' '}to explore more projects and contributions to the open-source community.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
