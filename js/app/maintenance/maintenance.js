import React, {Component} from 'react';
import {Container, Row, Col} from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import DocumentMeta from 'react-document-meta';


const fb = require("../imgs/Facebook_Color hover.png");
const insta = require("../imgs/Instagram_Color hover.png");
const twitter = require("../imgs/Twitter_Color hover.png");
const youtube = require("../imgs/Youtube_Color hover.png");

    


export class  Maintenance extends Component {
    componentDidMount() {

        $('.eview').hide()
        $('.mview').hide()
    }

  render() {
    const meta = {
      title: 'Maintenance Contract | iService',
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
            <center><h1 className="termsheader pageheading"><center>iService Maintenance Contract</center></h1></center>
            <center><h3 className="termsheader "><center>Terms & Conditions</center></h3></center>

            <p ><span >This Maintenance Contract ("<strong>Contract</strong>") has been entered into by and between ServiceMart Technologies Private Limited (<strong>iService</strong>) , a company incorporated under the Companies Act,  2013 and having its registered office at 1054 2rd Floor 80ft Road 3rd Block Koramangala Bangalore - 560034 and the client mentioned in the physical/digital form duly signed by the client (<strong>Client</strong>). This Contract shall be fully binding on the Client.</span></p>
            <p ><span >iService and the Client are collectively referred to as the "<strong>Parties</strong>" and individually as a "<strong>Party</strong>".
</span></p>



            
            <ol  start="1" className="termsheader">
              <li>
                <h4 >Term</h4>
              </li>
            </ol>
            <p><span> 1.1. This Contract shall become effective from the date iService, at its sole discretion, accepts after due verification, the application of the Client attached as part of the form and/or email confirmation and inspects and approves the Product(s)/Equipment(s)/Device(s), and shall continue to remain in force for a period as applicable, unless terminated earlier as per terms and conditions mentioned herein. For the purposes of this Contract, Product(s)/Equipment(s)/Device(s) shall mean any electronic, electrical, data processing, telecommunication, fixed or any other asset covered by iService maintenance Plan as detailed in Annexure 1.
</span></p>
            <p ><span >1.2. This Contract and the terms and conditions herein shall continue to remain in force for a period as applicable, unless terminated earlier as per terms and conditions mentioned herein (“<strong>Agreement Term</strong>”).
</span></p>


            <ol  start="2" className="termsheader">
              <li>
                <h4 > SCOPE</h4>
              </li>
            </ol>
            <p><span>2.1. iService and Client hereby agree to provide and receive respectively, the maintenance services (<strong>Services</strong>) as detailed in Annexure 1 herewith to keep the Product(s)/Equipment(s) in proper working condition during the Term.</span></p>
            <p><span>
            2.2. If required and requested by the Client, iService may, at its sole discretion, provide Services not covered within the Scope (“<strong>Additional Services</strong>”) defined in clause 2.1 including without limitation replacement of any spare parts and provision of Services 3.1 listed in below at iService's then prevailing rates and terms. The prevailing rates and terms on the Additonal Services shall be communicated to the Client at the time iService chooses to provide additional services as mentioned in this Clause 2.2.
</span></p>
            <p><span>2.3.   All defective spare parts replaced by iService with new spare parts or spare parts equivalent to new in performance when replaced shall become property of iService and Client shall not claim any right in the same.</span></p>
            

            <ol  start="3" className="termsheader">
              <li>
                <h4 >SERVICES</h4>
              </li>
            </ol>
            <p><span>3.1. A call or job is defined as a visit to the customer to fix a problem which may occur. Maintenance on multiple Devices during the visit may be rectified during the same call. A call length is taken at a maximum of 4 hours longer and it will be termed as 2 calls for every 3 hours henceforth.
</span></p>
            <p><span>3.2. Provision of Services under this Contract are contingent upon proper use of the Product(s)/Equipment(s) by the Client and does not cover:
</span></p>
            <p  style={{marginLeft:'10px'}}><span>3.2.1 Product(s)/Equipment(s):</span></p>
            <p style={{marginLeft:'20px'}}> <span>
            3.2.1.1. which has damaged due to unusual physical or electric stress, or water/liquid seepage, rat bite/urination, or damage caused due to similar kind of circumstances;
            </span></p>

            <p style={{marginLeft:'20px'}}><span>
            3.2.1.2. serial no of which has been altered, defaced or removed;
            </span></p>

             <p style={{marginLeft:'20px'}}><span>
            3.2.1.3. Which has been modified,  altered,  adjusted or repaired/serviced by unauthorized persons;

            </span></p>


            <p style={{marginLeft:'20px'}}><span>
            3.2.1.4. which is transferred by the Client to any other person;
            </span></p>

            <p style={{marginLeft:'20px'}}><span>
            3.2.1.5. which has been damaged due to fire, looting/arson, acts of terrorism or acts of God like flood, lightning, earthquake, etc or any force majure events;
            </span></p>

            <p style={{marginLeft:'20px'}}><span>
            3.2.1.6. which has been damaged due to failure on the part of the Client to follow instructions provided by iService for use of Product(s)/Equipment(s) including without limitation provision of standard power connection and dust proof environment; 
            </span></p>

            <p style={{marginLeft:'20px'}}><span>
            3.2.1.7. which has been relocated by the Client from its original place of installation to a location which is outside the municipal limits of the town/city where service center of iService and/or its partners is located;

            </span></p>

            <p style={{marginLeft:'20px'}}><span>
            3.2.1.8. which is more than 5 years old (from date of manufacture or purchase, whichever is earlier); or

            </span></p>

             <p style={{marginLeft:'20px'}}><span>
            3.2.1.9. which is an assembled one and not of a classified manufacturer.

            </span></p>
             

         
            <p style={{marginLeft:'10px'}}><span>3.2.2. Addition or removal of accessories.:</span></p>
            <p style={{marginLeft:'10px'}}><span>3.2.3. Any damage caused to Plastic/rubber/sheet metal parts, like main liner crack, doors, bulb, cabinet, antenna, interconnecting cable, rubber pads, stabilizer, filters, grills, casing, tray etc.
</span></p>
            <p style={{marginLeft:'10px'}}><span>3.2.4. Consumables, including, but not limited to, magnetic media, a/c adapters, batteries and tablet PC pens stylus, accessories purchased in addition to the base unit, such as docking stations and port replicators, storage/transferring/ replicating data from faulty hardware to the swapped hardware, maintenance kits, non-Standard devices, add-ons cards/devices. any kind of software support or installations, addition/alteration/modifications to Product(s)/Equipment(s)/ software/hardware, repair of cracked glass panel on monitor, damage caused by too much pressure exerted on the Display/Panel or software in the system, irrespective of the nature of the software i.e application/operating system in case of IT Product(s)/Equipment(s)s,
</span></p>

         <p><span>3.3. The Client may choose to avail Services for damaged Product(s)/Equipment(s) specified in clause 3.2 at iService's then applicable rates and terms. The prevailing rates and terms for such damaged Product(s)/Equipment(s) shall be communicated to the Client at the time iService agrees to provide Services on those damaged Product(s)/Equipment(s).

         </span></p>

          <p><span>3.4. To avail Services, Client must present to iService, at the time of execution of this Contract, proof of purchase or proof of age of the Product or a declaration for the same in writing in the format approved/acceptable by iService.

         </span></p>


          <p><span>3.5. iService or its authorised representative shall provide Services only during normal working hours on regular working days of iService or its authorised representative.

         </span></p>

          <p><span>3.6. The Client recognises that availability and quality of Services to the Client may be adversely affected by the factors beyond the control of iService such as physical obstruction, acts of God, fire, flood, civil commotion, earthquake, war, strikes or government action or change in applicable lawfor which iService shall not be held responsible in any manner.

         </span></p>


          <p><span>3.7. iService makes no express or implied warranties whatsoever regarding the Services provided/rendered and/or effects thereof etc. and shall not be liable to the Client or any other person claiming, by, through or under the Client.
         </span></p>

          <p><span>3.8. iService may offer any Service on a complimentary basis to the Client. The complementary Services so offered by iService are at any time and without any prior notice liable to be withdrawn and/or offered on payment of charges specified by iService.
         </span></p>

          <p><span>3.9. Client is aware that iService reserves its right to assign any of its rights or obligations to any person and Client undertakes that it shall not object to the same.

         </span></p>

          <p><span>3.10.  Based on type of Product(s)/Equipment(s)Equipment, support Services shall be rendered by iService personnel either on a Carry-in basis or On-site visit basis. Clarifications on same can be had at the time of purchase of the said Contract or anytime further at helpline/website or any other medium available.

         </span></p>

          <p><span>3.11. If damage of the product is in the condition of total loss (as evaluated by brand / iService engineer ), then it will not be covered under iService maintenance Plan.
         </span></p>

          <p><span>3.12.  Aesthetic defects, which do not affect the functionality of the product are not covered under iService maintenance Plan.

         </span></p>



           <ol  start="4" className="termsheader">
              <li>
                <h4 >REPRESENTATION, RESPONSIBILITIES AND LIABILITIES OF THE CLIENT</h4>
              </li>
            </ol>
 
            <p><span>4.1. The Client hereby represents, warrants and covenants as follows:
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>4.1.1. it is validly existing under applicable laws, and it has all necessary power, authority and capacity to enter into this Contract;

            </span></p>



             <p  style={{marginLeft:'20px'}}><span>4.1.2. no notice has been received for, nor have any steps been taken by the Client for commencement of legal proceedings for its dissolution/ winding up/ insolvency/ bankruptcy/liquidation;

              </span></p>



              <p  style={{marginLeft:'20px'}}><span>4.1.3. it has adequate financial resources to successfully perform its obligations under this Contract;
            </span></p>


            <p  style={{marginLeft:'20px'}}><span>4.1.4.  the execution, delivery and performance of this Agreement in accordance with its terms shall not:
            </span></p>


            <p  style={{marginLeft:'20px'}}><span>4.1.5.  the execution, delivery and performance of this Agreement in accordance with its terms shall not:
            </span></p>

             <p  style={{marginLeft:'30px'}}><span>(a) violate or conflict with its articles or memorandum of association or its other organisational documents;

            </span></p>

              <p  style={{marginLeft:'30px'}}><span>(b) constitute a violation of any applicable laws, regulation, order, writ, judgment, injunction or decree applicable to it or any of its properties or assets, or violate any approval, undertaking or other obligation to which it is bound; or

            </span></p>

              <p  style={{marginLeft:'30px'}}><span>(c) have any judicial or administrative actions, proceedings or investigations pending or, to the best of its knowledge after due and maintenanceful inquiry, overtly threatened against it, which would have a material adverse effect on its capacity to perform its obligations under this Contract.

            </span></p>



            <p  style={{marginLeft:'20px'}}><span>4.1.6. the information furnished and/or to be furnished by it to the other Party for or in connection with this Contract is and will be true, complete and correct and not misleading in any respect.

            </span></p>


              <p><span>4.2. Client shall provide representative of iService/its representative(s) full access to the Product(s)/Equipment(s)/ passwords etc, in order to effect necessary adjustments and/or repairs.
            </span></p>


              <p><span>4.3. Client shall provide adequate storage space for spare parts, test Product(s)/Equipment(s) and adequate work space, heat, light, ventilation and electric current for use by representative of iService/its authorized representative for provision of Services at Client's location.
            </span></p>


              <p><span>4.4. In case of IT Product(s)/Equipment(s)s/electronics, Client shall:

            </span></p>


            <p  style={{marginLeft:'20px'}}><span>4.4.1. be solely responsible for the security of its proprietary and confidential information and for maintaining a procedure external to the hardware Product(s)/Equipment(s)s for reconstruction of lost, or altered files, data or programs;

            </span></p>

            <p  style={{marginLeft:'20px'}}><span>4.4.2. upon request of iService, support iService or its representatives in resolving the problem remotely by starting and executing self tests and/or other diagnostic tools and programs, providing all necessary information or performing basic remedial activities;

            </span></p>


            <p  style={{marginLeft:'20px'}}><span>4.4.3. allow iService to keep system and network diagnostic program resident on the Product(s)/Equipment(s) and provide iService login access for the exclusive purpose of performing diagnostics;

            </span></p>

            <p  style={{marginLeft:'20px'}}><span>4.4.4. be responsible to de-install all add-ons and/or accessories from the Product(s)/Equipment(s) before providing the same to iService for Services, maintain backup copy of all software and data, restore software and data on the unit after repair;

            </span></p>

            <p  style={{marginLeft:'20px'}}><span>4.4.5. be responsible for the user application software installation and insure all software is appropriately licensed;

            </span></p>

            <p  style={{marginLeft:'20px'}}><span>4.4.6. adhere to and retain all original software licenses, upgrade license agreements and license keys;

            </span></p>
             
            <p  style={{marginLeft:'20px'}}><span>4.4.7. register all complaints/requests for Services only through Service Center/Call Center at telephone numbers or web/app or other medium explicitly provided by iService;

            </span></p>
         
            <p  style={{marginLeft:'20px'}}><span>4.4.8. comply with all applicable laws, rules and regulations;

            </span></p>







            <p  style={{marginLeft:'20px'}}><span>4.4.9. indemnify and hold iService harmless against any act of omission and commission and any consequences arising thereof and defend iService from and against all claims, arising as a result of breach of this Contract;

            </span></p>


            <p  style={{marginLeft:'20px'}}><span>4.4.10. inform iService in writing of any change in the billing address. Any written communication from iService to Client shallbe deemed as served within 48 hours of posting by ordinary or electronic mail or earlier as the case may be;
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>4.4.11. return the standby/loan spare parts, if any provided by iService on or before iService returning the original set/Spares to the Client;

            </span></p>




              <p><span>4.5. The Client understands and agrees that it shall be his responsibility to be aware of the Contract and the changes therein. Ignorance, if any, shall be the total responsibility of the Client.
            </span></p>


              <p><span>4.6. The Client understands that the Services have been subscribed on his/her own name and name change in any circumstances is not permitted. Client shall not assign any right or interest or delegate any obligation arising herein to any person without iService's prior written consent. The Client is solely responsible for any unauthorised transfer/change in ownership of the Product(s)/Equipment(s).

            </span></p>

              <p><span>4.7. The Client agrees and understands that in the event of Product(s)/Equipment(s)/Device(s) being beyond economic repairable, which shall be decided solely by iService at its sole discretion, iService may buy-back the Product(s)/Equipment(s)/ Device(s) at the value calculated from the table mentioned below. It is clarified that iService is under no obligation to buy-back the Product(s)/Equipment(s)/ Device(s).

            </span></p>
            <br />
            <br />


            <table className="contract" style={{margin:'auto' ,fontSize:'10px'}}>
              <tr>
                <th style={{fontSize:'14px'}}>Age of the Product(s)/Equipment(s)/ Device(s)</th>
                <th style={{fontSize:'14px'}}>Depreciation Applicable</th>
              </tr>
              <tr>
                <td style={{fontSize:'14px'}}>Upto 90 days from the date of purchase of the Product(s)/Equipment(s)/ Device(s)</td>
                <td style={{fontSize:'14px'}}>10% of the Purchase Value*</td>
              </tr>
              <tr>
                <td style={{fontSize:'14px'}}>Between 91 days to 180 days from date of purchase of the Product(s)/Equipment(s)/ Device(s)</td>
                <td style={{fontSize:'14px'}}>25% of the Purchase Value*</td>
              </tr>
              <tr>
                <td style={{fontSize:'14px'}}>Between 181 days to 365 days from date of purchase of the Product(s)/Equipment(s)/ Device(s)</td>
                <td style={{fontSize:'14px'}}>50% of the Purchase Value*</td>
              </tr>
              <tr>
                <td style={{fontSize:'14px'}}>Between 366 days to 730 days from date of purchase of the Product(s)/Equipment(s)/ Device(s)</td>
                <td style={{fontSize:'14px'}}>75% of the Purchase Value*</td>
              </tr>
              <tr>
                <td style={{fontSize:'14px'}}>More than 730 days from date of purchase of the Product(s)/Equipment(s)/ Device(s)</td>
                <td style={{fontSize:'14px'}}>100% of the Purchase Value*</td>
              </tr>
              
            </table>


            <br />
            <br />


            <center><span>*For the purpose of this Clause, “Purchase Value” shall mean the value of the Product(s), Equipment(s), Device(s) at the date of its first purchase. For the purpose of clarity, it is clarified that it shall not cover the second hand purchase. An exception, if any, would be at the sole discretion of iService.</span></center>


              <p><span>4.7. Due to any reason, if Client gets replacement directly from brand, it is the responsibility of Client to inform iService in writing, about change in product serial number / IMEI number / Model Number. Client is required to write or send email to notify iService about this change.


            </span></p>

             <ol  start="5" className="termsheader">
              <li>
                <h4 >CHARGES AND PAYMENT</h4>
              </li>
            </ol>
 
            <p><span>5.1. Client shall make payment of all charges in advance at the time of subscribing for the Services.
            </span></p>

             <p><span>5.2. For Services to be provided by iService pursuant to clause 2.1 and repair/replacement of spare parts to be undertaken pursuant to clause 2.2, Client shall forthwith make payments towards cash receipt or invoice raised by iService or its authorized representative.

            </span></p>

             <p><span>5.3. Charges payable by the Client are exclusive of taxes, duties or levies unless expressly stated to the contrary.

            </span></p>

             <p><span>5.4. If due to any reasons the Product(s)/Equipment(s) is replaced by the original manufacturer with a Product(s)/Equipment(s) of different size/capacity/model/brand but of the same product subcategory, Client shall be responsible to make payment of differential amounts to iService for increase in the charges due to change in the Products/Equipment.
            </span></p>

             <p><span>5.5. iService shall however, not be responsible for refunding any monies to the Client if replacement of the Product(s)/Equipment(s) by the original manufacturer with a Product(s)/Equipment(s) of different size/capacity/model/brand but of the same product subcategory leads to reduction in the charges for Services.

            </span></p>

             <ol  start="6" className="termsheader">
              <li>
                <h4 >SERVICE CONDITIONS & VARIATIONS THEREOF
                </h4>
              </li>
            </ol>
 
            <p><span> Notwithstanding anything contained herein, this Contract may be changed, revised or modified by iService at any time before iService issues a written confirmation to the Client accepting the Client's application for availing Services.

            </span></p>



            <ol  start="7" className="termsheader">
              <li>
                <h4 >INTELLECTUAL PROPERTY</h4>
              </li>
            </ol>
 
            <p><span>7.1. For the purposes of this Contract, “Intellectual Property” means any and all tangible and intangible: (i) rights associated with works of authorship throughout the world, including but not limited to copyrights, neighboring rights, moral rights, source codes, underlying ideas and concepts, and mask works, and all derivative works thereof, (ii) trademark and trade name rights and similar rights, (iii) trade secret rights, (iv) patents, designs, algorithms and other industrial property rights, (v) all other intellectual, commercial and industrial property rights (of every kind and nature throughout the world and however designated) whether arising by operation of law, contract, license, or otherwise, and (vi) all registrations, initial applications, renewals, extensions, continuations, divisions or reissues thereof now or hereafter in force (including any rights in any of the foregoing). 

            </span></p>

            <p><span>7.2. The Client acknowledges that iService is the owner and proprietor of all its Intellectual Property including all Intellectual Property in relation to the Services/Additional Services and all the Intellectual Property developed by iService in relation to the Services/Additional Services shall also be owned by the Service Provider.

            </span></p>


            <p><span>7.3. Save as otherwise provided in Clause 7.2 above, iService shall retain all rights title and interest in and to its Intellectual Property and Intellectual Property developed or created by the iService or its employees, directors, officers, workmen.

            </span></p>


            <p><span>7.4. The Client hereby acknowledges that iService is the absolute owner of the Intellectual Property. This Contract shall not be deemed as any waiver of the Intellectual property of iService as regards the Intellectual Property and which shall remain its entire and full Intellectual Property. Consequently, the Client shall not (i) register in any country any intellectual property or, if available under local regulations, designs and/or intellectual property identical, or confusingly similar, to the Intellectual Property; (ii) dispute or contest the validity of the Intellectual Property or the registrations thereof, whether such registrations are now existing or hereafter obtained; or (iii) dispute or contest the exclusive ownership by iService in connection with the Intellectual Property.

            </span></p>

            <p><span>7.5. The Client shall promptly notify iService of any and all infringements, imitations, illegal use or misuse of the Intellectual Property, which come to the client’s attention. Furthermore, the Client undertakes, fully and without any reservation whatsoever, to make promptly and fully available to iService, its representatives, agents and attorneys, its assistance in connection with any matter pertaining to the protection of the Intellectual Property whether during or after the term of this Agreement. If legal action of any kind is necessary in order to protect iService and the Client’s rights under this Agreement, such legal action may be taken by iService under both the iService’s and the Client’s names. All the costs of such action shall be borne by the iService and iService shall benefit from any compensation for damages assessed on the infringing Party.

            </span></p>

            <p><span>7.6. The Client shall take every precaution to prevent the unauthorized use of the Intellectual Property. Upon termination of this Contract or the prior or earlier termination of this Contract, the Client shall immediately cease to use the software and Intellectual Property, or any part thereof, in any manner whatsoever.

            </span></p>

            <p><span>7.7. The Client shall not in any manner, either during the term, or after the termination of this Contract, use in any manner whatsoever, any name, designation, Intellectual Property, trade name, business name or corporate name which phonetically or graphically resembles or evokes the Intellectual Property or its logo or which may otherwise create or maintain confusion in the mind of the public with respect to the Intellectual Property or the Licensor's activities.
            </span></p>


            <ol  start="8" className="termsheader">
              <li>
                <h4 >INTELLECTUAL PROPERTY</h4>
              </li>
            </ol>
 
            <p><span>8.1.  For the purposes of this Agreement, “<strong>Confidential Information</strong>” means any proprietary information or any other information considered secret and confidential by any of the Parties which is disclosed at any time during or for the purpose of negotiation or implementation of this Agreement or other agreements between the Parties or any other information which could be reasonably construed to be confidential, whether or not such information is marked ‘confidential’ or ‘proprietary’ including legal, financial, technical, commercial, marketing and business related records, data, documents, reports, etc., client information, the terms of this Agreement, the details of the negotiations between the Parties and the business of the Parties.


            </span></p>

              <p><span>8.2.  Each Party shall maintain utmost confidentiality regarding the Confidential Information of the other Party that shall be divulged during the course of this Contract. Both Parties must regard and keep in strictest confidence all Confidential Information disclosed by the Company and must (a) not misuse or publish or disclose in whole or in part any such Confidential Information to any third Person or use the same for its own purpose or the purposes of any third party; (b) treat the Confidential Information with at least such standard of maintenance with which the Recipient treats its information of like nature.


            </span></p>

              <p><span>8.3.  Either Parties may disclose Confidential Information to its employees, representatives, or advisors solely on a "need to know" basis and in case of such disclosure(s) shall ensure that such persons are bound by similar non-disclosure obligations in writing, with respect to the Confidentiality Information, as both Parties are bound by this Contract.

            </span></p>

              <p><span>8.4.  In case either Parties are required to disclose Confidential Information pursuant to any law, judicial order or government regulations, they must forthwith notify each other of the required disclosure with sufficient time for the other Party, as applicable to seek relief, and must cooperate with the disclosing party in taking appropriate protective measures, and must make such disclosure in a manner that maximizes protection of the Confidential Information from further disclosure.


            </span></p>

              <p><span>8.5.  Within 10 (ten) days of the expiry or termination of this Contract, the Client shall return to the iService, all the Confidential Information stored in any medium, and acquired by the recipient. The recipient shall deliver to the Client all tangible copies of the Confidential Information, including but not limited to magnetic or electronic media containing the Confidential Information, note(s) and paper(s) containing the Confidential Information or parts thereof, and any copies of the Confidential Information (in whatever form(s)) and vice versa.

            </span></p>


            <ol  start="9" className="termsheader">
              <li>
                <h4 >TERMINATION </h4>
              </li>
            </ol>


            <p><span>9.1. This Contract shall be valid during the Agreement Term. Prior to expiry of the Agreement Term, the Parties may mutually renew this Agreement for a successive period as may be mutually agreed thereafter.


            </span></p>

             <p><span>9.2. This Contract may be terminated by iService after giving a [30 (thirty) business days] prior written notice to the Client.


            </span></p>


             <p><span>9.3. Notwithstanding anything contained herein above, iService shall be entitled to terminate or restrict the Services without any notice in any of the following events: 
            </span></p>

             <p  style={{marginLeft:'20px'}}><span>9.3.1. If the Client is in breach of the Contract and the Client does not remedy the breach within 3 (three) days of the notification by iService.
 
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>9.3.2. If the Client transfers the Product(s)/Equipment(s) to any other person. 
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>9.3.3. If the Client relocates the Product(s)/Equipment(s) to a location which is outside the municipal limits of the city /town where the service Center of iService is located.
 
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>9.3.4. If the Client is declared insolvent or bankrupt or is liquidated or if it being a firm, is dissolved.
  
            </span></p>


            <p  style={{marginLeft:'20px'}}><span>9.3.5. If a trustee or receiver is appointed to take over the assets of the Client.  
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>9.3.6. If the original manufacturer refunds the price of the Product(s)/Equipment(s) to the Client.
  
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>9.3.7. If iService at its sole discretion determines that the declaration provided by the Client in accordance with clause 3.3. above is incorrect.
 
            </span></p>

            <p  style={{marginLeft:'20px'}}><span>9.3.8.  The conditions or consequences of Force Majeure continue for such length of time that further performance of the Services would be commercially frustrated.

            </span></p>


             <p><span>9.4. Consequences of Termination

            </span></p>

             <p  style={{marginLeft:'20px'}}><span>9.4.1. Simultaneously with the expiration or termination of this Contract, (i) iService shall cease to provide all or ay kind of Service(s) under this Contract and (ii) the Client shall forthwith (without any protest or demur) pay all outstanding monies under this Contract to iService.
 
            </span></p>

             <p  style={{marginLeft:'20px'}}><span>9.4.2. In the event of termination for any reason whatsoever iService shall be entitled to recover all outstanding payments due and payable by the Client. iService shall, under no circumstances be responsible for refunding any amounts to the Client including without limitation due to termination of the Contract by the Client or due to termination by iService.
 
            </span></p>

             <p  style={{marginLeft:'20px'}}><span>9.4.3. The Client agrees and undertakes to immediately delete all the files from their server or record in relation to the Services herein, including but not limited to electronic files, application files and return the documents including but not limited to tangible copies, magnetic or electronic, note(s) and paper(s) or parts thereof, and any copies pertaining to the Services herein (in whatever form(s)). The Client further undertakes to provide a written confirmation for the same to iService in a manner acceptable or approved by iService. 
 
            </span></p>

             <p  style={{marginLeft:'20px'}}><span>9.4.4. Expiration or earlier termination of this Contract shall not affect the rights or liabilities of the Parties accrued prior to and including the date of termination or expiry.
 
            </span></p>

             <p  style={{marginLeft:'20px'}}><span>9.4.5. The following provisions of this Contract shall expressly continue in full force and effect: Charges and Payment, Confidentiality, Consequences of Termination, Non-Solicitation, Arbitration, Governing Law and Jurisdiction. 
            </span></p>


             <ol  start="10" className="termsheader">
              <li>
                <h4 >ARBITRATION </h4>
              </li>
            </ol>


            <p><span>10.1. In the case of any dispute or claim arising out of or in connection with or relating to this Contract , termination or invalidity hereof, the Parties shall attempt to first resolve such dispute or claim through discussions among the Parties. 


            </span></p>

            <p><span>10.2. If the dispute is not resolved through such discussions within thirty (30) days after one entity has served a written notice on the other entity requesting the commencement of discussions, the dispute or claim shall be finally settled by arbitration, without recourse to the ordinary courts of law, in accordance with the Arbitration and Conciliation Act, 1996, as in force at the time of the dispute, which shall be deemed to be a part of this Contract by reference.


            </span></p>



            <p><span>10.3. For the purpose of such arbitration, there shall be three (3) arbitrators (the “Arbitration Board”). The Client shall appoint one arbitrator and iService shall be entitled to appoint one arbitrator, and the two appointed arbitrators shall then jointly appoint a third arbitrator, who shall serve as the chairman of the Arbitration Board.


            </span></p>



            <p><span>10.4. All arbitration proceedings shall be conducted in the English language and the place of arbitration shall be Bangalore.


            </span></p>


            <p><span>10.5. Each Party shall co-operate in good faith to expedite (to the maximum extent practicable) the conduct of any arbitral proceedings commenced under this Contract.

            </span></p>


            <p><span>10.6. Except as may be otherwise determined by the Arbitration Board: (a) each disputing Party shall pay its own fees, disbursements and other charges of its counsel and the arbitrators nominated by it, and (b) the costs and expenses of the arbitration, including, the fees of the third arbitrator on the Arbitration Board, shall be borne equally by each disputing Party to the dispute or claim.


            </span></p>


            <p><span>10.7. The Arbitration Board shall have the power to award interest on any sum awarded pursuant to the arbitration proceedings and such sum shall carry interest, if awarded, until the actual payment of such amounts.


            </span></p>

            <p><span>10.8. Any award made by the Arbitrator shall be final and binding on each of the Parties.

            </span></p>


           <ol  start="11" className="termsheader">
              <li>
                <h4 >NON-SOLICITATION. 
               </h4>
              </li>
            </ol>


            <p><span>During the term of this Contract, and for a period of one (1) year immediately thereafter, the Client agrees not to solicit any employee or independent contractor or partner of iService on behalf of any other business enterprise, nor shall it induce any employee or independent contractor or partner associated with the each other to terminate or breach an employment, contractual or other relationship with the iService.
            </span></p>



           <ol  start="12" className="termsheader">
              <li>
                <h4 >GOVERNING LAW & JURISDICTION </h4>
              </li>
            </ol>


            <p><span>12.1. The validity, construction and performances of terms herein shall be governed by and interpreted in accordance with the laws of the Republic of India.

            </span></p>

            <p><span>12.2. The Parties hereto unconditionally and irrevocably agree to submit to the exclusive jurisdiction of the competent Courts in Bangalore with regard to any matter or dispute arising hereto or any other documents that may be executed by the Parties hereto.


            </span></p>


           <ol  start="13" className="termsheader">
              <li>
                <h4 >LIMITATION OF LIABILITY </h4>
              </li>
            </ol>


            <p><span> iService shall not be liable to the Client for any damages resulting from or related to any Services performed by iService hereunder, including, but not limited to, any loss of data or software, inability of iService to correct any errors, malfunctions and defects in the Product(s)/Equipment(s)/hardware/software or delay of iService in performing any Services hereunder. It is clarfied that in no event,iService shall be liable to the Client for any direct, indirect, special, or consequential damages or lost profits arising out of or related to Services provided by the iService under this contract, even if iService has been advised of the possibility thereof, or knew or should have known thereof. iService's liability hereunder to the Client, if any, shall in no event exceed the total of the charges paid by the Client to iService hereunder.
            </span></p>


            <ol  start="14" className="termsheader">
              <li>
                <h4 >MISCELLENEOUS </h4>
              </li>
            </ol>


            <p><span>14.1. This Contract shall contain the entire understanding of the Parties and shall supersede all prior agreements and understandings, both written and oral, among the Parties with respect to the subject matter hereof.
            </span></p>

            <p><span>14.2. No amendment, modification or discharge of this Contract shall be valid or binding unless set forth in writing and duly executed by the Parties hereto. No waiver shall be valid unless given in writing by the Party from whom such waiver is sought. Any such waiver shall constitute a waiver only with respect to the specific matter described in such writing and shall in no way impair the rights of the Party granting such waiver in any other respect or at any other time. Neither the waiver by any of the Parties of a breach of or a default under any of the provisions of this Contract, nor the failure by any of the Parties, on one or more occasions, to enforce any of the provisions of this Contract or to exercise any right or privilege hereunder, shall be construed as a waiver of any other breach or default of a similar nature, or as a waiver of any of such provisions, rights or privileges hereunder.

            </span></p>


            <p><span>14.3. Save as otherwise provided in this Contract, each of the rights of the Parties hereto are independent, cumulative and without prejudice to all other rights available to them, and the exercise or non-exercise of any such rights shall not prejudice or constitute a waiver of any other right of the Party, whether under this Contract or otherwise.

            </span></p>


            <p><span>14.4. Subject to the provisions of this Contract, it is agreed that damages may not be an adequate remedy and each Party shall be entitled to seek an injunction, restraining order, suit for specific performance or such other equitable relief as a court of competent jurisdiction may deem necessary or appropriate to restrain the other Party, from committing any violation or enforce the performance of the covenants, representations and obligations contained in this Contract. These injunctive remedies are cumulative.
            </span></p>


            <p><span>14.5. Each and every obligation under this Contract shall be treated as a separate obligation and shall be severally enforceable as such in the event of any obligation or obligations being or becoming unenforceable in whole or in part. To the extent that any provision or provisions of this Contract are unenforceable, the Parties shall endeavour to amend such clauses as may be necessary to make the provision or provisions valid and effective. Notwithstanding the foregoing, any provision which cannot be amended as may be necessary to make it valid and effective shall be deemed to be deleted from this Contract and any such deletion shall not affect the enforceability of the remainder of this Contract, not so deleted provided the fundamental terms of this Contract are not altered.

            </span></p>

            <p><span>14.6. The Client shall not be entitled to assign or transfer, any of its rights and liabilities under this Contract to any other Party without the prior written consent of iService. The Client agrees and understands that iService reserves its right to assign any of its rights or obligations to any person/entity and the Client undertakes that it shall not object to the same.
            </span></p>

            <p><span>14.7. This Contract may be executed in one or more counterparts, each of which shall be deemed an original but all of which together shall constitute one and the same instrument and any Party may execute this Contract by signing any one or more of such originals or counterparts.


            </span></p>




            <center><h3 className="termsheader pageheading"><center>Annexure 1</center></h3></center>
            <center><h3 className=""><center>Scope of Services</center></h3></center>


            <ol  start="1" className="termsheader">
              <li>
                <h5 >iService Service Plan (ISP)  is the Annual service contract for both Windows and MacBooks. iService's offerings under this plan are:</h5>
              </li>
            </ol>
            <p><span> 1.1. Diagnosis and servicing and general servicing and consultation are interchangeable words. 
            </span></p>

            <p><span> 1.2. One diagnosis every 6 months. This includes a diagnosis at the beginning of the contract, one after 6 months and one at the conclusion of the contract

            </span></p>

            <p><span> 1.3. On-demand servicing and diagnosis is also included in this contract. 

            </span></p>


            <p><span> 1.4. Diagnosis and/or servicing may take place either at the premises of the customer or at any of the service centres of iService

            </span></p>

            <p><span> 1.5. Diagnosis may include general software checks and analysis of system information. 

            </span></p>

            <p><span> 1.6. Diagnosis may not always include opening up the laptop and checking components. 
            </span></p>

            <p><span> 1.7. Upgrades, addition or removal of parts are included under this plan. 

            </span></p>

            <p><span> 1.8. The customer will only have to pay for parts and cost of installation of those parts are included in this plan.
            </span></p>

            <p><span> 1.9. Under fair and reasonable circumstances, minor software and hardware issues are included in this plan. 
            </span></p> 

            <p><span> 1.10. Under fair and reasonable circumstances, iService may recommend a change of parts, installation of additional software or writing off of the laptop or a combination of these. 
            </span></p>

            <p><span> 1.11. iService may not be held liable for any misinterpretation of diagnosis.


            </span></p>


            <ol  start="2" className="termsheader">
              <li>
                <h5 >iService Comprehensive Plan (ICP)  is the annual maintenance contract. The offerings under this plan are:
                </h5>
              </li>
            </ol>
            <p><span> 2.1. RAM, Hard Disk, SSD, Display, LED, Wifi Antenna, Keyboard, Trackpad are covered under the plan.
            </span></p>

             <p><span> 2.2. In case of part failure due to battery issues, the terms of this plan are null and void. 

            </span></p>


             <p><span> 2.3. Battery issues and battery failures are not included in this plan

            </span></p>

             <p><span> 2.4. Incase of part changes that are contingent on motherboard repair, the cost of motherboard repair needs to be borne by the customer

            </span></p>

             <p><span> 2.5. The plan is null and void on laptops that have suffered liquid damage and physical damage even post start date of contract 

            </span></p>


            <ol  start="3" className="termsheader">
              <li>
                <h5 >iService Protection Plan (IPP) is comprehensive maintenance plan for MacBooks including motherboard, 1 instance of physical/liquid/accidental damage. The offerings under this plan are: 
                </h5>
              </li>
            </ol>
            <p  style={{marginLeft:'10px'}}><span> 3.1. Services and repairs that are not included under this plan are   
            </span></p>

            <p  style={{marginLeft:'20px'}}><span> 3.1.1. Change of parts due to aesthetic issues

            </span></p>


            <p  style={{marginLeft:'20px'}}><span> 3.1.2. Upgrades - due to both performance issues or due to choice. 

            </span></p>

            <p  style={{marginLeft:'20px'}}><span> 3.1.3. MagSafe chargers - Except physical cable damage upto mentioned instances (only if physical cable damage is included in plan as agreed at time of plan purchase)

            </span></p>

            <p  style={{marginLeft:'20px'}}><span> 3.1.4. Intentional damage to the device 

            </span></p>





            


           

          </Container>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
