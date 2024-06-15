export default function Footer () {
    return (
    <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <button className="text-lg font-bold text-gray-50" href="#">
                Blog
              </button>
            </div>
            <div className="space-x-4">
              <button className="hover:text-gray-50" href="#">
                Home
              </button>
              <button className="hover:text-gray-50" href="#">
                About
              </button>
              <button className="hover:text-gray-50" href="#">
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>)

}