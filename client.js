$(document).ready(function() {
    $('#decodeButton').click(function() {
        let jsonString = document.getElementById('fileContents').value; // Replace with your actual data

        $.post('http://<your-device-ip-address>:3000/decode', { data: jsonString }, function(response) {
            // The server should respond with the decoded data
            document.getElementById('decodedContents').value = response;
        });
    });
});