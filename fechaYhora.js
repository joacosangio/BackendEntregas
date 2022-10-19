const fs = require("fs")

const fyh = (new Date()).toString()
fs.writeFileSync("./fyh.txt" , fyh)

try {
    const leerYmostrar =  fs.readFileSync("./fyh.txt", "utf-8")
    console.log(leerYmostrar)

}catch(err) {
    console.log(err)
}