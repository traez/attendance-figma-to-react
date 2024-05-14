import Image from "next/image";

export default function Large() {
  const websiteFeatures: string[] = [
    "Organization Website",
    "Membership Registration",
    "0-100 Members",
    "Content Management System",
    "Training & E-learning Platform",
    "E-voting System",
    "Post Unlimited Ads Per Week",
    "Admin Accessibility",
  ];

  return (
    <section className="flex flex-col items-center pb-8 bg-white rounded-2xl border-t-4 border-solid border-red-600">
      <article className="flex flex-row justify-between self-stretch p-8 w-full min-h-[144px]">
        <menu className="flex justify-center items-center p-5 w-20 h-20 bg-red-50 rounded-lg">
          <div className="relative h-10 w-10 rounded-lg">
            <Image
              src="/icon-large.svg"
              alt=""
              fill
              sizes="(min-width: 400px) 100vw"
            />
          </div>
        </menu>
        <menu className="flex gap-0 justify-center my-auto text-center">
          <div className="text-4xl font-bold tracking-tighter text-red-600 leading-[56.16px]">
            $20
          </div>
          <div className="self-end mt-7 text-sm leading-6 text-slate-600">
            /Per Month
          </div>
        </menu>
      </article>
      <article className="flex flex-col self-stretch px-8 w-full text-base">
        <div className="text-2xl font-semibold tracking-tight leading-8 text-slate-900">
        Large
        </div>
        <div className="mt-2 leading-6 text-slate-600">
        Large professional bodies and association with a larger membership
          base. One time $50 startup and configuration fee. 5% per transaction
        </div>
        <div className="flex flex-row gap-1 justify-center px-4 py-2 mt-2 text-red-600 hover:text-white hover:bg-red-600 rounded-lg border-2 border-red-600 border-solid w-3/5 cursor-pointer">
          <div className="font-bold text-xs">Get Started</div>
          <div className="relative h-4 w-10 my-auto aspect-square">
            <Image
              src="/icon-arrow-right-red.svg"
              alt=""
              fill
              sizes="(min-width: 400px) 100vw"
            />
          </div>
        </div>
      </article>
      <article>
        <hr className="self-stretch mt-10 w-full bg-gray-500 border border-gray-300 border-solid min-h-[1px]" />
        {websiteFeatures.map((feature, index) => (
          <menu key={index} className="flex gap-3 px-5 mt-4 w-full">
            <div className="flex justify-center items-center bg-green-100 rounded-[100px] h-6 w-6">
              <div className="relative h-3 w-3">
                <Image
                  src="/icon-green-check-visible.svg"
                  alt=""
                  fill
                  sizes="(min-width: 400px) 100vw"
                />
              </div>
            </div>
            <div className="text-base leading-6 text-slate-600">{feature}</div>
          </menu>
        ))}
      </article>
    </section>
  );
}
