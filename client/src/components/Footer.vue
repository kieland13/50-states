<template>
    <div class="footer">
    
    <div class="m-2">
        <span class="p-3">
            <router-link to="/">Home</router-link>
        </span>

        <span class="p-3">
            <router-link to="/about">About this site</router-link>
            <!--router will turn into links but only navigate within the app -->
        </span>
    </div>

<!-- this will add the picture of the map under each state -->
    <p class="text-right credit p-2">Header image by
        <!-- a elements can be used to link outside the app -->
        <a href="https://unsplash.com/photos/KpBXAOs80YI">@chrislawton via Unsplash.</a>
        <br>
        <a href="https://icons8.com/icon/43632/map">Map icon by Icons8</a>
    </p>

    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
/* changes the font style of the text under the picture in the header*/
.credit {
    font-size: 0.1em;
    font-style: italic;
}
</style>