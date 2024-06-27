import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';

function LinearRegressionComponent() {
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    async function trainModel() {
      // Prepare data
      const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
      const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

      // Create a sequential model
      const model = tf.sequential();
      model.add(tf.layers.dense({units: 1, inputShape: [1]}));

      // Compile the model
      model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});

      // Train the model
      await model.fit(xs, ys, {epochs: 100});

      // Make a prediction
      const output = model.predict(tf.tensor2d([5], [1, 1]));
      setPrediction(output.dataSync()[0]);
    }

    trainModel();
  }, []);

  return (
    <div>
      <h2>Linear Regression Prediction</h2>
      {prediction ? <p>Prediction: {prediction}</p> : <p>Training...</p>}
    </div>
  );
}

export default LinearRegressionComponent;