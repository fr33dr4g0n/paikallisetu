if (Meteor.isServer) {
    Nexmo.initialize('41c274b9', 'bea4a9b3', 'http', 'DEBUG (false)');

    var tengsmansionRedemtionCodes = ['27GP','2DNW','2DPH','2SE7','2U29','2V5Q','2WNY','2XU6','35W4','3BC4','3H3P','3LQG','3NHL','3T8Y','3UXV','3ZG7','48RD','48WS','4AYE','4E6V','4J36','4KMM','4QNA','4RHV','4RSV','4WZK','536G','567K','58EN','58NC','5B2Z','5DU8','5GL6','5NVB','63R7','66YN','68AX','69WB','6KMQ','6L9K','6RXD','6XFM','6YMB','749S','7ASD','7D85','7MMW','7N6A','7NTC','7P8R','87GD','89XV','8E7Q','8FBY','8HJN','8K5R','8PWH','8PY5','8QDC','8TZQ','952S','96EN','96KD','9AGG','9AQW','9C6H','9J9P','9KM5','9M95','9N9M','9V65','A29Q','A2HD','A7LK','AEMV','ATN7','AWS3','AZEF','B4DD','B94U','BKJP','BMST','BTGW','BTWB','BV36','C2VQ','C7AW','CNST','CQGB','CR52','CRJQ','CX2N','CXRS','CZ84','D5VM','D6U5','D9NR','DFRD','DGBC','DMMD','DXA7','E3KS','ECP5','EK36','ENGK','EPVY','F6CA','F78H','FACG','FEE5','FEY2','FFBP','G2DY','G8S8','GACS','GC9B','GE3P','GE9F','GG4Y','GLHX','GR2D','HB5V','HJXV','HKL9','HPYQ','HUJQ','HV7D','HWC2','HXMW','J4MT','J65B','J7H8','JAHH','JEWW','JKAM','JLX2','JP36','JQDW','JZ7B','K55N','K7MR','K8FK','K8U8','K93R','KEM8','KFW5','KM8B','KN4A','KPJL','KRUA','KSQV','KVYL','L2XB','L5JA','LMJ5','LMVS','LSC6','LZLA','LZZV','M49X','M4GE','M7VR','MA4C','MALG','MEVT','MEZX','MKHE','MX93','N4UU','N82P','NB89','NSQG','NVPQ','PKCX','PP4S','PWLS','Q85K','QBBV','QC4C','QD6J','QMD2','QU3A','QXFQ','QZ6S','RE2K','RLLN','RNYZ','RQZE','RSEH','S4B5','S87R','S8XR','SMK7','SN2N','ST4P','SUED','SZWJ','T66H','T77B','TRSQ','TS72','TW95','U4FX','U7N5','UA67','UBLZ','UBRD','UEC8','UFYE','UHBP','URM6','UTEE','UUWQ','UZ4B','V8HF','VEPE','VJEN','VVRQ','VY6U','VYVY','W3FG','W5CZ','W6V7','W84D','W8WK','WBMP','WH29','WKTS','WR2W','WSXP','WYLZ','X8T5','XGPG','XLVG','XNEF','XTQ2','XY87','Y2BT','Y5CA','YFCT','YKTZ','YS2E','YURL','YXF4','ZA3D','ZFEJ','ZHE6','ZL2P','ZRRR'];


    Meteor.methods({
        'updateCounter': function(id){
            var sel = {_id: id};
            sentCodesMongo.upsert(sel, {
                    $inc: {sentCodes: 1}
                }
            );
            return sentCodesMongo.findOne(sel).sentCodes;
        },
        'lahetaTekstariTengsMansion': function (recepientNumber, sentCodes) {
            Nexmo.sendTextMessage("Tengs Mansion", recepientNumber, "Kiinalainen lounas Teng's Mansionissa hintaan 4.50€ (norm. 9.20€) klo. 11-15, näyttämällä koodia: " + tengsmansionRedemtionCodes[sentCodes] + ". Voimassa 01.05.2015 asti. Gyldenintie 2 Helsinki 00200", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                }
                else {
                }

            });
        },
        'lahetaTekstarikampaamodemo': function (recepientNumber) {
            Nexmo.sendTextMessage("Kampaamo Demo", recepientNumber, "Näytä tämä tekstiviesti Kampaamo Demossa (Punavuorenkatu 23, 00150, Helsinki) niin saat hiustenleikkauksen ja tyvivärjäysen tai raidat hintaan 40€ (arvo 120€) Etu on voimassa 01.05.2015 asti.", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(resp)
                }

            });
        },
        'lahetaTekstari': function (recepientNumber, sentCodes) {
            Nexmo.sendTextMessage("Henkka", recepientNumber, "Talla edulla saat 10e alennusata. Näytä tämä koodi kassalla: " + tengsmansionRedemtionCodes[sentCodes] + " .", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(resp)
                }
            });
        },
        'lahetaTekstariravintolademo': function (recepientNumber) {
            Nexmo.sendTextMessage("Ravintola Demo", recepientNumber, "Näytä tämä tekstiviesti Ravintola Demossa (Punavuorenkatu 23, 00150, Helsinki) niin saat kaksi annosta yhden hintaan eli 10€. Etu on voimassa 01.05.2015 asti.", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(resp)
                }

            });
        },
        'lahetaTekstariautohuoltodemo': function (recepientNumber) {
            Nexmo.sendTextMessage("Autohuolto Oy", recepientNumber, "Näytä tämä tekstiviesti Autohuolto Oy:ssä (Vantaankatu 1, 00550, Vantaa) niin saat vuosihuollon hintaan 30€. Etu on voimassa 01.05.2015 asti.", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(resp)
                }

            });
        },
        'lahetaTekstarisuutaridemo': function (recepientNumber) {
            Nexmo.sendTextMessage("Suutari Oy", recepientNumber, "Näytä tämä tekstiviesti Suutari Oy:ssä (Vantaankatu 1, 00550, Vantaa) niin saat kenkien tai saappaiden huollon hintan 5€. Etu on voimassa 01.05.2015 asti.", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(resp)
                }

            });
        },
        'lahetaTekstaristudiokuvaus': function (recepientNumber) {
            Nexmo.sendTextMessage("Studio Oy", recepientNumber, "Näytä tämä tekstiviesti Studio Demo Oy:ssä (Vantaankatu 1, 00550, Vantaa) niin saat tunnin studio kuvauksen hintaan 30€. Etu on voimassa 01.05.2015 asti.", {}, function (err, resp) {
                console.log('Got response from nexmo');
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(resp)
                }

            });
        }
    })
}
