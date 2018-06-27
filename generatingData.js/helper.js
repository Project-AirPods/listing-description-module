const fs = require('fs');

// for ref Amenities

const generateRefAmenities = (start, end) => {
  const dataRefAmenities = [];
  // generate headers
  // dataRefAmenities.push('id, category, subcategory, comments\n');
  // generate values
  for (let i = start; i < end; i++) {
    dataRefAmenities.push(`${i}, vinegar palo, flexitarian ,fla croix\n`);
  }

  return dataRefAmenities.join('');
}

// for tble amenities

const generateTbleAmenities = (start, end) => {
  const dataTbleAmenities = [];
  // generate headers
  // dataTbleAmenities.push('id, listingid, pictogramid, category, subcategory, comments\n');
  // generate values
  for (let i = start; i < end; i++) {
    dataTbleAmenities.push(`${i}, ${i},${i} ,BikeLivesmatter ,Affogato ,fanny pack\n`);
  }

  return dataTbleAmenities.join('');
};

// for dataOverview

const generateDataOverview = (start, end) => {
  const dataOverview = [];
  // generate headers
  //dataOverview.push('id, summary, space, access, interactions, tonote, interest1, interest2, interest3, rules, allowedguests, beds, bedrooms, baths\n');
  // generate values
  for (let i = start; i < end; i++) {
    dataOverview.push(`${i}, umami,sold ,Allowed ,paleo ,Iceland ,snackwave, gastropub, banh mi, gentrify celiac, 3, 4, 2, 1\n`);
  }

  return dataOverview.join('');
};

const generateDataTblePictograms = (start, end) => {
  const dataTblePictograms = [];
  // generate headers
  // dataTblePictograms.push('id, imgname, imgdata\n');
  // generate values
  for (let i = start; i < end; i++) {
    dataTblePictograms.push(`${i}, pic${1}, https://s3-us-west-1.amazonaws.com/projectnomadhrsf96/obama.jpeg\n`);
  }

  return dataTblePictograms.join('');
};

const generateDataSleepingArrangments = (start, end) => {
  const dataSleepingArrangments = [];
  // generate headers
  // dataSleepingArrangments.push('id, listingid, roomname, noofbeds \n');
  // generate values
  for (let i = start; i < end; i++) {
    dataSleepingArrangments.push(`${i},${i} ,room${i}, 4\n`);
  }

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


appendToRefAmenities();

// for TbleAmenities csv
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


appendToOverview();


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


appendToPictographs();

// // for tableSleepingtable cvs

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

      console.log('we uploaded a batch of 1mil  to the tbleSleepingArrangements csv: current index is', start);
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

appendToSleepingtable();
