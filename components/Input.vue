<style lang="scss">
@import "scss/styles.scss";

.input {
  float: left;
  font-size: 1.1rem;
  line-height: 1.4rem;
  padding: .5rem 1rem;
  border: 0;
  border-radius: 3rem;
  font-weight: 600;
  text-align: left;
  color: $neutral-d3;
  background-color: $neutral-l8;

  &:focus {
    background-color: $neutral-l7;
    color: $neutral-d3;
  }

  &::placeholder {
    color: $neutral-l2;
  }
}
</style>