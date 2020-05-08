<template>
    <div class="header">

    <div class="jumbotron">
        <h1 class="display-4" id="title">Have you visited every state?</h1>
    </div>

    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>


<style scoped>
/* adds the picture to the top of the ehader */
.jumbotron {
    background-image: url('../assets/map_header.jpeg');
    background-position: center;
    background-size: cover;
}

/*changes the font color and weight for the header */
#title {
    font-weight: 500;
    color: antiquewhite;
}
</style>