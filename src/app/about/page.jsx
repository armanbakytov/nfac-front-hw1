/**
 * v0 by Vercel.
 * @see https://v0.dev/t/odOx3aYRSws
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function About () {
    return (
      <div className="flex flex-col">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">Welcome to Our Blog</h1>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                  Discover the latest insights and stories from our team of passionate writers.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={400}
                  alt="Blog Author"
                  className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About Our Blog</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                  Our blog is dedicated to providing our readers with the latest insights, trends, and best practices in
                  the world of technology, design, and entrepreneurship. We believe in the power of knowledge and strive
                  to create content that empowers, inspires, and educates our audience.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About the Author</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                  Our blog is curated by a team of experienced writers and industry experts who are passionate about their
                  craft. Each author brings a unique perspective and depth of knowledge to the table, ensuring that our
                  content is both informative and engaging.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Mission</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                  At the heart of our blog is a deep commitment to empowering our readers and fostering a community of
                  lifelong learners. We believe that knowledge is power, and we strive to create content that not only
                  informs but also inspires our audience to pursue their passions and reach their full potential.
                </p>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Our Content</h2>
                <p className="mt-4 text-gray-500 dark:text-gray-400 text-lg">
                  Our blog covers a wide range of topics, from the latest industry trends and best practices to personal
                  development and entrepreneurial insights. Whether you're a seasoned professional or just starting out,
                  you'll find something valuable and inspiring in our content.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }