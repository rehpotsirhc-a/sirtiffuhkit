function redirectToPage() {
    const type = document.getElementById('type').value;
    let url = '';

    if (type === 'casual') {
        url = 'index.html';
    } else if (type === 'joke') {
        url = 'joke.html';
    } else if (type === 'professional') {
        url = 'pro.html';
    }

    window.location.href = `${url}?type=${type}`;
}

function displaySelectedType() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type) {
        document.getElementById('selectedType').innerText = `Selected Certificate: ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    }
}

function generateCertificate() {
    const name = document.getElementById('name').value;
    const title = document.getElementById('title').value;
    const issuer = document.getElementById('issuer').value;
    const reason = document.getElementById('reason').value;
    const date = new Date().toLocaleDateString();

    document.getElementById('certName').innerText = name;
    document.getElementById('certTitle').innerText = title;
    document.getElementById('certReason').innerText = reason;
    document.getElementById('certDate').innerText = date;
    document.getElementById('certIssuer').innerText = issuer;
    document.getElementById('certHeader').innerText = `${title} Certification`;

    certificate.style.display = 'block';
    document.getElementById('certForm').style.display = 'none';
    document.getElementById('returnButton').style.display = 'block';
    document.getElementById('printButton').style.display = 'block';
}

function returnToForm() {
    document.getElementById('certificate').style.display = 'none';
    document.getElementById('certForm').style.display = 'block';
    document.getElementById('returnButton').style.display = 'none';
    document.getElementById('printButton').style.display = 'none';
}

function printCertificate() {
    window.print();
}

window.onload = displaySelectedType;