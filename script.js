function saveDocument() {
    const documentName = document.getElementById('documentName').value;
    const documentContent = document.getElementById('documentContent').value;

    if (documentName && documentContent) {
        localStorage.setItem(documentName, documentContent);
        alert('Document saved successfully!');
    } else {
        alert('Please enter a document name and content.');
    }
}

function loadDocument() {
    const documentName = document.getElementById('documentName').value;
    const storedDocument = localStorage.getItem(documentName);

    if (storedDocument) {
        document.getElementById('documentContent').value = storedDocument;
        alert('Document loaded successfully!');
    } else {
        alert('Document not found. Please check the document name.');
    }
}
