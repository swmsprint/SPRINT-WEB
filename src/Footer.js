const Footer = () => {
  return (
    <footer className="text-gray-600 body-font section fp-auto-height">
      <div className="container px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src="/images/header_logo.png"
            alt="header logo"
            className="inline py-2 h-14 "
          />
          <span className="ml-3 text-white text-4xl font-white font-Anton align-middle ">
            SPRINT
          </span>
        </a>
        <p className="text-xs md:text-md text-white md:ml-4 md:pl-4 md:border-l-2 md:border-gray-200 md:py-2 md:mt-0 mt-4">
          주소: 서울특별시 강남구 테헤란로 311(역삼동) 아남타워빌딩 7층(06151)
          <br />
          이용 문의: swm13th@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
