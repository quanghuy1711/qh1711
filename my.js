let content = "";
content += "<table border>";
for (let j= 1; j < 10; j++) {
    content += "<tr>"
    for (let i = 2; i < 10; i++) {
        content += `<td>${i} x ${j} = ${i * j}</td>`;
    }
    content += "<td>"
}
content += "</table>";
document.getElementById("result").innerHTML = content;