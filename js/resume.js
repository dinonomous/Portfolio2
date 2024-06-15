

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "dinesh resume.pdf";
  link.download = "DineshwarNagubothu.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
