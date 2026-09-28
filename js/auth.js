const signupForm =
    document.getElementById("signupForm");

const loginForm =
    document.getElementById("loginForm");

const formMessage =
    document.getElementById("formMessage");


/* =========================
   SIGN UP
========================= */

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const formData =
                new FormData(signupForm);


            const user = {

                name:
                    formData.get("name"),

                email:
                    formData.get("email"),

                phone:
                    formData.get("phone")

            };


            localStorage.setItem(
                "aerotechUser",
                JSON.stringify(user)
            );


            formMessage.textContent =
                "Account created successfully!";


            setTimeout(function() {

                window.location.href =
                    "dashboard.html";

            }, 800);

        }
    );

}


/* =========================
   LOGIN
========================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const identity =
                loginForm.elements.identity.value;


            const user = {

                name:
                    "Customer",

                email:
                    identity

            };


            localStorage.setItem(
                "aerotechUser",
                JSON.stringify(user)
            );


            formMessage.textContent =
                "Login successful!";


            setTimeout(function() {

                window.location.href =
                    "dashboard.html";

            }, 800);

        }
    );

}