const array = ["HTML5", "CSS3", "JavaScript", "ReactJS", "React Native"]

const changeX = (str) => {
    const fun1 = x => (
      `Tryber ${x} aqui!
      Tudo bem?`
    )
    
    let result = `${fun1(str)}
    Minhas cinco principais habilidades são:`
    array.forEach((skill, index) =>
    result = `${result}
    - ${skill}`)
    result = `
    ${result}
    #goTrybe
    `
    return result
}

console.log(changeX("Cristiano"))