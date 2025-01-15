function updateCSharpProgressText() {
    const progressBar = document.querySelector('.progress');
    const barBounds = document.querySelector('.bar');
    const progressText = document.querySelector('.progress-text p');
    const progressBarStyle = window.getComputedStyle(progressBar);
    const barBoundsStyle = window.getComputedStyle(barBounds);

    const maxWidth = parseFloat(barBoundsStyle.getPropertyValue('width')); // Get the computed width of the bar in pixels
    const width = parseFloat(progressBarStyle.getPropertyValue('width')); // Get the current width of the progress bar in pixels

    const percentage = (width / maxWidth) * 100; // Calculate the percentage width of the progress bar

    progressText.textContent = `${percentage.toFixed(0)}%`; // Update the text content of the paragraph with percentage
}

function updateJavascriptProgressText() {
    const progressBar = document.querySelector('#js-progress');
    const barBounds = document.querySelector('.bar');
    const progressText = document.querySelector('#js-progress-text p');
    const progressBarStyle = window.getComputedStyle(progressBar);
    const barBoundsStyle = window.getComputedStyle(barBounds);

    const maxWidth = parseFloat(barBoundsStyle.getPropertyValue('width')); // Get the computed width of the bar in pixels
    const width = parseFloat(progressBarStyle.getPropertyValue('width')); // Get the current width of the progress bar in pixels

    const percentage = (width / maxWidth) * 100; // Calculate the percentage width of the progress bar

    progressText.textContent = `${percentage.toFixed(0)}%`; // Update the text content of the paragraph with percentage 
}

function updateHTMLProgressText() {
    const progressBar = document.querySelector('#html-progress');
    const barBounds = document.querySelector('.bar');
    const progressText = document.querySelector('#html-progress-text p');
    const progressBarStyle = window.getComputedStyle(progressBar);
    const barBoundsStyle = window.getComputedStyle(barBounds);

    const maxWidth = parseFloat(barBoundsStyle.getPropertyValue('width')); // Get the computed width of the bar in pixels
    const width = parseFloat(progressBarStyle.getPropertyValue('width')); // Get the current width of the progress bar in pixels

    const percentage = (width / maxWidth) * 100; // Calculate the percentage width of the progress bar

    progressText.textContent = `${percentage.toFixed(0)}%`; // Update the text content of the paragraph with percentage 
}

function updateCSSProgressText() {
    const progressBar = document.querySelector('#css-progress');
    const barBounds = document.querySelector('.bar');
    const progressText = document.querySelector('#css-progress-text p');
    const progressBarStyle = window.getComputedStyle(progressBar);
    const barBoundsStyle = window.getComputedStyle(barBounds);

    const maxWidth = parseFloat(barBoundsStyle.getPropertyValue('width')); // Get the computed width of the bar in pixels
    const width = parseFloat(progressBarStyle.getPropertyValue('width')); // Get the current width of the progress bar in pixels

    const percentage = (width / maxWidth) * 100; // Calculate the percentage width of the progress bar

    progressText.textContent = `${percentage.toFixed(0)}%`; // Update the text content of the paragraph with percentage 
}

function updateJavaProgressText() {
    const progressBar = document.querySelector('#java-progress');
    const barBounds = document.querySelector('.bar');
    const progressText = document.querySelector('#java-progress-text p');
    const progressBarStyle = window.getComputedStyle(progressBar);
    const barBoundsStyle = window.getComputedStyle(barBounds);

    const maxWidth = parseFloat(barBoundsStyle.getPropertyValue('width')); // Get the computed width of the bar in pixels
    const width = parseFloat(progressBarStyle.getPropertyValue('width')); // Get the current width of the progress bar in pixels

    const percentage = (width / maxWidth) * 100; // Calculate the percentage width of the progress bar

    progressText.textContent = `${percentage.toFixed(0)}%`; // Update the text content of the paragraph with percentage 
}

function updatePythonProgressText() {
    const progressBar = document.querySelector('#python-progress');
    const barBounds = document.querySelector('.bar');
    const progressText = document.querySelector('#python-progress-text p');
    const progressBarStyle = window.getComputedStyle(progressBar);
    const barBoundsStyle = window.getComputedStyle(barBounds);

    const maxWidth = parseFloat(barBoundsStyle.getPropertyValue('width')); // Get the computed width of the bar in pixels
    const width = parseFloat(progressBarStyle.getPropertyValue('width')); // Get the current width of the progress bar in pixels

    const percentage = (width / maxWidth) * 100; // Calculate the percentage width of the progress bar

    progressText.textContent = `${percentage.toFixed(0)}%`; // Update the text content of the paragraph with percentage 
}

// Example of setting an interval to update the progress text every second
setInterval(updateCSharpProgressText, 500);
setInterval(updateJavascriptProgressText, 500);
setInterval(updateHTMLProgressText, 500);
setInterval(updateCSSProgressText, 500);
setInterval(updateJavaProgressText, 500);
setInterval(updatePythonProgressText, 500);

