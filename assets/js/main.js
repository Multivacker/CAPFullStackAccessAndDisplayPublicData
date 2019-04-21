if (document.getElementById('senate-data')) {
    createSenateTable();
} else if (document.getElementById('house-data')) {
    createHouseTable();
}

function createSenateTable() {
    var formatedTable = addTableToHTML(dataSenate.results[0].members);
    var senateTable = document.getElementById('senate-data');
    senateTable.innerHTML = formatedTable;

}

function createHouseTable() {
    var formatedTable = addTableToHTML(dataHouse.results[0].members);
    var houseTable = document.getElementById('house-data');
    houseTable.innerHTML = formatedTable;

}

function addTableToHTML(membersArray) {
    var table = '<thead class="thead-light"><tr><th>Name</th><th>Party Affilication</th><th>State</th><th>Years in Office</th><th>%votes w/party</th></tr></thead>';
    table += '<tbody>';
    membersArray.map(function (member) {
        table += '<tr>';
        if (member.middle_name === null) {
            table += '<td>' + member.first_name + ' ' + member.last_name + '</td>';
        } else {
            table += '<td>' + member.first_name + ' ' + member.middle_name + ' ' + member.last_name + '</a></td>';
        }
        table += '<td class="party">' + member.party + '</td>';

        table += '<td class="state">' + member.state + '</td>';

        table += '<td>' + member.seniority + '</td>';

        table += '<td> % ' + member.votes_with_party_pct + '</td>';

        table += '</tr>';
    });
    table += '</tbody>';
    return table;
}

document.getElementById("myHeader").innerHTML =
    '<div class=\"container pt-3\">' +
    '<div class=\"row\">' +
    '<div class=\"col sm-2\">' +
    '<a href=\"home.html\"><img src=\"https://i.postimg.cc/sxYS1DR7/TGIF-Logo.png\" class=\"float-left img-fluid\" style=\"width:180px;\"></a></div>' +
    '<div class=\"col sm-8\">' +
    '<p></p>' +
    '</div>' +
    '<div class=\"col sm-2 align-self-center\">' +
    '<p class=\"float-right\"><i class=\"fas fa-envelope\"></i><a href=\"mailto:info@tgif.net?Subject=Hello%20again\"><b> info@tgif.net</b></a></p>' +
    '</div>' +
    '</div>' +
    '</div>';

document.getElementById("myNav").innerHTML =
    "<nav class=\"container navbar navbar-inverse text-dark bg-light border border-primary mt-3\">" +
    "<div class=\"container-fluid x-auto\" style=\"height:50px\">" +
    "<ul>" +
    "<li class=\"active\" style=\"display: inline; margin-right: 20px;margin-left: 20px;\"><a href=\"home.html\"><b>Home</b></a></li>" +
    "<li class=\"dropdown\" style=\"display: inline; margin-right: \"><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><b>Congress 113</b><span class=\"caret\"></span></a>" +
    "<ul class=\"dropdown-menu\">" +
    "<li style=\"margin-left: 20px;\"><a href=\"house-data.html\"><b>House</b></a></li>" +
    "<li style=\"margin-left: 20px;\"><a href=\"senate-data.html\"><b>Senate</b></a></li>" +
    "</ul>" +
    "</li>" +
    " </ul>" +
    "</div>" +
    "</nav>";

document.getElementById("myFooter").innerHTML =
    "<div class=\"container text-primary bg-light border border-primary mt-5\">" +
    "<p><img src=\"https://i.postimg.cc/sxYS1DR7/TGIF-Logo.png\" class=\"mx-auto\" style=\"height:50px;width:100px;-webkit-filter:grayscale(100%);\"><b>@2016TGIF // All Rights Reserved</b></p>" +
    "</div>" +
    "</div>";

