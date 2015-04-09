if (Meteor.isClient) {
    Template.thankyou.helpers({
     'numero': function() {
       return Session.get('phoneNumber');
     }
  });


    Template.txtMessageSender.events({
    'submit form': function(e) {
      e.preventDefault();

      var recepientNumber = e.target.recepient.value;
      Session.set('phoneNumber', recepientNumber);

      function validatePhone(recepientNumber) {
        var validNumberRegExp = /^((([\+][\s]{0,1})|([0]{2}[\s-]{0,1}))([358]{3})([\s-]{0,1})|([0]{1}))(([1-9]{1}[0-9]{0,1})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1}))([0-9]{0,3}){1}$/;
        return validNumberRegExp.test(recepientNumber);
      }
      if(recepientNumber.length < 13) {
          recepientNumber = recepientNumber.replace(recepientNumber.charAt(0), "+358");
      }

      if (validatePhone(recepientNumber)) {
          if (Meteor.call('insertNumberAndCheckIfUsedBefore', Router.current().route.path(), recepientNumber))
             Meteor.call('updateCounter', Router.current().route.path(), function(err, sentCodes) {
                 if (err) {
                     Errors.throw("Tapahtui virhe, kokeile uudestaan.");
                 } else {
                     Meteor.call('lahetaTekstari', recepientNumber, sentCodes);
                     Router.go('/asiakas1/thankyou');
                 }
          });
      } else {
          Errors.throw("Olet syöttänyt virheellisen numeron. Tarkista että syötit numerosi oikein.")
      }

    }
})
}

