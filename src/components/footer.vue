<template>
  <div class="footer">
    <h3>
        &copy;<span>xhvnti</span>2022
    </h3>
  </div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style lang="scss">
.footer {
    background-color: var(--dark);
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
span {
padding-left: 1rem;
padding-right: 1rem;
    }
}
</style>