import './index.css'
import { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function App() {
  const [displayText, setDisplayText] = useState('Todo App')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [accountCreated, setAccountCreated] = useState(false)
  const [showAccountMessage, setShowAccountMessage] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    // Check URL hash on mount
    const hash = window.location.hash
    if (hash === '#about') {
      setDisplayText('About')
    } else if (hash === '#faq') {
      setDisplayText('FAQ')
    } else if (hash === '#signup') {
      setDisplayText('Sign Up')
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const currentHash = window.location.hash
      if (currentHash === '#about') {
        setDisplayText('About')
      } else if (currentHash === '#faq') {
        setDisplayText('FAQ')
      } else if (currentHash === '#signup') {
        setDisplayText('Sign Up')
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

  const handleSignUpClick = () => {
    setDisplayText('Sign Up')
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const handleSignUp = () => {
    setAccountCreated(true)
    setShowAccountMessage(true)

    // Fade out after 2 seconds
    setTimeout(() => {
      setShowAccountMessage(false)
    }, 2000)
  }

  const addTodo = () => {
    if (newTodo.trim() === '') return

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false
    }

    setTodos([...todos, todo])
    setNewTodo('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  const faqItems = [
    {
      question: 'Is there any price to use this program?',
      answer: 'No, there are no costs whatsoever to use this application!'
    },
    {
      question: 'How do I create an account?',
      answer: 'Simply just click the "Sign Up" button located at the top right of the screen.'
    },
    {
      question: 'What do I need to do to get started?',
      answer: 'All you need to do is Sign up and then you can get straight to your todos!'
    }
  ]

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
            <a href="#signup">
              <button onClick={handleSignUpClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition-transform hover:scale-105">
                Sign Up
              </button>
            </a>
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
      {displayText === 'Todo App' && (
        <div className="mt-24 pl-64 flex items-start justify-between pr-64">
          <p className="text-2xl max-w-3xl">
            A simple and intuitive todo list application to help you organize your daily tasks and boost your productivity.
            Sign up to get started and take control of your day!{' '}
            <a
              href="#about"
              onClick={handleAboutClick}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Learn More
            </a>
          </p>
          <div className="relative w-96 h-96 -mt-32">
            <img
              src="/images/clipboard.png"
              alt="Todo Clipboard"
              className="w-96 h-96"
            />
            <svg
              className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="150"
                y1="200"
                x2="360"
                y2="200"
                stroke="#000"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 210,
                  strokeDashoffset: 210,
                  animation: 'drawLineLoop 5s ease-in-out infinite'
                }}
              />
              <line
                x1="150"
                y1="250"
                x2="360"
                y2="250"
                stroke="#000"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 210,
                  strokeDashoffset: 210,
                  animation: 'drawLineLoop 5s ease-in-out 0.4s infinite'
                }}
              />
              <line
                x1="150"
                y1="300"
                x2="360"
                y2="300"
                stroke="#000"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 210,
                  strokeDashoffset: 210,
                  animation: 'drawLineLoop 5s ease-in-out 0.8s infinite'
                }}
              />
              <line
                x1="150"
                y1="350"
                x2="360"
                y2="350"
                stroke="#000"
                strokeWidth="8"
                strokeLinecap="round"
                style={{
                  strokeDasharray: 210,
                  strokeDashoffset: 210,
                  animation: 'drawLineLoop 5s ease-in-out 1.2s infinite'
                }}
              />
            </svg>
          </div>
        </div>
      )}
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
      {displayText === 'FAQ' && (
        <div className="mt-8 mx-auto max-w-4xl px-6">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4 border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between text-left py-3 hover:bg-gray-50 rounded px-3 transition-colors"
              >
                <span
                  className="text-2xl italic font-bold"
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 900
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="ml-4"
                  style={{
                    transform: openFaqIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: 'transform 1s cubic-bezier(0.25, 0.1, 0.25, 1)'
                  }}
                >
                  ▶
                </span>
              </button>
              <div
                className="overflow-hidden"
                style={{
                  maxHeight: openFaqIndex === index ? '200px' : '0px',
                  opacity: openFaqIndex === index ? 1 : 0,
                  transition: 'max-height 1s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 1s cubic-bezier(0.25, 0.1, 0.25, 1)'
                }}
              >
                <div className="mt-2 px-3 text-xl text-gray-700">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {displayText === 'Sign Up' && !accountCreated && (
        <div className="mt-8 mx-auto max-w-md px-6">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 pr-10 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="******************"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
      {displayText === 'Sign Up' && accountCreated && (
        <div className="fixed inset-0 bg-white">
          {showAccountMessage ? (
            <div className="flex items-center justify-center h-full">
              <h1
                className="text-6xl italic font-bold"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 900,
                  opacity: 1,
                  transition: 'opacity 1s ease-in-out'
                }}
              >
                Account created!
              </h1>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto pt-20 px-6">
              <h1
                className="text-5xl italic font-bold text-center mb-12"
                style={{
                  fontFamily: 'Lato, sans-serif',
                  fontWeight: 900
                }}
              >
                My Todos
              </h1>

              <div className="mb-8">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="What needs to be done?"
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-lg"
                  />
                  <button
                    onClick={addTodo}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer transition-all hover:scale-105"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {todos.length === 0 ? (
                  <p className="text-center text-gray-400 text-xl py-12">
                    No todos yet. Add one to get started!
                  </p>
                ) : (
                  todos.map((todo) => (
                    <div
                      key={todo.id}
                      className="flex items-center gap-4 bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="w-5 h-5 cursor-pointer accent-blue-500"
                      />
                      <span
                        className="flex-1 text-lg"
                        style={{
                          textDecoration: todo.completed ? 'line-through' : 'none',
                          color: todo.completed ? '#9ca3af' : '#000'
                        }}
                      >
                        {todo.text}
                      </span>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="text-red-500 hover:text-red-700 font-bold text-xl cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>
                  ))
                )}
              </div>

              {todos.length > 0 && (
                <div className="mt-6 text-center text-gray-600">
                  {todos.filter(t => !t.completed).length} of {todos.length} tasks remaining
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default App
