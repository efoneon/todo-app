import './index.css'

export function App() {
  return (
    <div className="w-full">
      <nav className="w-full bg-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
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
        </div>
        <div className="flex items-center gap-3">
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#faq" className="text-gray-700 hover:text-gray-900">FAQ</a>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer transition-transform hover:scale-105">
            Sign Up
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded cursor-pointer transition-transform hover:scale-105">
            Log In
          </button>
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
        Todo App
      </h1>
    </div>
  )
}

export default App
