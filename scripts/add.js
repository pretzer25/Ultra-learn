      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
    import { getDatabase, ref, set, update, get } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-database.js";
    import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAQYdEIrsksIn6Rye1TZ9ZoyrLHU6jfHg4",
      authDomain: "max-learn-b0415.firebaseapp.com",
      databaseURL: "https://max-learn-b0415-default-rtdb.firebaseio.com",
      projectId: "max-learn-b0415",
      storageBucket: "max-learn-b0415.appspot.com",
      messagingSenderId: "530326840871",
      appId: "1:530326840871:web:5bd013191209993b409002",
      measurementId: "G-EN6D2RRXHP"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const auth = getAuth(app);

function yessidt() {
      const updateFunds = async (uid, amount) => {
      const userRef = ref(database, `users/${uid}`);
      const snapshot = await get(userRef);
      const user = snapshot.val();
              const newFunds = user.funds + amount;
          update(userRef, { funds: newFunds });
          window.location.href = "/../";
      }
};
          
      onAuthStateChanged(auth, (user) => {
        
      if (user) {
yessidt()
      } else {
        alert('Oops! A problem with your user ID happened!');
      }

});
