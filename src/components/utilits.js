export function findCurrency(obj) {
    const mainObj = Object.keys(obj)[0];
    return obj[mainObj].name;
  }
  
export function findLanguages(obj) {
    const languages = Object.values(obj);
    return languages.join(", ");
  }
  