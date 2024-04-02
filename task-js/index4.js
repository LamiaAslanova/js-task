let boy = parseFloat(prompt("Boy:"))
let ceki = parseFloat(prompt("Çəki:"))

let bmi = ceki/(boy**2)

if (bmi>25){
    console.log("Artıq çəkili")
}
else if (bmi>=18.5 && bmi<=24.9){
    console.log("Normal")
}
else {
    console.log("Arıq")
}