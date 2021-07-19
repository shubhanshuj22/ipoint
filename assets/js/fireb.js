// firebase.auth().languageCode = 'it';

window.onload=function(){
    var firebaseConfig = {
        apiKey: "AIzaSyAgc1_PY8ValY7rKS6_1tboT4CWe3oTryg",
        authDomain: "ipoint-6009a.firebaseapp.com",
        databaseURL: "https://ipoint-6009a.firebaseio.com",
        projectId: "ipoint-6009a",
        storageBucket: "ipoint-6009a.appspot.com",
        messagingSenderId: "462566361422",
        appId: "1:462566361422:web:88b495b85a2bb87809b61f",
        measurementId: "G-H1SJM4NQNG",
      };
      firebase.initializeApp(firebaseConfig);
        // firebase.analytics();

  
    render();
}

function render(){

    firebase.auth().languageCode = 'it';
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptchacontainer');
    
    recaptchaVerifier.render();
}
