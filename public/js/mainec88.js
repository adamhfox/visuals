var calculator = new Vue({
    el: '#calculator',
    data: {
        heading:'Recovery Time & Downtime Cost Calculator',
        subheading:'The cost of a technology outage can cripple a business.  Use our Recovery Time & Downtime Cost Calculator to focus on a handful of simple metrics that might come into play during a downtime event, and start a general analysis of what an outage could mean to your business.  The results of this calculator are meant to help estimate loss, and does not calculate actual loss.',
        instruction: 'INPUT YOUR SPECIFIC NEEDS IN THE FIELDS BELOW FOR THE MOST ACCURATE INFORMATION. HOVER OVER THE QUESTION MARKS FOR MORE INFORMATION',

        headingone: 'Recovery & Data Storage',

        q1:'How long can your business survive without access to your IT systems?',
        help1: 'Systems include, but are not limited to, email, documents, specific business systems (e.g., point of sale, shipping & logistics,databases), etc.?',
        pretag1: '',
        posttag1: 'hrs',

        q2:'How many hours of work are you willing to lose / repeat?',
        help2: 'If disaster strikes, work often stops and any work that does occur often must be redone. How many hours of work are you willing to repeat in a worst case scenario?',
        pretag2: '',
        posttag2: 'hrs',

        q3:'How much data do you have on critical business systems?',
        help3: 'In order to give you a correct calculation we need to get an idea of how much data you have in your system across your organization.',
        pretag3: '',
        posttag3: 'GB',

        q4:'How often do you back up this data?',
        help4: 'What is the timeframe between each of your backups? E.g. every hour, once a day, once a week.',
        pretag4: '',
        posttag4: "I don't currently backup my data",

        q5:'On average how long does it take your client to notify you of an issue and for you to start trouble shooting the downtime incident?',
        help5: 'From when disaster strikes, how long does it for your end user to notify you, for you to assess the situation, access your backups, and start the recovery process? Think of this a your reponse time.',
        pretag5: '',
        posttag5: '',

        q6:'Where do you currently store your backups?',
        help6: 'Storing your data locally is designed for fast data transfers, however you are at risk if there is a disaster in the office such as fire, floods or theft. Cloud data is stored off-site, such as in a Datto data center, which brings an extra level of availability albeit at a slower speed for full bare metal restores.',
        pretag6: 'Local',
        posttag6: 'Cloud',

        q7:'What is the download speed from your cloud backup location?',
        help7: 'Speed of cloud recovery comes down to the amount of data you are trying to recover and your download speed. Devices with slower connections will take longer to recover.',
        pretag7: '',
        posttag7: 'Mbps',

        headingtwo: 'Downtime & Recovery Costs',

        q8:'How many employees do you have?',
        help8: 'Nearly every employee will be impacted by an IT outage and will not be able to perform their job obligations to a certain degree. We recommend including the entire staff in this field.',
        pretag8: '',
        posttag8: '',

        q9:'What is their average annual salary per employee?',
        help9: 'Even if the business stops due to an outage and employees are not able to perform some, or all, of their duties, employee wages typically are still paid. We are assuming yours will need to be paid, and this must be included in your cost of downtime calculations.',
        pretag9: '$',
        posttag9: '',

        q10:'What is the average annual overhead cost of an employee?',
        help10: 'All staff come with overhead costs like, gas, electric, rent, etc. Normally, this is about 50% of the average salary.',
        pretag10: '$',
        posttag10: '',

        q11:"What is your business's annual revenue?",
        help11: 'For most businesses, an outage will halt the ability to product and accrue revenue. We are assuming that your revenue will case during an outage, and so annual revenue helps to calculate the average cost of lost revenue during downtime.',
        pretag11: '$',
        posttag11: '',

        headingthree: 'Results',
        headingfour: 'Current Solution',

        cs1help: "It's critical to regularly test your backups. In the case that a backup isn't working, you could be looking at additional losses per failed backup.",
        cs1heading: "Time between backups",
        cs1nobackup: "No Backup Taken",

        cs2help: "This is the time it takes for your data to actually be downloaded back to your original device based on your backup location. Local backups will be quicker, but because a local disaster could take out local backups, but it’s always vital to ensure that you have a cloud backup as well.",
        cs2heading: "Recovery Processing Time",
        cs2extra: "No Backup Taken",

        cs3help: "If you experience a ransomware attack, you may be able to recover quickly.  If you're faced with a fire or flood, you could be offsite for days and face higher costs than what you see here.",
        cs3heading: "Summary",
        cs3extra: "No Backup Taken",

        sum1: 'Estimated Recovery Time & Loss:',
        sum2: 'Response Time you provided:',
        sum3: 'Estimated Downtime & Loss:',
        sum4: 'Possible Business Closure',
        sum5: 'Estimated Savings',

        ds1help: "Datto's SIRIS BCDR solutions allow you to backup as frequently as every 5 minutes. They also allow for regular testing and validation of your backups, reducing your risk even further.",
        ds1heading: "Time between backups",

        ds2help: "In case of a disaster, Datto can enable you to virtualize your backups, hosted in our cloud. On average, it only takes a few minutes to access the Datto portal, find your backup copy, and to virtualize it.",
        ds2heading: "Average Recovery Processing Time",
        ds2extra: "*Time to virtualization will vary depending on numerous factors including, but not limited to, the size of the SIRIS device, the availability and speeds of other local resources, the number of applications you are running, and server load.",

        ds3help: "Downtime will always cost your business money. However, you can reduce it with a Datto business continuity/disaster recovery solution.",
        ds3heading: "Summary",
        ds3extra: " ",

        legal: '*all losses are merely an estimation of losses associated with technology, and does not reflect a calculation of actual losses to your business.',

        headingfive: 'Datto SIRIS Solution',

        results1else: "With the information that you've provided, we have identified that your estimated downtime losses per hour would be " + this.displayhourlyRevenueCost + ". However, as a result of not taking data backups the impact could be much worse!",
        close: "your businesses closing all together",
        results1final: "Want to learn more about how Datto's Unified Continuity solutions can alleviate your business from lengthy downtime?",

        button1: "Request a Datto BCDR Demo",
        button2: "Download PDF Copy",

        hourstxt: 'hours',
        minstxt: 'mins',
        shorthourstxt: 'hrs',
        shortminstxt: 'mins',
        helpicon: '?',
        currencyicon: '$',
        accesshours: '72',
        productiontime: '12',
        datagb: '2000',
        backuphrs: '12',
        backupmins: '00',
        recoveryhrs: '0',
        recoverymins: '30',
        local: '0',
        shortDescription:'<p>Everyone in IT knows that the biggest issues always occur at 3 a.m. on a weekend. So, when this happens and a server goes down or is compromised in a cyberattack, you want a truly effective solution to get your client back to work fast; and you want a technology vendor that will be there to support you, no matter what.</p>\n' +
            '<p>This is where low-cost BCDR providers can fall short. Some simply lack features and functionality that MSPs need, while others require greater administrative resources to manage effectively. Datto’s focus on providing secure, efficient and reliable continuity solutions and our unwavering commitment to being a true technology partner for Managed Service Providers (MSPs) means you can better serve your customers, especially when it matters most.</p>\n' +
            '<p>Datto Continuity is a true <strong>all-in-one</strong> solution: a single vendor for hardware, software and cloud:</p>\n' +
            '<ul><li><strong>Easy to deploy and manage: </strong>With our integrated solutions, there’s no need to cobble together products from hardware, software, and cloud vendors to develop a complete solution. There are no additional costs for new features and device seeding is free on up to 4 devices a year. Devices are properly configured out of the box, and if something does go wrong, there’s no finger pointing between vendors.<strong><br></strong></li><li><strong>Reliable, verified, image-based backups:</strong> Advanced backup verification gives you 100% confidence in your local and cloud backups by automatically verifying that server images are complete, ransomware-free, and boot-able.<strong><br></strong></li><li><strong>Flexible recovery options:</strong> We offer the most<a href="https://kb.datto.com/hc/article_attachments/360032117292/mceclip1.png"> restore and rollback options</a> of any BCDR vendor—a full restore toolbox allowing you to address any recovery scenario.<strong><br></strong></li><li><strong>Fast recovery: </strong>Protected systems can be virtualized on the Datto device, so your clients can return to work fast (6 second local recovery). With our “copy-on-write” snapshots, there’s no conversion process to slow recovery.</li><li><strong>Emergency cloud failover: </strong>If an offsite disaster recovery is required, client workloads are hosted in the Datto Cloud at no extra charge.</li><li><strong>Integrated platform: </strong>Datto’s integrated platform, as well as integrations with popular third-party PSA, RMM, and other MSP tools, removes complexity and increases MSP efficiency.<strong><br></strong></li><li><strong>Flexible cloud options:</strong> Easily meet clients’ retention needs with unlimited data storage in the Datto Cloud—with no time restriction.<strong><br></strong></li><li><strong>Flexible upgrade policy:</strong> Datto devices can be easily field upgraded with more storage or memory to grow with your clients’ expanding data and protection needs.<strong><br></strong></li><li><strong>Geo-redundancy: </strong>With private data centers across the US, Australia, Europe and Canada, you can choose where client data lives and be confident that you can recover even if a data center goes down.<strong><br></strong></li><li><strong>24x7x356 support: </strong>Datto’s US-based Direct-To-Tech Support is available whenever you need it. Whether disaster strikes at 3 p.m. or 3 a.m., we have you covered.<strong><br></strong></li><li><strong>One-stop-shop Portal:&nbsp;</strong>A single-pane-of-glass for MSPs to quickly and easily manage multiple products and services, make purchases, train new employees, manage support tickets, and automate marketing campaigns with MarketNow.</li></ul>\n' +
            '<p>While reliable technology is obviously essential, you also need a vendor that always has your back. Our MSP partners tell us they value Datto’s 100% commitment to their success. That means extensive onboarding services; 24x7x365 Direct-To-Tech support; ongoing investment in products to increase security, reliability, and ease of use; training opportunities; sales support; marketing automation tools and content; and much more. </p>\n' +
            '<p>The combination of efficient, reliable technology and a true vendor partnership allows you to better support more customers and grow your business. You don’t need to waste time struggling with configuration, ongoing management, and troubleshooting. This saves your techs’ time and reduces OpEx spending—increasing margins and driving revenue. Our recent survey data bears this out;<strong> Datto partners are growing nearly 10% faster than other MSPs.* </strong></p>\n' +
            '<p>Datto solutions take the guesswork out of delivering BCDR services. This allows you to focus on what you do best—providing excellent support to your clients. Because ultimately, that’s what success in managed services is all about. <strong>&lt;&lt;Contact your Datto Sales Rep, or <a href="https://www.datto.com/continuity">visit our webpage</a> to learn more or request a demo&gt;&gt; </strong><br></p>\n' +
            '<p>“The Datto Partner Program stands out in some really unique ways. It’s a well-polished program that encompasses what we need to succeed as a business. Everything from MarketNow to marketing development funds, Datto is actually investing in our business.” — Kevin Damghani, IT Partners. </p>\n' +
            '<p>“It’s easy to do business with Datto, and it’s easy to build relationships with the people that work for Datto. They want to partner with you and they want your business to succeed. That’s how they’re growing and developing their business [alongside] channel partners [like us].” — Karen O’Connor, Datapac </p>',
        cloud: '0',
        localspeed: '700',//MB/s
        cloudspeed: '70', //Mbps
        staff: '40',
        staffrevenue: '5000000',
        staffwage: '25000',
        staffoverhead: '10000',
        staffrevenueedit: '5000000',
        staffwageedit: '25000',
        staffoverheadedit: '10000',
        localrecoveryDowntime: '0',
        cloudrecoveryDowntime: '0',
        localdowntimecost: '0',
        clouddowntimecost: '0',
        hourlyRevenueCost: '0',
        localestimatedDowntime: '0',
        displaylocalDowntime: '0',
        cloudestimatedDowntime: '0',
        displaycloudDowntime: '0',
        recoverytype: 'local',
        displayhourlyRevenueCost: '0',
        bcdrbackup: '5',
        bcdrrecovery: '6',
        bcdrestimateddowntime: '0',
        bcdrdowntimecost: '0',
        localrecoverycost: '0',
        cloudrecoverycost: '0',
        displayBCDRDowntime: '0',
        cloudcostsaving: '0',
        localcostsaving: '0',
        perbackupdowntime: '0',
        perdattobackupdowntime: '0',
        checked: '',
        dattorecoverycost: '',
        respondscost: '',
        localbusinessrisk: '',
        cloudbusinessrisk: '',
        responsetime:'',

        form1title: 'Request a Demo',
        form2title: 'Download PDF Results',
        fname: "First Name",
        lname: "Last Name",
        companyname: "Company Name",
        emailadd: "Business E-mail",
        phonenum: "Phone Number",
        countrysel: "Country",
        zip: "Postal Code",

        optin: "Yes, I would like to receive more information about your products, offers, and events. I understand I can unsubscribe at any time. When you provide the information above, we will use it to process your request as described in our",
        market2: "Marketing Privacy Practices",


        formsubmit: 'Requested BCDR Demo from RTO Calculator. Inputs were as follows:, Data = {{datagb}}, Staff = {{staff}}, Annual Revenue = {{staffrevenue}}, Results: Current Solution: Time between backups {{backuphrs}}hrs {{backupmins}}mins, Recovery Processing Time: Local = {{localrecoveryDowntime}} / Cloud = {{cloudrecoveryDowntime}}, Minimum Downtime: Local = {{ displaylocalDowntime }} / Cloud = {{ displaycloudDowntime }} // ',
    },
    filters: {
        strippedContent: function(string) {
            return string.replace(/<\/?[^>]+>/ig, " ");
        }
    },
    computed: {
        staffrevenueedit: function () {
            var edited = this.staffrevenue;
            return edited;
        },
        staffoverheadedit: function () {
            var edited = this.staffoverhead;
            return edited;
        },
        staffwageedit: function () {
            var edited = this.staffwage;
            return edited;
        },
        hourlyRevenueCost: function () {
            return parseInt(this.staff) * ((this.staffwageedit / 40) / 52) + ((this.staffoverheadedit / 40) / 52) + ((this.staffrevenueedit/ 40) / 52);
        },
        displayhourlyRevenueCost: function () {
            return this.currencyicon + currencyFormat(this.hourlyRevenueCost);
        },
        localestimatedDowntime: function () {
            return 8388608 * parseInt(this.datagb) / (parseInt(this.localspeed) * 1024) + (((parseInt(this.recoveryhrs)*60) + (parseInt(this.recoverymins)))*60)
        },
        cloudestimatedDowntime: function () {
            return 8388608 * parseInt(this.datagb) / (parseInt(this.cloudspeed) * 1024) + (((parseInt(this.recoveryhrs)*60) + (parseInt(this.recoverymins)))*60)
        },
        bcdrestimatedDowntime: function () {
            return (((parseInt(this.recoveryhrs)*60) + (parseInt(this.recoverymins)))*60) + parseInt(this.bcdrrecovery)
        },
        localrecoveryDowntime: function () {
            var time = Math.round((8388608 * parseInt(this.datagb) / (parseInt(this.localspeed) * 1024))/60);
            return timeConvert(time);
        },
        cloudrecoveryDowntime: function () {
            var time = Math.round((8388608 * parseInt(this.datagb) / (parseInt(this.cloudspeed) * 1024))/60);
            return timeConvert(time);
        },
        localrecoverycost: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (8388608 * parseInt(this.datagb) / (parseInt(this.localspeed) * 1024) / 3600)) || 0;
            return this.currencyicon + currencyFormat(cost);
        },
        cloudrecoverycost: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (8388608 * parseInt(this.datagb) / (parseInt(this.cloudspeed) * 1024) / 3600)) || 0;
            return this.currencyicon + currencyFormat(cost);
        },
        localdowntimecost: function(e){
            var cost = Math.ceil( parseInt(this.hourlyRevenueCost) * (parseInt(this.localestimatedDowntime) / 3600)) || 0;
            return this.currencyicon + currencyFormat(cost);
        },
        clouddowntimecost: function(e){
            var cost = Math.ceil( parseInt(this.hourlyRevenueCost) * (parseInt(this.cloudestimatedDowntime) / 3600)) || 0;
            return this.currencyicon + currencyFormat(cost);
        },
        bcdrdowntimecost: function(e){
            var cost = Math.ceil(parseInt(this.hourlyRevenueCost) * ((this.bcdrrecovery / 60) + (parseInt(this.recoveryhrs) + parseInt(this.recoverymins) / 60)));
            return this.currencyicon + currencyFormat(cost);
        },
        cloudcostsaving: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (this.bcdrrecovery / 60)) || 0;
            var cost2 = Math.round( parseInt(this.hourlyRevenueCost) * (8388608 * parseInt(this.datagb) / (parseInt(this.cloudspeed) * 1024) / 3600)) || 0;
            var cost3 = cost2 - cost;
            return this.currencyicon + currencyFormat(cost3);
        },
        localcostsaving: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (this.bcdrrecovery / 60)) || 0;
            var cost2 = Math.round( parseInt(this.hourlyRevenueCost) * (8388608 * parseInt(this.datagb) / (parseInt(this.localspeed) * 1024) / 3600)) || 0;
            var cost3 = cost2 - cost;
            return this.currencyicon + currencyFormat(cost3);
        },
        displaylocalDowntime: function () {
            var time = Math.round(((8388608 * parseInt(this.datagb) / (parseInt(this.localspeed) * 1024) + (((parseInt(this.recoveryhrs)*60) + (parseInt(this.recoverymins)))*60))/60));
            return timeConvert(time);
        },
        displaycloudDowntime: function () {
            var time = Math.round(((8388608 * parseInt(this.datagb) / (parseInt(this.cloudspeed) * 1024) + (((parseInt(this.recoveryhrs)*60) + (parseInt(this.recoverymins)))*60))/60));
            return timeConvert(time);
        },
        displayBCDRDowntime: function () {
            var time = Math.round(((( parseInt(this.bcdrrecovery) + parseInt(this.recoveryhrs)*60) + (parseInt(this.recoverymins)))*60)/60);
            return timeConvert(time);
        },
        perbackupdowntime: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (parseInt(this.backuphrs) + parseInt(this.backupmins) / 60)) ;
            return this.currencyicon + currencyFormat(cost);
        },
        respondscost: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (parseInt(this.recoveryhrs) + parseInt(this.recoverymins) / 60)) ;
            return this.currencyicon + currencyFormat(cost);
        },
        perdattobackupdowntime: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (this.bcdrbackup / 60)) ;
            return this.currencyicon + currencyFormat(cost);
        },
        dattorecoverycost: function(e){
            var cost = Math.round( parseInt(this.hourlyRevenueCost) * (this.bcdrrecovery / 60)) ;
            return this.currencyicon + currencyFormat(cost);
        },
        localbusinessrisk: function(e){
            var cost = (parseInt(this.localrecoveryDowntime) / 3600) / this.accesshours
            if (cost > 0.8) {
                return 'Critical';
            } else if (cost > 0.6) {
                return 'Warning';
            } else {
                return 'Accept';
            }
        },
        cloudbusinessrisk: function(e){
            var cost = (parseInt(this.cloudrecoveryDowntime) / 3600) / this.accesshours
            if (cost > 0.8) {
                return 'Critical';
            } else if (cost > 0.6) {
                return 'Warning';
            } else {
                return 'Accept';
            }
        },
        responsetime: function(e){
            var cost = this.recoveryhrs
            if (cost > 5) {
                return 'Critical';
            }else {
                return 'Accept';
            }
        },
        results1: function(e){
            var result = "With the information that you've provided, and using certain assumptions made based on how businesses today typically function, we have estimated your downtime losses to be <strong>" + this.displayhourlyRevenueCost + " per hour</strong>, and as a result, you could be looking at a estimated potential loss of around ";
            if (this.recoverytype = 'local') {
              var result2 = "<strong><span>" + this.localdowntimecost + "</span> in " + this.displaylocalDowntime + "</strong>";
            } else {
              var result2 = "<strong><span>" + this.clouddowntimecost + "</span> in " + this.displaycloudDowntime + "</strong>";
            }
            var result3 = " of downtime. This is assuming that your recovery process works exactly as planned, and could be worse if you experience any further glitches. For this reason, it's critical to regularly test your recovery capabilities. If the recovery process fails, you could be looking at additional losses of <strong>" + this.perbackupdowntime + "</strong> per recovery attempt.";
            var respart1 = result + result2 + result3;
            return respart1;
        },
        resultstext2: function(e){
            var respart2 = "In contrast, Datto's SIRIS business continuity and disaster recovery (BCDR) solutions could reduce your downtime to <strong>" + this.displayBCDRDowntime + "</strong> and your overall downtime cost would fall to <strong>" + this.bcdrdowntimecost + "</strong>. In the rare case that the first recovery attempt doesn't work, your costs would only increase by <strong>" + this.perdattobackupdowntime + "</strong>, as opposed to";

            if (this.checked == '') {
              var result22 = " <strong>" + this.perbackupdowntime + "</strong>." ;
            } else if (this.checked == 'false') {
              var result22 = " <strong>" + this.perbackupdowntime + "</strong>." ;
            } else {
              var result22 = " <strong>" + this.close + "</strong>.";
            }

            var respart3 = respart2 + result22
            return respart3;
        },
        resultstext3: function(e){
            var respart4 = "With Datto, even if you are experiencing an outage at your workplace, work doesn't have to stop. Datto Continuity can get you back to business in a little as <strong>" + this.bcdrrecovery + " minutes</strong>  on virtual servers, which can be accessed anywhere you have working internet. Features like Ransomware Detection and Advanced Backup Verification let you rest easy knowing your backups will work in your time of need.";
            return respart4;
        },

    }
});
function currencyFormat (num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}
function RemoveRougeChar(convertString){
    if(convertString.substring(0,1) == ","){
        return convertString.substring(1, convertString.length)
    }
    return convertString;
}
function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + "hrs " + rminutes + "mins";
}