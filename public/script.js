const auth = firebase.auth();

const whenSignedIn = document.getElementById("when-signed-in");
const whenSignedOut = document.getElementById("when-signed-out");

const signInBtn = document.getElementById("sign-in-btn");
const signOutBtn = document.getElementById("sign-out-btn");

const userDetails = document.getElementById("user-details");

const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged((user) => {
  if (user) {
    // signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
  } else {
    // not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = "";
  }
});

function itemSearch() {
  const searchInput = document.getElementById("search-input");
  let input = searchInput.value;
  let input = input.toLowerCase();
  if (input === "home") {
    window.location.href = "#home";
  } else if (input === "collectibles" || input === "art") {
    window.location.href = "#collectibles-art";
  } else if (input === "fashion") {
    window.location.href = "#fashion";
  } else if (input === "home" || input === "garden") {
    window.location.href = "#home-garden";
  } else if (input === "music") {
    window.location.href = "#music";
  }
}
document.getElementById("search-input").addEventListener("input", itemSearch);
