import banner from "../assets/png/banner-big.png";
import bannerSale from "../assets/png/banner-sale.png";
import bannerSpecial from "../assets/png/banner-special.png";

import TruckIcon from "../assets/svg/truck-icon.svg";
import callIcon from "../assets/svg/call-icon.svg"
import cartIcon from "../assets/svg/cart-icon.svg"
import boxIcon from "../assets/svg/box-icon.svg"


const Home = () => {
  return (
    <main className="bg-[#00B207]">

      {/* Banner Section */}
      <div className="flex justify-center items-center h-full gap-6 pt-6 pb-6">

        <img src={banner} alt="Banner" className="" />

        <div className="">
          <img src={bannerSale} alt="Sale Banner" className="mb-6" />
          <img src={bannerSpecial} alt="Special Banner" className="" />
        </div>

      </div>

      <div className="container bg-white h-32 rounded-[10px]">

        <ul className="flex justify-between items-center py-10  ">

          <li className="flex justify-start ">

            <img src={TruckIcon} alt="truck icon" />

            <div className="ml-4">
              <p className="mb-2 font-semibold">Free Shipping</p>
              <p>Free shipping on all your order</p>
            </div>

          </li>

          <li className="flex justify-start ">

            <img src={callIcon} alt="call icon " />

            <div className="ml-4">
              <p className="mb-2 font-semibold">Customer Support 24/7</p>
              <p>Instant access to Support</p>
            </div>

          </li>

          <li className="flex justify-start ">

            <img src={cartIcon} alt="cart icon" />

            <div className="ml-4">
              <p className="mb-2 font-semibold">100% Secure Payment</p>
              <p>We ensure your money is save</p>
            </div>

          </li>

          <li className="flex justify-start ">

            <img src={boxIcon} alt="box icon" />

            <div className="ml-4">
              <p className="mb-2 font-semibold">Money-Back Guarantee</p>
              <p>30 Days Money-Back Guarantee</p>
              
            </div>
          </li>

        </ul>

      </div>

    </main>
  );
}

export default Home