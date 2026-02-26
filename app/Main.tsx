import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="space-y-8 pt-6 pb-8 md:space-y-10 md:pt-10 md:pb-12">
        <div className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex-1 space-y-4 text-center sm:text-left">
            <span className="bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 inline-block rounded-full px-3 py-1 text-sm font-medium">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
              Hi, I&apos;m{' '}
              <span className="from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 bg-gradient-to-r bg-clip-text text-transparent">
                {siteMetadata.author}
              </span>
            </h1>
            <p className="max-w-2xl text-lg leading-7 text-gray-600 dark:text-gray-300">
              {siteMetadata.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2 sm:justify-start">
              <Link
                href="/projects"
                className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md"
              >
                View Projects
              </Link>
              <Link
                href="/about"
                className="hover:border-primary-300 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Skills/Tech Stack */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800/50">
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              'JavaScript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Python',
              'Tailwind CSS',
              'Git',
            ].map((skill) => (
              <span
                key={skill}
                className="hover:border-primary-300 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 rounded-md border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      {projectsData.length > 0 && (
        <div className="py-8">
          <div className="flex items-center justify-between pb-6">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
            >
              View all &rarr;
            </Link>
          </div>
          <div className="-m-4 flex flex-wrap">
            {projectsData.slice(0, 4).map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts Section */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="flex items-center justify-between pt-8 pb-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Recent Posts
          </h2>
          {posts.length > MAX_DISPLAY && (
            <Link
              href="/blog"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
            >
              All Posts &rarr;
            </Link>
          )}
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && (
            <li className="py-8 text-center text-gray-500 dark:text-gray-400">
              No posts yet. Stay tuned!
            </li>
          )}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <h3 className="text-xl leading-8 font-bold tracking-tight">
                          <Link
                            href={`/blog/${slug}`}
                            className="hover:text-primary-500 dark:hover:text-primary-400 text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h3>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-400">
                        {summary}
                      </div>
                      <div className="text-sm font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
