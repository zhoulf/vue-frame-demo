<template>
<div>
    <h3>this is my table!{{count}}</h3>
    <div class="c-grid">
      <div class="c-header"></div>
      <div class="c-body" @scroll="scroll">
        <div class="c-canvas" :style="{height: count * 30 +'px'}">
          <ul class="c-row" v-for="(item,index) in items" :style="{top:cursor[index]*30+'px'}">
              <li class="c-cell">{{item.title}}</li>
              <li class="c-cell">{{item.content}}</li>
              <li class="c-cell">{{item.key}}</li>
          </ul>
        </div>
      </div>
    </div>
    
</div>

</template>

<style>
  .c-grid { border: 1px solid #333; }
  .c-header {}
  .c-body { position: relative;overflow: auto; height: 300px;}
  .c-canvas { }
  .c-row { width:100%; position: absolute; display: flex; justify-content: space-between;list-style: none; }
  .c-cell { width: 33%; display: inline-block; border-right: 1px solid #ccc; border-bottom: 1px solid #ccc;}
  .c-row:nth-child(even) { background-color: aquamarine }
</style>

<script>

export default {
  name: 'mytable',
  data () {
    const count = 20000;
    const cursor = [];
    const data = new Array(count).fill(1).map((d,i) => ({
        title: 'Tab ' + i,
        content: 'Content of Tab 1 ' + i,
        key: i
      }));
    return {
      count,
      limit: 15,
      cursor,
      data,
      items: []
    }
  },
  methods: {
    scroll (evt) {
      console.log(evt.target.scrollTop, ~~(evt.target.scrollTop / 30));

      let current = ~~(evt.target.scrollTop / 30);
      
      if (this.cursor.includes(current)) {
        if (current + this.limit > this.cursor[this.limit - 1]) {
          this.updateNode(current);
        }
      } else {
        this.updateNode(current);
      }
    },
    updateNode(current) {
      let len = current + this.limit < this.count - 1 ? this.limit : this.count - current, i = 0;
      while(len--) {
          this.$set(this.cursor, i, current + i);
          this.$set(this.items, i, this.data[current + i]);
          
          i++;
        }
        console.log(this.cursor);
    }
  },
  created() {
    this.cursor = new Array(this.limit).fill(1).map((d,i) => i);
    this.cursor.forEach((d,i) => this.items[i] = this.data[d]);
    console.log(this.cursor);
  }
}
</script>
