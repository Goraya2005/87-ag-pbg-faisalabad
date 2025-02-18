import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="bg-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            {/* Updated the heading with appropriate Tailwind classes */}
            <h2 className="text-4xl font-bold mb-4">
              We are 87-ag-Agri @ Plant Breeding and Genetics
            </h2>
            <p className="text-xl text-justify text-gray-400">
              87-ag-Agri Major PBG focuses on advanced plant breeding and genetics techniques, aiming to develop resilient and high-yielding crop varieties. Students engage in rigorous academic training and practical experiences, equipping them with the skills to address real-world agricultural challenges. Graduates contribute to global food security through careers in plant breeding, genetics research, and agricultural consulting.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start text-justify lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up">
              <div className="flex items-center justify-center mb-4">
                <div className="relative inline-block w-15 h-15 overflow-hidden rounded-full">
                  <Image
                    src="/images/irfan-jafar.jpeg"
                    alt="Irfan Jafar"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-black grow">
                — Irfan Jafar, a seasoned banker, brings years of expertise and leadership to his role. Currently based in Faisalabad, he plays a pivotal role in shaping the financial landscape of the region. With his astute insights and strategic acumen, Irfan Jafar continues to drive innovation and growth in the banking sector.
              </blockquote>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center mb-4">
                <div className="relative inline-block w-15 h-15 overflow-hidden rounded-full">
                  <Image
                    src="/images/shahid-chohan.jpeg"
                    alt="Dr. Shahid Chohan"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-black grow">
                — Dr. Shahid Chohan, a distinguished senior scientist, spearheads research initiatives in the field of cotton. Based in Faisalabad, his dedication to advancing cotton research techniques has garnered widespread acclaim. With his profound knowledge and expertise, Dr. Shahid Chohan continues to make significant contributions to the agricultural landscape.
              </blockquote>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-blue-300" data-aos="fade-up">
              <div className="flex items-center justify-center mb-4">
                <div className="relative inline-block w-15 h-15 overflow-hidden rounded-full">
                  <Image
                    src="/images/dr-sarwar.jpeg"
                    alt="Dr. Muhammad Sarwar"
                    width={120}
                    height={120}
                    className="object-cover"
                  />
                </div>
              </div>
              <blockquote className="text-lg text-black grow">
                — Dr. Muhammad Sarwar, a seasoned senior scientist, plays a pivotal role in wheat research, shaping agricultural practices in Faisalabad. His extensive expertise and dedication to wheat research have led to groundbreaking innovations in crop yield and quality. Dr. Sarwar&apos;s contributions continue to drive advancements in wheat farming, ensuring food security and sustainability in the region.
              </blockquote>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
