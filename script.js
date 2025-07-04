document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch("https://awaiszegham.app.n8n.cloud/webhook/481ea581-172f-47f2-943f-44f75ab0f979/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Form submitted successfully!');
        document.getElementById("myForm").reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
});
