import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';


const fb = require("../imgs/Facebook_Color hover.png");
const insta = require("../imgs/Instagram_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");
const youtube = require("../imgs/Youtube_Color hover.png");

    


export class  Privacy extends Component {
    componentDidMount() {

        $('.eview').hide()
        $('.mview').hide()
    }

  render() {
    const meta = {
      title: 'Terms of Service | iService',
      description: 'Are you getting your smartphone, tablet or laptop serviced from iService? Read our terms of services here including refund policy and warranty provisions.',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: ''
        }
      }
    }

    return (
    <div>
      <DocumentMeta {...meta} />
      <MuiThemeProvider>
        <div>
        <Container>
            <br />
            <br />
            <h1 className="termsheader pageheading"><strong>Privacy Policy</strong></h1>
            <p ><span >When you get your device fixed with us, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.</span></p>
            <p ><span >This policy explains our privacy practices for www.iService.co.in (the “Website) and the mobile application (“App”) and services provided by the Website (collectively, “iService”). By visiting the Website/ using the App, you (“You/Your/User”) are accepting the terms of this Privacy Policy. Any external links to other websites are clearly identifiable as such, and we are not responsible for the content or the privacy policies of these other websites.</span></p>
            <p ><span >Our Privacy Policy sets out how iService (“iService/We/Our”) collects, use, share and protect information in relation to our mobile services and any software provided on or in connection with iService services (collectively, the “Service”), and your choices about the collection and use of your information.</span></p>

            <p ><span > Collection of Personal Information Use of your Content Sharing your Data Security</span></p>

            
            <ol  start="1" className="termsheader">
              <li>
                <h3 > COLLECTION OF PERSONAL INFORMATION</h3>
              </li>
            </ol>
            <p><span>In the course of providing the Services to you, iService collects the following personal information (“User Data”):</span></p>
            <p ><span >1.1. Personal information such as your username, password, e-mail address and phone number when you register for an iService account.</span></p>
            <p ><span >1.2. If you log into iService through a social networking account, we may collect and store information about you from that social networking account, including your name, email address, gender, birthday, profile photograph, and other information associated with your social networking account. By connecting your account to social networking account, you are sharing your user name and profile picture with other users of that service and with the users of iService. In addition, we may automatically post to your social networking account certain types of activity from your use of iService. By allowing us to do so, your friends and contacts who have access to view information about your social networking account will also be able to see that you used iService and the activity you engage in on iService. Please be aware that access to this information is in large part controlled by the Privacy Settings you choose on the relevant social networking service, which may also import, use, and retain this information.</span></p>
            <p><span>
            1.3. We may automatically collect some information about your hardware devices when you access iService. For example, when you utilize our applications, we may collect your internet protocol (“IP”) address and the type of mobile device you use and your geographic location. We may combine this automatically-gathered information with other information, including personal information we have collected about you.</span></p>
            <p><span>1.4. If you establish a credit account with us to pay the fees we charge, we collect some additional information, such as a billing address, a credit/ debit card number and a credit/ debit card expiration date.</span></p>
            <p><span>1.5. If you send us personal correspondence, such as emails, we may collect such information into a file specific to you.</span></p>
            <p><span>1.6. Our site may contain links to and from the websites of our partner networks, advertisers and other third parties. If you follow a link to any of these websites, please note that they have their own privacy policies and that we do not accept any responsibility or liability for these policies. We have no control over the privacy practices or the content of any of our business partners, advertisers, sponsors, or other websites to which we provide links. As such, we are not responsible for the content or the privacy policies of those third-party websites. Please check these policies before you submit any personal data to these websites.</span></p>


            <ol  start="2" className="termsheader">
              <li>
                <h3 > USE OF YOUR CONTENT</h3>
              </li>
            </ol>
            <p><span>2.1. In order to provide a personalised browsing experience, iService may collect information from the you, and you agree that iService may use such information to improve its marketing and promotional efforts, to analyze usage, improve the content of iService, offerings, and to customise iService’s content, layout, and services, in order to improve iService and better tailor it to meet your needs.</span></p>
            <p><span>
            2.2. We use your personal information in the file we maintain about you, and other information we obtain from your current and past activities on the Website/App to: resolve disputes; troubleshoot problems; help promote safe trading; collect fees owed; measure consumer interest in the services provided by us, inform you about online and offline offers, products, services, and updates; customize your experience; detect and protect us against error, fraud and other criminal activity; enforce our Terms of Service; and as otherwise described to you at the time of collection. At times, we may look across multiple users to identify problems or resolve disputes. We may compare and review your personal information for errors, omissions and for accuracy.</span></p>
            <p><span>2.3. To extend this personalized experience, iService may track the internet protocol (“IP”) address of your device and save certain User Data on your device in the form of cookies. iService uses this data to deliver web pages to you upon request, to customize the site to your interests, to measure traffic within the Website, to measure usage of the App, and let advertisers know the geographic locations of Website’s/App’s users. You agree that we may use your User Data to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, and communications relevant to your use of the Website/App. Such portion of the User Data provided by you to iService that may be personal or sensitive in nature, will not be provided to third parties without previous consent of the user concerned. User Data of a general nature may however be revealed to external parties.</span></p>
            <p><span>
            2.4. We use or may use the data collected through cookies, log file, device identifiers, location data and clear gifs information to: (a) remember information so that you will not have to re-enter it during your visit or the next time you visit the site; (b) provide custom, personalized content and information, including advertising; (c) provide and monitor the effectiveness of our Services; (d) monitor aggregate metrics such as total number of visitors, traffic, usage, and demographic patterns on our website and our Services; (e) diagnose or fix technology problems; and (f) otherwise to plan for and enhance our service.</span></p>
            <p><span>
            2.5. We use third-party analytics tools to help us measure traffic and usage trends for the Services. These tools collect information sent by your device or our Services, including the web pages you visit, add-ons, and other information that assists us in improving the Services. We collect and use this analytics information with analytics information from other Users so that it cannot reasonably be used to identify any particular individual User.</span></p>
            <p><span>2.6. We may use third parties that we refer to as internal service providers to facilitate or outsource one or more aspects of the business, product and service operations (such as email or credit card payments) that we provide to you on the Website/App and therefore we may provide some of your personal information directly to these internal service providers. These internal service providers are subject to confidentiality agreements with us and other legal restrictions that prohibit their use of the information we provide them for any other purpose except to facilitate the specific outsourced Website/App related operation, unless you have explicitly agreed or given your prior permission to them for additional uses. If you provide additional information to an internal service provider directly, then their use of your personal information is governed by their applicable privacy policy.</span></p>
            <p><span>
            2.7. iService promises that we will not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. From time to time we may reveal general statistical information about our Website/App and visitors, such as number of visitors, number and type of goods and services purchased, etc. Your trust and confidence are our highest priority. 3. SHARING YOUR DATA</span></p>


            <ol  start="3" className="termsheader">
              <li>
                <h3 >REPAIRS</h3>
              </li>
            </ol>
            <p><span>3.1. We may share User Data and your information (including but not limited to, information from cookies, log files, device identifiers, location data, and usage data) with businesses that are legally part of the same group of companies that iService is part of, or that become part of that group (“Affiliates”). Affiliates may use this information to help provide, understand, and improve the Service (including by providing analytics) and Affiliates’ own services (including by providing you with better and more relevant experiences).</span></p>
            <p><span>3.2. We also may share your information as well as information from tools like cookies, log files, and device identifiers and location data, with third-party organizations that help us provide the Services to you. Our service providers will be given access to your information as is reasonably necessary to provide the Services under reasonable confidentiality terms.</span></p>
            <p><span>3.3. We may remove parts of data that can identify you and share anonymized data with other parties. We may also combine your information with other information in a way that it is no longer associated with you and share that aggregated information.</span></p>
            <p><span>
            3.4. To select third parties for direct marketing purposes, where you have chosen public settings. You may choose upfront to not share your personal information with these third parties for the third parties’ direct marketing purposes, and may also opt out from such sharing at any time afterward at no cost.</span></p>
            <p><span>3.5. iService may share sensitive your personal information with any third party without obtaining your prior consent in the following limited circumstances:</span></p>
            <p><span>
            3.5.1. When it is requested or required by law or by any court or governmental agency or authority to disclose, for the purpose of verification of identity, or for the prevention, detection, investigation including cyber incidents, or for prosecution and punishment of offences. These disclosures are made in good faith and belief that such disclosure is reasonably necessary for enforcing the Terms and Conditions, this Privacy Policy, or for complying with the applicable laws and regulations.</span></p>
            <p><span>3.5.2. iService proposes to share such information within its group companies and officers and employees of such group companies for the purpose of processing personal information on its behalf. iService also ensures that the recipients of such information agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures.</span></p>
            <p><span>
            3.5.3. In the event of a sale of all or part of the business of iService, or a sale or transfer of assets, or merger or business transfer, or in the event of bankruptcy, iService may share your personally identifying information to one or more third parties as part of such transaction.</span></p>


            <ol  start="4" className="termsheader">
              <li>
                <h3> SECURITY</h3>
              </li>
            </ol>
            <p><span>4.1. The security of your personal information is important to us. Your iService account information is protected by a password. It is important that you protect against unauthorised access of your account and information by choosing your password carefully, and keeping your password and computer secure by signing out after using our services</span></p>
            <p><span>
            4.2. We have implemented procedures to help protect the information that you provide to us. However, no method of transmitting or storing electronic data is ever completely secure, and we cannot guarantee that such information will never be accessed, used, or released in a manner that is inconsistent with this policy. We expressly disclaim any representation or warranty, whether express or implied, with respect to ensuring, guaranteeing, or otherwise offering any definitive promise of security in connection with your Information. YOU ARE SOLELY RESPONSIBLE FOR MAINTAINING THE SECRECY OF YOUR ACCOUNT INFORMATION AT ALL TIMES.</span></p>
            <p><span>
            4.3. You shall be solely responsible for all activities and transmission performed by you through your iService ID. iService assumes no responsibility or liability for their improper use of information relating to such usage of credit cards and/or debit cards by you, whether online or off-line.</span></p>
            <p><span>
            4.4. In compliance with Information Technology Act, 2000 and rules made there under, the name and contact details of the Grievance Officer are provided below:</span></p>

              

            <ul className="termsheader">
              <li>
                <h3> Grievance Officer:</h3>
              </li>
            </ul>
            <p><span>ServiceMonk Technologies No. 1054 3rd floor 3rd Block Koramangala, Bangalore – 560034, Karnataka, India oradmin@iservice.co.in</span></p>
            <p>iService may change or amend this Privacy Policy from time to time to incorporate necessary future changes. iService’s use of User Data shall be in adherence with consistent with the provisions of the relevant privacy policy under which the information was collected, regardless of new or conflicting provisions in an updated Privacy Policy</p>
            <br />

          </Container>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
