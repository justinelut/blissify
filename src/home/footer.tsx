export default function Footer() {
    return (
      <div className="bg-white">
        <div className="px-4 sm:px-6 lg:px-36 md:px-34">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-12">
            <div>
              <h5 className="text-lg font-semibold mb-4">Phoenix</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    Rentals with pools
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Hot Springs</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    Cabin rentals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Los Angeles</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    Beachfront rentals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">San Diego</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    House rentals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">San Francisco</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    Vacation rentals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Barcelona</h5>
              <ul className="space-y-2">
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    Apartment rentals
                  </a>
                </li>
                <li>
                  <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                    Show more <ChevronDownIcon className="inline-block" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h5 className="text-lg font-semibold mb-4">Support</h5>
                <ul className="space-y-2">
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      AirCover
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Anti-discrimination
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Disability support
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Cancellation options
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Report neighborhood concern
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Hosting</h5>
                <ul className="space-y-2">
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Blissify your home
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      AirCover for Hosts
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Hosting resources
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Community forum
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Hosting responsibly
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Blissify-friendly apartments
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-4">Blissify</h5>
                <ul className="space-y-2">
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      New features
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Investors
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Gift cards
                    </a>
                  </li>
                  <li>
                    <a className="text-base text-gray-600 hover:text-gray-800" href="#">
                      Blissify.org emergency stays
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 py-6 text-sm">
            <p className="text-gray-600">© 2024 Blissify, Inc.</p>
            <div className="flex flex-wrap items-center mt-4 md:mt-0 space-x-6">
              <a className="text-gray-600 hover:text-gray-800" href="#">
                Terms
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                Sitemap
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                Privacy
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                Your Privacy Choices
              </a>
            </div>
            <div className="flex items-center mt-4 md:mt-0 space-x-4">
              <a className="text-gray-600 hover:text-gray-800" href="#">
                English (US)
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                $ USD
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a className="text-gray-600 hover:text-gray-800" href="#">
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function ChevronDownIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    )
  }
  
  
  function FacebookIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }
  