function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function saveAttendance(studentId, studentName, department) {

  var sheet = SpreadsheetApp.getActiveSpreadsheet()
               .getSheetByName("Attendance");

  var date = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "dd-MM-yyyy"
  );

  var time = Utilities.formatDate(
      new Date(),
      Session.getScriptTimeZone(),
      "hh:mm:ss a"
  );

  sheet.appendRow([
      studentId,
      studentName,
      department,
      date,
      time
  ]);

  return "Attendance Recorded Successfully!";
}