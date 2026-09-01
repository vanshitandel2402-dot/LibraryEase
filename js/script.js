// ================= BOOK AVAILABILITY =================

const bookResults = {

    java: {
        status: "Available",
        message: "Java Programming is currently available."
    },

    dbms: {
        status: "Available",
        message: "Database Management Systems is currently available."
    },

    network: {
        status: "Limited",
        message: "Computer Networks has limited copies."
    },

    ds: {
        status: "Available",
        message: "Data Structures is currently available."
    },

    os: {
        status: "Requested",
        message: "Operating Systems is currently requested."
    }

};


// Check Book Function

function checkBook() {

    const value =
        document.getElementById("bookSelect").value;

    const box =
        document.getElementById("resultBox");


    box.classList.remove("d-none");


    if (value === "") {

        box.innerHTML =
            "<strong>Please select a book first.</strong>";

        return;
    }


    const result = bookResults[value];


    box.innerHTML = `
        <h5>Status: ${result.status}</h5>

        <p class="mb-0">
            ${result.message}
        </p>
    `;
}



// ================= BOOK REQUEST FORM =================

const requestForm =
    document.getElementById("requestForm");


if (requestForm) {

    requestForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const message =
                document.getElementById(
                    "requestMessage"
                );


            message.classList.remove("d-none");


            requestForm.reset();


            setTimeout(function() {

                message.classList.add("d-none");

            }, 4000);

        }
    );

}
