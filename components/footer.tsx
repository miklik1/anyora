import Link from "next/link";
import React from "react";
import NewsletterForm from "./forms/form-newsletter";

const Footer = () => {
  return (
    <footer className="footer p-4 md:p-10 bg-hunter-green-500 text-white">
      <nav>
        <h6 className="footer-title">Služby</h6>
        <Link
          className="link link-hover"
          href="/poradenstvi/sluzby/komplexni-konzultace"
        >
          Komplexní konzultace
        </Link>
        <Link
          className="link link-hover"
          href="/poradenstvi/sluzby/vyzivovy-plahover:bg-secondary hover:border-primary hover:text-whiten"
        >
          Výživový plán
        </Link>
        <Link
          className="link link-hover"
          href="/poradenstvi/sluzby/online-koucink"
        >
          Online koučink
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Společnost</h6>
        <Link href="/poradenstvi/#omne" className="link link-hover">
          O mně
        </Link>
        <Link href="/poradenstvi/#kontakt" className="link link-hover">
          Kontakt
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Sociální sítě</h6>
        <div className="flex text-black">
          <Link
            className="mr-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-hunter-green-950 hover:text-white border-none p-1 duration-300 "
            href="https://www.instagram.com/_tady_any_/"
            aria-label="instagram"
            target="_blank"
          >
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            className="mr-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-hunter-green-950 hover:text-white border-none p-1 duration-300 "
            href="https://www.tiktok.com/@tady_any"
            aria-label="tiktok"
            target="_blank"
          >
            <svg
              className="h-10 w-10 fill-current p-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
            </svg>
          </Link>
          <Link
            className="mr-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-hunter-green-950 hover:text-white border-none p-1 duration-300 "
            href="https://www.youtube.com/channel/UCWKYVLvpSQY2XOBaW2RL9lA"
            aria-label="youtube"
            target="_blank"
          >
            <svg
              className="h-10 w-10 fill-current p-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z" />
            </svg>
          </Link>

          <Link
            className="mr-2 rounded-full bg-yellow-500 hover:bg-yellow-600 text-hunter-green-950 hover:text-white border-none p-1 duration-300 "
            href="https://www.facebook.com/profile.php?id=100092842802396"
            aria-label="facebook"
            target="_blank"
          >
            <svg
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </nav>
      <NewsletterForm />
    </footer>
  );
};

export default Footer;
