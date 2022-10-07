const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"

const arrayFormat = originalDisorderFormat.split("|$|")
const newFormat = arrayFormat.join("</div>\n<div>")
console.log(`<div>${newFormat}</div>`)