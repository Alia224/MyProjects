const XLSX = require("xlsx")
const filepath = "C:\\Users\\User\\Desktop\\Homework.xlsx"
const Workbook = XLSX.readFile(filepath)
console.log("Sheets in workbook " + Workbook.SheetNames)
const sheet = Workbook.Sheets["Companies"];
let data = XLSX.utils.sheet_to_json(sheet, { header: 1 })
console.log(data[2])
console.log(data[1])
