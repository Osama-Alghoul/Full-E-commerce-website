export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col md:flex-row px-5 md:px-[135px] justify-between pt-20 pb-14 gap-20">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-2xl">Exclusive</div>
          <div className="font-medium text-xl">Subscribe</div>
          <div>Get 10% off your first order</div>
          <input
            type="text"
            className="border-white border rounded-sm"
            placeholder="email"
          />
        </div>
        <div className="w-44 flex flex-col gap-4">
          <div className="font-medium text-xl">Support</div>
          <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div>exclusive@gmail.com</div>
          <div>+88015-88888-9999</div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-medium text-xl">Account</div>
          <div>
            <a href="#" className="hover:text-primary">
              My Account
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              Login
            </a>
            /
            <a href="#" className="hover:text-primary">
              Register
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              Cart
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              Wishlist
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              Shop
            </a>
          </div>
        </div>
        <div className="w-28 flex flex-col gap-4">
          <div className="font-medium text-xl">Quick Link</div>
          <div>
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              Terms Of Use
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              FAQs
            </a>
          </div>
          <div>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-medium text-xl">Download App</div>
          <div className="font-medium text-xs opacity-70">
            Save $3 with App New User Only
          </div>
          <div className="flex gap-2.5">
            <div>
              <img src="/qr.png" alt="QR Code" />
            </div>
            <div className="flex flex-col gap-2.5">
              <div>
                <img src="/googleplay.png" alt="Google Play" />
              </div>
              <div>
                <img src="/appstore.png" alt="Appstore" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-t border-t-gray-600">
        <div className="text-center text-gray-600">
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
}
