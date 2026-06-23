import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="dark:bg-darkmode">
      <div className="container pt-24">
        <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
          <div className="col-span-6">
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
            >
              Staff Software Engineer
            </p>
            <h1
              className="py-4"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              I'm Alan Penichet
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
            >
              I am a Senior Software Engineer with 8+ years of experience
              building responsive web applications using React and TypeScript,
              collaborating with cross-functional teams, and working on API
              integration, performance optimization, testing, and full-stack
              development with .NET and cloud platforms.
            </p>
            {/* <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
              <Link
                href="/"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/tickets.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block"></i>
                  Buy access pass
                </span>
              </Link>
              <Link
                href="/"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="1000"
                className="btn_outline btn-2 hover-outline-slide-down group"
              >
                <span className="!flex !items-center gap-14">
                  <i className="bg-[url('/images/hero/calander.svg')] bg-no-repeat bg-contain w-6 h-6 inline-block group-hover:bg-[url('/images/hero/calander-hover-white.svg')]"></i>
                  Add to calendar
                </span>
              </Link>
            </div> */}
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            className="col-span-6  lg:flex hidden items-center gap-3"
          >
            <div className="">
              <Image
                src="/images/hero/software engineer.png"
                alt="hero"
                width={0}
                height={0}
                quality={100}
                layout="responsive"
                sizes="100vh"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
