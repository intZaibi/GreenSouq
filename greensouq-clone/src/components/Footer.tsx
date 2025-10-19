"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f4f4f4] py-10 px-3 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-6 pb-10 text-sm text-gray-600">
          {/* Follow us */}
          <div>
            <h3 className=" text-black mb-2" style={{fontSize: "16px"}}>Follow us</h3>
            <div className="flex space-x-2">
              <a href="#" className="text-black hover:text-gray-600">
                <span className="sr-only">Email</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z" />
                </svg>
              </a>
              <a href="#" className="text-black hover:text-gray-600">
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v4.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
             
              
              <a href="#" className="text-black hover:text-gray-600">
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Find It Fast */}
          <div>
            <h3 className=" text-black mb-2" style={{fontSize: "16px"}}>Find It Fast</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Latest Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className=" text-black mb-2" style={{fontSize: "16px"}}>Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Shipping charges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Hot Links */}
          <div>
            <h3 className=" text-black mb-2" style={{fontSize: "16px"}}>Hot Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  My Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Your Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900" style={{fontSize: "14px"}}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className=" text-black mb-2" style={{fontSize: "16px"}}>Contact Info</h3>
            <ul className="space-y-3">
              <li style={{fontSize: "14px"}}>Mobile: +971 58 512 1105</li>
              <li style={{fontSize: "14px"}}>Email: info@greensouq.ae</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 text-xs text-gray-500">
          <p style={{fontSize: "14px"}}>Copyright © 2025 Shahzad, Powered by Markfiniti</p>
        </div>

       
      </div>
    </footer>
  );
}
