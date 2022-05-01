function abbrevName(name){
    let result = name.toUpperCase().split(' ')
    return `${result[0][0]}.${result[1][0]}`
}