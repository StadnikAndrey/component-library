<template>
  <div class="dialog-view">
    <button class="dialog-view__btn" type="button" @click="showDialog">show dialog</button>
    <Dialog :active="activeDialog" @active="closeDialog">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae delectus
      nostrum voluptas qui explicabo obcaecati, autem nobis dolore, culpa
      inventore consequatur quibusdam itaque cupiditate voluptates veritatis
      laudantium cum maxime, hic perferendis? Fugit necessitatibus labore
      consequatur obcaecati quam dicta et vero, in molestias odit, eum,
      doloremque laudantium tempora? Debitis animi eum illum veniam aliquid,
      accusamus eligendi tempora asperiores atque mollitia veritatis voluptate
      incidunt pariatur explicabo alias corporis ad beatae, voluptatem
      perspiciatis. Quos suscipit eligendi maiores nam amet sit ullam sint,
      aspernatur ipsam recusandae ea, cumque fuga perspiciatis. Id architecto
      eveniet corporis enim! Quo libero, vel, error ad explicabo accusantium,
      nesciunt praesentium voluptatum recusandae ipsa totam illum. Saepe
      excepturi eum impedit minima id necessitatibus cumque vitae suscipit
      eligendi vel et voluptatem consequatur quae fugit quod nesciunt nobis
      officiis provident, illo ad facere? Modi, debitis! Magni, fugit cum!
      Perferendis, delectus! Quibusdam, pariatur illo repellat in deleniti
      temporibus assumenda dolorem inventore odit accusamus laborum aliquid,
      nisi, necessitatibus possimus beatae numquam ex optio tempore aut
      reprehenderit reiciendis. Explicabo veritatis rem, temporibus dolorem
      vitae quisquam quod aliquam quibusdam adipisci iure minus harum autem
      atque animi exercitationem nesciunt voluptatibus praesentium alias sunt
      aspernatur earum maiores? Ex neque sequi ab ducimus sapiente pariatur est
      dicta reiciendis perspiciatis incidunt autem itaque quas eum eveniet
      obcaecati aspernatur, maxime nostrum minima mollitia enim quidem. Earum
      voluptate excepturi, ab laboriosam necessitatibus, ipsam facilis quidem
      eius similique deleniti amet. Quia quo porro at dolorem. Facilis esse rem
      iure sequi unde corrupti repellat eveniet vel cum, ut ipsum error placeat
      voluptates possimus, ipsam reiciendis aut. Expedita itaque doloremque et
      fugit vel odit accusantium quas impedit rem, unde laudantium reprehenderit
      vero ea incidunt, dignissimos fugiat suscipit qui quae dolores accusamus!
      Nobis laudantium autem praesentium enim harum itaque assumenda at, dolorum
      recusandae ullam laborum, nisi possimus quibusdam! Quod doloremque
      veritatis quisquam explicabo odio, perferendis earum quasi magnam, ex quo
      numquam id iste fuga adipisci temporibus nisi illum corporis. Fuga culpa
      ipsa sint quo ab rem necessitatibus ducimus alias quis cum velit quidem
      qui, aliquid nemo quisquam quos magnam? Ex vitae facere placeat,
      recusandae ratione possimus reiciendis aperiam praesentium libero dicta
      accusamus deserunt expedita minus molestias, soluta ullam eligendi,
      suscipit harum nemo repudiandae? Ad modi commodi, aliquam dolores cum
      recusandae eaque explicabo itaque! Id repudiandae nulla repellendus
      consectetur accusamus nam dolores maxime, dolorum, non est harum ad ullam
      illo eos consequatur. Cum natus labore alias. Commodi at dolorem quas
      numquam quos nobis dolore eos fugit quo ut consequuntur suscipit, qui,
      veniam, deserunt animi sed dolor vero optio. Neque voluptates voluptatibus
      veniam pariatur nisi quidem autem, fugiat enim minima. Voluptatibus, et
      soluta tempore sequi atque perspiciatis illum! Consectetur rerum
      excepturi, debitis doloremque quia repellat nostrum delectus modi quaerat?
      Debitis a est in porro magni animi! Est assumenda illum, perferendis quae
      provident magni iste laborum, a quidem minima deleniti perspiciatis
      officia ab amet itaque? Reiciendis, ut? Fugiat nemo ullam enim reiciendis
      hic voluptatem earum voluptates ad beatae nisi commodi, quo harum nulla
      natus libero. Consectetur porro beatae, omnis, eligendi voluptatem earum a
      ullam tempora nostrum veritatis deleniti architecto corrupti?
    </Dialog>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
export default {
  name: "DialogView",
  components: {
    Dialog,
  },
  data() {
    return {
      activeDialog: false,
    };
  },
  methods: {
    showDialog() {
      this.activeDialog = true;
    },
    closeDialog() {
      this.activeDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog-view{
  &__btn {
    background-color: #c7c6c4;
    padding: 5px 15px;
    border-radius: 5px;     
    color: #008e8f;
    font-weight: bolder;
  }
}
</style>