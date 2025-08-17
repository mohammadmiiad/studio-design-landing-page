import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* // section1 */}
      <section className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between">
        <div className="bg-amber-100 px-[5%]">
          <h1 className="text-3xl font-bold">A Digital Product Agency</h1>
          <p className="py-8 leading-3 whitespace-pre-line">
            {`Leading digital agency with solid design and development expertise.\n
            We build readymade websites, mobile applications, and elaborate\n
            online business services.`}
          </p>
          <div className="mt-6">
            <Link
              href="/about"
              className="rounded-3xl bg-blue-700 px-8 py-4 text-xl font-bold text-white hover:bg-blue-600 "
            >
              Contact Now
            </Link>
            <Image src="/dot.svg" alt="Logo" width={500} height={500} className=''/>
          </div>
        </div>
        <div className="flex-1 bg-amber-800">
          <Image
            width={1000}
            height={1000}
            src="/image8.png"
            alt="asdsad"
            className="relative z-10 h-full w-full rounded-lg object-cover"
          />
        </div>
      </section>
    </>
  )
}
