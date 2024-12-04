import Image from "next/image";

export default function Home() {
  return (
    <div className="layoutWrapper full-height">
      <header className="Header_header__U3aid">
        <div className="Header_buttonContainerPlaceholder__rRZqY">
          <div className="Header_buttonPlaceholder__U1v9p"></div>
        </div>
        <Image src="/logo.svg" alt="Next.js logo" width={124} height={30} priority />
        <div className="Header_buttonContainer__pFjPm">
          <div className="Header_button__Oae11">
            <Image src="/refresh.svg" alt="Next.js logo" width={20} height={20} priority />
          </div>
        </div>
      </header>
      <main className="mainContent">
        <div className="page_contentWrapper__YBAIW home">
          <div className="page_background__odxEk page_home__jFQbK page_one__PgyQB"></div>
          <div className="page_juicebotContainer__5Slx0">
            <div className="container-visible visible">
              <Image src="/illustration.svg" alt="Next.js logo" width={448} height={448} priority />
            </div>

            <div className="page_overlayTexts__hq_5I home">
              <span className="page_topLeft__teS_m">
                WA businesses feel confident about future growth
              </span>
              <span className="page_topRight__F61OY">AI can't replace creativity</span>
              <span className="page_middleLeft__N_DHU">Sales measure true success</span>
              <span className="page_middleRight__ii__n">Human connection drives WA business</span>
              <span className="page_bottomLeft__f7V1K">
                The primary barrier to digital transformation is financial investment
              </span>
            </div>
          </div>
          <div className="page_mainContent__51TpB">
            <h1 className="page_mainText__9nGu9 home">
              Compare your thoughts on <span className="page_highlight__KaGfy">technology</span>{" "}
              with current industry opinions.
            </h1>

            <div className="page_buttonContainer__XCXUY home">
              <div className="ChatBox_chatbotTextbox__yjSFM">
                <div className="ChatBox_buttonWrapper__5ExBq">
                  <button className="Button_button__0e1h7 Button_primary__lnswT">
                    <span className="Button_buttonText__dTbaT">Get a reality check</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
