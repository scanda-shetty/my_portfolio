import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer--container">
          <div className="contact">
    <p className="sub--title">Get In Touch</p>
    <h2>Contact Me</h2>
    <div className="contact-info">
        <div className="contact-item">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" height="20" width="20" class="hover:translate-y-[-10px]"><path fill="currentColor" d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"></path><path fill="currentColor" d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"></path></svg>            <p className="text-lg">PES University Electronic City Campus,<br /> Electronic City, Bangalore, 560100</p>
        </div>
        <div className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" class="hover:translate-y-[-10px]" viewBox="0 0 30 30.000001" height="30" width="30" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path fill="currentColor" d="M 3.460938 6.5625 L 26.539062 6.5625 L 26.539062 24.707031 L 3.460938 24.707031 Z M 3.460938 6.5625 " clip-rule="nonzero"></path></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(6.269836%, 5.879211%, 5.099487%)" d="M 24.230469 11.101562 L 15 16.769531 L 5.769531 11.101562 L 5.769531 8.832031 L 15 14.503906 L 24.230469 8.832031 Z M 24.230469 6.5625 L 5.769531 6.5625 C 4.492188 6.5625 3.472656 7.578125 3.472656 8.832031 L 3.460938 22.441406 C 3.460938 23.695312 4.492188 24.707031 5.769531 24.707031 L 24.230469 24.707031 C 25.507812 24.707031 26.539062 23.695312 26.539062 22.441406 L 26.539062 8.832031 C 26.539062 7.578125 25.507812 6.5625 24.230469 6.5625 " fill-opacity="1" fill-rule="nonzero"></path></g></svg>
            <p>skandasshetty@gmail.com</p>
        </div>
        <div className="contact-item">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="hover:translate-y-[-10px] bi bi-phone" viewBox="0 0 16 16"> <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path> <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path> </svg>
            <p>+91 8151944386</p>
        </div>
    </div>
</div>
      <hr className="divider" />

      <div className="footer--link--container">
        <div>
        <img src="./img/ss.png" alt="Skanda"   style={{ paddingRight:'50px',paddingLeft:'50px', width: '80px', height: '80px', borderRadius:'50%' }}/>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="mySkills"
                className="text-md"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
          <ul>
          <li>
              <a
                href="https://github.com/scanda-shetty"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg stroke="currentColor" fill="black" stroke-width="0" role="img" viewBox="0 0 24 24" class="my-auto h-5 w-5 align-middle text-neutral-600 transition-colors duration-200 hover:text-primary-400 dark:text-gray-300 dark:hover:text-primary-300" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/skanda_shetty10/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="yellow"
                  stroke="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.0001 4.65479H11.3334C7.65152 4.65479 4.66675 7.63956 4.66675 11.3215V21.9881C4.66675 25.67 7.65152 28.6548 11.3334 28.6548H22.0001C25.6819 28.6548 28.6667 25.67 28.6667 21.9881V11.3215C28.6667 7.63956 25.6819 4.65479 22.0001 4.65479ZM26.3334 21.9881C26.3261 24.3783 24.3902 26.3141 22.0001 26.3215H11.3334C8.94321 26.3141 7.0074 24.3783 7.00008 21.9881V11.3215C7.0074 8.93125 8.94321 6.99544 11.3334 6.98812H22.0001C24.3902 6.99544 26.3261 8.93125 26.3334 11.3215V21.9881ZM23.0001 11.6548C23.7365 11.6548 24.3334 11.0578 24.3334 10.3215C24.3334 9.58508 23.7365 8.98812 23.0001 8.98812C22.2637 8.98812 21.6667 9.58508 21.6667 10.3215C21.6667 11.0578 22.2637 11.6548 23.0001 11.6548ZM16.6667 10.6548C13.353 10.6548 10.6667 13.3411 10.6667 16.6548C10.6667 19.9685 13.353 22.6548 16.6667 22.6548C19.9805 22.6548 22.6667 19.9685 22.6667 16.6548C22.6703 15.0624 22.0393 13.5342 20.9133 12.4082C19.7873 11.2822 18.2591 10.6512 16.6667 10.6548ZM13.0001 16.6548C13.0001 18.6799 14.6417 20.3215 16.6667 20.3215C18.6918 20.3215 20.3334 18.6799 20.3334 16.6548C20.3334 14.6297 18.6918 12.9881 16.6667 12.9881C14.6417 12.9881 13.0001 14.6297 13.0001 16.6548Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://x.com/ShettySkanda"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M28.6304 9.61132C28.0112 10.4373 27.2627 11.1579 26.4137 11.7451C26.4137 11.9609 26.4137 12.1767 26.4137 12.4045C26.4205 16.3229 24.8553 20.0803 22.0691 22.8341C19.2827 25.588 15.5083 27.108 11.5921 27.0533C9.32799 27.0609 7.0929 26.544 5.0619 25.5429C4.95238 25.4951 4.88175 25.3868 4.88216 25.2672V25.1353C4.88216 24.9632 5.02164 24.8237 5.1937 24.8237C7.41923 24.7503 9.56536 23.9787 11.3285 22.618C9.31404 22.5773 7.50159 21.384 6.66747 19.5491C6.62535 19.4489 6.63846 19.3339 6.7021 19.2457C6.76572 19.1576 6.87067 19.1091 6.979 19.1176C7.59123 19.1791 8.20958 19.1221 8.80027 18.9497C6.57652 18.4881 4.90562 16.642 4.66648 14.3824C4.65799 14.274 4.70656 14.1691 4.79467 14.1053C4.88276 14.0417 4.99766 14.0285 5.09784 14.0708C5.69459 14.3341 6.33879 14.4728 6.99099 14.4783C5.04246 13.1994 4.20082 10.7669 4.94207 8.55641C5.01859 8.34163 5.20242 8.18295 5.426 8.13871C5.64958 8.09445 5.87995 8.17116 6.03243 8.34064C8.66186 11.1391 12.2747 12.8067 16.1092 12.9918C16.0111 12.5999 15.9628 12.1971 15.9655 11.7931C16.0013 9.67441 17.3123 7.78707 19.2845 7.01461C21.2567 6.24217 23.4999 6.73749 24.964 8.26871C25.9619 8.07859 26.9267 7.74339 27.8276 7.27373C27.8936 7.23253 27.9773 7.23253 28.0433 7.27373C28.0845 7.33976 28.0845 7.42348 28.0433 7.48951C27.6069 8.48881 26.8697 9.32695 25.9345 9.88704C26.7535 9.79207 27.558 9.59888 28.3309 9.31164C28.396 9.26735 28.4815 9.26735 28.5465 9.31164C28.6011 9.33657 28.6419 9.38427 28.658 9.44201C28.6741 9.49976 28.664 9.56169 28.6304 9.61132Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/skanda-shetty-79b402229/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 33 33"
                  fill="none"
                  
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                    fill="black"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">©️ 2024, Skanda S Shetty</p>
      </div>
    </footer>
  );
}

export default Footer;
