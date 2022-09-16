var path = require('path');
//const { sleep } = require('./helper/general');

module.exports = function(app){
  app.post("/sync", (req, res) => {
    console.log("Entra al postReq")
    //console.log(`req.body`, req.body, req?.body.changes?.plotlocationapp.created)
    console.log(`req.body`, req.body.timestamp, req?.body.changes)
    /*{ 
      changes: { locations: { created: [Array], updated: [], deleted: [] } },
      lastPulledAt: 1641218564
    } */
    res.send({
      changes: {}, 
      timestamp: '30/12/2021',
      test: true,
      ok: true,
    });
  });
  // user pull changes, send changes
  app.get("/sync/:from/:to", (req, res) => {
    console.log("In get (pull changes)")
    //console.log("pull timestamp:", req.timestamp)
    let { from, to} = req?.params;
    from =parseInt(from);
    to =parseInt(to);

    const recordsToSend = [];
    console.log('From:', from, " to:", to)
    for (let a = from; a < to; a++) {
      recordsToSend.push({
        id: a.toString(),
        Flower_Color: 'P',
        Pubescense: 'pub',
        Pubescense_Color: 'LT',
        Pod_Color: 'T',
        Hilum_Color: 'BL',
        Plant_Height: '40',
        Standability: '1.5',
        Salt_Tolerance: '2.5',
        Seed_Size: '1',
        Emergence: '5',
        Green_Stem: '2',
        Shattering: 'S',
        Sudden_Death_Syndrome: '6',
        Growth_habit: '1.5',
        Stem_Canker: '1',
        Root_Knot_Nematode: '2',
        Relative_Maturity: '3',
        Frogeye: '4',
        RPS_Gene: '1.5',
        PRR_Tolerance: '2.5',
        Iron_Deficiency_Chlorosis: '5',
        SCN_Source: '3',
        SCN_Rating: '0.5',
        White_Mold: '1',
        Brown_Stem_Rot: '3',
        STS: '4',
        Cercospora: '4.5',
        Stress_Tolerance: '3.5',
      });
    }
    
    const multipleSend = {
      sojavariety: {
      created: recordsToSend,
      updated: [],
      deleted: [],
    }
  };

    res.send({
      changes: multipleSend, 
      timestamp: 1644512853,
      ok: true,
    });
  });

  app.get("/watermelon.db", (req, res) => {
    var options = {
      root: path.join(__dirname)
    };
    var fileName = 'watermelon.db';
    res.sendFile(fileName, options, function (err) {
      if (err) {
        console.log("error:", err);
        next(err);
      } else {
        console.log("Sent:", fileName);
      }
    });
  });

  app.get("/sleep",async (req, res) => {
    // /sleep?time=numberInString
    const timeToSendResponse = req.query.time || 10000;
    console.log('req:', req.query.time)
    console.log(`Wait ${timeToSendResponse} ms...`)
    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await sleep(timeToSendResponse)
    console.log("Send response");
    res.status(200).send({test: true, success: true})
  });
}
