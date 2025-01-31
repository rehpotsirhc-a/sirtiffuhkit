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

    document.getElementById('certificate').style.display = 'block';
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