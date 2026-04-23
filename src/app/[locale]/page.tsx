import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LottieHero = dynamic(
  () => import('@src/components/shared/lottie/LottieHero').then(m => m.LottieHero),
  { ssr: false }
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#ci)">
      <path
        d="M7.99998 0.414795C3.8177 0.414795 0.414795 3.8177 0.414795 7.99998C0.414795 12.1823 3.8177 15.5852 7.99998 15.5852C12.1823 15.5852 15.5852 12.1823 15.5852 7.99998C15.5852 3.8177 12.1823 0.414795 7.99998 0.414795ZM11.6437 5.82682L7.61408 11.0416C7.48514 11.2085 7.28887 11.31 7.07838 11.3175C6.85082 11.3175 6.65835 11.2322 6.52277 11.0824L4.38943 8.71204C4.12679 8.42001 4.1505 7.97059 4.44253 7.707C4.73551 7.44531 5.18303 7.46807 5.44757 7.7601L7.01011 9.49711L10.5192 4.95642C10.7591 4.64543 11.2066 4.58854 11.5167 4.82842C11.8277 5.06831 11.8845 5.51488 11.6447 5.82588L11.6437 5.82682Z"
        fill="#055094"
      />
    </g>
    <defs>
      <clipPath id="ci">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowRight = ({ color = 'white' }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.75 11.75L10 7.5L5.75 3.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GiyapayLogo = () => (
  <svg width="99" height="36" viewBox="0 0 99 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M59.6116 14.1006C60.1737 15.01 61.2821 15.2414 62.126 14.795C63.1346 14.2494 63.4163 12.9432 62.7708 12.0338C59.4793 7.37119 55.4933 4.1967 50.3487 2.14646C51.0934 3.51879 50.4485 5.17223 49.0425 5.71781C53.2765 7.4539 56.9152 10.3142 59.6116 14.1006ZM47.5373 5.13914C48.7112 5.56903 50.018 4.69273 50.0346 3.36995C50.0346 2.60945 49.6212 1.88193 48.7277 1.53469C43.3688 -0.267534 38.3241 -0.482449 32.9981 0.889881C34.3544 1.55121 34.8672 3.25426 34.0238 4.54394C35.9753 4.06437 37.9934 3.83294 40.0443 3.84946C42.5915 3.88255 45.1223 4.31245 47.5373 5.13914ZM32.3198 5.02339C33.8087 4.54394 33.9739 3.2873 33.6598 2.47713C33.2959 1.5843 32.3697 1.00563 31.0628 1.45204C25.7698 3.17155 21.635 5.96583 18.1612 10.182C19.7326 9.90094 21.0062 11.1079 21.1056 12.4802C24.0662 9.02463 27.9201 6.44533 32.3198 5.02339ZM20.4109 13.125C20.3943 14.299 19.4348 15.2249 18.2772 15.2249C17.1193 15.2249 16.1765 14.2494 16.1765 13.092C16.1931 11.9181 17.1522 10.9922 18.3101 10.9922C19.4681 10.9922 20.4109 11.9512 20.4109 13.125ZM0.446545 31.2961H3.65541C4.18469 32.5196 5.47485 33.0817 7.16195 33.0817C9.51073 33.0817 10.9828 31.9904 10.9828 28.9151V27.7743C10.0731 29.2458 8.50177 30.0394 6.51693 30.0394C3.35773 30.0394 0 27.923 0 23.2605C0 19.2592 2.94419 16.3162 7.11235 16.3162C11.2806 16.3162 14.1586 19.0939 14.1586 23.3596V28.8159C14.1586 33.8587 11.0324 35.8429 7.16195 35.8429C3.87048 35.8429 1.27356 34.4208 0.446545 31.2961ZM10.9663 23.2605C10.9663 20.9291 9.41146 19.2758 7.09581 19.2758C4.76363 19.2758 3.19227 20.9291 3.19227 23.2605C3.19227 25.5919 4.76363 27.0797 7.09581 27.0797C9.42799 27.0797 10.9663 25.5919 10.9663 23.2605ZM16.6893 16.6634H19.8649V29.8574H16.6893V16.6634ZM22.5114 31.2961H25.6874C26.2165 32.5196 27.2587 33.0817 28.863 33.0817C31.0299 33.0817 32.2537 32.0402 32.2537 29.4773V27.8238C31.46 29.2624 30.0704 30.0394 28.3335 30.0394C25.2902 30.0394 22.3957 28.0552 22.3957 23.3596V16.6634H25.5714V23.3596C25.5714 25.8727 26.9111 27.0797 28.9125 27.0797C30.8644 27.0797 32.2537 25.8233 32.2537 23.3596V16.6634H35.4462V29.3945C35.4462 33.9912 32.5348 35.8262 28.8796 35.8262C25.803 35.8429 23.2559 34.4208 22.5114 31.2961ZM37.4144 23.3927C37.4144 19.193 40.3587 16.3162 44.5434 16.3162C48.6788 16.3162 51.5729 19.1269 51.5729 23.3596V29.8411H48.6616V27.245C47.868 29.196 46.0649 30.1881 43.981 30.1881C40.7888 30.2047 37.4144 27.9064 37.4144 23.3927ZM48.3971 23.2605C48.3971 20.9291 46.8422 19.2758 44.5268 19.2758C42.2113 19.2758 40.6233 20.9291 40.6233 23.2605C40.6233 25.5919 42.1947 27.245 44.5268 27.245C46.8588 27.245 48.3971 25.5919 48.3971 23.2605ZM53.6574 23.3762C53.6574 19.1104 56.535 16.3327 60.6869 16.3327C64.8878 16.3327 67.8156 19.2096 67.8156 23.4093C67.8156 27.923 64.4579 30.2213 61.2491 30.2213C59.347 30.2213 57.7756 29.4278 56.8491 27.9562V35.5122H53.674V23.3762H53.6574ZM64.6067 23.2605C64.6067 20.9291 63.0354 19.2758 60.7034 19.2758C58.3715 19.2758 56.8326 20.9291 56.8326 23.2605C56.8326 25.5919 58.3874 27.245 60.7034 27.245C63.0354 27.245 64.6067 25.5919 64.6067 23.2605ZM68.8407 23.3927C68.8407 19.193 71.785 16.3162 75.97 16.3162C80.1048 16.3162 83.0001 19.1269 83.0001 23.3596V29.8411H80.0889V27.245C79.2946 29.196 77.4918 30.1881 75.4079 30.1881C72.199 30.2047 68.8407 27.9064 68.8407 23.3927ZM79.8072 23.2605C79.8072 20.9291 78.2523 19.2758 75.937 19.2758C73.605 19.2758 72.0337 20.9291 72.0337 23.2605C72.0337 25.5919 73.605 27.245 75.937 27.245C78.2689 27.245 79.8072 25.5919 79.8072 23.2605ZM85.1833 31.2961H88.3584C88.8881 32.5196 89.9298 33.0817 91.5349 33.0817C93.7014 33.0817 94.9256 32.0402 94.9256 29.4773V27.8238C94.1313 29.2624 92.7418 30.0394 91.0051 30.0394C87.9616 30.0394 85.0675 28.0552 85.0675 23.3596V16.6634H88.2433V23.3596C88.2433 25.8727 89.5826 27.0797 91.5845 27.0797C93.5361 27.0797 94.9256 25.8233 94.9256 23.3596V16.6634H98.1014V29.3945C98.1014 33.9912 95.1901 35.8262 91.5349 35.8262C88.4748 35.8429 85.9273 34.4208 85.1833 31.2961Z"
      fill="url(#giyapay-gradient)"
    />
    <defs>
      <linearGradient id="giyapay-gradient" x1="-0.00553252" y1="17.9192" x2="98.1116" y2="17.9192" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9A943" />
        <stop offset="1" stopColor="#EB2D7C" />
      </linearGradient>
    </defs>
  </svg>
);

const featureList = [
  'Multi-currency support for global operations',
  'Real-time transaction monitoring and reporting',
  'Seamless checkout experiences that convert',
  'Enterprise-grade security and compliance',
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero + Stats — full-bleed wave, header is fixed/transparent on top ── */}
      <section
        className="relative overflow-hidden"
        style={{
          width: '100vw',
          marginLeft: 'calc(50% - 50vw)',
          minHeight: '90vh',
          background: 'linear-gradient(160deg, #e8f3fb 0%, #cfe4f4 45%, #b8d4ed 100%)',
        }}
      >
        {/* Lottie — oversized and centered so wave fills edge-to-edge */}
        <LottieHero />

        <div className="relative z-10 flex flex-col">
          {/* Hero text + CTA — pt-28 clears the fixed header (~91px) */}
          <div className="px-8 pt-36 pb-16 text-center flex flex-col items-center gap-10 max-w-7xl mx-auto w-full">
            <h1 className="font-montserrat text-5xl lg:text-6xl font-bold text-[#055094] max-w-3xl leading-tight">
              Solutions Shaped Around Your Goals
            </h1>
            <p className="font-inter text-base text-[#1a1a1a] max-w-2xl leading-[25px]">
              We build what you actually need. Our experience in design, analytics, operations, and
              technology mean we see your challenges through your eyes, not ours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-1.5 bg-[#055094] text-white px-6 py-2.5 rounded-full font-inter text-base leading-[22px] hover:bg-[#044882] transition-colors"
              >
                Schedule a Free Consultation
              </Link>
              <Link
                href="/services"
                className="flex items-center gap-1.5 bg-white/70 border border-[#055094] text-[#055094] px-6 py-2.5 rounded-full font-inter text-base font-medium hover:bg-white transition-colors"
              >
                View Our Services
                <ArrowRight color="#055094" />
              </Link>
            </div>
          </div>

          {/* Stats inside the wave */}
          <div className="py-20 flex flex-wrap items-center justify-center gap-16 lg:gap-32">
            <div className="flex flex-col items-center gap-1">
              <p className="font-montserrat text-5xl font-bold text-[#055094]">50+</p>
              <p className="font-inter text-base text-[#1a1a1a] leading-[22px]">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-montserrat text-5xl font-bold text-[#1a1a1a]">30+</p>
              <p className="font-inter text-base text-[#1a1a1a] leading-[22px]">Business Clients</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-montserrat text-5xl font-bold text-[#1a1a1a]">100%</p>
              <p className="font-inter text-base text-[#1a1a1a] leading-[22px]">Client-Focused Approach</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">

      {/* ── Partner Logo Strip ── */}
      <section className="bg-[#F7FAFC] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24">
            <GiyapayLogo />
            <Image src="/home/Purple1.png" alt="Maretinda" width={135} height={34} className="object-contain" />
            <Image src="/home/Images2photoroom2.png" alt="Wrike" width={122} height={27} className="object-contain" />
            <Image src="/home/Purple2.png" alt="Maretinda" width={135} height={34} className="object-contain" />
            <GiyapayLogo />
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute rounded-full bg-[rgba(0,173,238,0.06)] w-[600px] h-[600px] -left-64 top-0 blur-3xl pointer-events-none" />
        <div className="absolute rounded-full bg-[rgba(0,173,238,0.06)] w-[600px] h-[600px] -right-64 top-20 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-lg">
              <p className="font-inter text-sm text-black">What we do</p>
              <h2 className="font-montserrat text-[32px] font-semibold text-black leading-tight">How We Put You First</h2>
              <p className="font-inter text-base text-black leading-[22px]">
                Our client-centric approach ensures every solution is tailored to drive your business forward.
              </p>
            </div>
            <Link
              href="/about"
              className="flex items-center gap-1.5 bg-[#055094] text-white px-5 py-2.5 rounded-full font-inter text-base leading-[22px] shadow-[0_0_15px_0_rgba(5,80,148,0.05)] hover:bg-[#044882] transition-colors whitespace-nowrap"
            >
              Read More
              <ArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { img: '/home/Goal.png', title: 'Your Goals Drive Every Decision', desc: 'We focus on what matters to your business. Just real solutions that move you forward.' },
              { img: '/home/People.png', title: 'Professionalism & Effectiveness', desc: 'We understand your business, speak your language, and stay available when you need us.' },
              { img: '/home/PositiveDynamic.png', title: 'Built for Your Growth', desc: 'Your software scales with you—flexible, future-proof, and always under your control.' },
              { img: '/home/Link.png', title: 'Works with Your Existing Systems', desc: 'We integrate smoothly with your tools, keeping your operations running without disruption.' },
            ].map(({ img, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-10 p-6 rounded-xl bg-white shadow-[0_0_20px_0_rgba(5,80,148,0.10)]">
                <div className="flex items-center justify-center rounded-md bg-[#055094] shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[58px] h-[53px] shrink-0">
                  <Image src={img} alt={title} width={32} height={32} className="object-contain" />
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <p className="font-montserrat text-xl font-semibold text-black text-center">{title}</p>
                  <p className="font-inter text-base text-black leading-[25px] text-center">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners / Products ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-16">
          {/* Section heading */}
          <div className="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
            <p className="font-inter text-sm text-black">Our PARTNERS</p>
            <h2 className="font-montserrat text-[32px] font-semibold text-black">Solutions that Drive Business Impact</h2>
            <p className="font-inter text-base text-black leading-[22px]">
              Proven products and partnerships that help you operate more efficiently and grow faster.
            </p>
          </div>

          {/* giyapay */}
          <div className="flex flex-col lg:flex-row items-center gap-16 rounded-2xl overflow-hidden bg-white p-0">
            <div className="w-full lg:w-1/2">
              <Image
                src="/home/Frame1000006632.png"
                alt="Giyapay platform"
                width={607}
                height={342}
                className="w-full h-auto object-cover rounded-l-2xl"
              />
            </div>
            <div className="flex flex-col gap-8 w-full lg:w-1/2 px-8 py-8 lg:py-0 lg:pr-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-md bg-white shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[69px] h-[69px] border border-gray-100">
                  <Image src="/home/Rectangle.png" alt="giyapay icon" width={38} height={38} className="rounded object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <Image src="/home/2021Picture1011.png" alt="giyapay" width={185} height={81} className="object-contain h-16 w-auto" />
                  <p className="font-inter text-sm text-black">Seamless Payment Processing</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-inter text-base text-black leading-[22px]">
                  A comprehensive payment solution designed for modern businesses. Accept payments across multiple
                  channels with enterprise-grade security and real-time reporting.
                </p>
                <div className="flex flex-col gap-3">
                  {featureList.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckIcon />
                      <p className="font-inter text-base text-black leading-[22px]">{f}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/giyapay"
                  className="inline-flex items-center gap-1.5 bg-[#055094] text-white px-5 py-2.5 rounded-full font-inter text-base leading-[22px] shadow-[0_0_15px_0_rgba(5,80,148,0.05)] hover:bg-[#044882] transition-colors w-fit"
                >
                  Explore Giyapay
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* zenpos.co */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16 rounded-2xl bg-[#EEF7FC] px-8 py-12 lg:p-0 lg:overflow-hidden">
            <div className="w-full lg:w-1/2">
              <Image
                src="/home/Frame1000006555.png"
                alt="Zenpos platform"
                width={541}
                height={392}
                className="w-full h-auto object-cover rounded-r-2xl"
              />
            </div>
            <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:px-10 lg:py-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-md bg-white shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[69px] h-[69px]">
                  <Image src="/home/Logo_clean2.png" alt="zenpos icon" width={64} height={36} className="object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <Image src="/home/Logo_clean1.png" alt="zenpos.co" width={235} height={37} className="object-contain h-9 w-auto" />
                  <p className="font-inter text-sm text-black">Seamless Payment Processing</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-inter text-base text-black leading-[22px]">
                  A comprehensive payment solution designed for modern businesses. Accept payments across multiple
                  channels with enterprise-grade security and real-time reporting.
                </p>
                <div className="flex flex-col gap-3">
                  {featureList.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckIcon />
                      <p className="font-inter text-base text-black leading-[22px]">{f}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/zenpos"
                  className="inline-flex items-center gap-1.5 bg-[#055094] text-white px-5 py-2.5 rounded-full font-inter text-base leading-[22px] shadow-[0_0_15px_0_rgba(5,80,148,0.05)] hover:bg-[#044882] transition-colors w-fit"
                >
                  Explore Senpos + Giyapay
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>

          {/* wrike */}
          <div className="flex flex-col lg:flex-row items-center gap-16 rounded-2xl overflow-hidden bg-white p-0">
            <div className="w-full lg:w-1/2">
              <Image
                src="/home/Frame19.png"
                alt="Wrike platform"
                width={610}
                height={415}
                className="w-full h-auto object-cover rounded-l-2xl"
              />
            </div>
            <div className="flex flex-col gap-8 w-full lg:w-1/2 px-8 py-8 lg:py-0 lg:pr-10">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-md bg-white shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[69px] h-[69px] border border-gray-100">
                  <Image src="/home/Images11.png" alt="wrike icon" width={37} height={37} className="object-contain" />
                </div>
                <div className="flex flex-col gap-2">
                  <Image src="/home/Images2photoroom1.png" alt="wrike" width={147} height={39} className="object-contain h-9 w-auto" />
                  <p className="font-inter text-sm text-black">Seamless Payment Processing</p>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-inter text-base text-black leading-[22px]">
                  A comprehensive payment solution designed for modern businesses. Accept payments across multiple
                  channels with enterprise-grade security and real-time reporting.
                </p>
                <div className="flex flex-col gap-3">
                  {featureList.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckIcon />
                      <p className="font-inter text-base text-black leading-[22px]">{f}</p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/wrike"
                  className="inline-flex items-center gap-1.5 bg-[#055094] text-white px-5 py-2.5 rounded-full font-inter text-base leading-[22px] shadow-[0_0_15px_0_rgba(5,80,148,0.05)] hover:bg-[#044882] transition-colors w-fit"
                >
                  Explore Wrike
                  <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-inter text-sm text-black">Our Services</p>
              <h2 className="font-montserrat text-[32px] font-semibold text-black leading-tight max-w-md">
                Services Designed Around Your Needs
              </h2>
            </div>
            <p className="font-inter text-base text-black leading-[22px] max-w-md text-justify">
              Comprehensive technology services that address every aspect of your digital journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: '/home/Gear.png', title: 'Digital Transformation Strategies', desc: 'We assist businesses in navigating their digital transformation journey.' },
              { img: '/home/Programming.png', title: 'Website Development and Design', desc: 'We create visually appealing and functional websites that reflect your brand identity.' },
              { img: '/home/Smartphone.png', title: 'Mobile App Development', desc: 'We develop user-friendly mobile applications for both iOS and Android platforms.' },
              { img: '/home/FlowChart.png', title: 'Project Management', desc: 'We build tailored solutions that match your unique business workflows.' },
              { img: '/home/LaptopCoding.png', title: 'Custom Software Development', desc: 'We build tailored solutions that match your unique business workflows.' },
              { img: '/home/ShoppingBag.png', title: 'E-commerce Solutions', desc: 'We build tailored solutions that match your unique business workflows.' },
            ].map(({ img, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-6 py-12 px-8 rounded-xl bg-white shadow-[0_0_20px_0_rgba(5,80,148,0.10)]">
                <div className="flex items-center justify-center rounded-full bg-[#055094] shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[65px] h-[65px]">
                  <Image src={img} alt={title} width={40} height={40} className="object-contain" />
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <p className="font-montserrat text-xl font-semibold text-black text-center">{title}</p>
                  <p className="font-inter text-base text-black leading-[22px] text-center">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              href="/services"
              className="flex items-center gap-1.5 border-[1.5px] border-[#055094] text-[#055094] px-5 py-2.5 rounded-full font-inter text-base font-medium hover:bg-[#055094]/5 transition-colors"
            >
              View All Services
              <ArrowRight color="#055094" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="relative py-20 overflow-hidden bg-[#EEF7FC] rounded-[48px]"
        style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}
      >
        <div className="absolute rounded-full bg-[rgba(0,173,238,0.06)] w-[600px] h-[600px] -right-64 top-0 blur-3xl pointer-events-none" />
        <div className="absolute rounded-full bg-[rgba(0,173,238,0.06)] w-[600px] h-[600px] -left-64 bottom-0 blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="font-inter text-sm text-black">Testimonials</p>
            <h2 className="font-montserrat text-[32px] font-semibold text-black">What Our Clients Say</h2>
            <p className="font-inter text-base text-black leading-[22px]">
              {"Don't just take our word for it—hear from businesses we've helped transform."}
            </p>
          </div>

          <div className="flex items-center gap-12 w-full">
            {/* Prev arrow */}
            <button
              className="flex items-center justify-center rounded-md bg-white shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[69px] h-[69px] shrink-0"
              aria-label="Previous testimonial"
            >
              <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9.5H25" stroke="#055094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 1L1 9.5L9 18" stroke="#055094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-12 flex-1">
              {/* Quote mark */}
              <div className="w-[108px] h-[108px] relative">
                <svg width="79" height="66" viewBox="0 0 79 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M28.5277 0.589195C11.5839 11.4707 2.17083 24.136 0.28855 38.5848C-2.64174 61.0783 17.4737 72.0882 27.666 62.1958C37.8582 52.3035 31.7486 39.7474 24.3684 36.3152C16.9881 32.8828 12.4749 34.0783 13.2621 29.4916C14.0494 24.9052 24.5493 12.1887 33.7738 6.26646C34.3858 5.74604 34.6187 4.73624 34.0294 3.97011C33.6417 3.46634 32.8815 2.47825 31.7486 1.00578C30.7579 -0.281826 29.8089 -0.23363 28.5277 0.589195Z" fill="#055094" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M63.5276 0.589195C46.584 11.4707 37.1709 24.136 35.2885 38.5848C32.3584 61.0783 52.4738 72.0882 62.6661 62.1958C72.8584 52.3035 66.7487 39.7474 59.3685 36.3152C51.9883 32.8828 47.4748 34.0783 48.2623 29.4916C49.0495 24.9052 59.5494 12.1887 68.7739 6.26646C69.3859 5.74604 69.6188 4.73624 69.0293 3.97011C68.6419 3.46634 67.8816 2.47825 66.7487 1.00578C65.758 -0.281826 64.809 -0.23363 63.5276 0.589195Z" fill="#055094" />
                </svg>
              </div>
              <p className="font-inter text-base text-black leading-[22px] text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s
              </p>
              <div className="flex flex-col items-center gap-3">
                <Image
                  src="/home/Ellipse1.png"
                  alt="Steffi Kyle Nolido"
                  width={81}
                  height={81}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col items-center gap-0.5">
                  <p className="font-inter text-xl font-bold text-black text-center">Steffi Kyle Nolido</p>
                  <p className="font-inter text-base text-black leading-[22px] text-center">Marketing Manager</p>
                </div>
              </div>
            </div>

            {/* Next arrow */}
            <button
              className="flex items-center justify-center rounded-md bg-white shadow-[0_0_15px_0_rgba(5,80,148,0.05)] w-[69px] h-[69px] shrink-0"
              aria-label="Next testimonial"
            >
              <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 9.5H1" stroke="#055094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 1L25 9.5L17 18" stroke="#055094" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
