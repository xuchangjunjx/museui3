export default {
  name: "mu-backtop",
  props: {
    right: {
      type: String,
      default: "16px"
    },
    bottom: {
      type: String,
      default: "16px"
    },
    click: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      show: !!this.click
    };
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const height = window.innerHeight;
      if (!this.click) {
        this.show = scrollTop > height;
      }
    }
  },
  render(h) {
    console.log("render");
    return h("mu-scale-transition", [
      h(
        "mu-button",
        {
          directives: [
            {
              name: "scroll",
              value: {
                target: this.$el,
                callback: this.handleScroll
              }
            },
            {
              name: "show",
              value: this.show
            }
          ],
          style: {
            position: "fixed",
            right: this.right,
            bottom: this.bottom,
            "z-index": 101
          },
          props: {
            fab: true,
            color: "red"
          },
          on: {
            click: () => {
              if (this.click) {
                this.click();
              } else {
                window.scrollTo(0, 0);
              }
            }
          }
        },
        this.$slots.default || [
          h("mu-icon", {
            props: {
              value: "arrow_upward"
            }
          })
        ]
      )
    ]);
  }
};
