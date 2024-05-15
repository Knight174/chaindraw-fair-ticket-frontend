"use client";
import MaxWidthWrapper from "@/components/client/MaxWidthWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
import Image from "next/image";
import React from "react";
const data = {
  concert_id: "123456",
  concert_name: "Example Concert",
  concert_img: "/images/test8.png",
  concert_date: "2024-05-15",
  lottery_start_date: "2024-05-06",
  lottery_end_date: "2024-05-10",
  concert_status: 0,
  ticket_types: [
    {
      ticket_type: "123",
      type_name: "VIP",
      price: "100",
      max_quantity_per_wallet: 2,
    },
    {
      ticket_type: "456",
      type_name: "Regular",
      price: "50",
      max_quantity_per_wallet: 4,
    },
  ],
};
const LotteryInfo = ({ params }: { params: { lotteryId: string } }) => {
  const { lotteryId } = params;
  // const fetchLotteries = async (id: string) => {
  //   const { data } = await axios.post("/api/lottery", {
  //     id,
  //   });
  //   return data;
  // };

  // const { data } = useQuery({
  //   queryKey: ["lottery", lotteryId],
  //   queryFn: () => fetchLotteries(lotteryId),
  //   enabled: !!lotteryId,
  // });

  return (
    <main className="min-h-screen bg-black py-10 md:py-20 text-white">
      <MaxWidthWrapper>
        <div className="md:flex justify-between items-start gap-8  md:mt-10">
          <div className="flex md:w-3/5 flex-col">
            <span className="flex flex-col sm:flex-row  sm:items-center font-bold text-sm sm:text-xl text-white mb-4">
              Creator:
              <div className="shrink-0 flex items-center gap-x-2 text-left sm:ml-4 mt-1 sm:mt-0">
                <Avatar>
                  <AvatarImage src={data?.concert_img} />
                  <AvatarFallback>ENS</AvatarFallback>
                </Avatar>

                <span className="font-medium text-sm text-white">
                  STEM City Chicago
                </span>
              </div>
            </span>
            <hr className="mb-5 md:mb-10 opacity-40 bg-brand-black" />
            <div className=" text-white">
              <h1 className="text-2xl md:text-3xl mb-2 md:mb-5 font-bold">
                {data.concert_name}
              </h1>
              <div className="mb-2 md:hidden relative">
                <div className="h-64 flex flex-col justify-center bg-dark-panel rounded-3xl overflow-hidden relative">
                  <Image
                    alt="Collectible"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    src={data?.concert_img}
                  />
                </div>
              </div>
              <p className="text-lg  mt-5 mb-5 md:mb-12 whitespace-pre-wrap">
                ` TODO:DETAIL INFO `
              </p>
              <Button className="w-full md:hidden bg-gradient-to-br from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400">
                Buy
              </Button>
            </div>
          </div>
          <div className="hidden md:block md:w-2/5">
            <div className="w-full h-64 flex flex-col justify-center bg-dark-panel rounded-3xl overflow-hidden relative">
              <Image
                alt="Lottery Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={data?.concert_img}
              />
            </div>
            <div>
              <div className="hidden md:flex items-center justify-between py-14">
                <h2 className="text-xl mb-2.5 font-bold">Price:</h2>
                <span className="flex items-center space-x-2 mb-2.5">
                  <p className="text-3xl md:text-5xl font-bold">
                    <span className="text-blue mr-1">$</span>
                    {data.ticket_types[0].price}
                  </p>
                </span>
              </div>
              <Button className="hidden md:block w-full bg-gradient-to-br from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400">
                Buy
              </Button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default LotteryInfo;