const alunos = [
    {aluno: 'Pedro', nota: 5},
    {aluno: 'Madalena', nota: 9},
    {aluno: 'José', nota: 6},
    {aluno: 'Ana', nota: 7},
]

function filtrarAlunosAprovados(aluno) {
    return aluno.nota >= 6;
}
const alunosAprovados = alunos.filter(filtrarAlunosAprovados)
console.log(alunosAprovados)

