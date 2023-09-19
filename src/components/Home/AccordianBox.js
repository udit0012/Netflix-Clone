import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const AccordianBox = () => {
    const accodianData = [{
        ques: "What is Netflix?",
        ans1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        ans2: "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    }, {
        ques: "How much does netflix cost?",
        ans1: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
        ans2: null
    }, {
        ques: "Where can I watch?",
        ans1: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        ans2: "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    }, {
        ques: "How do I cancel?",
        ans1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        ans2: null
    }, {
        ques: "What can I watch on Netflix?",
        ans1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        ans2: null
    }, {
        ques: "Is Netflix good for kids?",
        ans1: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        ans2: "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },]
    return (
        <div className='flex flex-col w-full justify-center items-center xl:w-2/3'>
            {accodianData.map((data) => {
                return <div className='w-full text-white my-2'>
                    <div class="hs-accordion-group">
                        <div class="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                            <button class="hs-accordion-toggle bg-neutral-800 text-xl md:text-2xl p-6 group inline-flex items-center justify-between gap-x-3 w-full text-left transition hover:bg-neutral-600 " aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                                {data.ques}
                                <AiOutlinePlus class="duration-100 text-xl lg:text-4xl hs-accordion-active:rotate-45" />
                                    
                                {/* <AI class="hs-accordion-active:block   hidden"> */}
                                
                            </button>
                            <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content bg-neutral-800 text-xl md:text-2xl p-6 hidden mt-1 w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                                <p class="text-gray-800 dark:text-gray-200">
                                    {data.ans1}
                                </p>
                                {data.ans2 && <p class="text-gray-800 dark:text-gray-200 mt-10">
                                    {data.ans2}
                                </p>}
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div >
    )
}

export default AccordianBox