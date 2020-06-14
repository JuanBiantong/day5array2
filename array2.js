let dataTeam = ['Juan','Mika','Patrik','Anafree','Echa','Egi']
let teamA = dataTeam.slice(0,3)
let teamB = dataTeam.slice(3,6) 

console.log(teamA)
console.log(teamB)

document.write(`Leader Team A adalah${teamA[0]} dengan anggota sbb:`)
teamA.forEach(element => {
    console.log(element)
    document.write(`<li>${element}</li> `)
});
document.write(`<hr>`)
document.write(`Leader Team B adalah${teamB[0]} dengan anggota sbb:`)
teamB.forEach(element => {
    console.log(element)
    document.write(`<li>${element}</li> `)
});