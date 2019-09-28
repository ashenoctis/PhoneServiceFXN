
               
import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {NavLink} from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Container fluid className="footer footer-container">

            <Row className="footer-top">
              <Col sm={12} md={12}>

                <Row>
                  <center>
                    <a href="/become-a-partner" className="footer-top-link">
                  <center>
                      Become an iService Partner
                  </center>
                    </a>
                  </center>

                </Row>
              </Col>
            </Row>
            <Row>
            <Col sm={8} md={12} lg={2} />
            <Col sm={8} md={3}>
                    <Row>
                      <Col sm={12} xs={12}>
                          <p className="vertical-dashed-line-content">
                            
                            <ul>
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/Apple/Mobile-Phone/" >iPhone Repair</a>
                              </li>
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/Apple/Laptop-Desktop/" >MacBook Repair</a>
                              </li>
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/Apple/Tablet-Computer/" >iPad Repair</a>
                              </li >
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/OnePlus/Mobile-Phone/" >OnePlus Repair</a>
                              </li>
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/Xiaomi/Mobile-Phone/" >Xiaomi Repair</a>
                              </li>
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/Motorola/Mobile-Phone/" >Motorola Repair</a>
                              </li>
                              <li className="footerlist">
                                <a className="footer-bot-link" href="/devices/" >Other Brands</a>
                              </li>
                            </ul>
                          </p>
                      </Col>
                    </Row>
                  </Col>

            <Col sm={8} md={3}>
                    <Row>
                      <Col sm={12} xs={12}>
                          <p className="vertical-dashed-line-content">
                            <ul>
                      <li className="footerlist">
                       <a target="_blank" href="http://blog.iservice.co.in/" className="footer-bot-link">
                          Blog
                        </a>
                      </li>
                      <li className="footerlist">
                        <a href="/about" className="footer-bot-link">
                          About Us 
                        </a>
                      </li>
                      <li className="footerlist">
                        <a href="/contact-us" className="footer-bot-link">
                          Contact Us
                        </a>
                      </li>
                      <li className="footerlist">
                        <a href="/privacy-policy" className="footer-bot-link">
                          Privacy Policy
                        </a>
                      </li >
                     <li className="footerlist">
                        <a href="/terms-of-service" className="footer-bot-link">
                          Terms of Service 
                        </a>
                      </li>
                      <li className="footerlist">
                        <a href="/buy-cable-protectors" className="footer-bot-link">
                          Buy Cable Protectors
                        </a>
                      </li>
                    </ul>
                          </p>
                      </Col>
                    </Row>
                  </Col>

                 <Col sm={8} md={3}>
                    <Row>
                      <Col sm={12} xs={12}>
                          <p className="vertical-dashed-line-content">
                            <ul>
                            <li className="footerlist">
                             <a href="/Kormangala/Apple/Mobile-Phone/iPhone/" className="footer-bot-link">
                                iPhone Repair - Kormangala
                              </a>
                            </li>
                            <li className="footerlist">
                              <a href="/Marathahalli/Apple/Mobile-Phone/iPhone/" className="footer-bot-link">
                                iPhone Repair - Marathahalli
                              </a>
                            </li>
                            <li className="footerlist">
                              <a href="/RMV/Apple/Mobile-Phone/iPhone/" className="footer-bot-link">
                                iPhone Repair - RMV
                              </a>
                            </li>

                            <li className="footerlist">
                              <a href="/Jayanagar/Apple/Mobile-Phone/iPhone/" className="footer-bot-link">
                                iPhone Repair - Jayanagar
                              </a>
                            </li>




                            <li className="footerlist">
                             <a href="/Kormangala/Apple/Tablet-Computer/iPad/" className="footer-bot-link">
                                iPad Repair - Kormangala
                              </a>
                            </li>
                            <li className="footerlist">
                              <a href="/Marathahalli/Apple/Tablet-Computer/iPad/" className="footer-bot-link">
                                iPad Repair - Marathahalli
                              </a>
                            </li>
                            <li className="footerlist">
                              <a href="/RMV/Apple/Tablet-Phone/iPad/" className="footer-bot-link">
                              iPad Repair - RMV 
                              </a>
                            </li>


                            <li className="footerlist">
                              <a href="/Jayanagar/Apple/Tablet-Phone/iPad/" className="footer-bot-link">
                              iPad Repair - Jayanagar 
                              </a>
                            </li>

                            <li className="footerlist">
                             <a href="/Kormangala/Apple/Laptop-Desktop/MacBook/" className="footer-bot-link">
                                MacBook Repair - Kormangala
                              </a>
                            </li>
                            <li className="footerlist">
                              <a href="/Marathahalli/Apple/Laptop-Desktop/MacBook/" className="footer-bot-link">
                                MacBook Repair - Marathahalli
                              </a>
                            </li>
                            <li className="footerlist">
                              <a href="/RMV/Apple/Laptop-Desktop/MacBook/" className="footer-bot-link">
                                MacBook Repair - RMV
                              </a>
                            </li>


                            <li className="footerlist">
                              <a href="/Jayanagar/Apple/Laptop-Desktop/MacBook/" className="footer-bot-link">
                                MacBook Repair - Jayanagar
                              </a>
                            </li>
                          </ul>
                          </p>
                      </Col>
                    </Row>
                  </Col>

                </Row>




                


            <Row className="footer-bottom-copyright">
              <Col sm={2} xs={2} lg={2} />
              <Col sm={12} xs={12} lg={8} >
                <p className="footer-copyright">
                  <center>
                    iService is India’s most trusted smartphone service network providing services in Bangalore and Delhi. Contact us for Apple Repair, iPhone Repair, Samsung Repair, Nexus Repair, Motorola Repair, OnePlus Repair, Mi by Xiaomi Repair. iService provides Display Repair, Glass Replacement, Touchscreen Repair, Speaker Repair, Microphone Repair, Network Repair, Water Damage Repair, Charging Repair, Battery Replacement, Software Reapir. We repair models such as iPhone 7,iPhone 7 Plus,iPhone 6s,iPhone 6s+,iPhone 6,iPhone 6+,iPhone 5s,iPhone 5c,iPhone 5,iPhone 4s,iPhone 4,iPhone 8, iPhone 8 Plus, iPhone X, iPhone Xs, iPhone XI, iPhone Xs Max, Macbook Air, Macbook Pro Retina, MacBook, iMac, Mac Mini, iMac, iPad, Samsung S6, Samsung S7, Samsung s5, Samsung Note 2/3/4, OnePlus One, OnePlus 2, OnePlus 3 and OnePlus 3T, Oneplus 4, Oneplus 5, Oneplus 6, Oneplus 7, Nexus 4, Nexus 5, Nexus 6, Mi 3, Mi4, Mi4i, Redmi Note, POCO, Redmi K20, Mi Mix, Mi A3, Asus Zenfone 5, Le 1s, Le Max and all other models.
                  </center>
                </p>
              </Col>
            </Row>


            <Row className="footer-bottom-copyright">
              <Col sm={2} xs={2} lg={2} />
              <Col sm={12} xs={12} lg={8} >
                <p className="footer-copyright">
                  <center>
                    Copyright © 2019 iService is an Independent Repair Shop and Service Center and is in no way affiliated with or Authorised by Apple, OnePlus, Xiaomi, Samsung or any other brand unless explicitly specified. But we love them and their products. All product, brand and company names are trademarks of their respective holders.
                  </center>
                </p>
              </Col>
            </Row>

          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}
