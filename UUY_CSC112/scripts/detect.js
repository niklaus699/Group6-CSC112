function detectDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for mobile user agents
    const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

    // Get the body element
    const body = document.body;
    const deviceTypeElement = document.getElementById("device-type");

    if (isMobile) {
        body.classList.add("mobile");
        deviceTypeElement.textContent = "You are using a mobile device.";
    } else {
        body.classList.add("desktop");
        deviceTypeElement.textContent = "You are using a desktop device.";
    }
}