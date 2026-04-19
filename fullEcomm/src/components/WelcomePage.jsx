import React from 'react'
import { Link } from 'react-router'

const WelcomePage = () => {
  return (
    <div className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center ">
      
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-10 text-center max-w-xl w-full border border-white/20">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Welcome to Our Store 🛍️
        </h1>

        {/* Subtext */}
        <p className="text-white/80 text-lg mb-8">
          Discover amazing products and start your shopping journey today!
        </p>

        {/* Button */}
        <Link
          to="/product"
          className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Start Shopping 🚀
        </Link>

      </div>
    </div>
  )
}

export default WelcomePage