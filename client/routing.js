Router.configure({
    trackPageView: true
});

// Homepage
Router.route('/', function() {
    this.render('home');
});
Router.route('/ostakampanja', function() {
    this.render('osta');
});


// Tengs Mansion Laskeutumissivu
Router.route('/tengs-mansion', function () {
    this.render('tengsMansion')
});
// Tengs Mansion Thank You Sivu
Router.route('/tengs-mansion-kiitos', function () {
    this.render('tengsMansionThankyou');
});
// Paikallisetu.com campaign demo
Router.route('/studiokuvaus-demo', function () {
    this.render('studiokuvaus')
});
//Paikallisetu.com campaign thankyou page
Router.route('/studiokuvaus-thankyou', function () {
    this.render('studiokuvaus_thankyou');
});
// Paikallisetu.com campaign demo
Router.route('/asiakas1', function () {
    this.render('txtMessageSender')
});
//Paikallisetu.com campaign thankyou page
Router.route('/asiakas1/thankyou', function () {
    this.render('thankyou');
});
//Ravintolademo
Router.route('/ravintolademo', function () {
    this.render('ravintolademo');
});
//Ravintola_thankyou
Router.route('/ravintolademo-thankyou', function () {
    this.render('ravintolademo_thankyou');
});
//kampaamodemo
Router.route('/kampaamodemo', function () {
    this.render('kampaamodemo');
});
//kampaamodemo
Router.route('/kampaamodemo-thankyou', function () {
    this.render('kampaamodemo_thankyou');
});
//alypuhelindemo
Router.route('/alypuhelindemo', function () {
    this.render('alypuhelindemo');
});
//alypuhelindemo-thankyou
Router.route('/alypuhelindemo-thankyou', function () {
    this.render('alypuhelindemo_thankyou');
});
//autohuolto
Router.route('/autohuolto', function () {
    this.render('autohuolto');
});
//autohuolto-thankyou
Router.route('/autohuolto-thankyou', function () {
    this.render('autohuolto_thankyou');
});
//suutaridemo
Router.route('/suutaridemo', function () {
    this.render('suutaridemo');
});
//suutaridemo-thankyou
Router.route('/suutaridemo-thankyou', function () {
    this.render('suutaridemo_thankyou');
});