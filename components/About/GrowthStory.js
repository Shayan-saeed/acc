// components/GrowthStory.tsx
import Image from "next/image";

export default function GrowthStory() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading + Divider */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-red-600">Growth Story.</span>
          </h2>
          <div className="flex-1 h-[3px] bg-red-600 mt-4 lg:mt-0 ml-10"></div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side: Text */}
          <div className="lg:col-span-2 text-gray-700 space-y-4">
            <p>
              In 2016, ENA Pakistan came up as SME in the world of power solutions and backup.
              Living in a country where frequent power outage & interruption is a common issue,
              resulting in limiting people’s potential & efficiency, our aim initially was to get rid
              of such hindrances, enhancing productivity and lifting up various companies & national
              industry to face the challenges by providing seamless power solutions.
            </p>
            <p>
              Stepping into the business, the urge for innovation, to provide flawless, customized
              solutions to our clients and achieve excellence, we worked more into IoT based
              solutions, which are now a mandatory part of not only every industry but individual
              lives also. Within a very short time, we were able to attract customer attention and
              trust by our dedicated teamwork & excellent services. Hence, vigorously, ENA headway to
              the heart of its customers by their conscientious solutions. The ingenuity of ENA was
              perceived by JBS (one of the best IT solution providers), fostering it to Energy and
              Automation Pakistan Pvt. Ltd (ENA Pakistan Pvt. Ltd) in March 2021 – a Company of JBS,
              which is a matter of great privilege.
            </p>
            <p>
              The journey has just started though and we believe we can show the world that despite
              setbacks & hindrances, a group of dedicated, tech savvy innovative people can
              revolutionize the world of IoT and power solutions by their impeccable services and
              broad vision.
            </p>
            <p>
              Our clientele include some very successful names including Atlas battery, Mezan Bank,
              Bank Islami, Standard Chartered, HMB and the list goes on. Our mission to help Pakistan
              step into the future, revolutionize power back up solution and provide seamless power
              backup to eliminate downtime is what keeps us advancing. ENA has become trusted source
              for power reliability in a very short span and with the dedication and teamwork, is
              bound to lead the world of IoT and seamless power solution providers.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center">
            <Image
              src="/about-bg.jpeg" // put this file in /public
              alt="Data center image"
              width={450}
              height={450}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
