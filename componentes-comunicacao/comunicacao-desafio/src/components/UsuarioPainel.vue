<template>
    <div>
        <div v-if="pessoa != null">
            <div>ID: {{ pessoa?.id }}</div>
            <div>Nome: {{ pessoa?.nome }}</div>
            <div>Idade: {{ pessoa?.idade }}</div>
        </div>
        <div v-else>Usuário não selecioand!</div>
    </div>
</template>

<script>
export default {
    props: ['pessoa']
}
</script>

<style></style>