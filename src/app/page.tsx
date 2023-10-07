import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='bg-[#252f3d] lg:h-[50px] h-[42px]'>
        <ul className='h-full flex flex-row justify-center xl:justify-between items-center text-white text-xs lg:mx-32 font-medium'>
          <li className='flex flex-row items-center justify-between gap-1'>
            <Image
              src='/checkmark.svg'
              alt="Checkmark"
              width={19}
              height={19}              
            /><p>30-DAY SATISFACTION GUARANTEE</p>
          </li>
          <li className='hidden xl:flex flex-row items-center justify-between gap-1'>
            <Image
              src='/truck.svg'
              alt="Truck"
              width={19}
              height={19}
              className='inline'
            /><p>FREE DELIVERY ON ORDERS OVER $40.00</p>
          </li>
          <li className='hidden xl:flex flex-row items-center justify-between gap-1'>
            <Image
              src='/heart.svg'
              alt="Heart"
              width={19}
              height={19}
              className='inline'
            /><p>50.000+ HAPPY CUSTOMERS</p>
          </li>
          <li className='hidden xl:flex flex-row items-center justify-between gap-1'>
            <Image
              src='/arrow.svg'
              alt="Arrow"
              width={19}
              height={19}
              className='inline'
            /><p>100% MONEY BACK GUARANTEE</p>
          </li>
        </ul>
      </header>

      <main>
        <div className='flex flex-row justify-between sm:mx-32 sm:mt-8 sm:mb-4'>
          <Image
            src='/clarifion-logo-1.png'
            alt="Clarifion Logo"
            width={192}
            height={36}
            className='inline'
          />
          <div className='w-[202px] flex flex-row justify-between'>
            <Image
              src='/mcafee-logo-1.png'
              alt="McAfee Logo"
              width={88}
              height={32}
              className='inline'
            />
            <Image
              src='/norton-logo-1.png'
              alt="Norton Logo"
              width={88}
              height={32}
              className='inline'
            />
          </div>
        </div>
        <div>
          <h1 className='w-fit m-auto text-[48px]'>Wait ! your order in progress.</h1>
          <h2 className='w-fit m-auto text-[24px] text-[#4D5254]'>Lorem ipsum dolor sit amet, consectetur adipiscing </h2>
        </div>

        <div className='mx-32 mt-14'>
          <ul className='flex flex-row justify-between text-xl'>
            <li className='flex flex-col xl:flex-row items-center gap-5'>
              <Image
                src='/green-step.png' alt='Ok' width={40} height={40}
              /><p><span className='hidden xl:block'>Step 1 : </span>Cart Review</p></li>
            <li className='flex flex-col xl:flex-row items-center gap-5'>
              <Image
                src='/green-step.png' alt='Ok' width={40} height={40}
              /><p><span className='hidden xl:block'>Step 2 : </span>Checkout</p></li>
            <li className='flex flex-col xl:flex-row items-center gap-5'>
              <Image
                src='/blue-step.png' alt='Current' width={40} height={40}
              /><p><span className='hidden xl:block'>Step 3 : </span>Special Offer</p></li>
            <li className='flex flex-col xl:flex-row items-center gap-5'>
              <Image
                src='/next-step.png' alt='Next' width={40} height={40}
              /><p><span className='hidden xl:block'>Step 4 : </span>Confirmation</p></li>
          </ul>
        </div>

        <div className='mx-28 mt-10 flex xl:flex-row flex-col justify-center bg-[#FAFAFA]'>
          <div className='flex flex-col m-10'>
            <Image
              src='/offer.png'
              alt='Offer'
              width={575}
              height={591}
              className='w-[575px] h-[591px] max-w-[575px] self-center'
            />

            <div className='hidden xl:block'>
              <div className='flex flex-row'>
                <div>
                  <Image
                    src='/profile.png'
                    alt='Profile'
                    width={48}
                    height={48}
                  />
                </div>

                <div className='flex flex-col  mx-3 mt-2'>
                  <div className='flex flex-row items-start gap-1'>
                    <Image
                      src='/star.svg'
                      alt='Star'
                      width={12}
                      height={12}
                    />
                    <Image
                      src='/star.svg'
                      alt='Star'
                      width={12}
                      height={12}
                    />
                    <Image
                      src='/star.svg'
                      alt='Star'
                      width={12}
                      height={12}
                    />
                    <Image
                      src='/star.svg'
                      alt='Star'
                      width={12}
                      height={12}
                    />
                    <Image
                      src='/star.svg'
                      alt='Star'
                      width={12}
                      height={12}
                    />
                  </div>
                  <div className='flex flex-row items-center mt-2 gap-3'>
                    <p className='font-bold text-sm'>Ken T.</p>
                    <Image
                      src='/verify-1.png'
                      alt='Verify'
                      width={16}
                      height={16}
                    />
                    <p className='text-xs text-[#5BB59A]'>Verified Customer</p>
                  </div>
                </div>
              </div>
              <p className='w-[550px]'>“As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
            </div>
          </div>

          <div className='flex flex-col m-10 w-[550px] self-center'>
            <h1 className='text-[32px] w-[550px] block'>
              <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='text-[#2C7EF8]'>$14 each</span> ($84.00 total!)
            </h1>
            <div className='flex flex-row justify-between mt-4'>
              <Image
                src='/product.png'
                alt='Product'
                width={134}
                height={134}
                className='w-[134px] h-[134px] max-w-[134px]'
              />
              <div className='flex flex-col grow mx-5'>
                <div className='flex flex-row justify-between'>
                  <h2>Clafirion Air Ionizer</h2>

                  <div className='flex flex-row items-center gap-3'>
                    <p className='text-[#969696]'>$180</p>
                    <p className='text-xl text-[#2C7EF8]'>$84</p>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <Image
                    src='/star.svg'
                    alt='Star'
                    width={18}
                    height={18}
                  />
                  <Image
                    src='/star.svg'
                    alt='Star'
                    width={18}
                    height={18}
                  />
                  <Image
                    src='/star.svg'
                    alt='Star'
                    width={18}
                    height={18}
                  />
                  <Image
                    src='/star.svg'
                    alt='Star'
                    width={18}
                    height={18}
                  />
                  <Image
                    src='/star.svg'
                    alt='Star'
                    width={18}
                    height={18}
                  />
                </div>
                <div className='flex flex-row items-center'>
                  <div className='mr-2'>
                    <Image
                      src='/blue-dot.png'
                      alt='Blue dot'
                      width={16}
                      height={16}
                    />
                  </div>

                  <p className='text-[#37465A]'>12 left in stock</p>
                </div>
                <p className='text-[#4D5254] hidden xl:block'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
              </div>
            </div>
            <p className='text-[#4D5254] xl:hidden text-center'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>

            <div className='flex flex-row items-center mt-6 mb-2 gap-3 text-[#4D5254]'>
              <Image
                src='/tick.png'
                alt='tick'
                width={22}
                height={22}
              /><p>Negative Ion Technology may <span className='font-bold text-black'>help with allergens</span></p>
            </div>
            <div className='flex flex-row items-center my-2 gap-3 text-[#4D5254]'>
              <Image
                src='/tick.png'
                alt='tick'
                width={22}
                height={22}
              /><p>Designed for <span className='font-bold text-black'>air rejuvenation</span></p>
            </div>
            <div className='flex flex-row items-center my-2 gap-3 text-[#4D5254]'>
              <Image
                src='/tick.png'
                alt='tick'
                width={22}
                height={22}
              /><p><span className='font-bold text-black'>Perfect for every room</span> in all types of places.</p>
            </div>
            <div className='flex flex-row items-center  bg-[#EDF3FD] h-14'>
              <div className='mx-3 flex justify-center items-center w-7 h-7 rounded-full	bg-[#2C7EF8]'>
                <p>%</p>
              </div>
              <div>
                <p>Save <span className='text-[#2C7EF8]'>53%</span> and get <span className='text-[#2C7EF8]'>6 extra Clarifision</span> for only <span className='text-[#2C7EF8]'>$14 Each.</span></p>
              </div>
            </div>
            <div className='h-14 flex justify-center items-center rounded-full bg-[#59AE43] text-white text-xl font-bold'>
              <p>Yes - Claim my discount &rarr;</p>
            </div>
            <div className='p-4 my-3 border-[#CFCFCF] border-2 h-8 text-[12px] text-[#4D5254] flex flex-row justify-between items-center'>
              <div>
                <p>Free Shiping</p>
              </div>
              <div className='border-[#CFCFCF] h-4 border-l-[1px]'></div>
              <div className='flex flex-row justify-center items-center gap-1'>
                <Image
                  src='/lock.svg'
                  alt='Lock'
                  width={12}
                  height={12}
                />
                <p>Secure 256-bit SSL encryption.</p>
              </div>
              <div className='border-[#CFCFCF] h-4 border-l-[1px]'>
              </div>
              <div>
                <Image
                  src='/cards.png'
                  alt='Cards'
                  width={180}
                  height={14}
                />
              </div>
            </div>
            <div className='flex flex-row justify-center'>
              <p className='text-[#F82C2C] text-lg underline'>NO THANKS, I DON’T WANT THIS.</p>
            </div>
            <div className='flex flex-row'>
              <div className='shrink-0'>
                <Image
                  src='/satisfaction.png'
                  alt='Satisfaction'
                  width={88}
                  height={88}
                />
              </div>
              <div className='flex flex-row items-center mx-3'>
                <p>If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className='flex flex-col p-3 xl:flex-row justify-between bg-[#252F3D] h-[88px] text-white px-20'>
        <div className='flex flex-row items-center justify-center xl:justify-around gap-3'>
          <p>Copyright (c) 2023</p>
          <div className='h-3 border-l-[1px]'></div>
          <p>Clarifionsupport@clarifion.com</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-3'>
          <div>
            <Image
              src='/lock.svg'
              alt='Lock'
              width={16}
              height={16}
            />
          </div>
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </footer>
    </>
  )
}
