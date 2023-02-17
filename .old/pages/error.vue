<script setup>
const props = defineProps({
  error: Object
})

clearError({ redirect: '/oops' })
</script>
