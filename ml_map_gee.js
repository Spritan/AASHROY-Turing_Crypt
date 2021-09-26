//roi
var countries = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017');
var roi = countries.filter(ee.Filter.eq('country_na', 'India'));
Map.addLayer(roi, {}, 'India',false);

//Load sentinel data
var image = ee.ImageCollection("COPERNICUS/S2_SR")
.filterDate('2020-01-01','2020-01-30')
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',5))
.filterBounds(roi)
.median();
  
var visParamsTrue = {bands: ['B4', 'B3', 'B2'], min: 0, max: 2500, gamma: 1.1};
Map.addLayer(image.clip(roi), visParamsTrue, 'Sentinal 2020');
Map.centerObject(roi, 8);

//Create training data
var training = slum.merge(nonslum);
print (training);

var label = 'class'
var bands = ['B2', 'B3', "B4", "B8"];
var input =image.select(bands);

//overlay the points on the imagery to get training
var trainImage = input.sampleRegions({
  collection : training,
  properties: [label],
  scale  : 30
});


var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random',0.8));
var testSet = trainingData.filter(ee.Filter.greaterThanOrEquals('random',0.8));

//Classification Model
var classifier = ee.Classifier.smileCart().train(trainSet,label,bands);

//classify image
var calssified = input.classify(classifier);

//Define palette
var landcoverPalette = [
  "red",
  "blue"
  
  
  
  ];
  Map.addLayer(calssified.clip(roi), {palette: landcoverPalette, min:0, max:1},'Classification CART');
  
  //accuracy 
  var confusionMatrix = ee.ConfusionMatrix(testSet.classify(classifier)
  .errorMatrix({
    actual: 'class',
    predicted : 'classification'
  }));
  print('Confusion Matrix: ',confusionMatrix);
  print('Overall acuracy: ',  confusionMatrix.accuracy());

// got an accuracy of 89%