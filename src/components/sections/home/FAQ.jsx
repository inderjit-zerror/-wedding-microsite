
// 'use client'
// import { useState } from 'react'

// const faqs = [
//     'WHEN IS THE WEDDING?',
//     'WHERE IS THE WEDDING TAKING PLACE?',
//     'WHERE IS THE WEDDING TAKING PLACE?',
//     'WHAT IS THE DRESS CODE?',
//     'WHAT TIME SHOULD I ARRIVE?',
// ]

// const OPEN_TEXT =
//     'The wedding is taking place at La Mamounia, Marrakech, Morocco.'

// export default function FAQ() {
//     const [activeIndex, setActiveIndex] = useState(null)

//     const toggleFAQ = (index) => {
//         setActiveIndex(activeIndex === index ? null : index)
//     }
    
    

//     return (
//         <section id='FAQ' className="min-h-screen max-sm:min-h-fit COLOR_BG_RED text-white flex items-center justify-center max-sm:py-[20vw]">
//             <div className=" w-[80%] max-sm:w-full px-6 max-sm:px-[20px]  flex flex-col gap-20 ">
//                 <h2 className="text-center Font_Q flex justify-center items-center ">FAQ</h2>

//                 <div className="space-y-6 w-full   ">
//                     {faqs.map((question, index) => (
//                         <div
//                             key={index}
//                             className="border-t border-white/40   pt-6"
//                         >
//                             <button
//                                 onClick={() => toggleFAQ(index)}
//                                 className="w-full flex items-center justify-between text-left "
//                             >
//                                 <span className="tracking-wide Font_YV   text-[1.5rem] max-sm:text-[1.1rem] md:text-base">
//                                     {question}
//                                 </span>

//                                 {/* ICON */}
//                                 <span
//                                     className={`relative w-5 h-5   select-none cursor-pointer transition-transform duration-500 ${activeIndex === index ? 'rotate-45' : 'rotate-0'
//                                         }`}
//                                 >
//                                     <img src={`/svgs/IconPlus.svg`} alt='IMG' className="absolute inset-0 m-auto object-cover object-center w-full h-full " />
//                                     <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_RED" />
//                                 </span>
//                             </button>

//                             {/* CONTENT */}
//                             <div
//                                 className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index
//                                         ? 'max-h-40 opacity-100 mt-4'
//                                         : 'max-h-0 opacity-0'
//                                     }`}
//                             >
//                                 <span className=" Font_YV text-[18px] text-white/60">
//                                     {OPEN_TEXT}
//                                 </span>
//                             </div>
//                         </div>
//                     ))}

//                     <div className="border-t border-white/40" />
//                 </div>
//             </div>
//         </section>
//     )
// }


'use client'
import { useState } from 'react'

const faqs = [
  'WHEN IS THE WEDDING?',
  'WHERE IS THE WEDDING TAKING PLACE?',
  'WHERE IS THE WEDDING TAKING PLACE?',
  'WHAT IS THE DRESS CODE?',
  'WHAT TIME SHOULD I ARRIVE?',
]

const OPEN_TEXT =
  'The wedding is taking place at La Mamounia, Marrakech, Morocco.'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="FAQ"
      className="min-h-screen max-sm:min-h-fit COLOR_BG_RED text-white flex items-center justify-center max-sm:py-[20vw]"
    >
      <div className="w-[80%] max-sm:w-full px-6 max-sm:px-[20px] flex flex-col gap-20">
        <h2 className="text-center Font_Q flex justify-center items-center">
          FAQ
        </h2>

        <div className="space-y-6 w-full">
          {faqs.map((question, index) => (
            <div key={index} className="border-t border-white/40 pt-6  group">
              {/* BUTTON */}
              <button
                onClick={() => toggleFAQ(index)}
                className="group w-full flex items-center justify-between text-left"
              >
                <span className="tracking-wide Font_YV text-[1.5rem]  max-sm:text-[1.1rem] md:text-base relative">
                  {question}

                  <div className='w-0 h-px bg-white group-hover:w-full transition-all duration-200 ease-in'></div>
                </span>

                {/* ICON */}
                <span
                  className={`
                    relative w-5 h-5 select-none cursor-pointer
                    transition-transform duration-500 ease-in-out
                    group-hover:rotate-45
                    ${activeIndex === index ? 'rotate-45' : 'rotate-0'}
                  `}
                >
                  <img
                    src="/svgs/IconPlus.svg"
                    alt="IMG"
                    className="absolute inset-0 m-auto object-cover object-center w-full h-full"
                  />
                  <span className="absolute inset-0 m-auto w-[7px] h-[7px] COLOR_BG_RED" />
                </span>
              </button>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${
                    activeIndex === index
                      ? 'max-h-40 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }
                `}
              >
                <span className="Font_YV text-[18px] text-white/60">
                  {OPEN_TEXT}
                </span>
              </div>
            </div>
          ))}

          <div className="border-t border-white/40" />
        </div>
      </div>
    </section>
  )
}
