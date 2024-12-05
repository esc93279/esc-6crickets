function isSufficientCameraSet(desiredRange, hardwareCameras) {
  // Extract the desired ranges
  const [desiredDistanceMin, desiredDistanceMax] =
    desiredRange.subject_distance;
  const [desiredLightMin, desiredLightMax] = desiredRange.light_level;

  // Initialize coverage trackers for distance and light levels
  let coveredDistance = new Set();
  let coveredLight = new Set();

  // Iterate through the hardware cameras to check their coverage
  for (const camera of hardwareCameras) {
    const [cameraDistanceMin, cameraDistanceMax] = camera.subject_distance;
    const [cameraLightMin, cameraLightMax] = camera.light_level;

    // Update the coverage trackers
    for (
      let i = Math.floor(cameraDistanceMin * 100);
      i <= Math.floor(cameraDistanceMax * 100);
      i++
    ) {
      coveredDistance.add(i);
    }
    for (let i = cameraLightMin; i <= cameraLightMax; i++) {
      coveredLight.add(i);
    }
  }

  // Create the desired coverage ranges
  const desiredDistanceRange = new Set();
  for (
    let i = Math.floor(desiredDistanceMin * 100);
    i <= Math.floor(desiredDistanceMax * 100);
    i++
  ) {
    desiredDistanceRange.add(i);
  }

  const desiredLightRange = new Set();
  for (let i = desiredLightMin; i <= desiredLightMax; i++) {
    desiredLightRange.add(i);
  }

  // Check if both distance and light ranges are fully covered
  const isDistanceCovered = [...desiredDistanceRange].every((val) =>
    coveredDistance.has(val)
  );
  const isLightCovered = [...desiredLightRange].every((val) =>
    coveredLight.has(val)
  );

  return isDistanceCovered && isLightCovered;
}

// Example Usage
const desiredCameraRange = {
  subject_distance: [0.5, 10], // meters
  light_level: [100, 1000], // lux
};

const hardwareCameras = [
  { subject_distance: [0.5, 2], light_level: [100, 300] },
  { subject_distance: [2, 10], light_level: [300, 1000] },
];

const result = isSufficientCameraSet(desiredCameraRange, hardwareCameras);
console.log("Is the hardware camera set sufficient?", result);
