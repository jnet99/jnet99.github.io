var firebaseConfig = {
  apiKey: "AIzaSyAfvq8SIwArYawK9wIrBs8dTOLBB-3RQ-Y",
  authDomain: "cluborganization-be91e.firebaseapp.com",
  projectId: "cluborganization-be91e",
  storageBucket: "cluborganization-be91e.appspot.com",
  messagingSenderId: "687584847454",
  appId: "1:687584847454:web:3235d6c71a55a28436b6cf"
};
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  //Variable to access database collection
  const db = firestore.collection("formClub");
  
  //Get Submit Form
  let submitButton = document.getElementById("submit");
  let backButton = document.getElementById("back");
  let homeButton = document.getElementById("home");

  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
  
    window.location.href = 'home.html';
  });

  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    window.location.href = "Market.html";
  });
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();
  
    //Get Form Values
    let category = document.getElementById("category").value;
    let title = document.getElementById("title").value;
    let details = document.getElementById("details").value;
  
    firestore
      .collection("formClub")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          const fn = doc.data().fname;
          if (firstName === fn) {
            console.log("Already Exists");
          }
  
          // console.log("data", doc.data().fname);
        });
      });
    //Save Form Data To Firebase
    db.doc()
      .set({
        category: category,
        title: title,
        details: details,
      })
      .then(() => { })
      .catch((error) => {
        console.log(error);
      });
  
    //alert
    alert("Club is now registered");
  
    //clear form after submission
    function clearForm() {
      document.getElementById("clearFrom").reset();
    }
    clearForm()
  });
  