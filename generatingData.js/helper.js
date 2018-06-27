const fs = require('fs');

// for ref Amenities

const rng = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateRefAmenities = (start, end) => {
  const dataRefAmenities = [];
  // generate headers
  // dataRefAmenities.push('id, category, subcategory, comments\n');
  // generate values
  const categoryChoices = ['Godard irony asymmetrical tbh brunch tousled', 'You probably havent heard of them man bun pickled crucifix tbh', 'vice snackwave swag vinyl mixtape four loko franzen cornhole retro viral', 'Health goth mlkshk waistcoat man bun bitters tofu neutra tote bag cloud bread'];
  const subcategoryChoices = ['church-key hashtag sartorial asymmetrical biodiesel kickstarter semiotics deep v cloud bread keffiyeh wolf hoodie', 'kogi synth edison bulb meggings microdosing butcher venmo', 'artisan sustainable thundercats four dollar toast cronut coloring book bicycle rights poutine', 'Lomo yuccie vinyl kinfolk tumblr williamsburg franzen locavore blog unicorn gastropub chillwave'];
  const commentsChoices = ['Yuccie synth salvia bicycle rights edison bulb austin shaman fingerstache tattooed retro', 'Taxidermy wolf street art pop-up air plant mlkshk cred freegan kombucha mustache viral chia', 'Keytar VHS twee mumblecore vice kickstarter. Tousled small batch normcore', 'IPhone synth sriracha austin seitan mixtape cronut before they sold out ennui neutra live-edge vice'];
  const generateRandomRefAmenities = () => {
    for (let i = start; i < end; i++) {
      dataRefAmenities.push(`${i + 1}, ${categoryChoices[rng(0,4)]}, ${subcategoryChoices[rng(0,4)]} ,${commentsChoices[rng(0,4)]}\n`);
    }
  }
  generateRandomRefAmenities()

  return dataRefAmenities.join('');
}

// //for tble amenities

const generateTbleAmenities = (start, end) => {
  const dataTbleAmenities = [];
    // make random shit for amenities
    //id, listingid, pictogramid,  category, subcategory, additional comments
    const categoryChoices = ['Pabst VHS before they sold out freegan poke man braid sustainable. DIY ', 'raclette bespoke chicharrones kickstarter asymmetrical lyft', 'Vegan prism taiyaki pabst heirloom gluten', 'DIY readymade tumblr YOLO salvia. Sriracha portland food truck brunch '];
    const subcategoryChoices = ['Pabst VHS before they sold out freegan poke', 'Asymmetrical succulents disrupt green juice narwhal', 'Skateboard heirloom activated charcoal austin cliche literally four dollar toast', 'Asymmetrical succulents disrupt green juice narwhal poutine bitters gentrify pour-over pinterest etsy. Vaporware freegan ramps '];
    const additionalComments = ['Pickled edison bulb prism gentrify flexitarian organic cred asymmetrical. Irony selfies put a bird on it poke', 'subway tile palo santo dreamcatcher 8-bit tilde yuccie before they sold out edison bulb activated charcoal kitsch hammock. Narwhal brooklyn crucifix letterpress adaptogen taxidermy air plant bicycle right', 'Green juice try-hard art party waistcoat craft beer aesthetic. Tumeric woke bitters plaid direct trade asymmetrical pok pok 90s tofu', 'Whatever cliche before they sold out lyft fixie fanny pack snackwave. Skateboard heirloom activated charcoal austin cliche literally four dollar toast'];
  const generateRandomTbleAmeities = () =>{
    for (let i = start; i < end; i++) {
      dataTbleAmenities.push(`${i + 1}, ${i + 1},${i + 1} ,${categoryChoices[rng(0,4)]} ,${subcategoryChoices[rng(0,4)]} , ${additionalComments[rng(0,4)]}\n`);
    }
  }
  generateRandomTbleAmeities()

  return dataTbleAmenities.join('');
};

//for dataOverview fun fun fub



const generateDataOverview = (start, end) => {
  const dataOverview = [];
  const summarychoices = ['Yuccie helvetica meditation', 'Chicharrones kale chips wolf squid', 'lumbersexual vegan lyft aesthetic' ,'mug VHS venmo blog ']
  const spacechoices = ['Helvetica thundercats palo santo', 'Schlitz selfies art party ', '3 wolf moon cronut locavore', 'Migas food truck you probably'];
  const accesschoices = ['pok pok', 'Quinoa banh mi shaman', ' Four loko raclette ', 'helvetica plaid organic seitan'];
  const interactionschoices = ['toast aesthetic polaroid', 'Typewriter locavore blog', 'readymade typewriter synth', 'ethical 3 wolf moon'];
  const tonotechoices = ['Keytar hashtag post-ironic tofu ', 'Actually drinking vinegar narwhal butcher shaman', 'meh disrupt YOLO godard pinterest skateboard', 'echo park farm'];
  const interest1choices = ['Fixie twee kitsch bitters health', 'Offal master cleanse tofu', 'IPhone blog direct trade before', 'fanny pack bushwick flannel succulents'];
  const interest2choices = ['Migas food truck you', 'charcoal shaman ',' DIY vexillologist health goth portland woke ', 'IPhone blog direct trade before they sold out green juice'];
  const interest3choices = ['Narwhal asymmetrical actually flannel deep v', 'Fixie twee kitsch bitters health goth DIY', 'before they sold out live-edge lomo ', 'Marfa copper mug narwhal'];
  const ruleschoices = ['semiotics blue bottle craft beer', 'Humblebrag retro gastropub fashion ', 'biodiesel unicorn tofu knausgaard trust fund', 'locavore brunch vexillologist coloring book'];



  // generate headers
  //dataOverview.push('id, summary, space, access, interactions, tonote, interest1, interest2, interest3, rules, allowedguests, beds, bedrooms, baths\n');
  // generate values
  const generateRandomDataOverview = () => {
    for (let i = start; i < end; i++) {
      dataOverview.push(`${i}, ${summarychoices[rng(0,4)]}, ${spacechoices[rng(0,4)]} , ${accesschoices[rng(0,4)]} ,${interactionschoices[rng(0,4)]} ,${tonotechoices[rng(0,4)]},${interest1choices[rng(0,4)]}, ${interest2choices[rng(0,4)]}, ${interest3choices[rng(0,4)]}, ${ruleschoices[rng(0,4)]}, ${rng(0,10)}, ${rng(0,10)}, ${rng(0,10)}, ${rng(0,10)}\n`);
    }
  }
  generateRandomDataOverview();

  return dataOverview.join('');
};

const generateDataTblePictograms = (start, end) => {
  const dataTblePictograms = [];
  // generate headers
  // dataTblePictograms.push('id, imgname, imgdata\n');
  // generate values

  const generatePictograms = () => {
    for (let i = start; i < end; i++) {
      dataTblePictograms.push(`${i + 1}, pic, nan\n`);
    }
  }
  generatePictograms()

  return dataTblePictograms.join('');
};

const generateDataSleepingArrangments = (start, end) => {
  const dataSleepingArrangments = [];
  // generate headers
  // dataSleepingArrangments.push('id, listingid, roomname, noofbeds \n');
  // generate values

  const roomChoice = ['bedroom', 'den', 'bathroom', 'kitchen']

  const generateRandomDataSleeping = () => {
    for (let i = start; i < end; i++) {
      dataSleepingArrangments.push(`${i + 1}, ${i + 1} , ${roomChoice[rng(0,4)]}, ${rng(0,7)}\n`);
    }
  }
  generateRandomDataSleeping();

  return dataSleepingArrangments.join('');
};

const appendToRefAmenities = () => {
  var start = 0;
  var end = 1000000;
  if (end > 10000000) {
    return;
  }

  const appendFile = () => {
    console.time('current load time is');
    fs.appendFile('refAmenities.csv', generateRefAmenities(start, end), (e) => {
      if (e) {
        console.log('we recieved an error:', e);
      }

      console.log('we uploaded a batch of 1mil  to the refAmenities csv: current index is', start);
      start += 1000000;
      end += 1000000;
      if (end > 10000000) {
        return;
      }
      appendFile();
    });
  };

  if (end < 10000000) {
    appendFile();
  }
      console.timeEnd('current load time is');
};


//appendToRefAmenities();

//for TbleAmenities csv
const appendToTbleAmenities = () => {
  var start = 0;
  var end = 1000000;
  if (end > 10000000) {
    return;
  }

  const appendFile = () => {
    console.time('current load time is');
    fs.appendFile('tbleAmenities.csv', generateTbleAmenities(start, end), (e) => {
      if (e) {
        console.log('we recieved an error:', e);
      }

      console.log('we uploaded a batch of 1mil  to the tbleAmenities csv: current index is', start);
      start += 1000000;
      end += 1000000;
      if (end > 10000000) {
        return;
      }
      appendFile();
    });
  };

  if (end < 10000000) {
    appendFile();
  }
    console.timeEnd('current load time is');
};


appendToTbleAmenities();


// // for writeStreamTbleListingOverviw csv

const appendToOverview = () => {
  var start = 0;
  var end = 1000000;
  if (end > 10000000) {
    return;
  }

  const appendFile = () => {
    console.time('current load time is');
    fs.appendFile('tbleListingOverview.csv', generateDataOverview(start, end), (e) => {
      if (e) {
        console.log('we recieved an error:', e);
      }

      console.log('we uploaded a batch of 1mil  to the csv: current index is', start);
      start += 1000000;
      end += 1000000;
      if (end > 10000000) {
        return;
      }
      appendFile();
    });
  };

  if (end < 10000000) {
    appendFile();
  }
      console.timeEnd('current load time is');
};


//appendToOverview();


// // // // for tble pictograms csv

const appendToPictographs = () => {
  var start = 0;
  var end = 1000000;
  if (end > 10000000) {
    return;
  }

  const appendFile = () => {
    console.time('current load time is');
    fs.appendFile('tblePictograms.csv', generateDataTblePictograms(start, end), (e) => {
      if (e) {
        console.log('we recieved an error:', e);
      }

      console.log('we uploaded a batch of 1mil  to the refAmenities csv: current index is', start);
      start += 1000000;
      end += 1000000;
      if (end > 10000000) {
        return;
      }
      appendFile();
    });
  };

  if (end < 10000000) {
    appendFile();
  }
      console.timeEnd('current load time is');
};


//appendToPictographs();

// for tableSleepingtable cvs

const appendToSleepingtable = () => {
  var start = 0;
  var end = 1000000;
  if (end > 10000000) {
    return;
  }

  const appendFile = () => {
    console.time('current load time is');
    fs.appendFile('tbleSleepingArrangements.csv', generateDataSleepingArrangments(start, end), (e) => {
      if (e) {
        console.log('we recieved an error:', e);
      }

      console.log('we uploaded a batch of 1 mil  to the tbleSleepingArrangements csv: current index is', start);
      start += 1000000;
      end += 1000000;
      if (end > 10000000) {
        return;
      }
      appendFile();
    });
  };

  if (end < 10000000) {
    appendFile();
  }
      console.timeEnd('current load time is');
};

//appendToSleepingtable();
