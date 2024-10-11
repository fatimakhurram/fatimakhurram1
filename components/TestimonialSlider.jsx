import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Muhammad Usama Hameed",
    position: "",
    message:
      "I highly recommend Fatima for any DevOps role. Her strong expertise in automation, cloud infrastructure, and CI/CD pipelines consistently delivers efficient and scalable solutions. She is a dedicated and reliable professional with excellent problem-solving skills.",
  },
  {
    image: "/t-avt-2.png",
    name: "Umer Mushtaq",
    position: "",
    message:
      "I’ve had the pleasure of working closely with Fatima Khurram at Psych Station, where she has played an instrumental role as our Tech Support Head. From the very beginning, Fatima has demonstrated exceptional technical expertise and a proactive approach to problem-solving, making her a vital asset to our team.",
  },
  {
    image: "/t-avt-3.png",
    name: "Muhammad Faran Tahir",
    position: "",
    message:
      "I had the pleasure of mentoring and working with Fatima on several projects. She is one of the sharpest minds in Cloud and DevOps that I’ve had the opportunity to collaborate with. Always eager to take on new challenges, her proactive approach makes her exceptionally competent. She would be an invaluable asset to any team.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
