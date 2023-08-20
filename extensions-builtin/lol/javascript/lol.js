onUiLoaded(function () {

  // check if it is my birthday or not (10 july) (month is start on 0)
  const currDate = new Date();
  if (currDate.getDate() != 10 || currDate.getMonth() != 6) return;

  function createImageAndDialog() {
    const imageContainer = document.createElement('div');
    imageContainer.style.position = 'fixed';
    imageContainer.style.bottom = '0';
    imageContainer.style.left = '0';
    imageContainer.style.zIndex = '9999';
    imageContainer.style.cursor = 'pointer';
    imageContainer.innerHTML = `
    <span style="position: absolute; top: 0; right: 0; padding: 4px; background: rgba(0, 0, 0, 0.5); color: #fff; font-family: sans-serif; font-size: 12px; cursor: pointer;">x</span>
    <img id="blinkingImage" src="https://i.ibb.co/rdysjM7/miku-peek-1.webp" alt="Image" width="128px">
  `;
    // <img src="https://i.ibb.co/DY9MVrj/miku-peek-2.webp" alt="Image" width="128px">

    const dialog = document.createElement('dialog');
    dialog.style.maxWidth = '80%';
    dialog.style.width = '900px';
    dialog.style.height = '80%';
    dialog.style.overflow = 'auto';
    dialog.style.backgroundColor = 'black';
    dialog.style.padding = '10px';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.dataset.repo = 'NoCrypt/sd-webui-colab';
    script.dataset.repoId = 'R_kgDOIeH8OA';
    script.dataset.mapping = 'number';
    script.dataset.term = '30';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '0';
    script.dataset.inputPosition = 'bottom';
    script.dataset.theme = 'preferred_color_scheme';
    script.dataset.lang = 'en';
    script.dataset.loading = 'lazy';
    script.crossOrigin = 'anonymous';
    script.async = true;

    dialog.appendChild(script);

    document.body.appendChild(imageContainer);
    document.body.appendChild(dialog);

    // Show the dialog box when the image is clicked
    imageContainer.addEventListener('click', function () {
      dialog.showModal();
    });

    // Hide the image and dialog when the close button is clicked
    const closeButton = imageContainer.querySelector('span');
    closeButton.addEventListener('click', function () {
      imageContainer.style.display = 'none';
      dialog.close();
    });

    // Hide the dialog when clicked outside
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) {
        dialog.close();
      }
    });

    function blinkImage() {
      const blinkingImage = document.getElementById('blinkingImage');
      const images = [
        'https://i.ibb.co/DY9MVrj/miku-peek-2.webp',
        'https://i.ibb.co/rdysjM7/miku-peek-1.webp'
      ];

      blinkingImage.src = images[1]; // Open image

      const blinkDuration = 200; // Duration of blinking in milliseconds
      const blinkInterval = Math.random() * 5000 + 1000; // Random interval between 2s to 7s

      setTimeout(function () {
        blinkingImage.src = images[0]; // Close image
        setTimeout(function () {
          blinkingImage.src = images[1]; // Open image

          if (Math.random() < 0.3) {
            setTimeout(function () {
              blinkingImage.src = images[0]; // Close image
              setTimeout(blinkImage, blinkDuration);
            }, blinkDuration);
          } else {
            blinkImage();
          }

        }, blinkDuration);
      }, blinkInterval);
    }

    blinkImage();

  }

  // Call the function to create the image and dialog box
  createImageAndDialog();
})