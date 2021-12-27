const firebaseConfig = {
    apiKey: "AIzaSyBDej1U4kCcWSlXBOwI_L5P_mpsiut04LI",
    authDomain: "pro-94-5dbe7.firebaseapp.com",
    databaseURL: "https://pro-94-5dbe7-default-rtdb.firebaseio.com",
    projectId: "pro-94-5dbe7",
    storageBucket: "pro-94-5dbe7.appspot.com",
    messagingSenderId: "755362265275",
    appId: "1:755362265275:web:f68c8a014fd8a85449119e"
};
user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";