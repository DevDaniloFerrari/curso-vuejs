<template>
    <table>
        <thead>
            <th>#ID</th>
            <th>Nome</th>
        </thead>
        <tbody>
            <tr v-for="pessoa in pessoas" :key="pessoa.id" @click="selecionarPessoa(pessoa)">
                <td>{{pessoa.id}}</td>
                <td>{{pessoa.nome}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ['pessoas', 'selecionarPessoa']
}
</script>

<style></style>