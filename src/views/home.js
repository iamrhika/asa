import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>PT ASA</title>
        <meta property="og:title" content="PT ASA" />
      </Helmet>
      <nav className="home-navbar">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="Smart Card Innovations"
            src="/external/primary_logo_asa_plain%201-1500h.png"
            className="home-image1"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links1">
              <Link to="/" className="home-link11 thq-link thq-body-small">
                Home
              </Link>
              <a
                href="#Hero Section"
                className="home-link21 thq-link thq-body-small"
              >
                About
              </a>
              <a
                href="#Our Works"
                className="home-link31 thq-link thq-body-small"
              >
                Works
              </a>
              <a
                href="#our procces"
                className="home-link41 thq-link thq-body-small"
              >
                Production
              </a>
              <a
                href="#solution"
                className="home-link51 thq-link thq-body-small"
              >
                Solution
              </a>
            </nav>
            <div className="home-buttons">
              <a href="#contact us" className="home-action11 thq-button-filled">
                <span className="home-text100 thq-body-small">Contact</span>
              </a>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="Smart Card Innovations"
                  src="/primary_logo_asa_plain%201%20logo-1500h.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links2">
                <Link to="/" className="home-link12 thq-link thq-body-small">
                  Home
                </Link>
                <a
                  href="#Hero Section"
                  className="home-link22 thq-link thq-body-small"
                >
                  About
                </a>
                <a
                  href="#Our Works"
                  className="home-link32 thq-link thq-body-small"
                >
                  Works
                </a>
                <a
                  href="#our procces"
                  className="home-link42 thq-link thq-body-small"
                >
                  Production
                </a>
                <a
                  href="#solution"
                  className="home-link52 thq-link thq-body-small"
                >
                  Solution
                </a>
              </nav>
            </div>
          </div>
        </header>
      </nav>
      <section id="Hero Section" className="home-hero-section">
        <div className="home-hero-content">
          <div className="home-hero-content1">
            <div className="home-frame192401">
              <div className="home-frame19234">
                <img
                  alt="oouiquotesltr8981"
                  src="/external/oouiquotesltr8981-nzkn.svg"
                  className="home-oouiquotesltr"
                />
                <span className="home-text101">
                  <span>Get The Future</span>
                  <br></br>
                  <span>You Want</span>
                </span>
              </div>
              <span className="home-text105">
                Helping to realize customer ideas and innovations by providing
                safe, smart technology products.
              </span>
            </div>
            <img
              alt="Rectangle74238982"
              src="/external/rectangle74238982-hngr-500w-1500w.png"
              className="home-hero-image1"
            />
          </div>
          <div className="home-hero-content2">
            <img
              alt="Rectangle74238982"
              src="/external/rectangle74238982-ssxp-400h-1500w.png"
              className="home-hero-image2"
            />
            <span className="home-text106">
              <span>
                ASA, known formally as PT Askara Satya Abadi, brings over five
                years of expertise in smart card technology and innovation.
              </span>
              <br></br>
              <br></br>
              <span>
                Our journey began in printing and manufacturing, we have since
                expanded into advanced smart card platforms and technology
                engines.
              </span>
              <br></br>
              <br></br>
              <span>
                We specialize in developing smart card solutions, including
                management systems, Secure Access Modules (SAM), and payment
                system, tailored to meet the diverse needs of our clients.
              </span>
            </span>
          </div>
        </div>
      </section>
      <div className="home-content1">
        <div className="home-frame19319">
          <div className="home-frame19227">
            <span className="home-text114">
              Redefining Excellence in Chip Card Innovation
            </span>
            <button className="home-button1">
              <span className="home-text115">
                <span>Discover More</span>
              </span>
            </button>
          </div>
          <div className="home-frame19231">
            <div className="home-frame19228">
              <span className="home-text117">
                <span>
                  Certified in diverse range of products and services.
                </span>
              </span>
              <div className="home-container2">
                <div className="home-frame50">
                  <img
                    alt="ISO4500120189082"
                    src="/external/iso4500120189082-xtqg-200h-200h.png"
                    className="home-iso450012018"
                  />
                  <img
                    alt="ISO900120159082"
                    src="/external/iso900120159082-bd7m-200h-200h.png"
                    className="home-iso90012015"
                  />
                  <img
                    alt="ISO1400120159082"
                    src="/external/iso1400120159082-qac9-200h-200h.png"
                    className="home-iso140012015"
                  />
                  <img
                    alt="ISOEIC2700120139082"
                    src="/external/isoeic2700120139082-zy9wo-200h-200h.png"
                    className="home-isoeic270012013"
                  />
                  <img
                    alt="image"
                    src="/external/sertifikat%201-200h.png"
                    className="home-image2"
                  />
                  <img
                    alt="image"
                    src="/external/sertifikat%202-200h.png"
                    className="home-image3"
                  />
                  <img
                    alt="image"
                    src="/external/sertifikat%203-200h.png"
                    className="home-image4"
                  />
                </div>
              </div>
            </div>
            <div className="home-frame19230">
              <span className="home-text119">
                <span>
                  Explore our comprehensive services designed to ensure swift
                  and secure future.
                </span>
              </span>
              <div className="home-frame19229">
                <img
                  alt="arrowdown9083"
                  src="/external/arrowdown9083-x87q.svg"
                  className="home-arrowdown"
                />
                <span className="home-text121">
                  <span>Scroll Down</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-acknowledgement">
        <div className="home-frame19335">
          <span className="home-text123">
            <span>Acknowledgement</span>
          </span>
          <div className="home-frame19333">
            <span className="home-text125">
              <span>
                ASA is recognized for its exellence in quality and leadership in
                innovation,
              </span>
              <br></br>
              <span>as evidenced by several industry accreditations:</span>
            </span>
            <span className="home-text129">
              <span>ISO 14001:2015</span>
              <br></br>
              <span>ISO 45001:2018</span>
              <br></br>
              <span>ISO/ESIC 27001:2013</span>
              <br></br>
              <span>ISO 9001:2015</span>
              <br></br>
              <span>Botasupal Sertifikat Kartu Sekuriti</span>
              <br></br>
              <span>Botasupal Sertifikat Dokumen Sekuriti</span>
              <br></br>
              <span>Botasupal Sertifikat Hologram Sekuriti</span>
            </span>
          </div>
        </div>
      </div>
      <div className="home-desktop26">
        <img
          alt="Certificate2071"
          src="/external/certificate2071-epzg-1500w.png"
          className="home-certificate"
        />
      </div>
      <div className="home-statistics">
        <div className="home-frame19245">
          <div className="home-frame19241">
            <span className="home-text143 HeadingH1Semibold">
              <span>+160 M</span>
            </span>
            <span className="home-text145 HeadingH5Semibold">
              <span>Smart Card Productions</span>
            </span>
          </div>
          <div className="home-frame19242">
            <span className="home-text147 HeadingH1Semibold">
              <span>Global Market</span>
            </span>
            <span className="home-text149 HeadingH5Semibold">
              <span>4 Overseas Country</span>
            </span>
          </div>
          <div className="home-frame19243">
            <span className="home-text151 HeadingH1Semibold">
              <span>35.5 M</span>
            </span>
            <span className="home-text153 HeadingH5Semibold">
              <span>Market Growth</span>
            </span>
          </div>
          <div className="home-frame19244">
            <span className="home-text155 HeadingH1Semibold">+200</span>
            <span className="home-text156 HeadingH5Semibold">
              <span>Hard Worker</span>
            </span>
          </div>
        </div>
      </div>
      <section id="Our Works" className="home-our-works">
        <div className="home-frame19323">
          <span className="home-text158">
            <span>Our Works</span>
          </span>
          <div className="home-frame192402">
            <span className="home-text160">Our Expertise in Action</span>
            <span className="home-text161">
              Our manufacturing facilities produce over 16 million smart cards
              per month, encompassing all aspects of the smart card industry,
              including the cards and chipset modules. Our brand development
              team provides comprehensive support, including design, artwork,
              and printing consultations. We assist in new product development
              with expertise from brand development, smart card R&amp;D, and
              market research, helping to navigate market demands. Additionally,
              our team excels in executing communication campaigns to promote
              your latest smart card products.
            </span>
          </div>
        </div>
      </section>
      <div className="home-content2">
        <div className="home-frame19324">
          <div className="home-frame61">
            <div className="home-frame281">
              <div className="home-search">
                <div className="home-vuesaxboldsearchnormal">
                  <div className="home-searchnormal">
                    <img
                      alt="VectorI998"
                      src="/external/vectori998-eooo.svg"
                      className="home-vector10"
                    />
                    <img
                      alt="VectorI998"
                      src="/external/vectori998-sbg.svg"
                      className="home-vector11"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-frame781">
              <span className="home-text162 HeadingH3Bold">
                <span>Research</span>
              </span>
              <span className="home-text164">
                <span>
                  Our research phase is thorough and data-driven, ensuring that
                  every decision is backed by insights and strategic analysis.
                </span>
              </span>
            </div>
          </div>
          <div className="home-frame62">
            <div className="home-frame282">
              <div className="home-setting">
                <div className="home-vuesaxboldsetting2">
                  <div className="home-setting2">
                    <img
                      alt="VectorI998"
                      src="/external/vectori998-axfl.svg"
                      className="home-vector12"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="home-frame782">
              <span className="home-text166 HeadingH3Bold">
                <span>Development</span>
              </span>
              <span className="home-text168">
                <span>
                  Turning ideas into reality, our development process is where
                  creativity meets precision.
                </span>
              </span>
            </div>
          </div>
          <div className="home-frame63">
            <div className="home-frame283">
              <div className="home-box">
                <div className="home-vuesaxboldbox">
                  <img
                    alt="VectorI998"
                    src="/external/vectori998-12p.svg"
                    className="home-vector13"
                  />
                  <img
                    alt="VectorI998"
                    src="/external/vectori998-06vg.svg"
                    className="home-vector14"
                  />
                  <img
                    alt="VectorI998"
                    src="/external/vectori998-lzv8.svg"
                    className="home-vector15"
                  />
                </div>
              </div>
            </div>
            <div className="home-frame783">
              <span className="home-text170 HeadingH3Bold">
                <span>Produce</span>
              </span>
              <span className="home-text172">
                <span>
                  We manufacture products that meet the highest industry
                  standards, ensuring reliability and durability in every piece
                  we produce.
                </span>
              </span>
            </div>
          </div>
          <div className="home-frame64">
            <div className="home-frame284">
              <img
                alt="streamlineannoncementmegaphonesolid9984"
                src="/external/streamlineannoncementmegaphonesolid9984-6aut.svg"
                className="home-streamlineannoncementmegaphonesolid"
              />
            </div>
            <div className="home-frame784">
              <span className="home-text174 HeadingH3Bold">
                <span>Campaign</span>
              </span>
              <span className="home-text176">
                <span>
                  Strategically designed to enhance brand visibility, drive
                  engagement, and achieve measurable results, bringing your
                  vision to the forefront.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <section id="our procces" className="home-frame19325">
        <div className="home-frame19326">
          <span className="home-text178">
            <span>Our Process</span>
          </span>
          <div className="home-frame19259">
            <div className="home-frame192403">
              <span className="home-text180">Card Production</span>
              <span className="home-text181">
                <span>
                  We specialize in producing high-quality, secure chip-enabled
                  cards. Our cutting-edge production process ensures precision,
                  durability, and compliance with global standards, delivering
                  cards that exceed your expectations.
                </span>
              </span>
            </div>
            <div className="home-frame19258">
              <div className="home-frame192561">
                <div className="home-frame192562">
                  <div className="home-frame192531">
                    <div className="home-frame192541">
                      <div className="home-frame192571">
                        <div className="home-frame831">
                          <div className="home-frame681">
                            <span className="home-text183 HeadingH4Bold">
                              1
                            </span>
                          </div>
                        </div>
                        <span className="home-text184 HeadingH3Bold">
                          <span>Prepress</span>
                        </span>
                      </div>
                      <span className="home-text186">
                        <span>
                          This term used in the printing and publishing
                          industries for the processes and procedures that occur
                          between the creation of print layout and final
                          printing.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="home-frame192551">
                    <div className="home-frame192542">
                      <div className="home-frame192572">
                        <div className="home-frame832">
                          <div className="home-frame682">
                            <span className="home-text188 HeadingH4Bold">
                              2
                            </span>
                          </div>
                        </div>
                        <span className="home-text189 HeadingH3Bold">
                          <span>Sheet Printing</span>
                        </span>
                      </div>
                      <span className="home-text191">
                        <span>
                          Before card producing, the front and back side layers
                          have to be printed with specific layout
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  alt="Rectangle74231008"
                  src="/external/rectangle74231008-o8m5-400h-1500w.png"
                  className="home-rectangle7423"
                />
                <div className="home-frame192573">
                  <div className="home-frame192532">
                    <div className="home-frame192543">
                      <div className="home-frame192574">
                        <div className="home-frame833">
                          <div className="home-frame683">
                            <span className="home-text193 HeadingH4Bold">
                              3
                            </span>
                          </div>
                        </div>
                        <span className="home-text194 HeadingH3Bold">
                          <span>Sheet Collating</span>
                        </span>
                      </div>
                      <span className="home-text196">
                        <span>
                          This step means collating and alignment of different
                          sheet layers for laminated cards.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="home-frame192552">
                    <div className="home-frame192544">
                      <div className="home-frame192575">
                        <div className="home-frame834">
                          <div className="home-frame684">
                            <span className="home-text198 HeadingH4Bold">
                              4
                            </span>
                          </div>
                        </div>
                        <span className="home-text199 HeadingH3Bold">
                          <span>Sheet Laminating</span>
                        </span>
                      </div>
                      <span className="home-text201">
                        <span>
                          After the correct alignment and prefixing of the
                          single sheet layers they have to be laminated to get a
                          stable card body
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-frame192545">
                <div className="home-frame192576">
                  <div className="home-frame835">
                    <div className="home-frame685">
                      <span className="home-text203 HeadingH4Bold">5</span>
                    </div>
                  </div>
                  <span className="home-text204 HeadingH3Bold">
                    <span>Card Punching</span>
                  </span>
                </div>
                <span className="home-text206">
                  <span>
                    This term used in the printing and publishing industries for
                    the processes and procedures that occur between the creation
                    of print layout and final printing.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="solution" className="home-solution">
        <div className="home-container3">
          <div className="home-container4">
            <div className="home-frame19268">
              <div className="home-frame19273">
                <div className="home-frame19260">
                  <span className="home-text208">
                    <span>Solution</span>
                  </span>
                  <span className="home-text210">
                    Delivering Innovative Solutions for a Wide Range of
                    Applications.
                  </span>
                </div>
                <Link to="/prepaid-payment-system" className="home-navlink1">
                  <div className="home-frame19261">
                    <div className="home-cardreceive1">
                      <div className="home-vuesaxlinearcardreceive">
                        <div className="home-cardreceive2">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-7uog.svg"
                            className="home-vector16"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-m9a.svg"
                            className="home-vector17"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-3ynh.svg"
                            className="home-vector18"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-5lc9.svg"
                            className="home-vector19"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-jno.svg"
                            className="home-vector20"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-2tui.svg"
                            className="home-vector21"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text211">
                      <span>Prepaid Payment System</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="home-frame19267">
                <Link
                  to="/anti-money-laundering-system"
                  className="home-navlink2"
                >
                  <div className="home-frame19262">
                    <div className="home-moneychange">
                      <div className="home-vuesaxlinearmoneychange">
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-wrga.svg"
                          className="home-vector22"
                        />
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-hyf.svg"
                          className="home-vector23"
                        />
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-tv7c.svg"
                          className="home-vector24"
                        />
                        <div className="home-group1">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-7bmk.svg"
                            className="home-vector25"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-grl.svg"
                            className="home-vector26"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-8es7.svg"
                            className="home-vector27"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-dskx.svg"
                            className="home-vector28"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text213">
                      <span>Anti Money Laundering System</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="home-frame19269">
                <Link to="/personatlization-solution" className="home-navlink3">
                  <div className="home-frame192641">
                    <div className="home-cardpos1">
                      <div className="home-vuesaxlinearcardpos">
                        <div className="home-cardpos2">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-yecl.svg"
                            className="home-vector29"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-kc7n.svg"
                            className="home-vector30"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-a415.svg"
                            className="home-vector31"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-59ca.svg"
                            className="home-vector32"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-9pnd.svg"
                            className="home-vector33"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text215">
                      <span>Personalisation Solution</span>
                    </span>
                  </div>
                </Link>
                <Link to="/smartcard-personalisation" className="home-navlink4">
                  <div className="home-frame192631">
                    <div className="home-cardedit1">
                      <div className="home-vuesaxlinearcardedit">
                        <div className="home-cardedit2">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-l14j.svg"
                            className="home-vector34"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-f3c.svg"
                            className="home-vector35"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-3c3.svg"
                            className="home-vector36"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-zy2i.svg"
                            className="home-vector37"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-lqo.svg"
                            className="home-vector38"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-rbit.svg"
                            className="home-vector39"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text217">
                      <span>Smart Card Personalisation</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="home-frame19270">
                <Link to="/closed-loop-payment" className="home-navlink5">
                  <div className="home-frame19266">
                    <div className="home-cardgroup">
                      <div className="home-vuesaxlineargroup">
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-v5s7.svg"
                          className="home-vector40"
                        />
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-hsmf.svg"
                          className="home-vector41"
                        />
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-ez4e.svg"
                          className="home-vector42"
                        />
                        <img
                          alt="VectorI100"
                          src="/external/vectori100-920n.svg"
                          className="home-vector43"
                        />
                        <div className="home-group2">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-6ygg.svg"
                            className="home-vector44"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-rcrt.svg"
                            className="home-vector45"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text219">
                      <span>Closed Loop Payment System</span>
                    </span>
                  </div>
                </Link>
                <Link to="/know-your-costumer" className="home-navlink6">
                  <div className="home-frame19265">
                    <div className="home-user2">
                      <div className="home-vuesaxlinearprofile2user">
                        <div className="home-profile2user">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-p7f6.svg"
                            className="home-vector46"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-8qe8a.svg"
                            className="home-vector47"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-yc4t.svg"
                            className="home-vector48"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-t08.svg"
                            className="home-vector49"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text221">
                      <span>Know Your Customer</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="home-frame19274">
                <Link to="/ai-dash-camera" className="home-navlink7">
                  <div className="home-frame192632">
                    <div className="home-video1">
                      <div className="home-vuesaxlinearvideo">
                        <div className="home-video2">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-uwx.svg"
                            className="home-vector50"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-gnws.svg"
                            className="home-vector51"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-byz9.svg"
                            className="home-vector52"
                          />
                        </div>
                      </div>
                    </div>
                    <span className="home-text223">
                      <span>AI Dash Camera</span>
                    </span>
                  </div>
                </Link>
                <Link to="/smart-fleet-management" className="home-navlink8">
                  <div className="home-frame192642">
                    <div className="home-trucktick1">
                      <div className="home-vuesaxlineartrucktick">
                        <div className="home-trucktick2">
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-eiq.svg"
                            className="home-vector53"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-8mo.svg"
                            className="home-vector54"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-0qf8.svg"
                            className="home-vector55"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-vlf.svg"
                            className="home-vector56"
                          />
                          <img
                            alt="VectorI100"
                            src="/external/vectori100-181p.svg"
                            className="home-vector57"
                          />
                          <div className="home-group3">
                            <img
                              alt="VectorI100"
                              src="/external/vectori100-uit.svg"
                              className="home-vector58"
                            />
                            <img
                              alt="VectorI100"
                              src="/external/vectori100-28no.svg"
                              className="home-vector59"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="home-text225">
                      <span>Smart Fleet Management</span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="home-frame19275">
                <Link to="/enterprise-ip-camera" className="home-navlink9">
                  <div className="home-frame192643">
                    <img
                      alt="webcam1001"
                      src="/external/webcam1001-kix.svg"
                      className="home-webcam"
                    />
                    <span className="home-text227">
                      <span>Enterprise IP Camera</span>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/external/rectangle%207425-800h-800h.png"
          loading="eager"
          className="home-image5"
        />
      </section>
      <section id="contact us" className="home-contact-us">
        <img
          alt="Rectangle74261121"
          src="/external/rectangle74261121-edg-500h.png"
          className="home-rectangle7426"
        />
        <div className="home-frame19238">
          <span className="home-text229">
            <span>Contact Us</span>
          </span>
          <div className="home-frame192404">
            <span className="home-text231 DisplayD2Semibold">
              <span>Let’s Get In Touch!</span>
            </span>
            <div className="home-frame19280">
              <div className="home-contact1 thq-section-padding">
                <div className="home-max-width thq-flex-row thq-section-max-width">
                  <form className="home-form thq-flex-column">
                    <div className="home-container5">
                      <div className="home-input1">
                        <label
                          htmlFor="contact-form-6-first-name"
                          className="home-text233 thq-body-small"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          id="contact-form-6-first-name"
                          required="true"
                          placeholder="e.g. John"
                          className="home-text-input1 thq-input"
                        />
                      </div>
                      <div className="home-input2">
                        <label
                          htmlFor="contact-form-6-last-name"
                          className="home-text234 thq-body-small"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          id="contact-form-6-last-name"
                          required="true"
                          placeholder="e.g. Doe"
                          className="thq-input home-text-input2"
                        />
                      </div>
                    </div>
                    <div className="home-container6">
                      <div className="home-input3">
                        <label
                          htmlFor="contact-form-6-email"
                          className="home-text235 thq-body-small"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="contact-form-6-email"
                          required="true"
                          placeholder="Email"
                          className="thq-input home-text-input3"
                        />
                      </div>
                      <div className="home-input4">
                        <label
                          htmlFor="contact-form-6-phone"
                          className="home-text236 thq-body-small"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-form-6-phone"
                          required="true"
                          placeholder="Phone Number"
                          className="thq-input home-text-input4"
                        />
                      </div>
                    </div>
                    <div className="home-container7">
                      <div className="home-input5">
                        <label
                          htmlFor="contact-form-6-message"
                          className="thq-body-small"
                        >
                          Message
                        </label>
                        <textarea
                          id="contact-form-6-message"
                          rows="3"
                          placeholder="Enter your message"
                          className="home-textarea thq-input"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="home-button2 thq-button-filled"
                    >
                      <span className="thq-body-small">Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="home-frame192841">
                <div className="home-frame19282">
                  <span className="home-text238 HeadingH1Semibold">
                    Have Any Questions?
                  </span>
                  <span className="home-text239">
                    Contact our friendly customer service or meet us on our HQ.
                  </span>
                </div>
                <div className="home-frame19283">
                  <span className="home-text240 HeadingH6Semibold">
                    <span>Head Office</span>
                  </span>
                  <span className="home-text242">
                    Revenue Tower Lt. 26 Jl Jenderal Sudirman kav. 52-53 Jakarta
                    Selatan 12190
                  </span>
                  <div className="home-frame1171">
                    <div className="home-vuesaxlinearcall1">
                      <div className="home-vuesaxlinearcall2">
                        <div className="home-call1">
                          <div className="home-call2">
                            <img
                              alt="VectorI112"
                              src="/external/vectori112-i2c8.svg"
                              className="home-vector60"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="home-text243">
                      <span>+62 2139728288</span>
                    </span>
                  </div>
                </div>
                <div className="home-frame192842">
                  <span className="home-text245 HeadingH6Semibold">
                    <span>Factory</span>
                  </span>
                  <span className="home-text247">
                    <span>
                      Jalan Albasia Raya, Blok K 03 No 09, Delta Silicon 8,
                      Lippo Cikarang, Kab. Bekasi, Jawa Barat 17530
                    </span>
                  </span>
                  <div className="home-frame1172">
                    <div className="home-vuesaxlinearcall3">
                      <div className="home-vuesaxlinearcall4">
                        <div className="home-call3">
                          <div className="home-call4">
                            <img
                              alt="VectorI112"
                              src="/external/vectori112-a3w9.svg"
                              className="home-vector61"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <span className="home-text249">
                      <span>+62 82121217541</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-frame105">
          <div className="home-frame1041">
            <div className="home-frame1061">
              <div className="home-frame111">
                <img
                  alt="PRIMARYLOGOASAPLAINBACKGROUND21131"
                  src="/external/primarylogoasaplainbackground21131-f6ep-200h.png"
                  className="home-primarylogoasaplainbackground2"
                />
                <div className="home-frame109">
                  <span className="home-text251">
                    <span>Home</span>
                  </span>
                  <a href="#Hero Section" className="home-text253">
                    <span>About</span>
                  </a>
                  <a href="#Our Works" className="home-text255">
                    <span>Works</span>
                  </a>
                  <a href="#our procces" className="home-text257">
                    <span>Production</span>
                  </a>
                  <a href="#solution" className="home-text259">
                    <span>Solution</span>
                  </a>
                </div>
              </div>
              <div className="home-container8">
                <img
                  alt="Rectangle111131"
                  src="/external/rectangle111131-6dds-200w.png"
                  className="home-rectangle11"
                />
                <div className="home-frame110">
                  <span className="home-text261">
                    <span>Contact</span>
                  </span>
                  <div className="home-frame116">
                    <div className="home-frame1141">
                      <span className="home-text263">
                        <span>Head Office</span>
                      </span>
                      <span className="home-text265">
                        {' '}
                        Revenue Tower Lt. 26 Jl Jenderal Sudirman kav. 52-53
                        Jakarta Selatan 12190
                      </span>
                      <div className="home-frame1173">
                        <div className="home-vuesaxlinearcall5">
                          <div className="home-vuesaxlinearcall6">
                            <div className="home-call5">
                              <div className="home-call6">
                                <img
                                  alt="VectorI113"
                                  src="/external/vectori113-fan.svg"
                                  className="home-vector62"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="home-text266">
                          <span>+62 2139728288</span>
                        </span>
                      </div>
                    </div>
                    <img
                      alt="Rectangle131131"
                      src="/external/rectangle131131-nnra-200h.png"
                      className="home-rectangle13"
                    />
                    <div className="home-frame115">
                      <span className="home-text268">
                        <span>Factory</span>
                      </span>
                      <span className="home-text270">
                        <span>
                          Jalan Albasia Raya, Blok K 03 No 09, Delta Silicon 8,
                          Lippo Cikarang, Kab. Bekasi, Jawa Barat 17530
                        </span>
                      </span>
                      <div className="home-frame1174">
                        <div className="home-vuesaxlinearcall7">
                          <div className="home-vuesaxlinearcall8">
                            <div className="home-call7">
                              <div className="home-call8">
                                <img
                                  alt="VectorI113"
                                  src="/external/vectori113-nkwm.svg"
                                  className="home-vector63"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <span className="home-text272">
                          <span>+62 82121217541</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  alt="Rectangle121131"
                  src="/external/rectangle121131-m7r-200w.png"
                  className="home-rectangle12"
                />
              </div>
              <div className="home-frame113">
                <span className="home-text274">
                  <span>Get Started</span>
                </span>
                <div className="home-frame1142">
                  <span className="home-text276 HeadingH2Semibold">
                    <span>Get The Future You Want With ASA.</span>
                  </span>
                  <a href="#contact us" className="home-button3">
                    <span className="home-text278">
                      <span>Contact Us</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-frame1062">
          <div className="home-frame1042">
            <div className="home-frame108">
              <span className="home-text280">
                Copyright ©2024 All Rights Reserved | PT Askara Satya Abadi
              </span>
              <div className="home-frame107">
                <img
                  alt="uillinkedinalt1131"
                  src="/external/uillinkedinalt1131-dpna.svg"
                  className="home-uillinkedinalt"
                />
                <img
                  alt="facebook1131"
                  src="/external/facebook1131-r22.svg"
                  className="home-facebook"
                />
                <img
                  alt="instagram1131"
                  src="/external/instagram1131-ntja.svg"
                  className="home-instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
