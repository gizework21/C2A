"use client";

import Image from "next/image";

import { Title } from "../title";
import { ShowRatingStar } from "../rating";
import { Carousel, CarouselContent, CarouselItem } from "../ui";
import Autoplay from "embla-carousel-autoplay";

interface ICustomerFeedback {
  image: string;
  rating: number;
  name: string;
  comment: string;
}

const customerFeedback: ICustomerFeedback[] = [
  {
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
    rating: 3,
    name: "Floyd Miles",
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
    rating: 4,
    name: "Ronald Richards",
    comment:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
    rating: 4,
    name: "Savannah Nguyen",
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwc3FldWFyZSUyMGltYWdlfGVufDB8fDB8fHww",
    rating: 4,
    name: "Savannah Nguyen",
    comment:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const CustomerFeedback = () => {
  return (
    <>
      <div>
        <Title
          title={"Our Customer Feedback"}
          subtitle="Don’t take our word for it. Trust our customers."
        />
      </div>

      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="gap-4">
          {customerFeedback.map((customer, index) => (
            <CarouselItem
              key={index}
              className="border rounded-sm montserrat md:basis-1/3"
            >
              <div className="w-auto h-[286px] bg-white p-6 rounded-md space-y-3">
                <div className="flex justify-between items-baseline">
                  <div className="aspect-square size-[62px]">
                    <Image
                      src={customer.image}
                      alt="customer"
                      width={500}
                      height={500}
                      className="aspect-square object-cover rounded-md"
                    />
                  </div>
                  <ShowRatingStar rating={customer.rating} />
                </div>
                <h1 className="font-bold text-[20px] text-kslate-default">
                  {customer.name}
                </h1>
                <p className="text-[14px] text-justify line-clamp-4">
                  {customer.comment}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
