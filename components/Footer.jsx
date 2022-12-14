import Link from "next/link";

// import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full my-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2">
        <div className="flex flex-col items-center space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          {/* <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link> */}
        </div>
        <div className="flex flex-col items-center space-y-4">
          <ExternalLink href="https://twitter.com/i_hodling">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/ercwangwh">
            GitHub
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
