import { useEffect } from "react";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Collapse, initTE } from "tw-elements";

function Accordian() {
  useEffect(() => {
    initTE({ Collapse });
  }, []);

  return (
    <div id="accordionExample">
      <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingOne">
          <button
            className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Accordion Item #1
            <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="!visible"
          data-te-collapse-item
          data-te-collapse-show
          aria-labelledby="headingOne"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">
            <strong>This is the first item's accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classes control
            the overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingTwo">
          <button
            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Accordion Item #2
            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="headingTwo"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classNamees that we use to style each element. These classNamees
            control the overall appearance, as well as the showing and hiding
            via CSS transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="rounded-b-lg border border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="accordion-header mb-0" id="headingThree">
          <button
            className="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)] [&[data-te-collapse-collapsed]]:rounded-b-[15px] [&[data-te-collapse-collapsed]]:transition-none"
            type="button"
            data-te-collapse-init
            data-te-collapse-collapsed
            data-te-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Accordion Item #3
            <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="!visible hidden"
          data-te-collapse-item
          aria-labelledby="headingThree"
          data-te-parent="#accordionExample"
        >
          <div className="px-5 py-4">
            <strong>This is the third item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="div">
      <NavBar currentPage={"Privacy Policy"} />
      <div className="h-[131px] w-full" />
      <div className="px-8 mx-[4rem] mb-10 py-6 bg-[#202429] text-center text-black">
        <h1 className="sm:text-[40px] text-2xl font-medium text-white">
          Privacy Policy
        </h1>
        <Accordian />
        <Paragraph
          text={
            'Toonsutra (hereinafter referred to as “Toonsutra", "we", "us" or "our") serves as webtoons comic viewing platform through our mobile application “Toonsutra” ("app/ platform").'
          }
        />
        <Paragraph
          text={
            'Toonsutra values consumer privacy and is committed both to safeguarding it and to protecting the information that you may provide to us. We want to ensure that your experience with Toonsutra and our websites, mobile applications and other products and services are as satisfying and safe as possible. We have established this Privacy Policy (the "Privacy Policy") to explain how we collect, use and share information for your use of websites owned or controlled by Toonsutra or its partners, apps or other products accessible through such websites (collectively, the “Services”). Your use of the Services is subject to this Privacy Policy and our Terms of Use. By accessing or using the Services, you agree to all of the terms and conditions of this Privacy Policy. If you do not agree to such terms and conditions, please do not access or use the Services.'
          }
        />
        <Paragraph text="While you can access or use most of our Services for free, some of our Services are reserved for registered users. Registration is required to download the Toonsutra app and other software and also to receive ongoing communications from us. We do not require, as a condition of participation in any of our Services or otherwise, that anyone disclose more information than is reasonably necessary for them to participate in an activity." />
        <Paragraph
          text={
            "This Privacy Policy may change from time to time and your continued use of the Services constitutes acceptance of such changes, so please check this Privacy Policy periodically for updates."
          }
        />
        <Heading text="What type of information is collected and How?" />
        <Paragraph
          text={
            "Personal information (also known as personally identifiable information) as used in this Privacy Policy is information that directly identifies you and that may also be used to contact you either online or offline. Toonsutra collects personal information on our websites and apps. Toonsutra may also collect personal information in connection with marketing or email campaigns. The type of personal information collected will vary depending upon the activity and may include your first and last name, e-mail address, account information for certain third party sites or networks such as Facebook or Twitter, phone numbers (including cell phone numbers), home address, and zip code."
          }
        />
        <Paragraph
          text={
            "In addition, we may collect demographic information such as gender; information about your computer, hardware, software and/or platform; Internet IP address and connection; information about online activity such as website/ mobile app usage and time spent on the Toonsutra webtoons app; and, other data that you may provide."
          }
        />
        <Heading text={"Cookies and Analytics"} />
        <Paragraph
          text={
            'Toonsutra uses "cookies" in connection with the Services. A cookie is a piece of data stored on a website visitor\'s hard drive to help us improve your access to our website and identify repeat visitors to our website. For instance, when we use a cookie to identify you, you would not have to log in a password more than once, thereby saving time while on our website. Usage of a cookie is in no way linked to any personal information on our website. The information that we collect with cookies may include your IP address, information about how you interact with advertisements and other content, browser type, system type, device type, the content and pages that you access, the date and time you view pages, and the page from which you navigated. In addition to cookies, we may use analytics tools and other third party technologies to collect non-personal information in the form of various usage and user metrics when you use our online products and services. These tools and technologies collect and analyze certain types of information, including cookies, IP addresses, device and software identifiers, referring and exit URLs, onsite behavior and usage information, app use metrics and statistics, feature use metrics and statistics, usage and purchase history, MAC Address, mobile unique device ID, and/or other similar information.'
          }
        />
        <Paragraph
          text={
            "The third party analytics companies who collect information on our websites, apps and other online products and/or services may combine the information collected with other information they have independently collected from other websites and/or apps or other online products and services relating to your activities across their network of websites as well as apps and/or online products and services. Many of these companies collect and use information under their own privacy policies. Some of these companies may also help us tailor advertising that we think may be of interest to our users and to collect and use other data about user activities on our services (e.g., to allow them to tailor ads on third party services)."
          }
        />
        <Paragraph
          text={
            "If you wish to not have this information used for the purpose of serving you targeted ads, you may opt-out as described below."
          }
        />
        <Paragraph
          text={
            "Please note this does not opt you out of being served advertising. To the extent we permit such advertising to occur, you will continue to receive generic ads."
          }
        />
        <Heading text={"Children (Below the age of 13 years): Special Note"} />
        <Paragraph
          text={
            "We do not knowingly seek or collect personal information from children under the age of thirteen (13), nor do we provide it to third parties. If we determine we have inadvertently gathered any personal information from a user under the age of 13, we will promptly delete any and all such personal information from our records."
          }
        />
        <Heading text={"How Personal Information is Used?"} />
        <Paragraph
          text={
            "We may use information from users of our mobile app and website, including personal information, behavioral metrics, and other non-personally identifiable information to operate, provide, improve, and maintain our app, websites and services, to develop new products and services, to prevent abuse and fraud, to personalize and display advertisements and other content for you, and for other administrative and internal business purposes. The personal information you provide us will allow you to access the Services and also allow us to deliver messages to your personal accounts on certain third party sites or networks, such as Facebook and Twitter. It will also be used to alert you of new products; handle and route your customer service or technical support questions or issues; and, notify you of promotions, special events, and offers. By providing us with a cell phone number, you agree that we may send you text messages either directly or through a third party site or service (and you are responsible for any data rates or text fees that may apply)."
          }
        />
        <Paragraph
          text={
            "We may also need to use your personal information to: (1) respond to subpoenas or court orders; (2) establish or exercise our legal rights or defend against legal claims; (3) protect ourselves, our employees, contractors, customers, users and others and our Services from fraudulent, abusive, or unlawful uses; (4) investigate and defend ourselves against third party claims or allegations; (5) enforce our Terms of Use; or, (6) the extent otherwise required by applicable law."
          }
        />
        <Paragraph
          text={
            "If you provide us account information for a third-party service, such as Facebook or Twitter, we may also contact you on such third-party service to provide information or updates about our Services. This Privacy Policy is implemented pursuant to the framework of the U.S/EU Safe Harbor and the U.S./Swiss Safe Harbor and adheres to the Safe Harbor privacy principles contained therein and complies with the European Union Directive on Data Protection or the Federal Data Protection and Information Commission of Switzerland. If at any time you wish to opt-out from having your personal information used in order to deliver information from Toonsutra about new products, services, or promotions, you may contact us at contactus@toonsutra.com with the words “Opt Out” in the subject line of your email."
          }
        />
        <Heading text={"Disclosure of Personal Information"} />
        <Paragraph
          text={
            "We do not sell, rent, or give any retained customer information to third parties outside of what is necessary to provide the Services. Such third parties have access to personal information needed to perform their functions, but may not use it for other purposes. We may provide personal information to third parties for their use in performing internal business functions (e.g., payment processing, customer service, maintenance, security, data analysis, email transmission, beta testing, or data hosting) on our behalf. Additionally, some third party service providers may collect information, including personal information, on our behalf. Whenever possible, we require such third-parties to only collect and use personal information in accordance with this Privacy Policy, to maintain the confidentiality, security, and integrity of such personal information, and for no purpose other than providing us with our requested services. In the event we are acquired by or merged with another company we may transfer your personal information to the new company."
          }
        />
        <Heading
          text={"Your Access to and Control Over Your Personal Information"}
        />
        <Paragraph
          text={
            "You may request that we modify or delete your user account(s) and any related data at any time. If you wish to delete your user account(s), please email us at support@toonsutra.com "
          }
        />
        <Paragraph
          text={
            "with the words “Delete Account” in the subject line of your email. You may, at any time, update or correct personal information that you have provided to us by contacting us at the mailing or email address provided below."
          }
        />
        <Heading text={"Personal Information Protection"} />
        <Paragraph
          text={
            "The security of your personal information is important to us. We have implemented technical, administrative and physical security measures to attempt to protect your personal information from unauthorized access and improper use. However, please understand that no security measure is perfect or impenetrable and therefore we cannot and do not guarantee the security of your personal information. We also protect your information offline. Only employees who need the information to perform a specific job (for example, customer service) are granted access to personal information. The computers/servers in which we store personal information are kept in a secure environment."
          }
        />
        <Heading text={"Submitting Personal Information"} />
        <Paragraph
          text={
            'In some of our email messages, we may use a "click-through URL" linked to content on an app/ website. When you click one of these URLs, you pass through a separate web server before arriving at the destination page. We track this click-through data to help us determine interest in particular topics and measure the effectiveness of our customer communications. If you prefer not to be tracked in this way, you should not click text or graphic links in the email messages.'
          }
        />
        <Heading text={"Interactive Features"} />
        <Paragraph
          text={
            "If you use a forum, blog, bulletin board, chat room, user commenting features, or other interactive or social features that may be offered through any of our Services, you should be aware that any personal information you submit, display, or publish there is considered publicly available and can be read, collected, used, and disclosed by other users of those features, by us, and other third parties without restriction. To request removal of your personal information from our blog or community forum, contact us at contactus@toonsutra.com. In some cases, we may not be able to remove your personal information, in which case we will let you know if we are unable to do so and why."
          }
        />
        <Heading text={"Submitting Personal Information"} />
        <Paragraph
          text={
            "If you do not want to submit personal information that is necessary to provide or use a service or to fulfill your request, you will not be able to access and/or participate in certain products and Services. For example, you will not be able to register to received communications from us, or access and/or use certain Toonsutra product features or online services. In addition, your refusal to submit personal information may limit our ability to respond to your customer support inquiry in a timely fashion."
          }
        />
        <Heading text={"Links and Third Party Messaging"} />
        <Paragraph
          text={
            "The mobile app/ website may contain links to other websites including social networking sites and services. Please be aware that we are not responsible for the content or privacy practices of such other websites. This Privacy Policy does not apply to third party websites and we encourage our users to be aware when they leave our app/ website and to read the privacy statements of any other website that collects personal information since your rights will be governed by those third party policies (and not by this Privacy Policy or Toonsutra). Additionally, when using the Services if you choose to download apps or other products you may be redirected to a third party site or service in order to complete the download. Those third party sites and services may employ cookies. You may receive messages or other forms of communication in connection with your use of the app or other products both from us and from third parties. Additionally, your use of the app or other products is governed by and subject to the applicable terms of use and/or privacy policy associated with the third party site or service, and we are not responsible for the content or privacy practices of such other sites or services."
          }
        />
        <Heading
          text={
            "How You Can Ask Questions or Send Us Comments About This Privacy Policy"
          }
        />
        <Paragraph
          text={
            "Toonsutra welcomes your comments regarding this Privacy Policy. If you have any questions about this Privacy Policy or have technical or general support questions, please contact us at support@toonsutra.com"
          }
        />
        <Heading text={"Notice of Changes to the Privacy Policy"} />
        <Paragraph
          text={
            "We may update this Privacy Policy from time to time. If we do, we will update the “Last Updated” date at the bottom of the Privacy Policy. If we make material changes to how we use personal information, we will attempt to notify you of the change and to give you the opportunity to exercise choice as to how your personal information is used. For all changes to this Privacy Policy, we will post the updated Privacy Policy on Toonsutra app or website. We encourage you to review this Privacy Policy periodically to stay informed about our collection, use and disclosure of personal information."
          }
        />
      </div>
      <Footer />
    </div>
  );
}

function Paragraph({ text }) {
  return <p className="text-xs font-normal my-4 text-textPrimary">{text}</p>;
}

function Heading({ text }) {
  return (
    <h1 className="text-[20px] text-textPrimary sm:leading-[0px] mt-12">
      {text}
    </h1>
  );
}
