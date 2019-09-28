/**
 *  Entrance.js launch the application.
 *
 *  @author  root
 *  @date    Jun 8, 2017
 *
 **/
import {Splash} from 'splash-screen';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import {Main} from 'js/app/main';
import {RepairNew} from 'js/app/repairnew';
import {service} from 'js/app/service';
import {Tracking} from 'js/app/tracking';
import {DeliveryPage} from 'js/app/delivery';
import {WalkinPage} from 'js/app/walkin';
import {PaymentPage} from 'js/app/payment';
import {ProfileNew} from 'js/app/profilenew';
import {Ordernew} from 'js/app/order';
import {Partners} from 'js/app/partners';
import {About} from 'js/app/about';
import {terms} from 'js/app/terms';
import {privacy} from 'js/app/privacy';
import {dynamic} from 'js/app/dynamicdevice';
import {deviceType} from 'js/app/model';
import {pay} from 'js/app/pay';
import {cable} from 'js/app/cable';
import {contact} from 'js/app/contactus';
import {SeoRepairNew} from 'js/app/seorepair';
import {iphonepage} from 'js/app/iphonepage';
import {ipadpage} from 'js/app/ipadpage';
import {macbookpage} from 'js/app/macbookpage';
import {onepluspage} from 'js/app/onepluspage';
import {xiaomipage} from 'js/app/xiaomipage';
import {thankyoupage} from 'js/app/thankyoupage';
import {maintenance} from 'js/app/maintenance';
import {onxy} from 'js/app/onxy';
import {walkin_onxy} from 'js/app/walkin-onxy';
import {warranty} from 'js/app/warranty';
import {select} from 'js/app/select';

import $ from 'jquery'


$(document).ready(function(){
  var parts = window.location.href;
  var lastSegment = parts.split('/');
    var location = localStorage.getItem("location");
    var selectedBrand = localStorage.getItem("selectedBrand");
    var devicetype = localStorage.getItem("urlencodedbrand");
    var modelname = localStorage.getItem("model");
     if(window.location.href.indexOf("cooperate") > -1) {
        var companyanme = lastSegment[4]
    }
});

export class Entrance {
    componentDidMount(){
        $('.mview').show();
    }
    constructor() {}
    beforeStart() {
        let injectTapEventPlugin = require('react-tap-event-plugin');
        //Needed for onTouchTap
        //Can go away when react 1.0 release    
        //Check this repo:
        //https://github.com/zilverline/react-tap-event-plugin
        injectTapEventPlugin();
    }
    _destroySplash() {
        let _this = this;
        Splash.destroy();
        require('splash-screen/dist/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        ReactDOM.render((
            <BrowserRouter>
                <div>
                    <switch>
                    <Route exact path="/:selectedBrand/" component={select}/>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/myorders" component={Ordernew}/>
                    <Route exact path="/Home" component={Main}/>
                    <Route exact path="/Repair" component={RepairNew}/>
                    <Route exact path="/Service" component={service}/>
                    <Route  exact path="/Delivery" component={DeliveryPage}/>
                    <Route exact path="/Terms-of-service" component={terms}/>
                    <Route exact path="/Privacy-policy" component={privacy}/>
                    <Route exact path="/Devices/" component={dynamic}/>
                    <Route exact path="/Kormangala/OnePlus/" component={onepluspage}/>
                    <Route exact path="/Marathahalli/OnePlus/" component={onepluspage}/>
                    <Route exact path="/RMV/OnePlus/" component={onepluspage}/>
                    <Route exact path="/Raja-Garden/OnePlus/" component={onepluspage}/>
                    <Route exact path="/Kormangala/Xiaomi/" component={xiaomipage}/>
                    <Route exact path="/Marathahalli/Xiaomi/" component={xiaomipage}/>
                    <Route exact path="/RMV/Xiaomi/" component={xiaomipage}/>
                    <Route exact path="/Raja-Garden/Xiaomi/" component={xiaomipage}/>
                    <Route exact path="/:selectedBrand/:devicetype/:modelname" component={SeoRepairNew}/>
                    <Route exact path="/:selectedBrand/:devicetype/" component={deviceType}/>
                    <Route exact path="/track" component={Tracking}/>
                    <Route exact path="/Walkin" component={WalkinPage}/>
                    <Route exact path="/Payment" component={PaymentPage}/>
                    <Route exact path="/profile" component={ProfileNew}/>
                    <Route exact path="/orders" component={Ordernew}/>
                    <Route exact path="/become-a-partner" component={Partners}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/Payments" component={pay}/>
                    <Route exact path="/Contact-us" component={contact}/>
                    <Route exact path="/Buy-cable-protectors" component={cable}/>
                    <Route exact path="/360-iphone-repair-services-bangalore/" component={iphonepage}/>
                    <Route exact path="/ipad/" component={ipadpage}/>
                    <Route exact path="/macbook/" component={macbookpage}/>
                    <Route exact path="/oneplus/" component={onepluspage}/>
                    <Route exact path="/xiaomi/" component={xiaomipage}/>
                    <Route exact path="/payment-thanks/" component={thankyoupage}/>
                    <Route exact path="/onyx/" component={onxy}/>
                    <Route exact path="/walkin-onyx" component={walkin_onxy}/>
                    <Route exact path="/warranty-refurbished-products/" component={warranty}/>
                    <Route exact path="/Maintenance-contract/" component={maintenance}/>
                    <Route exact path="/Kormangala/Apple/Mobile-Phone/iPhone/" component={iphonepage}/>
                    <Route exact path="/Marathahalli/Apple/Mobile-Phone/iPhone/" component={iphonepage}/>
                    <Route exact path="/RMV/Apple/Mobile-Phone/iPhone/" component={iphonepage}/>
                    <Route exact path="/Jayanagar/Apple/Mobile-Phone/iPhone/" component={iphonepage}/>
                    <Route exact path="/Raja-Garden/Apple/Mobile-Phone/iPhone/" component={iphonepage}/>
                    <Route exact path="/Kormangala/Apple/Tablet-Computer/iPad/" component={ipadpage}/>
                    <Route exact path="/Jayanagar/Apple/Tablet-Computer/iPad/" component={ipadpage}/>
                    <Route exact path="/Marathahalli/Apple/Tablet-Computer/iPad/" component={ipadpage}/>
                    <Route exact path="/RMV/Apple/Tablet-Computer/iPad/" component={ipadpage}/>
                    <Route exact path="/Raja-Garden/Apple/Tablet-Computer/iPad/" component={ipadpage}/>
                    <Route exact path="/Kormangala/Apple/Laptop-Desktop/MacBook/" component={macbookpage}/>
                    <Route exact path="/Marathahalli/Apple/Laptop-Desktop/MacBook/" component={macbookpage}/>
                    <Route exact path="/Jayanagar/Apple/Laptop-Desktop/MacBook/" component={macbookpage}/>
                    <Route exact path="/RMV/Apple/Laptop-Desktop/MacBook/" component={macbookpage}/>
                    <Route exact path="/Raja-Garden/Apple/Laptop-Desktop/MacBook/" component={macbookpage}/>
                    </switch>
                </div>
            </BrowserRouter>
            ), document.querySelector('#view'));
    }

    run() {
        this.beforeStart();
        this._destroySplash();
        this.launch();
    }

}


export default Entrance;
