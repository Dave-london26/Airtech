/* =========================
   LOAD USER
========================= */

const savedUser =
    localStorage.getItem("aerotechUser");


if (savedUser) {

    const user =
        JSON.parse(savedUser);


    const userName =
        document.getElementById("userName");


    if (userName) {

        userName.textContent =
            user.name || "Customer";

    }

}


/* =========================
   CHAT
========================= */

const openChat =
    document.getElementById("openChat");

const chat =
    document.getElementById("chat");

const sendBtn =
    document.getElementById("sendBtn");

const chatInput =
    document.getElementById("chatInput");

const messages =
    document.getElementById("messages");


openChat.addEventListener(
    "click",
    function() {

        chat.classList.toggle("hidden");

    }
);


function sendMessage() {

    const message =
        chatInput.value.trim();


    if (!message) {
        return;
    }


    /* CUSTOMER MESSAGE */

    const userMessage =
        document.createElement("div");


    userMessage.className =
        "chat-message user";


    userMessage.textContent =
        message;


    messages.appendChild(
        userMessage
    );


    chatInput.value = "";


    /* AI RESPONSE */

    setTimeout(
        function() {

            const botMessage =
                document.createElement("div");


            botMessage.className =
                "chat-message bot";


            let response =
                "Thanks for contacting AeroTech. Our team will review your message and get back to you.";


            const lower =
                message.toLowerCase();


            if (
                lower.includes("website") ||
                lower.includes("web")
            ) {

                response =
                    "Yes! AeroTech provides website development services. Tell me what type of website you want to build.";

            }


            else if (
                lower.includes("logo") ||
                lower.includes("design")
            ) {

                response =
                    "We provide graphic design, branding and logo design services. You can request a design project from your dashboard.";

            }


            else if (
                lower.includes("price") ||
                lower.includes("cost")
            ) {

                response =
                    "Pricing depends on your project requirements. Send us the details of what you want to build and our team can provide a quote.";

            }


            else if (
                lower.includes("ai")
            ) {

                response =
                    "AeroTech can also build AI-powered assistants and automation systems for businesses.";

            }


            botMessage.textContent =
                response;


            messages.appendChild(
                botMessage
            );


            messages.scrollTop =
                messages.scrollHeight;

        },
        600
    );

}


sendBtn.addEventListener(
    "click",
    sendMessage
);


chatInput.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter"
        ) {

            sendMessage();

        }

    }
);