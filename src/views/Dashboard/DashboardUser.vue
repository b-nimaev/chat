<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
let data = [
  {
    id: 123,
    name: 'Alexandr Balzhinimaev'
  },
  {
    id: 124,
    name: 'Diana Zaripova'
  }
]


export default {
  data () {
    return {
      name: ''
    }
  },
  mounted () {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == this.$route.params.id) {
        this.name = data[i].name
      }
    }
  } 
}
</script>