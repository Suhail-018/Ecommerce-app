import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>

            <div className="text-center text-xl pt-10 border-t">
              <Title text1="CONTACT" text2="US" />
            </div>

            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
              <img
                className="w-full md:max-w-[480px]"
                src={assets.banner5}
                alt="Contact Us"
              />

              <div className="flex flex-col justify-center items-start gap-6">
                <p className="font-semibold text-xl text-gray-600">Our Store</p>
                <p className="text-gray-500">
                  54709 Willms Station <br />
                  Suite 350, ADDIS ababa, D.C.
                </p>
                <p className="text-gray-500">
                  Tel: (251) 555-0132 <br />
                  Email: admin@forever.com
                </p>

                <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
                <p className="text-gray-500">
                  Learn more about our teams and job openings.
                </p>
                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
                  Explore Jobs
                </button>
              </div>
            </div>
            <NewsletterBox />

      
    </div>
  )
}

export default Contact
