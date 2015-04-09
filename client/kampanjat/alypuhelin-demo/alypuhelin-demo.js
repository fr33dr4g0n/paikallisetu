if (Meteor.isClient) {
    Template.alypuhelin_thankyou.helpers({
        'numero': function() {
            return Session.get('phoneNumber');
        }
    });

    Template.alypuhelindemo.events({
        'submit form': function(e) {
            e.preventDefault();

            var recepientNumber = e.target.recepient.value;
            Session.set('phoneNumber', recepientNumber);

            function validatePhone(recepientNumber) {
                var validNumberRegExp = /^((([\+][\s]{0,1})|([0]{2}[\s-]{0,1}))([358]{3})([\s-]{0,1})|([0]{1}))(([1-9]{1}[0-9]{0,1})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1})([0-9]{2,4})([\s-]{0,1}))([0-9]{0,3}){1}$/;
                return validNumberRegExp.test(recepientNumber);
            }

            if (validatePhone(recepientNumber)) {
                Meteor.call('lahetaTekstarikampaamodemo', recepientNumber);
                Router.go('/kampaamodemo-thankyou');
            } else {
                console.log('false number')

            }
        }
    })
}
