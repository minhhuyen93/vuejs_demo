<template>
  <div stype="background: red; width: 200px; display: inline-block;">
        <select @change="selectionChanged" v-model="selected">
                <slot></slot>
                <option></option>
                <option>Aardvark</option>
                <option>Bear</option>
                <option>Cat</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'Childlearnenergy',
  data: function () {
    return {
      selected: ''
    }
  },
  methods: {
    selectionChanged: function () {
      this.$emit('optionselected', this.selected)
    }
  }
}
</script>
