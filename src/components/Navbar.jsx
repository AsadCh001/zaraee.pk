"use client"
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { getSession } from 'next-auth/react';
import { FiShoppingCart, FiHeart, FiRefreshCcw } from 'react-icons/fi';
import { useRouter } from "next/navigation";


const Navbar = ({ session, cartCount, wishlistCount, compareCount }) => {
  const [showCartModal, setShowCartModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Toggle dropdown
  const handleToggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      const session = await getSession();

      // Check if the user is authenticated
      if (!session?.user?.email) {
        console.error("User not authenticated");
        // You might want to redirect the user to the login page
        return;
      }

  const sessionEmail = session.user.email;

      try {
        const response = await fetch("/api/getcartitems", {
          method: "POST",
          body: JSON.stringify({
            sessionEmail: sessionEmail,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCartItems(data.cart);
        } else {
          console.error('Failed to fetch cart items');
        }
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const handleSignOutClick = async (e) => {
    e.preventDefault();
    await signOut();
    setShowDropdown(false); // Also close the dropdown on sign out
  };
  useEffect(() => {}, [session]);


  const handleCartClick = () => {
    setShowCartModal(!showCartModal);
    // Implement modal functionality here
  };

  return (
    <nav className="bg-green w-full z-20 top-0 left-0 border-b">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link href="/">
          <div className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-primary">
              <Image src="/zaraeelogo.png" alt="Zaraee Logo" width={150} height={150} />
            </span>
          </div>
        </Link>
      </div>

      <div className="absolute top-0 right-0 flex items-center p-4 m-4 pr-10">
<div className="relative w-96">

    <input
      type="text"
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-green-400 bg-white text-black placeholder-black border-gray-300 pr-12"
    />
    <button className="absolute right-0 top-0 bottom-0 p-2" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.293 11.293a1 1 0 011.414 0l4.243 4.243a1 1 0 11-1.414 1.414l-4.243-4.243a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M7 12a5 5 0 110-10 5 5 0 010 10z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
  <div className="flex items-center space-x-3 ml-10">
  <Link href="/compare" className="cursor-pointer group flex items-center space-x-1">
      <FiRefreshCcw className="text-xl group-hover:text-green-600" />
      {compareCount > 0 && <span className="text-xs group-hover:text-green-600">{compareCount}</span>}
      <span className="group-hover:text-green-600">Compare</span>
  </Link>

  <Link href="/wishlist" className="cursor-pointer group flex items-center space-x-1">

      <FiHeart className="text-xl group-hover:text-green-600" />
      {wishlistCount > 0 && <span className="text-xs group-hover:text-green-600">{wishlistCount}</span>}
      <span className="group-hover:text-green-600">Wishlist</span>

  </Link>

  <div className="relative flex items-center space-x-1 group">
  {/* Cart button */}
  <button
    onClick={handleCartClick}
    className="flex items-center space-x-1 cursor-pointer group"
  >
    <FiShoppingCart className="text-xl group-hover:text-green-600" />
    {cartCount > 0 && (
      <span className="text-xs group-hover:text-green-600">{cartCount}</span>
    )}
    <span className="group-hover:text-green-600">Cart</span>
  </button>

  {/* Modal backdrop and content */}
  {showCartModal && (
  <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setShowCartModal(false)} />
    <div
      className="absolute right-0 mt-2 p-4 flex flex-col gap-2 justify-start bg-white rounded shadow-lg z-50 max-h-300 overflow-y-auto"
      style={{ width: '300px', top: '100%' }}
      onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the overlay
    >
      {/* Content of Cart Modal */}
      {cartItems.length > 0 ? (
        <div>
          <p className="text-lg font-bold mb-2">Cart Items:</p>
          <ul className="divide-y divide-gray-300">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-2">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-16">
                    <Image
                      src={`/Products-images/${item.product.ftimage}`}
                      alt={`${item.product.name} thumbnail`}
                      layout="fixed"
                      width={200}
                      height={200}
                      objectFit="contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm">{item.product.name}</p>
                    <p className="text-xs">Quantity: {item.quantity}</p>
                    <p className="text-xs">Total Price: Rs.{item.total_price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {/* Button to navigate to "/cart" and set cart items in local storage */}
          <button 
            onClick={() => {
              // Set cart items in local storage
              localStorage.setItem('cartItems', JSON.stringify(cartItems));

              // Navigate to "/cart"
              router.push('/cart');
            }}
            className="bg-green-600 text-white p-2 rounded mt-4 cursor-pointer"
          >
            View Cart
          </button>
        </div>
      ) : (
        <p>No items in the cart...</p>
      )}
    </div>
  </>
)}

</div>

  
</div>



<div className="relative flex items-center space-x-4 ml-10">
      {session ? (
        <div ref={dropdownRef}>
          <div onClick={handleToggleDropdown} className="flex items-center space-x-2 cursor-pointer">
            {session.user.image && (
              <Image className="rounded-full" src={session.user.image} alt="User" width={50} height={50} />
            )}
            <span className="font-bold break-words">{session.user.name}</span>
          </div>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-1 py-2 w-48 bg-white rounded-md shadow-xl z-50">
              <a
                href="#"
                onClick={handleSignOutClick}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign Out
              </a>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <Link className="text-sm hover:text-green-600" href="/login">
            Login
          </Link>
          <span className="text-sm text-black-400">/</span>
          <Link className="text-sm hover:text-green-600" href="/register">
            Register
          </Link>
        </div>
      )}
    </div>
    
</div>




      <div className="bg-white w-full p-2  border-t border-gray-300">
        <div className="flex justify-center gap-6">
          <Link className="text-black hover:text-green-600" href="/">
            Home
          </Link>
          <Link  className="text-black hover:text-green-600" href="/categories">
            Categories
          </Link>
          <Link className="text-black hover:text-green-600" href="/brands">
            Brands
          </Link>
          <Link className="text-black hover:text-green-600" href="/credit">
             Apply for Credit
          </Link>
          <Link className="text-black hover:text-green-600" href="/totkay">
             Kissan Dost Totkay
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;
