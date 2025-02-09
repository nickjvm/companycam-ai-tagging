import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

export const analyzeImage = async (imgElement: HTMLImageElement) => {
  const model = await mobilenet.load();
  const predictions = await model.classify(imgElement);
  return predictions.map((p) => p.className); // Extract class names as tags
};
