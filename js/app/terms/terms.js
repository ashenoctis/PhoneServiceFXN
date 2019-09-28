import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';

const fb = require("../imgs/Facebook_Color hover.png");
const insta = require("../imgs/Instagram_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");
const youtube = require("../imgs/Youtube_Color hover.png");



export class  Terms extends Component {
  componentDidMount() {

        $('.eview').hide()
        $('.mview').hide()
    }
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <Container>
            <br />
            <br />

            <h1 className="termsheader pageheading"><strong>Terms of Service</strong></h1>
            <p ><span >By using our Services, you are agreeing to these terms. Please read them carefully. Our Services are very diverse, so sometimes additional terms or product requirements (including age requirements) may apply. Additional terms will be available with the relevant Services, and those additional terms become part of your agreement with us if you use those Services.</span></p>
            <p ><span >Access to and use of the Website/App and availing of the mobile phone, tablet, and other Devices repair services available through this Website/App/Physical  or any other medium (collectively, the “</span><b>Services</b><span >” or "<strong>Repairs"</strong>) are subject to the following terms, conditions and notices (the “</span><b>Terms</b><span >”). By using the Services, you are agreeing to all of the Terms, as may be updated by us from time to time.</span></p>
            <p ><span >Because these Terms are a legal contract between you, the Website and ServiceMonk Technologies Private Limited (collectively, “</span><b>iService</b><span >”), it is important that you review the Terms carefully before accessing or participating or availling of our Services. These Terms are not intended to alter in any way or limit the terms or conditions of any other agreement that you may have with iService, including without limitation the privacy policy (“</span><b>Privacy Policy</b><span >”).</span></p>

            <ol className="terms">
              <li ><b>General</b></li>
              <li ><b>iService Obligation</b></li>
              <li ><b>Repairs</b></li>
              <li ><strong>Refund Policy</strong></li>
              <li ><b>Privacy &amp; Security</b></li>
              <li ><b>Warranty</b></li>
              <li ><b>Liability</b></li>
              <li ><b>Arbitration</b></li>
              <li ><b>Governing Law</b></li>
              <li ><b>Miscellaneous Provisions</b></li>
            </ol>
            <br />
            <br />
            <ol  start="1" className="termsheader">
              <li>
                <h3 >GENERAL</h3>
              </li>
            </ol>

            <p ><span >1.1. We may change the Terms or modify any features of the Website/App at any time at our sole discretion. The most current version of the Terms can be viewed by clicking on the “Terms of Service” section on the Website/App. If you continue to use the Website/App and the Services provided through them after changes are posted, you will be deemed to have accepted the change.</span></p>
            <p ><span >1.2. These Terms shall come into force from the date your device (“Device”) comes into the possession of our representative(s) and shall continue until we have repaired or otherwise returned your Device, and received any payment due from you, whichever is later.</span></p>


            <ol  start="2" className="termsheader">
              <li>
                <h3 >ISERVICE OBLIGATIONS</h3>
              </li>
            </ol>
            <p ><span >2.1. We shall make all commercially reasonable efforts to repair the Device subject to the availability of any parts required and/or the terms of any relevant guarantee or warranty, using reasonable care and skill.</span></p>
            <p ><span >2.2. We shall provide you with a time estimate for completion of the Service. This may however be only an estimate, and does not form a binding obligation on iService under these Terms.</span></p>
            <p ><span >2.3. If we are unable to complete the Service for any reason, or we estimate that completion of the Services will result in further costs payable by you, we shall notify you within reasonable time.</span></p>
            <p ><span >2.4. If a certain spare part is not available with iService then we shall try to procure the part for you with you else the Device shall be returned to you without any repair.</span></p>
            <p ><span >2.5. You shall receive a call/SMS/email from an iService representative informing you about the completion status of the Device, following which you are requested to collect your Device within thirty (30) days of such intimation. iService will not be liable for any Devices post the expiry of this period. Devices not collected within a thirty (30) day period from the date of intimation from iService shall be disposed off or scrapped or sold off in order to recover our cost of repairs. We will also make our best efforts to offer delivery or other modes to return the Device back to you in case you are unable to physically collect the device. You can also chose to send a representative to collect the device in such cases by informing us via writing or in electornic form about the same. </span></p>
            <p ><span >2.6. You may place a request for pick-up of your Device through the Website/App. The Device shall be picked up and delivered at the same address provided by you. The acknowledgement provided to you at the same of handing over the Device to our representative is required for all pick-ups, as proof of receipt. An additonal job sheet or service document may be provided to you in an electronic form as well.</span></p>
            <p ><span >2.7. iService may provide a fixed warranty period with respect to certain/all parts of the Device, as indicated at the time of return of the Device to you. If the event the Device does not function in a manner reasonably expected from devices featuring similar specifications, iService shall promptly remedy them at no additional expense. If we are unable to repair your Equipment, no fault is found on your Equipment or you do not accept our estimate, we will return your Equipment to you unrepaired and we reserve the right to charge you an inspection fee in accordance with our standard charges This warranty excludes faults relating to physical or accidental damage or taking apart the Device. If the Device has been opened up, repaired or otherwise been attended to by a third party after it has been repaired by iService, the warranty on your Device is void. If your device is or was previously liquid damaged or had come in contact with liquid of any kind, there is no warranty from iService. No software-related repairs or parts which are electronically non-functional will be covered by the warranty provided by iService.</span></p>
            <p ><span >2.8. In certain circumstances, iService may send your Device to another repair centre and sub-contract the repair work to a third party.</span></p>
            <p >2.9 In case of Doorstep repair service or Onsite repair service which is carried out at the address of the customer, the customer is liable to pay a minimum service charge. You also understand that not all issues are solvable onsite in which case our personnel may collect the device and bring it back to our of our service centre/hub/workshop or partner for repairs.</p>

            <ol  start="3" className="termsheader">
              <li>
                <h3 >REPAIRS</h3>
              </li>
            </ol>
            <p ><span >3.1. Where repair is to be carried out under a relevant guarantee or warranty, you shall be required to provide sufficient proof of such guarantee or warranty.</span></p>
            <p ><span >3.2. If the nature of the repair is not covered by a guarantee or warranty, or falls outside the terms of the warranty or guarantee claimed by you, any such repair to these Device, or part(s) thereof, shall be chargeable at standard rates. We shall notify you of any such charge prior to undertaking any work. In exceptional circumstances where the cost of repair of the Device cannot be determined before, you shall be notified on the cost of repair after the completion of the repair.</span></p>
            <p ><span >3.3. If iService is unable to repair the Device, or no fault is found on in the Device, the required spare part is unavailable, or the fee estimate or additional costs quoted are not accepted by you, your Device shall be returned to you unrepaired, and iService reserves the right to charge you minimum service fee in accordance with our standard charges.</span></p>
            <p ><span >3.4. iService conducts testing both before and after repair to identify any additional faults with your device. We will notify you of any faults, or additional repairs that may be required and will request your approval before proceeding. iService shall not be liable if additional faults are identified as a result of the repair process itself.</span></p>
            <p ><span >3.5. You are requried to check the device and its functionalities on collecting the device back from our service centre or on delivery of the device back to you. If there is any issue or problem which is present or which was not rectified, please bring it to our notice via call or email or in person within 72 hours of return of the device to you. If notified within this period, we shall rectify the same without any additional charges provided the problem or issue reported with the Device was not a pre-exisitng one nor was it a problem or issue which was already highlighted to you or any of your representatives during our repair process. For problems reported which You had earlier denied repair for and now would like to solve, iService would you on the cost and time requried to solve the same which may be an additon to any time or cost previously notified. If no problem is highlighted within this time period, it is agreed by iService and You that all issues are solved and the Device is returned to you in a satisfactory conditon.</span></p>
            <p ><span >3.6. iService shall not be liable for any additional problems which arise or are brought to our notice after 72 hours from the date of returning the device to You or any of your representatives. Any such problems will be treated as new problems and service or repairs for such problems with the Device may be charged for additonally.</span></p>
            <p ><span >3.7. For all Devices given to us for repairs which are in a condition wherein the functionalities of the Device cannot be tested, which may include but not limited to not powering on, dead device, touch screen not responsive, not booting up, no display, not charging and more; iService shall not be liable for any faults known or found during repairs or diagnosis since we would not be able to complete our pre repair test. All such faults found shall be intimated to You in reasonable time during the repair process along with the solution or costs if any.</span></p>
            <p ><span >3.8. In case of repairs where You or any of your representatives approves for a Motherboard or Chip Level or L3 or L4 or Circuit or IC related repair, You understand that there is a risk of the device ceasing to function altogether since repairs of such nature are very risky. We shall make best efforts to avoid the same but in such repairs, iService shall not be liable for any loss of the device's functionality, parts or data of or in the Device or any loss to You in any kind as a result of the same. For repairs of such nature, a minimum service charge may apply since there is a cost of consumables, logistics and labour which You agree to pay regardess if the Repair is successful or not. </span></p>

            <ol  start="4" className="termsheader">
              <li>
                <h3 >REFUND POLICY</h3>
              </li>
            </ol>
            <p dir="auto" >4.1. All refunds are at the discretion of company.</p>
            <p dir="auto" >4.2. Refund requests must be submitted <span className="m_-8837511640300996989gmail-aBn"><span className="m_-8837511640300996989gmail-aQJ"><span className="aBn"  data-term="goog_487057956"><span className="aQJ">within 7 days</span></span></span></span> of the purchase. Buyer has to give written consent for refund via writing or electronic form or communication. Post the 7 day period, refund requests cannot be made and will be given in form of credit.</p>
            <p dir="auto" >4.3. No cash refunds even if payment made in cash originally. Refund will be made via bank transfer or electronically only.</p>
            <p dir="auto" >4.4. Refund will be made in name of original buyer only.</p>
            <p dir="auto" >4.5. Refund process will be initiated after approved internally.</p>
            <p dir="auto" >4.6. Refund for parts, which are still in working condition but have been used for more than a week will be not entertained as we will not be able to sell those as new parts.</p>
            <p dir="auto" >4.7. No refund of minimum/diagonasis service charges paid.</p>
            <p dir="auto" >4.8. Refunds may take 7-10 business working days from date of internal approval.</p>
            <p dir="auto" >4.9. In case of any other issues which are not covered in the policy, please write in to <a href="mailto:contact@iservice.co.in" target="_blank" rel="noreferrer">contact@iservice.co.in</a></p>
            


            <ol  start="5" className="termsheader">
              <li>
                <h3 >Privacy & Security</h3>
              </li>
            </ol>
            <p ><span >5.1. You understand that by using the Website you consent to the collection, use and disclosure of your personally identifiable information and aggregate data as set forth in our Privacy Policy, and to have your personally identifiable information collected, used, processed and transferred to such service providers or affiliates as detailed under the thereunder.</span></p>
            <p ><span >5.2. In order to use the Services, you are required to complete an application providing various information about yourself including your name, email address and other personal information. You agree that any information you provide to iService will always be accurate, correct and up to date. You shall not impersonate someone else or provide account information, an email address or any other information that is not your own.</span></p>
            <p ><span >5.3. If you have made use of the Website/App or used our Services, we may occasionally update you on our latest services, news and special offers, and contact you for feedback via e-mail, post &amp; telephone. We may send you marketing and promotional material in the form of emails or text messages. If you do not wish to continue to receive marketing from us and/or selected third parties you may opt-out of the same by informing us.</span></p>
            <p ><span >5.4. You understand that iService cannot guarantee that unauthorized third parties will never be able to defeat our security measures or use your personal information for improper purposes. You acknowledge that you provide your personal information at your own risk.</span></p>

            <ol  start="6" className="termsheader">
              <li>
                <h3 >WARRANTY</h3>
              </li>
            </ol>
            <p ><span >THE WEBSITE IS PROVIDED ON AN “AS IS” BASIS, AND USE OF THE WEBSITE IS AT THE USER’S RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE IS PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM THIS WEBSITE WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. WITHOUT LIMITING THE FOREGOING, ISERVICE, ITS SUBSIDIARIES, ITS AFFILIATES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT FOUND ON THE WEBSITE IS ACCURATE, RELIABLE OR CORRECT; THAT THE WEBSITE WILL MEET YOUR REQUIREMENTS; THAT THE WEBSITE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE WEBSITE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</span></p>


            <ol  start="7" className="termsheader">
              <li>
                <h3 >LIABILITY</h3>
              </li>
            </ol>
        
            <p ><span >7.1. iService’s sole liability (and your sole and exclusive remedy) for failure to perform the Services in all material respects in accordance with these Terms, shall be, (i) supplying the Services again in order to rectify any functioning error caused, or left uncorrected by iService, or (ii) where damage has been caused to the Device beyond repair by iService in an attempt to repair the Device, iService shall not be liable for a replacement device or device of fair or equal market value. This remedy shall be available to you only where a certain warranty period has been provided by iService with respect to the Device as listed under iService Obligations.</span></p>
            <p ><span >7.2. You are required to take a backup of all data on your Device prior to handing it over for Service, and iService shall not be held responsible for any loss of data.</span></p>
            <p ><span >7.3. In no circumstance shall iService be liable to you for any indirect, special or consequential loss arising out of or in connection with these Terms, including any loss of business, revenue, profits, anticipated savings, goodwill or any other indirect or consequential loss or damage howsoever arising.</span></p>
            <p ><span >7.4. iService shall not be liable for any claim arising under these Terms unless you provide us written notice of your claim within seven (72) hours subsequent to the Device being collected from iService after repair.</span></p>


            <ol  start="8" className="termsheader">
              <li>
                <h3 > ARBITRATION</h3>
              </li>
            </ol>


            <p><span>8.1 In the case of any dispute or claim arising out of or in connection with or relating to this Agreement, termination or invalidity hereof, the Parties shall attempt to first resolve such dispute or claim through discussions among the Parties.</span></p>

            <p><span>8.2 If the disputre is no resolved through such discussions within thirty (30) days after one entity has served a written notice on the other entity requesting the commencement of discussions, the dispute or claim shall be finally settled by arbitration, without recourse to the ordinary courts of law, in accordance with the Arbitration and Conciliation Act, 1996, as in force at the time of the dispute, which shall be deemed to be a part of this Agreement by reference.</span></p>

            <p><span>8.3 For the purpse of such arbitration, there shall be three (3) arbitrators (the "Arbitration Board"). iService shall jointly appoint one arbitrator and you shall be entitled to jointly appoint one arbitrator, and the two arbitrators shall then jointly appoint a third arbitrator, who shall serve as the chairman of the Arbitration Board.</span></p>

            <p><span>8.4 All Arbitration proceedings shall be conducted in the English language and the place of arbitration shall be in Bangalore.</span></p>

            <p><span>8.5. Each Party shall co-operate in good faith to expedite (to the maximum extent practicable) the conduct of any arbitral proceedings commenced under the Agreement.</span></p>

            <p><span>8.6. Except as may be otherwise determined by the Arbitration Board: (a) each disputing Party shall pay its own fees, disbursements and other charges of its counsel and the arbitrators nominated by it, and (b) the costs and expenses of the arbitration, including, the fees of the third arbitrator on the Arbitration Board, shall be borne equally by each Part to the dispute or claim.</span></p>

            <p><span>8.7. The Arbitration Board shall have the power to award interest on any sum awarded pursuant to the arbitration proceedings and such sum shall carry interest, if awarded, until the actual payment of such amounts. </span></p>

            <p><span>8.8. Any award made by the Arbitrator shall be final and binding on each of the Parties.</span></p>
              

            <ol  start="9" className="termsheader">
              <li>
                <h3 >GOVERNING LAW</h3>
              </li>
            </ol>

           
            <p ><span >These Terms shall be governed by the laws of India, and the courts of Bangalore shall have exclusive jurisdiction with respect to any dispute arising hereunder.</span></p>


            <ol  start="10" className="termsheader">
              <li>
                <h3 > MISCELLANEOUS PROVISIONS</h3>
              </li>
            </ol>
            <p ><span >10.1. Survival: In the event of termination or expiration of these Terms for any reason, any provisions of these Terms that by their nature should survive termination of these Terms will survive termination of these Terms, unless contrary to the pertinent provisions herein stated.</span></p>
            <p ><span >10.2. Severability: If any term or provision in these Terms is held to be either illegal or unenforceable, in whole or in part, under any enactment or rule of law, such term or provision or part shall to that extent be deemed not to form part of the Terms, but the validity and enforceability of the remainder of the Terms shall not be affected.</span></p>
            <p ><span >10.3. Unenforceability: If any provision of these Terms or any word, phrase, clause, sentence, or other portion thereof should be held to be unenforceable or invalid for any reason, then provided that the essential consideration for entering into these Terms on the part of any Party is not unreasonably impaired, such provision or portion thereof shall be modified or deleted in such manner as to render the Terms as modified legal and enforceable to the maximum extent permitted under applicable laws.</span></p>
            <p ><span >10.4. No Waiver: No delay or omission by either Party hereto to exercise any right or power occurring upon any noncompliance or default by the other party with respect to any of the terms of the Terms shall impair any such right or power or be construed to be a waiver thereof. The terms and conditions of the Terms may be waived or amended only in writing or mutual agreement of the Parties. A waiver by either of the Parties hereto of any of the covenants, conditions, or agreements to be performed by the other shall not be construed to be a waiver of any succeeding breach thereof or of any covenant, condition, or agreement herein contained (whether or not the provision is similar).</span></p>
            <p ><span >10.5. Notices: Any notice required or permitted to be given to iService hereunder shall be in writing and sent or transmitted by (i) registered or certified mail; (ii) hand-delivery; (iii) email; or (iv) internationally recognized courier service, provided its receipt is acknowledged and, dispatched or sent or transmitted to the address specified iservice.</span></p>
            <p ><span >All notice required to be given under these Terms shall be addressed to:</span></p>
            <p ><span >ServiceMonk Technologies Pvt Ltd.</span></p>
            <p ><span >No. 1054 3rd floor 7th Main Koramangala, Bangalore – 560034, Karnataka, India</span></p>
            <p ><span >or</span></p>
            <p ><span >contact@iservice.co.in</span></p>
          </Container>
        </div>
      </MuiThemeProvider>
    );
  }
}
