// Function to check if the user is on a mobile device
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
    );
}
export default isMobile