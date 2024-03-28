const input = document.getElementById("input-image");
const removeButton = document.getElementById("remove-background");
const downloadLink = document.getElementById("download-link");

input.addEventListener("change", (event) => {
  const image = document.getElementById("image");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  // Remove the image display from the image container and show the canvas
  image.style.display = "none";
  canvas.style.display = "block";

  // Set the canvas size to match the image
  const imageWidth = image.width;
  const imageHeight = image.height;
  canvas.width = imageWidth;
  canvas.height = imageHeight;

  // Draw the image on the canvas
  context.drawImage(image, 0, 0, imageWidth, imageHeight);

  // Remove the background from the image
  removeBackground(canvas, context, imageWidth, imageHeight);

  // Set the image to the modified canvas
  image.src = canvas.toDataURL();

  // Hide the canvas and show the image
  canvas.style.display = "none";
  image.style.display = "block";
});

removeButton.addEventListener("click", () => {
  const image = document.getElementById("image");
  // Remove the background from the image
  removeBackground(image.parentElement.querySelector("canvas"), image.parentElement.querySelector("canvas").getContext("2d"), image.naturalWidth, image.naturalHeight);
  // Set the image to the modified canvas
  image.src = image.parentElement.querySelector("canvas").toDataURL();
});

downloadLink.addEventListener("click", () => {
  const image = document.getElementById("image");
  // Create a new download link and add it to the page
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "image.png";
  link.click();
});

function removeBackground(canvas, context, imageWidth, imageHeight) {
  // Create a new canvas to use for extracting the pixels
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = imageWidth;
  tempCanvas.height = imageHeight;
  const tempContext = tempCanvas.getContext("2d");

  // Draw the canvas on the new canvas
  tempContext.drawImage(canvas, 0, 0, imageWidth, imageHeight);

  // Loop through the pixels in the image
}