<template>
    <div class="flex h-screen justify-center items-center">
        <div class="flex flex-col">
            <h1 class="text-8xl font-bebas">Movie-info</h1>
            <p class="font-montserrat -mt-4">O lugar para te auxiliar na sua maratona de filmes!</p>
            <p class="relative left-32 font-bebas"><a href="https://movieinfo.auth.us-east-1.amazoncognito.com/login?client_id=2kg2k11f9jcm8ubh6l1e58t8pu&response_type=code&scope=email+openid&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2FtopTrendings">Começar agora &nbsp;>>></a></p>
        </div>
        <div class="relative">
            <img class="w-96 h-96 object-fit" src="src/assets/movie3dIcon.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'LandingPage'
}
</script>