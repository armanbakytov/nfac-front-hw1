const Home = () => {
    return ( 
        <div className="flex flex-col min-h-[100dvh]">
          <header className="bg-gray-900 text-white py-12 md:py-20">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Welcome to Our Blog</h1>
                <p className="text-lg text-gray-300">Discover the latest insights and trends in our curated blog posts.</p>
              </div>
            </div>
          </header>
          <main className="container grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8 py-12 md:py-20">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="200"
                    alt="Blog Post Image"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Unlocking the Power of React Hooks</h3>
                    <p className="text-gray-600 line-clamp-3">
                      Discover how React Hooks can revolutionize your web development workflow. Learn to create reusable,
                      composable components that simplify your codebase and improve maintainability.
                    </p>
                    <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium" href="#" rel="ugc">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-1 w-4 h-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="200"
                    alt="Blog Post Image"
                    className="w-full h-48 object-cover"
                    
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Mastering CSS Grid: The Future of Layout</h3>
                    <p className="text-gray-600 line-clamp-3">
                      CSS Grid is a powerful layout system that can transform the way you build web pages. Explore the
                      latest techniques and best practices to create stunning, responsive layouts with ease.
                    </p>
                    <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium" href="#" rel="ugc">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-1 w-4 h-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="200"
                    alt="Blog Post Image"
                    className="w-full h-48 object-cover"
                   
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Optimizing Web Performance: A Comprehensive Guide</h3>
                    <p className="text-gray-600 line-clamp-3">
                      Learn proven techniques to optimize your website's performance, from image optimization to code
                      minification. Improve user experience and boost your search engine rankings.
                    </p>
                    <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium" href="#" rel="ugc">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-1 w-4 h-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="200"
                    alt="Blog Post Image"
                    className="w-full h-48 object-cover"
                    
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Exploring the Latest JavaScript Frameworks</h3>
                    <p className="text-gray-600 line-clamp-3">
                      Stay ahead of the curve by learning about the newest JavaScript frameworks and libraries. Discover how
                      they can streamline your development process and create more interactive user experiences.
                    </p>
                    <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium" href="#" rel="ugc">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="ml-1 w-4 h-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 font-medium" href="#" rel="ugc">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 font-medium" href="#" rel="ugc">
                      Design
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 font-medium" href="#" rel="ugc">
                      Programming
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 font-medium" href="#" rel="ugc">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 font-medium" href="#" rel="ugc">
                      Tutorials
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Popular Posts</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Blog Post Image"
                      className="rounded-lg w-20 h-20 object-cover"
                 
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">Unleashing the Power of TypeScript</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        Discover how TypeScript can revolutionize your JavaScript development and improve code quality,
                        maintainability, and scalability.
                      </p>
                      <a
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                        href="#"
                        rel="ugc"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="ml-1 w-4 h-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Blog Post Image"
                      className="rounded-lg w-20 h-20 object-cover"
                     
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">Mastering Responsive Web Design</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        Learn the latest techniques and best practices to create responsive, mobile-friendly websites that
                        adapt to any device.
                      </p>
                      <a
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                        href="#"
                        rel="ugc"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="ml-1 w-4 h-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Blog Post Image"
                      className="rounded-lg w-20 h-20 object-cover"
                      
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">Exploring the Latest CSS Trends</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        Stay ahead of the curve by learning about the newest CSS features and techniques. Enhance your web
                        designs with modern, visually stunning styles.
                      </p>
                      <a
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                        href="#"
                        rel="ugc"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="ml-1 w-4 h-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

     );
}
 
export default Home;