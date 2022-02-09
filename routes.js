var path = require('path');

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
  app.get("/sync", (req, res) => {
    console.log("In get (pull changes)")
    //console.log("pull timestamp:", req.timestamp)
    // console.log(`req.body`, req.body)
   /*  plotlocationapp: {
      created: [
        {
          Id: 1,
          Active__c: true,
          City: "Gibson City",
          City_Id: 1,
          Company__c: 1,
          Company__c_Name: "GDM",
          Country__c: "USA",
          Crop__Name__c: "Soybean",
          Crop__c: 1,
          GeoLocation__Latitude__s: 40.4656,
          GeoLocation__Longitude__s: -88.3747,
          Irrigation__c: "0",
          Location__c_State: "IL",
          Map_Image__c: null,
          Maturity_Range__c: "1.3-3.7",
          Name: "Gibson City Xflex",
          Plant_Date__c: "01-03-2021",
          Planting_Date_Range__c: "EARLY",
          Previous_crop__c: "CORN",
          QR_Range__c: null,
          Region__c: "MID",
          Season__c: "2021",
          Soil_Type__c: "Sandy Loan",
          Spacing_Rows__c: "30''",
          State: "IL",
          Traits__c: "Xtend, Xflex, Enlist",
          Yield_Environment__c: "HIGH",
        }
      ],
      updated: [
        { id: '2', Name: 'Test change name location', Active__c: false },
      ],
      deleted: ["ddd"], // listId de los registros que se borraron
    }, */
    const changes = {
      varietyapp: {
        created: [
          {
            id: "99999999",
            Active: 1,
            Brand: 'brandTest',
            Name: 'GDMTestVar',
            Company_Id: '1',
            Tecnology:'test',
          },
        ],
        updated: [],
        deleted: [],
      },
      /* noteapp: {
        created: [
          {
            id: '1',
            Active: 1,
            Note: null,
            CreatedDate: "4/22/2021 11:51:52 PM",
            SiteUser_Id: "3",
            FieldMap_Id: "1",
          },
        ],
        updated: [],
        deleted: [],
      },
      fieldmapapp: {
        created: [
          {
            id: "1",
            QRCode: "123",
            Range: "1",
            Row: "1",
            Sequence: 1,
            PlotLocation_Id: "1",
            Variety_Id: "1",
            Rep: 1,
            Active: 1,
            Test: "...",
            CreatedDate: "1/27/2022 15:51:52 PM",
            LastModifiedDate: "1/27/2022 15:51:52 PM",
          },
        ],
        updated: [],
        deleted: [],
      } */
      companyapp: {
        created: [
          {
            id: "1",
            Active: 1,
            Name: "CompanyConId1Test",
          },
        ],
        updated: [],
        deleted: [],
      },
      siteuserapp: {
        created: [
          {
            id: '2',
            Has_accepted_terms: 1,
            Cadastro_pela_primeira_vez: 0,
            Active: 1,
            Name: 'Franco',
            Email: 'franco.mendoza@recursiva.com.ar',
            Password: '123456',
            Company_Id: '1',
          },
        ],
        updated: [],
        deleted: [],
      },
      /* notes: {
        created: [],
        updated: [
          { id: 'tttt', name: 'Buy eggs' },
        ],
        deleted: [],
      } */
    };

    const changesParaMyNotes = {
      noteapp: {
        created: [
          {
            id: '1',
            Active: 1,
            Note: '[{"type":"text","content":"This is a comment"}]',
            SiteUser_Id: "3",
            FieldMap_Id: "2",
            CreatedDate: "4/22/2021 11:51:52 PM",
          },
        ],
        updated: [],
        deleted: [],
      },
      fieldmapapp: {
        created: [
          {
            id: "2",
            Active: 1,
            QRCode: "20",
            Range: 1, // use
            Row: 2,// use
            Sequence: 2,
            PlotLocation_Id: "1", //Cambiar
            Variety_Id: "9",
            rep: null, // use
            Test: "T1",
            CreatedDate: null,
            LastModiciedDate: "2021-04-16 22:53:40"
          },
        ],
        updated: [],
        deleted: [],
      },
      notexrangexrating: {
        created: [
          { id: "1", Note_Id: "1", RangeXRating_Id: "1", Value: "N/A" },
          { id: "2", Note_Id: "1", RangeXRating_Id: "5", Value: "N/A" }
        ],
        updated: [],
        deleted: [],
      },
      rangexrating: {
        created: [
          { id: "1", Range_Id: "1", Default: null, CropCRating_Id: "1" },
          { id: "5", Range_Id: "1", Default: null, CropCRating_Id: "3" }
        ],
        updated: [],
        deleted: [],
      },
      cropxratingapp: {
        created: [
          { id:"1", Crop_Id: "1", Rating_Id: "1" },
          { id:"3", Crop_Id: "1", Rating_Id: "6" },
        ],
        updated: [],
        deleted: [],
      },
      cropapp: {
        created: [
          {id: "1", Name: "Soybean"},
          {id: "2", Name: "Corn"},
        ],
        updated: [],
        deleted: [],
      },
      ratingapp: {
        created: [
          {id: "1", Name: "Eye Appeal", isOneScore: 0},
          {id: "6", Name: "Plant Stand", isOneScore: 0},
        ],
        updated: [],
        deleted: [],
      },
    }

    const addVatiety = {
      varietyapp: {
        created: [
          {
            id: '9',
            Active: 1,
            Tecnology: 'Conventional',
            Brand: 'GDM',
            Name: 'GDM21CO2',
            Launch_Season: '2022',
            Company_Id: '1',
          },
        ],
        updated: [],
        deleted: [],
      },
    }
    

    res.send({
      changes: addVatiety, 
      timestamp: 1644413040,
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
}
