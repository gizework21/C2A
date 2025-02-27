import { Button } from "@/components/ui";

import Image from "next/image";
import { sponsorCards, sponsors, teams } from "../../../lib";
import { Container } from "@/components/wrappers";
import {
  AboutUsCard,
  AboutUsSponsors,
  AboutUsTeamCard,
} from "@/components/about-us";

const Page = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center w-full lg:-mt-[4rem]">
          <div className="max-w-[424px]">
            <AboutUsCard
              title={"Who We Are"}
              description={
                "estibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
              }
              imageUrl={
                "https://images.unsplash.com/photo-1544038659-12337883d216?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGh1bWFufGVufDB8fDB8fHww"
              }
              altText={"Who We Are"}
            />
          </div>
          <div className="max-w-[424px]">
            <AboutUsCard
              title={"What We Do"}
              description={
                "estibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
              }
              imageUrl={
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpZGxpbmd8ZW58MHx8MHx8fDA%3D"
              }
              altText={"What We Do"}
            />
          </div>
        </div>

        <div className="my-6">
          <h1 className="font-bold text-[30px] poppins">The Executive Team</h1>
          <p className="poppins text-kgray-text lg:max-w-[50vw] text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga culpa,
            vero sunt sint beatae ad non dolor aut, est repellat neque
            temporibus dolorum a possimus distinctio. Minus magnam ad nam?
          </p>
        </div>
      </Container>
      <div className="bg-gradient-to-br from-kblack-review via-kaccent to-kblack-default py-6 my-6 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center place-content-center h-full">
            {teams.map((team, index) => (
              <AboutUsTeamCard
                key={index}
                name={team.name}
                role={team.role}
                description={team.description}
                imageUrl={team.imageUrl}
              />
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <div className="my-10 flex justify-center py-10">
          <div className="flex  justify-between overflow-scroll gap-20 ">
            {sponsors.map((sponsor) => (
              <h1 key={sponsor}>{sponsor}</h1>
            ))}
          </div>
        </div>
      </Container>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-4 my-10">
        {sponsorCards.map((sponsor, index) => (
          <AboutUsSponsors
            key={index}
            title={sponsor.title}
            subTitle={sponsor.subTitle}
            description={sponsor.description}
          />
        ))}
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-5 my-20">
          <div className="flex flex-col justify-center gap-4 max-w-lg">
            <p className="font-semibold text-[24px]">
              Be the first to see the news
            </p>
            <p className="text-[16px] text-kgray-text">
              Your company may not be in the software business, but eventually,
              a software company will be in your business.
            </p>
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="Enter email here ..."
                className="outline-none rounded-md px-4 w-[50%] border border-kwhite-gray bg-kwhite-background text-kgray-text"
              />
              <Button className="rounded-lg bg-kaccent text-kwhite-default px-4 py-2">
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <Image
            src={
              "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlbGF0aW9ufGVufDB8fDB8fHww"
            }
            alt={"About Us"}
            width={500}
            height={500}
            className="h-64 object-cover rounded-lg"
          />
        </div>
      </Container>
    </div>
  );
};

export default Page;
