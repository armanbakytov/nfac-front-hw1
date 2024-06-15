export default function Header (){
    return(
        <header className="bg-white dark:bg-gray-900 shadow">
        <nav className="container mx-auto px-4 py-4 md:px-6 md:py-6">
          <div className="flex items-center justify-between">
            <button className="text-lg font-bold text-gray-900 dark:text-gray-50" href="#">
              Blog
            </button>
            <div className="hidden md:flex items-center space-x-4">
              <button
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                Home  
              </button>
              <button
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                About
              </button>
              <button
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#">
                Contact
              </button>
            </div>
            <button className="hidden md:inline-flex" size="sm">
              Subscribe
            </button>
          </div>
        </nav>
      </header>
    );
};