function introduction(name) {
  return `Hi, my name is ${name}.`;
}
function logTwoValues(v1, v2) {
  console.log(`The two values are ${v1} and ${v2}.`);
}

function introductionWithLanguage(name, lang) {
  return `Hi, my name is ${name} and I am learning to program in ${lang}.`;
}

function introductionWithLanguageOptional(name, lang = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${lang}.`;
}
