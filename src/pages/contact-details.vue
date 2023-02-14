<template>
  <!-- <h1>Contact Details:</h1> -->
  <section v-if="contact" class="contact-details grid">
    <ContactProfile class="contact-profile" :contact="contact" />

    <TransferFunds
      v-if="contact"
      :contact="contact"
      @transfer="onTransferFunds"
    />

    <RouterLink to="/contact">
      <button>Back</button>
    </RouterLink>
    
  </section>

  <TransactionList v-if="contact && transactions" :transactions="filteredTransactions" />
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import { userService } from "@/services/user.service.js";
import ContactProfile from "@/cmps/contact-profile.vue";
import TransferFunds from "@/cmps/transfer-funds.vue";
import TransactionList from "@/cmps/transaction-list.vue";
export default {
  data() {
    return {
      contact: null,
      transactions: null,
    };
  },
  async created() {
    const contactId = this.$route.params._id;
    this.contact = await contactService.get(contactId);

    this.transactions = await contactService.getTransactions();
    eventBus.on("user-update", async () => {
      this.transactions = await userService.getTransactions();
    });
  },
  methods: {
    async onTransferFunds(amount) {
      try {
        userService.transferFunds(this.contact, amount);
        this.contact = await contactService.getById(this.contact._id);
        eventBus.emit("user-update");
      } catch (err) {
        showErrorMsg("Not Enough Funds");
        console.log(err);
      }
    },
  },
  computed: {
    filteredTransactions() {
      return this.transactions.filter(
        (transaction) => transaction.toId === this.$route.params._id
      );
    },
  },
  components: {
    ContactProfile,
    TransferFunds,
    TransactionList,
  },
};
// Need to add on transfer funds!!!
</script>
<style>
</style>