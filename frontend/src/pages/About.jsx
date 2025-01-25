import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
          <div className="text-2xl text-center pt-8 border-t">
            <Title text1="ABOUT" text2="US" />
          </div>

          <div className="my-10 flex flex-col md:flex-row gap-16">
              <img
                className="w-full md:max-w-[450px]"
                src={assets.banner3}
                alt="About Us"
              />
              <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                  <p>
                    SKPerfumes was born out of a passion for innovation and a desire to
                    revolutionize the shopping experience. We believe in quality, value, and
                    exceptional service.
                  </p>
                  <p>
                    Since our inception, we've worked tirelessly to curate a diverse
                    selection of products that cater to all tastes and preferences, ensuring
                    that every customer finds what they're looking for.
                  </p>
                  <b className="text-gray-800">Our Mission</b>
                  <p>
                    Our mission at SKPerfumes is to empower customers with choice, convenience,
                    and a seamless shopping experience. We are dedicated to bringing you the
                    best, every step of the way.
                  </p>
            </div>
          </div>
          <div className="text-xl py-4">
            <Title text1="WHY" text2="CHOOSE US" />
          </div>

          <div className="flex flex-col md:flex-row text-sm mb-20">
              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Quality Assurance:</b>
                <p className="text-gray-600">
                  We meticulously select and vet each product to ensure it meets the
                  highest standards of quality and reliability.
                </p>
              </div>

              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Convenience:</b>
                <p className="text-gray-600">
                  With our user-friendly interface and hassle-free shopping experience, you
                  can find what you need in just a few clicks.
                </p>
              </div>

              <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                <b>Exceptional Customer Service:</b>
                <p className="text-gray-600">
                  Our team of dedicated professionals is here to assist you with any
                  questions or concerns, ensuring a seamless experience.
                </p>
              </div>
          </div>

          <NewsletterBox />


      
    </div>
  )
}

export default About
