import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
     <div className="max-w-screen-xl mx-auto px-4">
        
      <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="flex flex-col items-center">
            {/* Icon */}
            <div className="bg-green-500 p-3 rounded-full"></div>
            <Link href="/terms" className="hover:underline mt-2">Terms & Conditions</Link>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon */}
            <div className="bg-green-500 p-3 rounded-full"></div>
            <Link href="/return-policy" className="hover:underline mt-2">Return Policy</Link>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon */}
            <div className="bg-green-500 p-3 rounded-full"></div>
            <Link href="/support" className="hover:underline mt-2">Support Policy</Link>
          </div>
          <div className="flex flex-col items-center">
            {/* Icon */}
            <div className="bg-green-500 p-3 rounded-full"></div>
            <Link href="/privacy" className="hover:underline mt-2">Privacy Policy</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-start">
          <div className="md:col-span-2 space-y-4">
        <div className="flex justify-center md:justify-start">
            {/* Logo or Image */}
            <Image src="/zaraeelogo.png" alt="Zaraee.pk Logo" width={120} height={150}  className="h-12" />
          </div>
          <p>
            Zaraee.pk | Shop Online Agricultural Products in Pakistan.<br />
            Download Zaraee APP and get amazing Deals and Discounts<br />
            exclusively available at Zaraee.pk.
            </p>
          <form className="flex mt-4">
            <input type="email" placeholder="Your Email Address" className="p-2 border-2 border-green-500 rounded-l-md focus:outline-none focus:border-green-600 flex-grow" />
            <button type="submit" className="bg-green-500 text-white p-2 rounded-r-md hover:bg-green-600">Subscribe</button>
          </form>
          <div className="flex justify-center md:justify-start mt-4">
            {/* Replace with actual images or SVGs */}
            <Image src="/playstore.png" alt="Google Play" height={150} width={120} className="h-8 mr-2"/>
            <Image src="/app.png" alt="App Store" height={150} width={120} className="h-8"/>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="mt-8 lg:mt-0">
          <p className="font-bold">CONTACT INFO</p>
          <address className="not-italic mt-4 space-y-1">
            Address: Lahore, Pakistan<br />
            Phone: 0325 6000700<br />
            Email: support@zaraee.com
          </address>
        </div>

        {/* Additional Links and Seller Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 lg:mt-0">

          <div>
            <p className="font-bold">MY ACCOUNT</p>
            <Link href="/login" className="hover:underline block">Login</Link>
            <Link href="/order-history" className="hover:underline block">Order History</Link>
            <Link href="/wishlist" className="hover:underline block">My Wishlist</Link>
            <Link href="/track-order" className="hover:underline block">Track Order</Link>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <p className="font-bold">BE A SELLER</p>
            <button type="button" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mt-2 w-full md:w-auto">Apply Now</button>
          </div>
        </div>

      </div>
      </div>
    </footer>

  );
};

export default Footer;
