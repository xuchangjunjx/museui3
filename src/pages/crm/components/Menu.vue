<template>
    <mu-menu placement="top-start" :open="true">
    <mu-button color="primary">Open On Hover</mu-button>
    <mu-list slot="content">
      <mu-list-item button>
        <mu-list-item-title>Refresh</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Send feedback</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Settings</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Help</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Sign out</mu-list-item-title>
      </mu-list-item>
    </mu-list>
</mu-menu>
</template>
<script>
export default {
    name:'my-menu',
    data(){
        return {

        }
    }
}
</script>

